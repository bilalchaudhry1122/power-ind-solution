import React from 'react';
import type { Metadata } from 'next';
import WorkGallery from '@/components/work/WorkGallery';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { OUR_WORK_GALLERY } from '@/data/our-work-data';

export const metadata: Metadata = {
  title: 'Our Work & Project Gallery | Power Industrial Solutions (PIS)',
  description: 'Verified jobsite photography and live video recordings from Power Industrial Solutions projects across Pakistan: sugar mill machinery, high-pressure piping, structural steel, and process vessels.',
};

export default function WorkPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen text-[#14213d]">
      
      {/* Header Banner */}
      <div className="bg-[#000000] text-white py-14 lg:py-16 border-b border-[#e5e5e5]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(252,163,17,0.15),_transparent_45%)] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-black text-[#fca311] uppercase tracking-widest mb-2 font-heading">
            Field Documentation & Photographic Evidence
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            Our Work in the Field
          </h1>
          <p className="text-[#e5e5e5] text-sm sm:text-base max-w-3xl mt-3 leading-relaxed font-normal">
            Direct photographic records from our fabrication yards, sugar mill shutdowns, power plant pipeline corridors, and oil terminal installations across Pakistan.
          </p>

          {/* Grounded Key Counts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#e5e5e5]/20">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">{OUR_WORK_GALLERY.length}</div>
              <div className="text-xs text-[#fca311] uppercase font-bold font-heading">Documented Projects</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">3</div>
              <div className="text-xs text-[#fca311] uppercase font-bold font-heading">Engineering Divisions</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">14+</div>
              <div className="text-xs text-[#fca311] uppercase font-bold font-heading">Years Active</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">24/7</div>
              <div className="text-xs text-[#fca311] uppercase font-bold font-heading">Shutdown Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        
        {/* Gallery Component */}
        <WorkGallery />

        {/* Bottom Quotation Callout */}
        <div className="bg-[#14213d] text-white rounded-2xl p-8 sm:p-10 border-l-4 border-[#fca311] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl border-2 border-[#e5e5e5]/20">
          <div className="space-y-1.5">
            <div className="text-xs font-black uppercase tracking-widest text-[#fca311] font-heading">
              Project Estimation
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
              Planning an Industrial Shutdown or New Fabrication?
            </h3>
            <p className="text-xs sm:text-sm text-[#e5e5e5]/80 max-w-xl">
              From continuous pan manufacturing to on-site high-pressure pipe welding and turnaround overhauls, consult Power Industrial Solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact#quote"
              className="bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md border-l-4 border-[#000000] font-heading"
            >
              Request Project Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#000000] hover:bg-[#000000]/80 text-[#ffffff] font-bold px-5 py-3 rounded-lg text-xs transition-colors border border-[#e5e5e5]/30 hover:border-[#fca311] font-heading"
            >
              <span>Contact Headquarters</span>
              <ArrowRight className="w-4 h-4 text-[#fca311]" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
