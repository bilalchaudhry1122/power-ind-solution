'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Mail, Copy, Check } from 'lucide-react';

export interface SubmissionResult {
  success?: boolean;
  emailSent?: boolean;
  configRequired?: boolean;
  message?: string;
  trackingId?: string;
  mailtoUrl?: string;
  formattedText?: string;
  error?: string;
}

interface SubmissionResultBannerProps {
  result: SubmissionResult | null;
  sentHeading: string;
  fallbackHeading: string;
}

export default function SubmissionResultBanner({
  result,
  sentHeading,
  fallbackHeading
}: SubmissionResultBannerProps) {
  const [copied, setCopied] = useState(false);

  if (!result) return null;

  const handleCopy = async () => {
    if (!result.formattedText) return;
    try {
      await navigator.clipboard.writeText(result.formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API unavailable in non-HTTPS contexts
    }
  };

  if (result.error) {
    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded-xl text-red-900 flex items-start gap-2 text-xs">
        <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
        <span>{result.error}</span>
      </div>
    );
  }

  if (!result.success) return null;

  return (
    <div
      className={`p-4 rounded-xl border-2 text-[#14213d] space-y-2.5 ${
        result.emailSent
          ? 'bg-emerald-50 border-emerald-500'
          : 'bg-[#fca311]/10 border-[#fca311]'
      }`}
    >
      <div className="flex items-center gap-2 font-bold text-xs font-heading">
        {result.emailSent ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
        ) : (
          <Mail className="w-4 h-4 text-[#fca311] flex-shrink-0" />
        )}
        <span>{result.emailSent ? sentHeading : fallbackHeading}</span>
      </div>

      {result.message && <p className="text-xs leading-relaxed">{result.message}</p>}

      {result.trackingId && (
        <div className="bg-white p-2.5 rounded-lg text-xs font-mono font-bold text-[#14213d] border-2 border-[#14213d]">
          Tracking Reference: {result.trackingId}
        </div>
      )}

      {!result.emailSent && result.mailtoUrl && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
          <a
            href={result.mailtoUrl}
            className="inline-flex items-center justify-center gap-2 bg-[#14213d] hover:bg-[#000000] text-white font-bold px-4 py-2.5 min-h-[42px] rounded-lg text-xs transition-colors font-heading"
          >
            <Mail className="w-3.5 h-3.5 text-[#fca311]" />
            <span>Open Formatted Email to powerindsolution@gmail.com</span>
          </a>

          {result.formattedText && (
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#e5e5e5]/60 text-[#14213d] font-bold px-4 py-2.5 min-h-[42px] rounded-lg text-xs border-2 border-[#e5e5e5] transition-colors font-heading"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Formatted Text'}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

