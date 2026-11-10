'use client';

import React from 'react';
import Link from 'next/link';
import QuoteForm from '@/components/shared/QuoteForm';
import { Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/pis-data';
import { OUR_WORK_GALLERY } from '@/data/our-work-data';
import { motion } from 'framer-motion';

export default function HomeQuoteSection() {
  return (
    <section id="quote" className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Project Inquiry Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              <div className="text-xs font-black text-[#fca311] uppercase tracking-widest font-heading">
                Engineering Estimation
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#14213d] tracking-tight font-heading">
                Initiate Your Project RFQ
              </h2>
              <p className="text-[#14213d]/70 text-xs sm:text-sm leading-relaxed">
                Whether you require certified pipe fabrication, a high-voltage substation, complete sugar plant machinery, or heavy civil construction, our engineering estimating team provides rapid turnarounds.
              </p>
            </div>

            {/* Direct Contact Box */}
            <div className="bg-[#ffffff] p-6 sm:p-7 rounded-2xl border-2 border-[#e5e5e5] space-y-3.5 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#14213d] border-b border-[#e5e5e5] pb-2.5 font-heading">
                Engineering Helpdesk
              </h4>
              <div className="space-y-2.5 text-xs text-[#14213d]/80">
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#fca311]" />
                  <span>Landline: <strong className="text-[#14213d]">{COMPANY_INFO.contact.telephone}</strong></span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#fca311]" />
                  <span>Mobile: <strong className="text-[#14213d]">{COMPANY_INFO.contact.mobiles[0]}</strong></span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#fca311]" />
                  <span>Email: <strong className="text-[#14213d]">{COMPANY_INFO.contact.primaryEmail}</strong></span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#fca311]" />
                  <span>Office: Mon – Sat 8:00 AM – 6:00 PM</span>
                </p>
              </div>
            </div>

            {/* On-Site Engineering Portfolio Card */}
            <div className="bg-[#14213d] text-white p-6 sm:p-7 rounded-2xl space-y-3.5 border-l-4 border-[#fca311] shadow-xl">
              <div className="flex items-center gap-2 text-[#fca311] text-xs font-bold uppercase tracking-wider font-heading">
                <ShieldCheck className="w-4 h-4" />
                <span>Jobsite Portfolio</span>
              </div>
              <h4 className="text-base font-bold text-white font-heading">
                View On-Site Industrial Execution
              </h4>
              <p className="text-xs text-[#e5e5e5]/80 leading-relaxed">
                Explore {OUR_WORK_GALLERY.length} documented jobsite installations, workshop pre-fabrications, pressure piping welds, and civil structures executed across Pakistan.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md border-l-4 border-[#000000] font-heading"
              >
                <span>Explore Field Works</span>
                <ArrowRight className="w-4 h-4 text-[#000000]" />
              </Link>
            </div>

          </div>

          {/* Right: RFQ Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

        </div>

      </div>
    </section>
  );
}
