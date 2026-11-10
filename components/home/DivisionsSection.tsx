'use client';

import React from 'react';
import Link from 'next/link';
import { DIVISIONS } from '@/data/pis-data';
import { Wrench, Zap, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DivisionsSection() {
  const iconMap: Record<string, React.ElementType> = {
    Wrench,
    Zap,
    Building2
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#e5e5e5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-2.5">
          <div className="text-xs font-heading font-black text-[#fca311] uppercase tracking-wider">
            Engineering Disciplines
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#14213d] font-heading tracking-tight">
            Integrated Industrial Capabilities
          </h2>
          <p className="text-[#14213d]/80 text-sm sm:text-base leading-relaxed font-sans">
            Power Industrial Solutions operates across three specialized, synergized divisions delivering turnkey engineering from workshop fabrication and structural erection to plant commissioning.
          </p>
        </div>

        {/* 3 Divisions Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DIVISIONS.map((division, idx) => {
            const Icon = iconMap[division.icon] || Wrench;

            return (
              <motion.div 
                key={division.id}
                id={division.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-2xl border-2 border-[#e5e5e5] hover:border-[#fca311] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover-card-lift group"
              >
                {/* Visual Top Preview Header */}
                <div className="relative h-56 bg-[#000000] overflow-hidden">
                  <img
                    src={division.image}
                    alt={division.name}
                    className="w-full h-full object-cover object-top opacity-85 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent"></div>
                  
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-heading font-black text-[#fca311] uppercase tracking-wider">
                        Division
                      </div>
                      <h3 className="text-xl font-black text-white font-heading">
                        {division.name}
                      </h3>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#14213d] text-[#fca311] border border-[#fca311]/40 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs font-heading font-black text-[#fca311] uppercase tracking-wider mb-2">
                      {division.tagline}
                    </div>
                    <p className="text-xs text-[#14213d]/80 leading-relaxed mb-4 font-sans">
                      {division.description}
                    </p>

                    {/* Capabilities List */}
                    <div className="space-y-2 border-t border-[#e5e5e5] pt-4">
                      <div className="text-[11px] font-heading font-bold text-[#14213d] uppercase tracking-wider">
                        Core Capabilities:
                      </div>
                      <ul className="space-y-1.5">
                        {division.capabilities.slice(0, 5).map((cap, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2 text-xs text-[#14213d]/90 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#fca311] flex-shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                      {division.capabilities.length > 5 && (
                        <p className="text-[11px] text-[#14213d]/60 pt-1 font-semibold">
                          + {division.capabilities.length - 5} more documented capabilities
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-[#e5e5e5]">
                    <Link
                      href={`/services#${division.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-heading font-black text-[#14213d] group-hover:text-[#fca311] transition-colors"
                    >
                      <span>Explore {division.name} Scope</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#fca311]" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
