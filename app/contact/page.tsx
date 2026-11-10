'use client';

import React, { useState } from 'react';
import QuoteForm from '@/components/shared/QuoteForm';
import SubmissionResultBanner, { type SubmissionResult } from '@/components/shared/SubmissionResultBanner';
import { COMPANY_INFO } from '@/data/pis-data';
import { 
  Phone, Mail, MapPin, Send, HelpCircle, ShieldCheck 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    division: 'General Inquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setContactData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData)
      });
      const data = await res.json();
      setResult(data);
      if (data.success) {
        setContactData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          division: 'General Inquiry',
          message: ''
        });
      }
    } catch {
      setResult({
        success: false,
        error: 'Failed to send your message. Please reach us directly at powerindsolution@gmail.com or by telephone.'
      });
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "What is your typical project response and mobilization time?",
      a: "Our core engineering estimating team responds to tender inquiries and RFQs within 24 to 48 hours. For emergency mechanical shutdowns or plant repairs, we can mobilize specialized crews within 24 hours across Sindh, Punjab, and Balochistan."
    },
    {
      q: "Can Power Industrial Solutions manufacture equipment according to custom foreign drawings?",
      a: "Yes. A prime example is our milestone execution at Ranipur Sugar Mills Limited, where we manufactured Pakistan's first Vertical Continuous Pan based on specialized international drawings. We fabricate strictly to client-provided CAD/P&ID specifications under ASME/API standards."
    },
    {
      q: "Do you supply testing and QA/QC certification with completed piping and vessels?",
      a: "Yes. All piping networks, tanks, and pressure vessels undergo comprehensive non-destructive testing (NDT), radiography testing (RT), ultrasonic testing (UT), dye penetrant testing (DPT), and hydrostatic pressure testing with calibrated gauges, accompanied by official inspection certificates."
    },
    {
      q: "What power ranges are covered by your VFD and DCS automation systems?",
      a: "We supply and integrate Transpower sensorless vector control Variable Frequency Drives (VFDs) ranging from 0.4 kW up to 315 kW, supporting voltages from 220V to 525V (±15%) with Modbus RTU/ASCII protocols for industrial DCS integration."
    }
  ];

  return (
    <div className="bg-[#ffffff] min-h-screen text-[#14213d]">
      
      {/* Header Banner */}
      <div className="bg-[#000000] text-white py-16 lg:py-20 border-b border-[#e5e5e5]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(252,163,17,0.15),_transparent_45%)] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#fca311] font-black text-xs uppercase tracking-widest block mb-2 font-heading">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Contact Us & Request a Quote
          </h1>
          <p className="text-[#e5e5e5] text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Reach out to our engineering headquarters in Nawabshah or connect directly with our technical estimators for turnkey project quotations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-[#e5e5e5] shadow-sm flex items-start gap-4 hover-card-lift hover:border-[#fca311] transition-all">
            <div className="p-3 bg-[#14213d] text-[#fca311] rounded-xl flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#14213d] uppercase tracking-wider mb-1 font-heading">
                Head Office Location
              </h3>
              <p className="text-xs text-[#14213d]/70 leading-relaxed">
                {COMPANY_INFO.contact.headOffice}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-[#e5e5e5] shadow-sm flex items-start gap-4 hover-card-lift hover:border-[#fca311] transition-all">
            <div className="p-3 bg-[#14213d] text-[#fca311] rounded-xl flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#14213d] uppercase tracking-wider mb-1 font-heading">
                Direct Telephone & Mobiles
              </h3>
              <p className="text-xs text-[#14213d]/80">
                Landline: <strong className="text-[#14213d]">{COMPANY_INFO.contact.telephone}</strong>
              </p>
              <p className="text-xs text-[#14213d]/80">
                Mobile 1: <strong className="text-[#14213d]">{COMPANY_INFO.contact.mobiles[0]}</strong>
              </p>
              <p className="text-xs text-[#14213d]/80">
                Mobile 2: <strong className="text-[#14213d]">{COMPANY_INFO.contact.mobiles[1]}</strong>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-[#e5e5e5] shadow-sm flex items-start gap-4 hover-card-lift hover:border-[#fca311] transition-all">
            <div className="p-3 bg-[#14213d] text-[#fca311] rounded-xl flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#14213d] uppercase tracking-wider mb-1 font-heading">
                Direct Email & Hours
              </h3>
              <p className="text-xs text-[#14213d]/80">
                Primary: <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="text-[#fca311] font-bold hover:underline">{COMPANY_INFO.contact.primaryEmail}</a>
              </p>
              <p className="text-[11px] text-[#14213d]/60 pt-1">
                Working: Mon - Sat 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Section: General Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[#fca311] font-black text-xs uppercase tracking-widest block font-heading">
                Quick Message
              </span>
              <h2 className="text-3xl font-black text-[#14213d] font-heading">
                Send an Inquiry to Our Engineers
              </h2>
              <p className="text-[#14213d]/70 text-xs sm:text-sm leading-relaxed">
                Have a question regarding our workshop capabilities, equipment availability, or ongoing tenders? Drop us a direct message and our operations desk will revert promptly.
              </p>
            </div>

            <div className="bg-[#14213d] text-white p-6 sm:p-7 rounded-2xl space-y-3.5 border-l-4 border-[#fca311] shadow-xl border-2 border-[#e5e5e5]/20">
              <div className="flex items-center gap-2 text-[#fca311] text-xs font-bold uppercase font-heading">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Philosophy</span>
              </div>
              <h4 className="text-lg font-bold text-white font-heading">
                "{COMPANY_INFO.slogan}"
              </h4>
              <p className="text-xs text-[#e5e5e5]/80">
                "{COMPANY_INFO.motto}" — Partnering with heavy industry across Pakistan for reliable delivery.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border-2 border-[#e5e5e5] shadow-sm">
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <SubmissionResultBanner
                result={result}
                sentHeading="Inquiry Sent to powerindsolution@gmail.com"
                fallbackHeading="Inquiry Logged — Dispatch Formatted Email"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#14213d] uppercase mb-1.5 font-heading">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={contactData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14213d] uppercase mb-1.5 font-heading">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={contactData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#14213d] uppercase mb-1.5 font-heading">
                    Phone / Mobile
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactData.phone}
                    onChange={handleChange}
                    placeholder="0300-XXXXXXX"
                    className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14213d] uppercase mb-1.5 font-heading">
                    Division of Interest
                  </label>
                  <select
                    name="division"
                    value={contactData.division}
                    onChange={handleChange}
                    className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d]"
                  >
                    <option value="General Inquiry">General Engineering Inquiry</option>
                    <option value="Mechanical Fabrication">Mechanical Fabrication & Piping</option>
                    <option value="Electrical Automation">Electrical Sub-Stations & Power</option>
                    <option value="Civil Works">Civil Infrastructure & Heavy Foundations</option>
                    <option value="Process Machinery">Sugar & Process Plant Equipment</option>
                    <option value="VFD DCS">Inverter & DCS Automation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#14213d] uppercase mb-1.5 font-heading">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={contactData.subject}
                  onChange={handleChange}
                  placeholder="Subject of Inquiry"
                  className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#14213d] uppercase mb-1.5 font-heading">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={contactData.message}
                  onChange={handleChange}
                  placeholder="How can our engineering team assist you?"
                  className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-7 py-3 min-h-[44px] rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 shadow-md border-l-4 border-[#14213d] font-heading"
              >
                {loading ? <span>Sending...</span> : (
                  <>
                    <Send className="w-3.5 h-3.5 text-[#000000]" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Section: Dedicated RFQ Anchor */}
        <div id="quote" className="scroll-mt-24 pt-8 border-t border-[#e5e5e5]">
          <div className="mb-8 space-y-1.5">
            <span className="text-[#fca311] font-black text-xs uppercase tracking-widest block font-heading">
              Contract Quotations
            </span>
            <h2 className="text-3xl font-black text-[#14213d] font-heading">
              Request a Comprehensive Project Quotation (RFQ)
            </h2>
          </div>
          <QuoteForm />
        </div>

        {/* Section: Industrial FAQ */}
        <div className="bg-white rounded-2xl border-2 border-[#e5e5e5] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#fca311] font-black text-xs uppercase tracking-wider font-heading">
              <HelpCircle className="w-4 h-4 text-[#fca311]" />
              <span>Common Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#14213d] font-heading">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border-2 border-[#e5e5e5] space-y-2 hover-card-lift hover:border-[#fca311] transition-all">
                <h4 className="text-xs font-bold text-[#14213d] font-heading">
                  {faq.q}
                </h4>
                <p className="text-xs text-[#14213d]/70 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
