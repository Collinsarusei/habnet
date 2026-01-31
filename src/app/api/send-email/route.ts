import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Habnet Solutions <onboarding@resend.dev>', // Update this to your verified domain
      to: ['habnetsolutionslimited@gmail.com'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <hr>
        <p><small>This email was sent from the Habnet Solutions contact form.</small></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      messageId: data?.id,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
} 