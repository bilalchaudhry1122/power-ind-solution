'use client';

import React from 'react';
import Link from 'next/link';
import { 
  CORE_VALUES, QUALITY_POLICY, COMPANY_INFO 
} from '@/data/pis-data';
import { 
  Award, Users, ShieldCheck, Target, Leaf, HardHat, 
  CheckCircle, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ValuesPolicySection() {
  const iconMap: Record<string, React.ElementType> = {
    Award,
    Users,
    ShieldCheck,
    Target,
    Leaf,
    HardHat,
    CheckCircle
  };

  return (
    <section className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Managing Director Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#14213d] text-white rounded-2xl p-8 sm:p-10 mb-16 border-l-4 border-[#fca311] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,_rgba(252,163,17,0.15),_transparent_40%)] pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-4">
            <div className="text-xs font-black text-[#fca311] uppercase tracking-widest font-heading">
              Managing Director’s Message
            </div>
            
            <p className="text-[#e5e5e5] text-sm sm:text-base leading-relaxed italic">
              "At Power Industrial Solutions, we measure our success not simply by the scale of steel we erect or the pipelines we lay, but by the trust of our clients and the safety of our workforce. Since 2010, our guiding motto has remained uncompromised: <span className="text-white font-bold font-heading">'To be completed earlier than Planned — You Think, We Execute'</span>. We continually invest in advanced technologies, world-class precision machining, and a culture of integrity to serve Pakistan’s industrial backbone."
            </p>

            <div className="pt-2 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#fca311] text-[#000000] font-black text-sm flex items-center justify-center shadow-md font-heading">
                MH
              </div>
              <div>
                <div className="text-sm font-bold text-white font-heading">
                  {COMPANY_INFO.managingDirector}
                </div>
                <div className="text-xs text-[#fca311]">
                  Managing Director, Power Industrial Solutions
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values & Policy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Core Values */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-black text-[#fca311] uppercase tracking-widest mb-1 font-heading">
                Ethos & Principles
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-[#14213d] tracking-tight font-heading">
                Our Core Values
              </h3>
              <p className="text-[#14213d]/70 text-xs sm:text-sm mt-1">
                The non-negotiable principles guiding our project managers, engineers, and fabricators on every site.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_VALUES.map((val, idx) => {
                const Icon = iconMap[val.icon] || Award;
                return (
                  <div 
                    key={idx} 
                    className="p-5 bg-[#ffffff] rounded-xl border-2 border-[#e5e5e5] space-y-2 hover:border-[#fca311] hover:shadow-lg transition-all duration-300 hover-card-lift group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#14213d] text-[#fca311] group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-[#fca311]" />
                      </div>
                      <h4 className="text-sm font-bold text-[#14213d] font-heading">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#14213d]/70 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Quality Policy & HSE */}
          <div className="lg:col-span-5 bg-[#000000] text-white p-6 sm:p-8 rounded-2xl border-2 border-[#e5e5e5]/20 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="text-xs font-black text-[#fca311] uppercase tracking-widest font-heading">
                Quality & Safety Standards
              </div>
              <h3 className="text-xl font-black text-white font-heading">
                Official Quality Policy
              </h3>
              <p className="text-xs text-[#e5e5e5]/80 leading-relaxed">
                PIS strictly enforces comprehensive Quality Assurance and Health, Safety & Environment (HSE) protocols on all jobsites.
              </p>

              <div className="space-y-2.5 pt-2">
                {QUALITY_POLICY.map((pol, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#e5e5e5]">
                    <CheckCircle className="w-4 h-4 text-[#fca311] flex-shrink-0 mt-0.5" />
                    <span>{pol}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#e5e5e5]/20 mt-6">
              <Link
                href="/about#policy"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#fca311] hover:text-white transition-colors group font-heading"
              >
                <span>Read Full QA/QC & Safety Standards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#fca311]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
