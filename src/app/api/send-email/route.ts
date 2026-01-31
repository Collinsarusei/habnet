import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting storage (in production, use Redis or a database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Helper function to get client IP
function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIp || 'unknown';
}

// Rate limiting function
function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const limit = 5; // 5 requests
  const windowMs = 15 * 60 * 1000; // 15 minutes
  
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    // New window
    const resetTime = now + windowMs;
    rateLimitMap.set(ip, { count: 1, resetTime });
    return { allowed: true, remaining: limit - 1, resetTime };
  }
  
  if (record.count >= limit) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }
  
  record.count++;
  return { allowed: true, remaining: limit - record.count, resetTime: record.resetTime };
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Input sanitization
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .trim()
    .slice(0, 5000); // Limit length
}

// Honeypot field check (add this to your form as a hidden field)
function isBot(honeypot?: string): boolean {
  return !!honeypot; // If honeypot field is filled, it's likely a bot
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(clientIp);
    
    if (!rateLimit.allowed) {
      const resetDate = new Date(rateLimit.resetTime);
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter: resetDate.toISOString()
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': resetDate.toISOString(),
            'Retry-After': String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000))
          }
        }
      );
    }

    // 2. Parse and validate request body
    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // 3. Honeypot check (bot detection)
    if (isBot(honeypot)) {
      // Silently reject bots without revealing it's a honeypot
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 4. Input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // 5. Email format validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // 6. Length validation
    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length.' },
        { status: 400 }
      );
    }

    // 7. Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    // 8. Check for suspicious patterns (optional)
    const suspiciousPatterns = /<script|javascript:|on\w+=/i;
    if (
      suspiciousPatterns.test(sanitizedName) ||
      suspiciousPatterns.test(sanitizedSubject) ||
      suspiciousPatterns.test(sanitizedMessage)
    ) {
      return NextResponse.json(
        { error: 'Invalid input detected.' },
        { status: 400 }
      );
    }

    // 9. Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Habnet Solutions <info@habnetsolutionslimited.com>',
      to: ['abrahamronoh@gmail.com'],
      replyTo: email,
      subject: `Contact Form: ${sanitizedSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from the Habnet Solutions contact form.</small></p>
        <p><small>Sender IP: ${clientIp}</small></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send email. Please try again later.'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully'
      },
      {
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': String(rateLimit.remaining),
          'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString()
        }
      }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred.'
      },
      { status: 500 }
    );
  }
} 