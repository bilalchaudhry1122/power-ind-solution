'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  OUR_WORK_GALLERY, OUR_WORK_VIDEOS, WORK_CATEGORIES, WorkItem 
} from '@/data/our-work-data';
import { 
  Search, X, ChevronLeft, ChevronRight, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkGallery({ initialCategory = 'All' }: { initialCategory?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<WorkItem | null>(null);

  // Filter items
  const filteredItems = OUR_WORK_GALLERY.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Modal navigation
  const currentIndex = activeModalItem ? filteredItems.findIndex(i => i.id === activeModalItem.id) : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setActiveModalItem(filteredItems[currentIndex + 1]);
    } else if (currentIndex === filteredItems.length - 1) {
      setActiveModalItem(filteredItems[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveModalItem(filteredItems[currentIndex - 1]);
    } else if (currentIndex === 0) {
      setActiveModalItem(filteredItems[filteredItems.length - 1]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalItem) return;
      if (e.key === 'Escape') setActiveModalItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem, currentIndex, filteredItems]);

  return (
    <div className="space-y-8">
      
      {/* Category Tabs & Search Controls */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-[#e5e5e5] shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {WORK_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3 py-1.5 min-h-[38px] inline-flex items-center rounded-lg transition-all duration-200 font-heading ${
                  selectedCategory === cat
                    ? 'bg-[#fca311] text-[#000000] font-black border-b-2 border-[#14213d] shadow-sm'
                    : 'bg-white text-[#14213d] hover:bg-[#e5e5e5]/50 border-2 border-[#e5e5e5]'
                }`}
              >
                <span>{cat}</span>
                {cat === 'All' ? (
                  <span className="ml-1.5 text-[10px] bg-[#000000] text-[#fca311] px-1.5 py-0.2 rounded font-black">
                    {OUR_WORK_GALLERY.length}
                  </span>
                ) : (
                  <span className="ml-1.5 text-[10px] text-[#14213d]/60">
                    ({OUR_WORK_GALLERY.filter(i => i.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#fca311] absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by client, piping, crane..."
              className="w-full text-base sm:text-xs pl-9 pr-3 py-2 min-h-[42px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2 text-xs text-[#14213d]/50 hover:text-[#14213d]"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Status Strip */}
        <div className="flex flex-wrap items-center justify-between text-xs text-[#14213d]/60 pt-3 border-t border-[#e5e5e5] gap-2">
          <div>
            Showing <strong className="text-[#14213d]">{filteredItems.length}</strong> of <strong>{OUR_WORK_GALLERY.length}</strong> verified project records
          </div>
          <div className="text-[11px] text-[#fca311] font-bold font-heading">
            Click any thumbnail to inspect high-definition photography
          </div>
        </div>
      </div>

      {/* Gallery Grid with Framer Motion Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        <AnimatePresence>
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: idx * 0.02 }}
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group bg-white rounded-2xl border-2 border-[#e5e5e5] overflow-hidden hover:border-[#fca311] hover:shadow-xl transition-all duration-300 hover-card-lift cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-square overflow-hidden bg-black">
                <img
                  src={item.thumb}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-2 left-2">
                  <span className="bg-[#14213d]/95 text-[#fca311] text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-[#fca311]/40 font-heading">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-[#e5e5e5]">
                  <span className="flex items-center gap-1 truncate font-medium">
                    <MapPin className="w-3 h-3 text-[#fca311] flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </span>
                  <span className="text-[10px] text-[#fca311] group-hover:underline font-bold transition-colors font-heading">
                    Inspect
                  </span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#fca311] uppercase tracking-wider block font-heading">
                    {item.client}
                  </span>
                  <h4 className="text-xs font-semibold text-[#14213d] line-clamp-2 mt-0.5 group-hover:text-[#fca311] transition-colors font-heading">
                    {item.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-[#e5e5e5]">
                  {item.tags.slice(0, 2).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-medium bg-[#e5e5e5]/50 text-[#14213d] px-1.5 py-0.5 rounded border border-[#e5e5e5]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border-2 border-[#e5e5e5] p-8 space-y-2">
          <p className="text-[#14213d]/60 text-xs">No project records match the current filter or search criteria.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="text-xs font-bold text-[#fca311] underline font-heading"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* On-Site Video Footage Section */}
      {OUR_WORK_VIDEOS.length > 0 && (
        <div className="bg-[#14213d] text-white rounded-2xl p-6 sm:p-8 border-2 border-[#e5e5e5]/20 space-y-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#e5e5e5]/20 pb-3">
            <div>
              <div className="text-[#fca311] text-xs font-black uppercase tracking-widest font-heading">
                Field Video Documentation
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5 font-heading">
                On-Site Video Recordings
              </h3>
            </div>
            <span className="text-xs text-[#fca311] font-semibold font-heading">
              Verified Project Footage
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OUR_WORK_VIDEOS.map((vid, idx) => (
              <div key={vid.id} className="bg-[#000000] rounded-xl p-4 border border-[#e5e5e5]/20 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white font-heading">Record #{idx + 1}: {vid.title}</span>
                  <span className="text-[#fca311] font-mono text-[11px] font-bold">{vid.sizeMB} MB</span>
                </div>
                <div className="rounded-lg overflow-hidden bg-black aspect-video flex items-center justify-center">
                  <video
                    src={vid.videoPath}
                    controls
                    preload="metadata"
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full HD Lightbox Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[95vh] bg-[#000000] rounded-2xl border-2 border-[#fca311]/40 shadow-2xl flex flex-col overflow-hidden"
            >
              
              {/* Modal Header */}
              <div className="px-5 py-3.5 border-b border-[#e5e5e5]/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase bg-[#fca311] text-[#000000] px-2 py-0.5 rounded font-heading">
                    {activeModalItem.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate max-w-md font-heading">
                    {activeModalItem.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#fca311] font-mono font-bold hidden sm:inline">
                    {currentIndex + 1} / {filteredItems.length}
                  </span>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="w-10 h-10 rounded-lg bg-[#14213d] hover:bg-[#fca311] text-[#e5e5e5] hover:text-[#000000] flex items-center justify-center transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[350px] max-h-[60vh]">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="max-h-full max-w-full object-contain"
                />

                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-[#14213d]/90 hover:bg-[#fca311] hover:text-[#000000] text-white transition-colors border border-[#fca311]/40"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-[#14213d]/90 hover:bg-[#fca311] hover:text-[#000000] text-white transition-colors border border-[#fca311]/40"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3.5 border-t border-[#e5e5e5]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#fca311] font-bold font-heading">{activeModalItem.client}</span>
                    <span className="text-[#e5e5e5]/50">•</span>
                    <span className="text-[#e5e5e5] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#fca311]" />
                      <span>{activeModalItem.location}</span>
                    </span>
                  </div>
                  <p className="text-xs text-[#e5e5e5]/70 max-w-2xl">
                    {activeModalItem.description}
                  </p>
                </div>

                <div className="w-full sm:w-auto">
                  <Link
                    href="/contact#quote"
                    className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black text-xs px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 uppercase tracking-wider shadow-md border-l-4 border-[#14213d] font-heading"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
