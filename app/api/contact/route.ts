import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { buildContactPlainText, sendContactEmail, type ContactPayload } from '@/lib/mailer';

function archiveContactSubmission(record: ContactPayload) {
  try {
    const dir = path.join(process.cwd(), 'data', 'submissions');
    fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(path.join(dir, 'contact-submissions.jsonl'), JSON.stringify(record) + '\n', 'utf8');
  } catch {
    // Non-fatal in read-only deployment environments
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const subject = String(body.subject ?? '').trim();
    const message = String(body.message ?? '').trim();
    const division = String(body.division ?? '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const trackingId = `PIS-INQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    const inquiryRecord: ContactPayload = {
      trackingId,
      timestamp,
      name,
      email,
      phone: phone || 'N/A',
      subject: subject || 'General Engineering Inquiry',
      division: division || 'General',
      message
    };

    archiveContactSubmission(inquiryRecord);

    const mailResult = await sendContactEmail(inquiryRecord);

    if (mailResult.sent) {
      return NextResponse.json({
        success: true,
        emailSent: true,
        recipient: mailResult.recipient,
        trackingId,
        message: `Thank you for contacting Power Industrial Solutions. Your formatted inquiry has been delivered to ${mailResult.recipient}.`,
        data: inquiryRecord
      });
    }

    return NextResponse.json({
      success: true,
      emailSent: false,
      configRequired: mailResult.reason === 'SMTP_NOT_CONFIGURED',
      mailtoUrl: mailResult.mailtoUrl,
      formattedText: buildContactPlainText(inquiryRecord),
      trackingId,
      message:
        mailResult.reason === 'SMTP_NOT_CONFIGURED'
          ? `Inquiry logged under ${trackingId}. Please click below to send via your email app directly to powerindsolution@gmail.com.`
          : `Inquiry logged under ${trackingId}, but background delivery could not complete. Click below to send via your email app.`,
      data: inquiryRecord
    });
  } catch (error) {
    console.error('[PIS Backend - Contact API Error]:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected internal error occurred while processing your inquiry.' },
      { status: 500 }
    );
  }
}
