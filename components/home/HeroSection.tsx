'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, 
  Wrench, Zap, Building2, ChevronRight, Activity
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/pis-data';
import { OUR_WORK_GALLERY } from '@/data/our-work-data';

export default function HeroSection() {
  const [activeDivision, setActiveDivision] = useState<'mechanical' | 'electrical' | 'civil'>('mechanical');

  const divisionPreviews = {
    mechanical: {
      title: "Mechanical Engineering & Heavy Fabrication",
      summary: "Pioneers of Pakistan's first Vertical Continuous Pan, high-pressure steam piping, process tank farms, and turnkey sugar & oil equipment.",
      divisionLabel: "Mechanical Division",
      icon: Wrench,
      highlight: "Specialist in Indian Design Jet Condenser with automation",
      img: "/images/our-work/work-01.webp"
    },
    electrical: {
      title: "Electrical Sub-Stations & DCS Automation",
      summary: "Turnkey electrical infrastructure, high-voltage substations, underground cabling, explosion-proof systems, and Transpower 0.4–315kW VFDs.",
      divisionLabel: "Electrical Division",
      icon: Zap,
      highlight: "Modbus RTU / ASCII DSP Sensorless Vector Control",
      img: "/images/our-work/work-18.webp"
    },
    civil: {
      title: "Civil Construction & Industrial Infrastructure",
      summary: "Robust industrial buildings, heavy vibrating machine foundations, water reservoirs, paved arterial roads, and precast RCC barriers.",
      divisionLabel: "Civil Division",
      icon: Building2,
      highlight: "Large water retaining structures & precision machine foundations",
      img: "/images/our-work/work-22.webp"
    }
  };

  const currentPreview = divisionPreviews[activeDivision];
  const IconComponent = currentPreview.icon;

  return (
    <div className="relative bg-[#000000] text-white overflow-hidden border-b-2 border-[#14213d]">
      {/* Background Architectural Ambient Glow in #fca311 & #14213d */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(252,163,17,0.14),_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,_rgba(20,33,61,0.65),_transparent_50%)] pointer-events-none" />
      
      {/* Floating Parallax Accents */}
      <motion.div 
        animate={{ y: [0, -18, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-[#fca311]/15 blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 22, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[#14213d]/80 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        
        {/* Established Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2.5 text-xs font-heading font-black tracking-wider text-[#e5e5e5] mb-6"
        >
          <span className="text-[#fca311] tracking-widest uppercase">POWER INDUSTRIAL SOLUTIONS</span>
          <span className="text-[#fca311]">•</span>
          <span>ESTABLISHED {COMPANY_INFO.foundedYear}</span>
          <span className="text-[#fca311]">•</span>
          <span className="text-[#e5e5e5]/70 font-sans font-medium">CIVIL • MECHANICAL • ELECTRICAL</span>
        </motion.div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight font-heading tracking-tight">
              Engineering Excellence. <br />
              <span className="text-[#fca311]">Industrial Precision.</span>
            </h1>

            <p className="text-sm sm:text-lg text-[#e5e5e5] leading-relaxed max-w-2xl font-normal font-sans">
              Multi-disciplinary engineering contractor executing landmark mechanical fabrication, certified high-pressure piping, high-voltage electrical substations, and heavy civil infrastructure across Pakistan.
            </p>

            {/* Slogan Banner */}
            <div className="bg-[#14213d]/90 border-l-4 border-[#fca311] p-4 sm:p-5 rounded-r-xl shadow-xl border border-[#e5e5e5]/10">
              <div className="text-[11px] font-heading font-bold text-[#fca311] uppercase tracking-widest">
                Our Corporate Principle
              </div>
              <p className="text-xs sm:text-base font-semibold text-white mt-1">
                "{COMPANY_INFO.slogan} — <span className="text-[#fca311] font-heading font-black">{COMPANY_INFO.motto}</span>"
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <Link
                href="/contact#quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-heading font-black px-7 py-3.5 min-h-[44px] rounded-xl text-xs uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl hover:shadow-[#fca311]/25 hover:scale-105 active:scale-95 border-l-4 border-[#000000]"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-4 h-4 text-[#000000]" />
              </Link>

              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#14213d] hover:bg-[#14213d]/80 text-[#ffffff] font-heading font-bold px-6 py-3.5 min-h-[44px] rounded-xl text-xs transition-all duration-200 border border-[#e5e5e5]/30 hover:border-[#fca311] hover:scale-105"
              >
                <span>View Field Works ({OUR_WORK_GALLERY.length} Photos)</span>
              </Link>
            </div>

            {/* Key Stats Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#14213d]">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="space-y-0.5 p-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-[#14213d]/50 group"
                >
                  <div className="text-3xl sm:text-4xl font-black text-white font-heading group-hover:text-[#fca311] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-heading font-bold text-[#fca311]">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#e5e5e5]/70">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Division Spotlight */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#14213d] rounded-2xl border-2 border-[#14213d] p-6 shadow-2xl space-y-4 relative border-t-4 border-t-[#fca311]">
              
              {/* Telemetry Live Badge */}
              <div className="flex items-center justify-between border-b border-[#000000]/60 pb-3">
                <span className="text-[11px] font-heading font-bold text-[#e5e5e5] uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#fca311] animate-pulse" />
                  <span>Division Spotlight</span>
                </span>
                <span className="text-[10px] font-heading font-black text-[#000000] bg-[#fca311] px-2.5 py-0.5 rounded shadow-sm">
                  Verified Works
                </span>
              </div>

              {/* Division Selector Tabs */}
              <div className="flex bg-[#000000]/80 rounded-xl p-1 border border-[#14213d] gap-1">
                {(['mechanical', 'electrical', 'civil'] as const).map((divKey) => (
                  <button
                    key={divKey}
                    onClick={() => setActiveDivision(divKey)}
                    className={`flex-1 py-2.5 min-h-[44px] flex items-center justify-center text-xs font-heading font-black rounded-lg transition-all duration-200 capitalize ${
                      activeDivision === divKey
                        ? 'bg-[#fca311] text-[#000000] shadow-md'
                        : 'text-[#e5e5e5]/70 hover:text-white hover:bg-[#14213d]/50'
                    }`}
                  >
                    {divKey}
                  </button>
                ))}
              </div>

              {/* Dynamic Division Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDivision}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-heading font-black text-[#fca311] uppercase tracking-wider">
                      {currentPreview.divisionLabel}
                    </span>
                    <IconComponent className="w-4 h-4 text-[#fca311]" />
                  </div>

                  <h3 className="text-xl font-black text-white font-heading">
                    {currentPreview.title}
                  </h3>

                  <p className="text-xs text-[#e5e5e5]/90 leading-relaxed font-sans">
                    {currentPreview.summary}
                  </p>

                  <div className="bg-[#000000]/70 p-3 rounded-xl border border-[#fca311]/30 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#fca311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#ffffff] font-medium">
                      {currentPreview.highlight}
                    </span>
                  </div>

                  {/* Real Jobsite Engineering Image */}
                  <div className="relative rounded-xl overflow-hidden border border-[#e5e5e5]/20 bg-black h-48 group">
                    <img
                      src={currentPreview.img}
                      alt={currentPreview.title}
                      className="w-full h-full object-cover object-center opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="text-[#e5e5e5] font-medium">Verified Jobsite Engineering</span>
                      <Link
                        href={`/services#${activeDivision}`}
                        className="text-[#fca311] font-heading font-bold hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Full Scope</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#fca311]" />
                      </Link>
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link
                      href={`/services#${activeDivision}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#000000] hover:bg-[#000000]/80 text-[#ffffff] hover:text-[#fca311] text-xs font-heading font-bold py-3 rounded-xl transition-all duration-200 border border-[#fca311]/40"
                    >
                      <span>View Division Technical Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#fca311]" />
                    </Link>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
