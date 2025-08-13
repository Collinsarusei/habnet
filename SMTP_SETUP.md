# SMTP Email Setup Guide

This guide explains how to configure SMTP email for the contact form instead of using Resend.

## Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Configuration
SMTP_FROM=Habnet Solutions <your-email@gmail.com>
CONTACT_EMAIL=habnetsolutionslimited@gmail.com
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this password as `SMTP_PASS`

## Other SMTP Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
```

## Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords instead of your main password for Gmail
- Consider using environment-specific configurations for production

## Testing

After setup, test the contact form to ensure emails are being sent correctly. Check your email logs if there are any issues.
