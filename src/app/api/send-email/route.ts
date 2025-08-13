import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'habnetsolutionslimited@gmail.com',
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
      replyTo: email, // Set reply-to as the sender's email
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId,
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