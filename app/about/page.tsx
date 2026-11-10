'use client';

import React from 'react';
import Link from 'next/link';
import { 
  COMPANY_INFO, MISSION_VISION_STRATEGY, CORE_VALUES, QUALITY_POLICY 
} from '@/data/pis-data';
import { 
  Award, ShieldCheck, Target, Users, Leaf, HardHat, CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const iconMap: Record<string, React.ElementType> = {
    Award, Users, ShieldCheck, Target, Leaf, HardHat, CheckCircle
  };

  return (
    <div className="bg-[#ffffff] min-h-screen text-[#14213d]">
      
      {/* Header Banner */}
      <div className="bg-[#000000] text-white py-16 lg:py-20 border-b border-[#e5e5e5]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(252,163,17,0.15),_transparent_45%)] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-black text-[#fca311] uppercase tracking-widest mb-2 font-heading">
            Company Profile & History
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            About Power Industrial Solutions
          </h1>
          <p className="text-[#e5e5e5] text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Established in 2010, Power Industrial Solutions (PIS) is a foremost engineering and industrial contracting firm executing complex Civil, Mechanical, and Electrical projects across Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Section 1: Overview & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="text-xs font-black text-[#fca311] uppercase tracking-widest font-heading">
              Since 2010 • 14+ Years of Precision
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#14213d] tracking-tight font-heading">
              Executing Turnkey Industrial Projects Earlier Than Planned
            </h2>
            <p className="text-[#14213d]/80 text-sm leading-relaxed">
              Power Industrial Solutions was founded with a singular conviction: to deliver world-standard engineering fabrication, precision plant erection, and infrastructure development with uncompromising quality and faster execution times.
            </p>
            <p className="text-[#14213d]/80 text-sm leading-relaxed">
              Over more than a decade, our multidisciplinary teams have achieved landmark successes, including manufacturing the <strong>First Vertical Continuous Pan in Pakistan</strong> for Ranipur Sugar Mills, undertaking circulation water pipeline civil and mechanical contracts at <strong>Lucky Coal Power Plant (660 MW Karachi)</strong> alongside SEPCOIII, and delivering critical terminal piping for <strong>Hascol Petroleum</strong>.
            </p>

            <div className="p-5 bg-[#ffffff] rounded-2xl border-l-4 border-[#fca311] border-2 border-[#e5e5e5] shadow-sm">
              <div className="text-xs font-bold text-[#14213d] uppercase tracking-wider mb-2 font-heading">
                Corporate Identity Record
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-[#14213d]/60 block">Managing Director:</span>
                  <strong className="text-[#14213d] font-heading">{COMPANY_INFO.managingDirector}</strong>
                </div>
                <div>
                  <span className="text-[#14213d]/60 block">Established:</span>
                  <strong className="text-[#14213d] font-heading">Year {COMPANY_INFO.foundedYear}</strong>
                </div>
                <div>
                  <span className="text-[#14213d]/60 block">Headquarters:</span>
                  <strong className="text-[#14213d] font-heading">Nawabshah, Sindh</strong>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#ffffff] rounded-2xl p-8 border-2 border-[#e5e5e5] shadow-lg space-y-4 hover-card-lift">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#fca311] text-[#000000] font-black text-lg flex items-center justify-center shadow-md font-heading">
                  MH
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#14213d] font-heading">
                    {COMPANY_INFO.managingDirector}
                  </h3>
                  <div className="text-xs font-bold text-[#fca311]">
                    Managing Director
                  </div>
                  <div className="text-[11px] text-[#14213d]/60">
                    Power Industrial Solutions
                  </div>
                </div>
              </div>

              <blockquote className="text-xs text-[#14213d]/80 leading-relaxed italic border-l-2 border-[#fca311] pl-3">
                "Our commitment to clients is simple yet absolute: you bring the vision, and our engineering force executes it with zero defect and ahead of schedule. We take immense pride in our technical workforce, modern machining, and safety-first mindset."
              </blockquote>

              <div className="pt-3 border-t border-[#e5e5e5] flex items-center justify-between text-xs text-[#14213d]/70">
                <span>{COMPANY_INFO.slogan}</span>
                <span className="font-bold text-[#14213d] font-heading">{COMPANY_INFO.motto}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Mission, Vision & Strategy */}
        <div id="mission" className="bg-[#ffffff] rounded-2xl p-8 sm:p-10 border-2 border-[#e5e5e5] shadow-sm space-y-8">
          <div className="max-w-2xl space-y-1">
            <div className="text-xs font-black text-[#fca311] uppercase tracking-widest font-heading">
              Strategic Framework
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#14213d] font-heading">
              Mission, Vision & Operational Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#ffffff] rounded-2xl border-2 border-[#e5e5e5] space-y-2">
              <div className="flex items-center gap-2 text-[#14213d] font-bold text-sm font-heading">
                <Target className="w-4 h-4 text-[#fca311]" />
                <span>Our Mission</span>
              </div>
              <p className="text-xs text-[#14213d]/70 leading-relaxed">
                {MISSION_VISION_STRATEGY.mission}
              </p>
            </div>

            <div className="p-6 bg-[#ffffff] rounded-2xl border-2 border-[#e5e5e5] space-y-2">
              <div className="flex items-center gap-2 text-[#14213d] font-bold text-sm font-heading">
                <ShieldCheck className="w-4 h-4 text-[#fca311]" />
                <span>Our Vision</span>
              </div>
              <p className="text-xs text-[#14213d]/70 leading-relaxed">
                {MISSION_VISION_STRATEGY.vision}
              </p>
            </div>
          </div>

          <div className="border-t border-[#e5e5e5] pt-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#14213d] font-heading">
              Execution Strategy:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MISSION_VISION_STRATEGY.strategy.map((item, idx) => (
                <div key={idx} className="bg-[#ffffff] p-4 rounded-xl border-2 border-[#e5e5e5] text-xs text-[#14213d]/80 leading-relaxed flex items-start gap-2.5">
                  <span className="font-black text-[#fca311] font-heading">{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Core Values */}
        <div className="space-y-6">
          <div>
            <div className="text-xs font-black text-[#fca311] uppercase tracking-widest mb-1 font-heading">
              Ethos
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#14213d] font-heading">
              Our 7 Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_VALUES.map((val, idx) => {
              const Icon = iconMap[val.icon] || Award;
              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border-2 border-[#e5e5e5] space-y-2 shadow-sm hover:shadow-lg transition-all hover-card-lift hover:border-[#fca311] group">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#14213d] text-[#fca311] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-[#fca311]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#14213d] font-heading">
                      {val.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#14213d]/70 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Quality Policy & HSE */}
        <div id="policy" className="bg-[#14213d] text-white rounded-2xl p-8 sm:p-10 border-l-4 border-[#fca311] space-y-6 shadow-2xl border-2 border-[#e5e5e5]/20">
          <div className="max-w-2xl space-y-1">
            <div className="text-xs font-black text-[#fca311] uppercase tracking-widest font-heading">
              Quality Assurance & Safety
            </div>
            <h2 className="text-2xl font-black text-white font-heading">
              Official Quality Policy
            </h2>
            <p className="text-[#e5e5e5]/80 text-xs sm:text-sm">
              Standard operating procedures rigorously enforced across all manufacturing workshops, fabrication yards, and remote project jobsites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {QUALITY_POLICY.map((pol, idx) => (
              <div key={idx} className="bg-[#000000] p-4 rounded-xl border border-[#e5e5e5]/20 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#fca311] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-[#e5e5e5] leading-relaxed">
                  {pol}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#e5e5e5]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#e5e5e5]/60">
              For complete project quality inspection records, please contact our engineering desk.
            </p>
            <Link
              href="/contact#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md border-l-4 border-[#000000] font-heading"
            >
              Contact Engineering Desk
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
