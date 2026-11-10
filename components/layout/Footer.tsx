'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, ArrowRight, CheckCircle, Send
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/pis-data';
import { OUR_WORK_GALLERY } from '@/data/our-work-data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMsg(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMsg(data.error || 'Failed to subscribe.');
      }
    } catch {
      setStatus('error');
      setMsg('Network error. Please try again.');
    }
  };

  return (
    <footer className="bg-[#000000] text-[#e5e5e5] border-t-4 border-[#fca311]">
      {/* Top Action Bar - Midnight Oxford Blue #14213d */}
      <div className="bg-[#14213d] py-9 border-b border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-[#fca311] text-xs font-black uppercase tracking-wider font-heading">
              {COMPANY_INFO.slogan}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 font-heading">
              {COMPANY_INFO.motto}
            </h3>
            <p className="text-[#e5e5e5]/80 text-xs sm:text-sm mt-1 max-w-xl">
              Turnkey contractor for Civil, Mechanical, and Electrical industrial engineering projects across Pakistan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <Link
              href="/contact#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg border-l-4 border-[#000000] font-heading"
            >
              Request a Project Quote
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] gap-2 bg-[#000000] hover:bg-[#000000]/80 text-[#ffffff] font-bold px-5 py-3 rounded-lg text-xs transition-all duration-200 border border-[#e5e5e5]/30 hover:border-[#fca311] font-heading"
            >
              <ArrowRight className="w-4 h-4 text-[#fca311]" />
              <span>Explore Our Work</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Company Profile & Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <img 
                src="/images/pis-logo-white.png" 
                alt="Power Industrial Solutions Logo" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-[#e5e5e5]/80 text-xs leading-relaxed">
              Established in 2010, Power Industrial Solutions (PIS) delivers multi-disciplinary engineering contracting across Pakistan, specializing in high-pressure piping, sugar & power plant machinery, heavy foundations, and industrial automation.
            </p>
            <div className="text-xs text-[#e5e5e5]/70 pt-1">
              Managing Director: <strong className="text-white font-heading">{COMPANY_INFO.managingDirector}</strong>
            </div>
          </div>

          {/* Column 2: Divisions & Services */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-wider font-heading border-b border-[#14213d] pb-2 mb-4">
              Core Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#mechanical" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>Mechanical Fabrication & Piping</span>
                </Link>
              </li>
              <li>
                <Link href="/services#electrical" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>Electrical Sub-Stations & Power</span>
                </Link>
              </li>
              <li>
                <Link href="/services#civil" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>Civil Works & Heavy Foundations</span>
                </Link>
              </li>
              <li>
                <Link href="/services#manufacturing" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>Jet Condensers & Continuous Pans</span>
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>Invertor & DCS Automation (0.4–315kW)</span>
                </Link>
              </li>
              <li>
                <Link href="/services#instrumentation" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>Process Instrumentation & Control</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-wider font-heading border-b border-[#14213d] pb-2 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>About Power Industrial Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 font-bold text-white hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>Our Work Gallery ({OUR_WORK_GALLERY.length} Works)</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>Landmark Projects & Case Studies</span>
                </Link>
              </li>
              <li>
                <Link href="/projects#clients" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>Our Linked Industrial Clients</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#fca311] transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#fca311]" />
                  <span>Contact Headquarters</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-black text-xs uppercase tracking-wider font-heading border-b border-[#14213d] pb-2">
              Head Office Contact
            </h4>
            <div className="space-y-2 text-xs text-[#e5e5e5]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#fca311] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.headOffice}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#fca311] flex-shrink-0" />
                <span>Tel: {COMPANY_INFO.contact.telephone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#fca311] flex-shrink-0" />
                <span>Mob: {COMPANY_INFO.contact.mobiles.join(', ')}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#fca311] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="hover:text-[#fca311] transition-colors">
                  {COMPANY_INFO.contact.primaryEmail}
                </a>
              </p>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-[11px] font-black text-[#fca311] uppercase tracking-wider block mb-1.5 font-heading">
                Technical Bulletins
              </span>
              <form onSubmit={handleSubscribe} className="flex items-stretch gap-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="bg-[#14213d] border border-[#e5e5e5]/30 text-base sm:text-xs text-white placeholder:text-[#e5e5e5]/50 px-3 py-2 min-h-[44px] rounded-l-lg focus:outline-none focus:border-[#fca311] flex-1 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#fca311] hover:bg-[#e0910f] text-[#000000] px-4 py-2 min-h-[44px] min-w-[44px] rounded-r-lg text-xs font-black transition-all duration-200 hover:scale-105 flex items-center justify-center shadow"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {status === 'success' && (
                <p className="text-[11px] text-[#fca311] mt-1 flex items-center gap-1 font-bold">
                  <CheckCircle className="w-3 h-3" /> {msg}
                </p>
              )}
              {status === 'error' && (
                <p className="text-[11px] text-red-400 mt-1">{msg}</p>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#000000] py-4 border-t border-[#14213d] text-xs text-[#e5e5e5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Power Industrial Solutions (PIS). All Rights Reserved.</p>
          <p>
            Email: <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="text-[#fca311] font-bold hover:underline">{COMPANY_INFO.contact.primaryEmail}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
