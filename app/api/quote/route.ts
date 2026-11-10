import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { buildRfqPlainText, sendRfqEmail, type RfqPayload } from '@/lib/mailer';

function archiveRfqSubmission(record: RfqPayload) {
  try {
    const dir = path.join(process.cwd(), 'data', 'submissions');
    fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(path.join(dir, 'rfq-submissions.jsonl'), JSON.stringify(record) + '\n', 'utf8');
  } catch {
    // Non-fatal in read-only deployment environments
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const companyName = String(body.companyName ?? '').trim();
    const contactPerson = String(body.contactPerson ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const division = String(body.division ?? '').trim();
    const projectTitle = String(body.projectTitle ?? '').trim();
    const projectScope = String(body.projectScope ?? '').trim();
    const siteLocation = String(body.siteLocation ?? '').trim();
    const estimatedTimeline = String(body.estimatedTimeline ?? '').trim();
    const estimatedBudget = String(body.estimatedBudget ?? '').trim();
    const technicalRequirements = String(body.technicalRequirements ?? '').trim();

    if (!contactPerson || !email || !phone || !division || !projectTitle) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please fill in all mandatory fields (Contact Person, Email, Phone, Division, Project Title).'
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid business email address.' },
        { status: 400 }
      );
    }

    const trackingId = `PIS-RFQ-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const quoteRecord: RfqPayload = {
      trackingId,
      timestamp,
      companyName: companyName || 'Independent Client',
      contactPerson,
      email,
      phone,
      division,
      projectTitle,
      projectScope,
      siteLocation: siteLocation || 'Not specified',
      estimatedTimeline: estimatedTimeline || 'To be discussed',
      estimatedBudget: estimatedBudget || 'Standard Quotation',
      technicalRequirements: technicalRequirements || 'Standard specifications'
    };

    archiveRfqSubmission(quoteRecord);

    const mailResult = await sendRfqEmail(quoteRecord);

    if (mailResult.sent) {
      return NextResponse.json({
        success: true,
        emailSent: true,
        recipient: mailResult.recipient,
        messageId: mailResult.messageId,
        trackingId,
        message: `Your formatted Request for Quotation (RFQ) has been sent automatically to ${mailResult.recipient} under Tracking ID ${trackingId}. Our engineering estimator will respond promptly.`,
        quote: quoteRecord
      });
    }

    return NextResponse.json({
      success: true,
      emailSent: false,
      configRequired: mailResult.reason === 'SMTP_NOT_CONFIGURED',
      smtpError: mailResult.reason === 'SMTP_ERROR' ? mailResult.error : undefined,
      mailtoUrl: mailResult.mailtoUrl,
      formattedText: buildRfqPlainText(quoteRecord),
      trackingId,
      message:
        mailResult.reason === 'SMTP_NOT_CONFIGURED'
          ? `Quotation logged under Tracking ID ${trackingId}. Please click the button below to dispatch this pre-formatted quotation directly to powerindsolution@gmail.com.`
          : `Quotation logged under Tracking ID ${trackingId}, but background delivery could not complete. Use the pre-formatted email button below to send directly to powerindsolution@gmail.com.`,
      quote: quoteRecord
    });
  } catch (error) {
    console.error('[PIS Backend - Quote API Error]:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit quote request. Please try again or reach us directly at powerindsolution@gmail.com.' },
      { status: 500 }
    );
  }
}
