'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { OUR_WORK_GALLERY, WorkItem } from '@/data/our-work-data';
import { ArrowRight, MapPin, Camera, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OurWorkShowcase() {
  const [activeTab, setActiveTab] = useState<'Featured' | 'Sugar' | 'Piping' | 'Structures'>('Featured');
  const [modalItem, setModalItem] = useState<WorkItem | null>(null);

  // Curated spotlight items from authentic field photography
  const featuredItems = OUR_WORK_GALLERY.filter((item, idx) => {
    if (activeTab === 'Sugar') return item.category === 'Sugar Machinery & Towers';
    if (activeTab === 'Piping') return item.category === 'High-Pressure Piping';
    if (activeTab === 'Structures') return item.category === 'Steel Structures & Rigging';
    return [0, 4, 6, 11, 18, 21, 24, 31].includes(idx);
  }).slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-[#14213d] text-white border-b border-[#000000] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(252,163,17,0.1),_transparent_45%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="text-xs font-black text-[#fca311] uppercase tracking-widest font-heading">
              Field Execution Photography
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-heading">
              Our Work in the Field
            </h2>
            <p className="text-[#e5e5e5]/80 text-sm sm:text-base leading-relaxed">
              Jobsite photography from our sugar mill towers, refinery piping spools, and heavy crane erections across Pakistan.
            </p>
          </div>

          <div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#fca311]/20 border-l-4 border-[#000000] font-heading"
            >
              <span>View All {OUR_WORK_GALLERY.length} Works</span>
              <ArrowRight className="w-4 h-4 text-[#000000]" />
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#e5e5e5]/20 pb-4">
          {[
            { id: 'Featured', label: 'Spotlight Projects' },
            { id: 'Sugar', label: 'Sugar Machinery & Towers' },
            { id: 'Piping', label: 'High-Pressure Piping' },
            { id: 'Structures', label: 'Steel Structures & Rigging' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-xs font-bold px-3.5 py-2 min-h-[40px] inline-flex items-center rounded-lg transition-all duration-200 font-heading ${
                activeTab === tab.id
                  ? 'bg-[#fca311] text-[#000000] shadow-md border-b-2 border-[#000000]'
                  : 'bg-[#000000]/60 text-[#e5e5e5] hover:text-white hover:bg-[#000000] border border-[#e5e5e5]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of 8 Spotlight Works with Framer Motion */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {featuredItems.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              key={item.id}
              onClick={() => setModalItem(item)}
              className="group bg-[#000000] rounded-2xl overflow-hidden border border-[#e5e5e5]/20 hover:border-[#fca311] hover:shadow-2xl transition-all duration-300 hover-card-lift cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={item.thumb}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-transparent to-transparent opacity-85"></div>

                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-bold uppercase bg-[#14213d]/90 text-[#fca311] px-2.5 py-0.5 rounded border border-[#fca311]/40 font-heading">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-xs text-[#e5e5e5]">
                  <span className="flex items-center gap-1 truncate font-medium">
                    <MapPin className="w-3 h-3 text-[#fca311] flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </span>
                  <span className="text-[10px] text-[#fca311] font-semibold group-hover:underline transition-colors font-heading">
                    Click to view
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold text-[#fca311] uppercase tracking-wider block font-heading">
                  {item.client}
                </span>
                <h4 className="text-xs font-semibold text-white line-clamp-2 group-hover:text-[#fca311] transition-colors font-heading">
                  {item.title}
                </h4>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* View All Works Callout Bar */}
        <div className="mt-12 bg-[#000000] rounded-2xl p-6 border-2 border-[#e5e5e5]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#14213d] border border-[#fca311]/40">
              <Camera className="w-5 h-5 text-[#fca311]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                Complete Field Photography Roster
              </h4>
              <p className="text-xs text-[#e5e5e5]/70">
                Browse all {OUR_WORK_GALLERY.length} verified field photographs and live on-site video footage.
              </p>
            </div>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-black text-[#fca311] hover:text-white uppercase tracking-wider transition-colors font-heading"
          >
            <span>Open Dedicated Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

      {/* Quick Modal Lightbox with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {modalItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#000000] rounded-2xl border-2 border-[#fca311]/40 shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="px-5 py-3 border-b border-[#e5e5e5]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase bg-[#fca311] text-[#000000] px-2 py-0.5 rounded mr-2 font-heading">
                    {modalItem.category}
                  </span>
                  <span className="text-xs font-bold text-white font-heading">{modalItem.title}</span>
                </div>
                <button
                  onClick={() => setModalItem(null)}
                  className="p-1.5 rounded-lg bg-[#14213d] hover:bg-[#fca311] text-white hover:text-[#000000] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px]">
                <img
                  src={modalItem.image}
                  alt={modalItem.title}
                  className="max-h-[60vh] max-w-full object-contain"
                />
              </div>

              <div className="px-5 py-3.5 border-t border-[#e5e5e5]/20 flex items-center justify-between text-xs">
                <span className="text-[#e5e5e5]">Client: <strong className="text-white">{modalItem.client}</strong> ({modalItem.location})</span>
                <Link
                  href="/work"
                  className="text-[#fca311] font-bold hover:underline font-heading"
                >
                  View Full Work Gallery →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
