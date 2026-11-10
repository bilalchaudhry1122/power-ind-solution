'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CLIENTS_LIST } from '@/data/pis-data';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientsSection() {
  const [activeSector, setActiveSector] = useState<string>('All');

  const sectors = [
    { id: 'All', label: 'All Key Clients' },
    { id: 'Power & Energy', label: 'Power & Energy' },
    { id: 'Oil & Gas', label: 'Oil & Gas' },
    { id: 'Sugar Processing', label: 'Sugar Mills' },
    { id: 'Textile & Manufacturing', label: 'Textiles' }
  ];

  const filteredClients = activeSector === 'All'
    ? CLIENTS_LIST
    : CLIENTS_LIST.filter(c => c.sector === activeSector);

  return (
    <section id="clients-section" className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <span className="text-[#fca311] font-black text-xs uppercase tracking-widest block font-heading">
              Enterprise Client Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14213d] tracking-tight font-heading">
              Our Linked Industrial Clients
            </h2>
            <p className="text-[#14213d]/70 text-xs sm:text-sm leading-relaxed">
              Serving Pakistan's foremost power generation complexes, petroleum oil terminals, multi-national EPC contractors, and sugar industrial conglomerates since 2010.
            </p>
          </div>

          <Link
            href="/projects#clients"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14213d] hover:text-[#fca311] transition-colors self-start md:self-auto group font-heading uppercase tracking-wider"
          >
            <span>View Complete Directory ({CLIENTS_LIST.length} Clients)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#fca311]" />
          </Link>
        </div>

        {/* Sector Quick Filter Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {sectors.map(sec => (
            <button
              key={sec.id}
              onClick={() => setActiveSector(sec.id)}
              className={`text-xs font-bold px-3.5 py-2 min-h-[40px] inline-flex items-center rounded-lg transition-all duration-200 font-heading ${
                activeSector === sec.id
                  ? 'bg-[#fca311] text-[#000000] font-black shadow-md border-b-2 border-[#14213d]'
                  : 'bg-[#ffffff] text-[#14213d] hover:bg-[#e5e5e5]/50 border-2 border-[#e5e5e5]'
              }`}
            >
              {sec.label}
            </button>
          ))}
          <span className="text-xs text-[#14213d]/50 ml-auto hidden sm:inline">
            Showing {filteredClients.length} verified industrial clients
          </span>
        </div>

        {/* Client Logos Grid with Framer Motion layout */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredClients.map((client, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
                key={client.name}
                className={`group p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between bg-white hover:shadow-xl hover-card-lift ${
                  client.highlight
                    ? 'border-[#fca311] ring-1 ring-[#fca311]/40'
                    : 'border-[#e5e5e5] hover:border-[#fca311]'
                }`}
              >
                <div>
                  {/* Clean Frameless Transparent Logo Bay */}
                  <div className="h-14 w-full flex items-center justify-center px-2 py-1 mb-3">
                    <img
                      src={client.logo}
                      alt={`${client.name} official corporate logo`}
                      className="max-h-12 max-w-full object-contain transition-transform group-hover:scale-105 duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Sector Chip */}
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#14213d] bg-[#e5e5e5]/60 px-2 py-0.5 rounded border border-[#e5e5e5]">
                      {client.sector || 'Industry'}
                    </span>
                    {client.highlight && (
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#000000] bg-[#fca311] border border-[#fca311] px-2 py-0.5 rounded font-heading">
                        Key Client
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h4 className="text-xs font-bold text-[#14213d] group-hover:text-[#fca311] leading-snug line-clamp-2 mt-1.5 transition-colors font-heading">
                    {client.name}
                  </h4>

                  {/* Category */}
                  <p className="text-[11px] text-[#14213d]/60 mt-1 line-clamp-1">
                    {client.category}
                  </p>
                </div>

                {/* Location Footer */}
                {client.location && (
                  <div className="pt-2.5 mt-2.5 border-t border-[#e5e5e5] flex items-center gap-1 text-[10px] text-[#14213d]/50">
                    <MapPin className="w-3 h-3 text-[#fca311] flex-shrink-0" />
                    <span className="truncate">{client.location}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Client Trust Banner */}
        <div className="bg-[#14213d] text-white rounded-2xl p-6 sm:p-8 border-l-4 border-[#fca311] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#fca311] uppercase tracking-widest font-heading">
              <ShieldCheck className="w-4 h-4 text-[#fca311]" />
              <span>100% Client Agreement & Quality Policy</span>
            </div>
            <h4 className="text-base font-bold text-white font-heading">
              "To meet our clients agreement and satisfaction. Completion of job in time."
            </h4>
            <p className="text-xs text-[#e5e5e5]/80 leading-relaxed">
              Official Quality Policy of Power Industrial Solutions: Rigorous QA/QC inspection, hydro-test documentation, and non-destructive testing for turnkey industrial handovers.
            </p>
          </div>
          <Link
            href="/contact#quote"
            className="bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shadow-md border-l-4 border-[#000000] font-heading"
          >
            Inquire Client RFQ
          </Link>
        </div>

      </div>
    </section>
  );
}
