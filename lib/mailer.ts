import nodemailer from 'nodemailer';

export interface RfqPayload {
  trackingId: string;
  timestamp: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  division: string;
  projectTitle: string;
  projectScope?: string;
  siteLocation: string;
  estimatedTimeline: string;
  estimatedBudget?: string;
  technicalRequirements: string;
}

export interface ContactPayload {
  trackingId: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  division: string;
  subject: string;
  message: string;
}

export type MailSendResult =
  | { sent: true; messageId: string; recipient: string }
  | { sent: false; reason: 'SMTP_NOT_CONFIGURED' | 'SMTP_ERROR'; error?: string; mailtoUrl: string };

const RECEIVER_EMAIL = process.env.RFQ_RECEIVER_EMAIL || 'powerindsolution@gmail.com';

function escapeHtml(value: string): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function cleanHeader(value: string): string {
  return String(value ?? '').replace(/[\r\n]+/g, ' ').trim();
}

function formatPakistanTime(isoTimestamp: string): string {
  try {
    return new Intl.DateTimeFormat('en-PK', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Karachi',
    }).format(new Date(isoTimestamp)) + ' PKT';
  } catch {
    return isoTimestamp;
  }
}

function getSmtpConfig() {
  const user = process.env.SMTP_USER || process.env.GMAIL_USER || RECEIVER_EMAIL;
  const pass = (process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || '465');
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465;

  return { host, port, secure, user, pass };
}

function renderBrandedShell(options: {
  badgeText: string;
  heading: string;
  trackingId: string;
  submittedAt: string;
  rows: Array<{ label: string; value: string; href?: string }>;
  notesTitle: string;
  notesContent: string;
  replyName: string;
  replyEmail: string;
}): string {
  const rowsHtml = options.rows
    .map((row, idx) => {
      const bg = idx % 2 === 0 ? '#ffffff' : '#f8f9fa';
      const safeLabel = escapeHtml(row.label);
      const safeVal = escapeHtml(row.value);
      const cellContent = row.href
        ? `<a href="${escapeHtml(row.href)}" style="color:#14213d;font-weight:700;text-decoration:underline;">${safeVal}</a>`
        : `<span style="color:#14213d;font-weight:600;">${safeVal}</span>`;
      return `
        <tr style="background:${bg};">
          <td style="padding:11px 14px;border-bottom:1px solid #e5e5e5;width:36%;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#14213d;vertical-align:top;">
            ${safeLabel}
          </td>
          <td style="padding:11px 14px;border-bottom:1px solid #e5e5e5;font-size:13px;line-height:1.45;color:#14213d;vertical-align:top;">
            ${cellContent}
          </td>
        </tr>`;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#e5e5e5;font-family:Arial,Helvetica,sans-serif;color:#14213d;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#e5e5e5;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;border:2px solid #14213d;">
          <!-- Header -->
          <tr>
            <td style="background-color:#14213d;padding:24px 28px;border-bottom:5px solid #fca311;">
              <div style="font-size:11px;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;color:#fca311;margin-bottom:6px;">
                ${escapeHtml(options.badgeText)}
              </div>
              <div style="font-size:21px;font-weight:800;color:#ffffff;line-height:1.25;margin-bottom:12px;">
                ${escapeHtml(options.heading)}
              </div>
              <table role="presentation" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="background-color:#fca311;color:#000000;font-family:Consolas,monospace;font-size:12px;font-weight:800;padding:6px 12px;border-radius:6px;">
                    REF: ${escapeHtml(options.trackingId)}
                  </td>
                  <td style="padding-left:12px;font-size:12px;color:#e5e5e5;">
                    ${escapeHtml(options.submittedAt)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Structured Specifications Table -->
          <tr>
            <td style="padding:24px 28px 12px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;border-collapse:collapse;">
                ${rowsHtml}
              </table>
            </td>
          </tr>

          <!-- Scope / Message Box -->
          <tr>
            <td style="padding:12px 28px 24px 28px;">
              <div style="background-color:#f8f9fa;border-left:4px solid #fca311;border-top:1px solid #e5e5e5;border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;padding:16px;border-radius:0 8px 8px 0;">
                <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.8px;color:#14213d;margin-bottom:8px;">
                  ${escapeHtml(options.notesTitle)}
                </div>
                <div style="font-size:13px;line-height:1.6;color:#14213d;white-space:pre-wrap;">${escapeHtml(options.notesContent)}</div>
              </div>
            </td>
          </tr>

          <!-- Action Footer -->
          <tr>
            <td style="background-color:#000000;padding:16px 28px;color:#e5e5e5;font-size:12px;">
              <strong style="color:#fca311;">Power Industrial Solutions (PIS)</strong> &bull; Shahpur Jahania, Nawabshah, Sindh<br/>
              <span style="color:#e5e5e5;font-size:11px;">Click <strong>Reply</strong> in Gmail to respond directly to ${escapeHtml(options.replyName)} (${escapeHtml(options.replyEmail)}).</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildRfqPlainText(quote: RfqPayload): string {
  const submittedAt = formatPakistanTime(quote.timestamp);
  return [
    '====================================================',
    'POWER INDUSTRIAL SOLUTIONS — OFFICIAL RFQ SUBMISSION',
    '====================================================',
    `Tracking Reference : ${quote.trackingId}`,
    `Submitted At       : ${submittedAt}`,
    '',
    'CLIENT & PROJECT DETAILS',
    '----------------------------------------------------',
    `Company / Client   : ${quote.companyName}`,
    `Contact Person     : ${quote.contactPerson}`,
    `Business Email     : ${quote.email}`,
    `Phone / Mobile     : ${quote.phone}`,
    `Engineering Div.   : ${quote.division}`,
    `Project Title      : ${quote.projectTitle}`,
    `Site Location      : ${quote.siteLocation}`,
    `Required Timeline  : ${quote.estimatedTimeline}`,
    quote.estimatedBudget ? `Estimated Budget   : ${quote.estimatedBudget}` : null,
    '',
    'TECHNICAL SCOPE & MATERIAL SPECIFICATIONS',
    '----------------------------------------------------',
    quote.technicalRequirements || 'Standard engineering specifications',
    '',
    '====================================================',
  ]
    .filter((line) => line !== null)
    .join('\n');
}

export function buildRfqMailtoUrl(quote: RfqPayload): string {
  const subject = `[PIS RFQ] ${quote.trackingId} - ${quote.projectTitle} (${quote.companyName})`;
  const body = buildRfqPlainText(quote);
  return `mailto:${RECEIVER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildContactPlainText(inquiry: ContactPayload): string {
  const submittedAt = formatPakistanTime(inquiry.timestamp);
  return [
    '====================================================',
    'POWER INDUSTRIAL SOLUTIONS — ENGINEERING INQUIRY',
    '====================================================',
    `Tracking Reference : ${inquiry.trackingId}`,
    `Submitted At       : ${submittedAt}`,
    '',
    `Full Name          : ${inquiry.name}`,
    `Email Address      : ${inquiry.email}`,
    `Phone / Mobile     : ${inquiry.phone}`,
    `Division           : ${inquiry.division}`,
    `Subject            : ${inquiry.subject}`,
    '',
    'MESSAGE',
    '----------------------------------------------------',
    inquiry.message,
    '====================================================',
  ].join('\n');
}

export function buildContactMailtoUrl(inquiry: ContactPayload): string {
  const subject = `[PIS Inquiry] ${inquiry.trackingId} - ${inquiry.subject}`;
  const body = buildContactPlainText(inquiry);
  return `mailto:${RECEIVER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function sendViaSmtp(params: {
  subject: string;
  replyToName: string;
  replyToEmail: string;
  text: string;
  html: string;
  mailtoUrl: string;
}): Promise<MailSendResult> {
  const cfg = getSmtpConfig();

  if (!cfg.pass) {
    return {
      sent: false,
      reason: 'SMTP_NOT_CONFIGURED',
      mailtoUrl: params.mailtoUrl,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: cfg.host,
      port: cfg.port,
      secure: cfg.secure,
      auth: {
        user: cfg.user,
        pass: cfg.pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Power Industrial Solutions RFQ Portal" <${cfg.user}>`,
      to: RECEIVER_EMAIL,
      replyTo: `"${cleanHeader(params.replyToName)}" <${cleanHeader(params.replyToEmail)}>`,
      subject: cleanHeader(params.subject),
      text: params.text,
      html: params.html,
    });

    return {
      sent: true,
      messageId: info.messageId,
      recipient: RECEIVER_EMAIL,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'SMTP transport failed';
    console.error('[PIS Mailer Error]:', message);
    return {
      sent: false,
      reason: 'SMTP_ERROR',
      error: message,
      mailtoUrl: params.mailtoUrl,
    };
  }
}

export async function sendRfqEmail(quote: RfqPayload): Promise<MailSendResult> {
  const submittedAt = formatPakistanTime(quote.timestamp);
  const subject = `[PIS RFQ] ${quote.trackingId} — ${quote.projectTitle} (${quote.companyName})`;

  const rows: Array<{ label: string; value: string; href?: string }> = [
    { label: 'Company / Client', value: quote.companyName },
    { label: 'Contact Person', value: quote.contactPerson },
    { label: 'Business Email', value: quote.email, href: `mailto:${quote.email}` },
    { label: 'Phone / Mobile', value: quote.phone, href: `tel:${quote.phone}` },
    { label: 'Engineering Division', value: quote.division },
    { label: 'Project Title', value: quote.projectTitle },
    { label: 'Site Location', value: quote.siteLocation },
    { label: 'Required Timeline', value: quote.estimatedTimeline },
  ];

  if (quote.estimatedBudget && quote.estimatedBudget !== 'Standard Quotation') {
    rows.push({ label: 'Estimated Budget', value: quote.estimatedBudget });
  }

  const html = renderBrandedShell({
    badgeText: 'Official Request For Quotation (RFQ)',
    heading: quote.projectTitle,
    trackingId: quote.trackingId,
    submittedAt,
    rows,
    notesTitle: 'Technical Scope & Material Specifications',
    notesContent: quote.technicalRequirements || 'Standard engineering specifications',
    replyName: quote.contactPerson,
    replyEmail: quote.email,
  });

  return sendViaSmtp({
    subject,
    replyToName: quote.contactPerson,
    replyToEmail: quote.email,
    text: buildRfqPlainText(quote),
    html,
    mailtoUrl: buildRfqMailtoUrl(quote),
  });
}

export async function sendContactEmail(inquiry: ContactPayload): Promise<MailSendResult> {
  const submittedAt = formatPakistanTime(inquiry.timestamp);
  const subject = `[PIS Inquiry] ${inquiry.trackingId} — ${inquiry.subject}`;

  const html = renderBrandedShell({
    badgeText: 'Engineering Contact Inquiry',
    heading: inquiry.subject,
    trackingId: inquiry.trackingId,
    submittedAt,
    rows: [
      { label: 'Full Name', value: inquiry.name },
      { label: 'Email Address', value: inquiry.email, href: `mailto:${inquiry.email}` },
      { label: 'Phone / Mobile', value: inquiry.phone, href: inquiry.phone !== 'N/A' ? `tel:${inquiry.phone}` : undefined },
      { label: 'Division of Interest', value: inquiry.division },
    ],
    notesTitle: 'Client Message',
    notesContent: inquiry.message,
    replyName: inquiry.name,
    replyEmail: inquiry.email,
  });

  return sendViaSmtp({
    subject,
    replyToName: inquiry.name,
    replyToEmail: inquiry.email,
    text: buildContactPlainText(inquiry),
    html,
    mailtoUrl: buildContactMailtoUrl(inquiry),
  });
}

