'use client';

import React from 'react';
import Link from 'next/link';
import { 
  DIVISIONS, MAJOR_TASKS_SCOPE, INVERTER_DCS_DATA, INSTRUMENTATION_DATA 
} from '@/data/pis-data';
import { 
  Wrench, Zap, Building2, CheckCircle2, ArrowRight,
  Cpu, Sliders, ShieldCheck 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const iconMap: Record<string, React.ElementType> = {
    Wrench, Zap, Building2
  };

  return (
    <div className="bg-[#ffffff] min-h-screen text-[#14213d]">
      
      {/* Banner */}
      <div className="bg-[#000000] text-white py-16 lg:py-20 border-b border-[#e5e5e5]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(252,163,17,0.15),_transparent_45%)] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#fca311] font-black text-xs uppercase tracking-widest block mb-2 font-heading">
            Scope of Engineering Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Services & Technical Capabilities
          </h1>
          <p className="text-[#e5e5e5] text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            From precision workshop fabrication and high-pressure piping to 500kV substations, DCS automation, and heavy machine foundations—explore our complete industrial spectrum.
          </p>

          {/* Jump Links Navigation */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            {[
              { href: '#mechanical', label: 'Mechanical Works' },
              { href: '#electrical', label: 'Electrical & Automation' },
              { href: '#civil', label: 'Civil Infrastructure' },
              { href: '#manufacturing', label: 'Machinery & Process Tanks' },
              { href: '#automation', label: 'Invertors & DCS' },
              { href: '#instrumentation', label: 'Process Instrumentation' }
            ].map(link => (
              <a 
                key={link.href}
                href={link.href} 
                className="bg-[#14213d] hover:bg-[#000000] text-[#fca311] hover:text-white text-xs font-bold px-3.5 py-2 min-h-[38px] inline-flex items-center rounded-lg border border-[#e5e5e5]/30 hover:border-[#fca311] transition-all hover:scale-105 active:scale-95 font-heading"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* 3 Core Divisions Breakdown */}
        {DIVISIONS.map((division) => {
          const Icon = iconMap[division.icon] || Wrench;

          return (
            <motion.div 
              key={division.id}
              id={division.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border-2 border-[#e5e5e5] shadow-sm p-8 sm:p-12 scroll-mt-24 space-y-8 hover-card-lift hover:border-[#fca311] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e5e5e5]">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#14213d] text-[#fca311] border border-[#e5e5e5]/30 shadow">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#fca311] uppercase tracking-widest block font-heading">
                      PIS Engineering Division
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#14213d] font-heading">
                      {division.name}
                    </h2>
                  </div>
                </div>

                <Link
                  href="/contact#quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-5 py-3 min-h-[44px] rounded-lg text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md border-l-4 border-[#14213d] font-heading"
                >
                  <span>Request Quote for {division.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#000000]" />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-base font-bold text-[#14213d] font-heading">
                    {division.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#14213d]/70 leading-relaxed">
                    {division.description}
                  </p>

                  <div className="pt-4 space-y-2.5">
                    <span className="text-xs font-bold text-[#14213d] uppercase tracking-wider block font-heading">
                      Comprehensive Scope of Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {division.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#14213d]/80 bg-[#ffffff] p-3 rounded-xl border-2 border-[#e5e5e5]">
                          <CheckCircle2 className="w-4 h-4 text-[#fca311] flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border-2 border-[#e5e5e5] shadow-md bg-black group">
                    <img
                      src={division.image}
                      alt={division.name}
                      className="w-full h-80 object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Section: Specialized Manufacturing & Process Equipment */}
        <div id="manufacturing" className="bg-[#14213d] text-white rounded-2xl p-8 sm:p-12 shadow-2xl scroll-mt-24 space-y-10 border-2 border-[#e5e5e5]/20">
          <div className="max-w-3xl space-y-3">
            <span className="text-[#fca311] font-black text-xs uppercase tracking-widest block font-heading">
              Manufacturing & Fabrication Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
              Specialized Industrial Machinery & Process Equipment
            </h2>
            <p className="text-[#e5e5e5]/80 text-xs sm:text-sm leading-relaxed">
              Power Industrial Solutions manufactures proprietary and custom-engineered heavy process machinery for sugar mills, petrochemical refineries, chemical fertilizer complexes, and thermal power plants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAJOR_TASKS_SCOPE.map((item, idx) => (
              <div key={idx} className="bg-[#000000] p-6 rounded-2xl border border-[#e5e5e5]/20 hover:border-[#fca311] space-y-2.5 flex flex-col justify-between hover-card-lift transition-all">
                <div>
                  <span className="text-[10px] font-black text-[#fca311] uppercase tracking-wider bg-[#14213d] px-2.5 py-1 rounded border border-[#fca311]/40 font-heading">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2.5 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#e5e5e5]/70 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 text-[11px] font-semibold text-[#fca311] flex items-center gap-1.5 border-t border-[#e5e5e5]/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#fca311]" />
                  <span>Precision Fabricated by PIS</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Invertor & DCS Automation */}
        <div id="automation" className="bg-white rounded-2xl border-2 border-[#e5e5e5] p-8 sm:p-12 shadow-sm scroll-mt-24 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-[#fca311] font-black text-xs uppercase tracking-wider font-heading">
              <Cpu className="w-4 h-4 text-[#fca311]" />
              <span>Smart Industrial Automation</span>
            </div>
            <h2 className="text-3xl font-black text-[#14213d] font-heading">
              {INVERTER_DCS_DATA.title}
            </h2>
            <p className="text-[#14213d]/70 text-xs sm:text-sm leading-relaxed">
              {INVERTER_DCS_DATA.subtitle}. Engineered for robust continuous operation in high-ambient, dusty, and electrically demanding industrial conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Technical Specifications */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-base font-bold text-[#14213d] border-b border-[#e5e5e5] pb-2 font-heading">
                Technical Specifications & Capabilities:
              </h3>
              <div className="space-y-2">
                {INVERTER_DCS_DATA.specifications.map((spec, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-white rounded-xl text-xs border-2 border-[#e5e5e5] gap-1">
                    <span className="font-bold text-[#14213d] font-heading">{spec.label}:</span>
                    <span className="text-[#14213d] font-mono font-semibold sm:text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Industrial Applications */}
            <div className="lg:col-span-5 bg-[#000000] text-white p-6 rounded-2xl space-y-4 border-2 border-[#e5e5e5]/30 shadow-xl">
              <h3 className="text-sm font-black text-[#fca311] uppercase tracking-wider font-heading">
                12 Typical Applications:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {INVERTER_DCS_DATA.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[#e5e5e5] bg-[#14213d] px-2.5 py-1.5 rounded-lg border border-[#e5e5e5]/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fca311] flex-shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#e5e5e5]/20">
                <Link
                  href="/contact#quote"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black py-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md border-l-4 border-[#14213d] font-heading"
                >
                  <span>Inquire VFD / DCS Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#000000]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Process Instrumentation & Control */}
        <div id="instrumentation" className="bg-white rounded-2xl border-2 border-[#e5e5e5] p-8 sm:p-12 shadow-sm scroll-mt-24 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-[#fca311] font-black text-xs uppercase tracking-wider font-heading">
              <Sliders className="w-4 h-4 text-[#fca311]" />
              <span>Sensors, Transmitters & Valves</span>
            </div>
            <h2 className="text-3xl font-black text-[#14213d] font-heading">
              {INSTRUMENTATION_DATA.title}
            </h2>
            <p className="text-[#14213d]/70 text-xs sm:text-sm leading-relaxed">
              {INSTRUMENTATION_DATA.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTRUMENTATION_DATA.categories.map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-[#e5e5e5] space-y-3 flex flex-col justify-between hover-card-lift hover:border-[#fca311] transition-all">
                <div>
                  <h3 className="text-sm font-bold text-[#14213d] border-b border-[#e5e5e5] pb-2 font-heading">
                    {cat.group}
                  </h3>
                  <ul className="space-y-2 mt-3 text-xs text-[#14213d]/80">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fca311] mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Quick RFQ banner for instrumentation */}
          <div className="bg-[#14213d] text-white border-l-4 border-[#fca311] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border-2 border-[#e5e5e5]/20">
            <div className="space-y-1">
              <span className="text-[#fca311] font-black text-xs uppercase tracking-widest block font-heading">
                Instrumentation Quotations
              </span>
              <h4 className="font-bold text-lg text-white font-heading">
                Looking for Calibrated Gauges or Solenoid Valves?
              </h4>
              <p className="text-xs text-[#e5e5e5]/80 max-w-xl">
                We supply and commission certified measurement equipment with complete testing calibration certificates and factory warranty.
              </p>
            </div>
            <Link
              href="/contact#quote"
              className="bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shadow-md border-l-4 border-[#000000] font-heading"
            >
              Request Instrumentation RFQ
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
