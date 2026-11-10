'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FEATURED_PROJECTS, CLIENTS_LIST } from '@/data/pis-data';
import { MapPin, CheckCircle2, ArrowRight, Search, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsPage() {
  const [filterDivision, setFilterDivision] = useState<string>('All');
  const [clientSearch, setClientSearch] = useState<string>('');
  const [clientSector, setClientSector] = useState<string>('All');

  const filteredProjects = filterDivision === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.division === filterDivision);

  const filteredClients = CLIENTS_LIST.filter(c => {
    const matchesSearch = 
      c.name.toLowerCase().includes(clientSearch.toLowerCase()) ||
      c.category.toLowerCase().includes(clientSearch.toLowerCase()) ||
      (c.location && c.location.toLowerCase().includes(clientSearch.toLowerCase()));
    const matchesSector = clientSector === 'All' || c.sector === clientSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="bg-[#ffffff] min-h-screen text-[#14213d]">
      
      {/* Header Banner */}
      <div className="bg-[#000000] text-white py-16 lg:py-20 border-b border-[#e5e5e5]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(252,163,17,0.15),_transparent_45%)] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#fca311] font-black text-xs uppercase tracking-widest block mb-2 font-heading">
            Engineering Track Record
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Major Projects & Industrial Clients
          </h1>
          <p className="text-[#e5e5e5] text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Delivering major national infrastructure, thermal power plant piping, refinery oil terminals, and pioneering sugar mill machinery across Pakistan.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            {['All', 'Mechanical', 'Multi-Disciplinary', 'Civil'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterDivision(tab)}
                className={`text-xs font-bold px-3.5 py-2 min-h-[40px] inline-flex items-center rounded-lg transition-all duration-200 font-heading ${
                  filterDivision === tab
                    ? 'bg-[#fca311] text-[#000000] font-black shadow-md border-b-2 border-[#14213d]'
                    : 'bg-[#14213d] text-[#e5e5e5] hover:text-white hover:bg-[#000000] border border-[#e5e5e5]/30'
                }`}
              >
                {tab === 'All' ? 'All Landmark Projects' : tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Projects Cards Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4">
            <h2 className="text-2xl font-black text-[#14213d] font-heading">
              Featured Case Studies ({filteredProjects.length})
            </h2>
            <span className="text-xs text-[#14213d]/60 font-semibold font-heading">
              Filter: <strong>{filterDivision}</strong>
            </span>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div 
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border-2 border-[#e5e5e5] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover-card-lift hover:border-[#fca311] flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 bg-black overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {project.badge && (
                        <span className="bg-[#fca311] text-[#000000] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow border border-[#000000]/20 font-heading">
                          {project.badge}
                        </span>
                      )}
                      <span className="bg-[#14213d] text-white text-[10px] font-semibold px-2 py-1 rounded border border-[#e5e5e5]/30">
                        {project.division}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="flex items-center gap-1 text-[#e5e5e5] font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#fca311]" />
                        <span>{project.location}</span>
                      </span>
                      {project.year && (
                        <span className="text-[11px] font-mono text-[#fca311] font-bold bg-[#000000]/90 px-2 py-0.5 rounded border border-[#fca311]/40">
                          {project.year}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-[#fca311] uppercase tracking-wider block font-heading">
                        Client: {project.client}
                      </span>
                      <h3 className="text-xl font-bold text-[#14213d] mt-1 group-hover:text-[#fca311] transition-colors font-heading">
                        {project.title}
                      </h3>
                    </div>

                    {project.partners && (
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] bg-[#e5e5e5]/40 px-3 py-1.5 rounded-lg text-[#14213d] font-semibold border border-[#e5e5e5]">
                        <span className="text-[#14213d]/60 font-medium">Key Partners:</span>
                        {project.partners.map((p, pIdx) => (
                          <span key={pIdx} className="bg-white px-2 py-0.5 rounded text-[#14213d] font-bold shadow-xs border border-[#e5e5e5]">
                            {p}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-xs text-[#14213d]/70 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="border-t border-[#e5e5e5] pt-3 space-y-2">
                      <span className="text-[11px] font-bold text-[#14213d] uppercase tracking-wider block font-heading">
                        Detailed Engineering Scope:
                      </span>
                      {project.scope.map((item, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-[#14213d]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#fca311] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/contact#quote"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] text-xs font-black py-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-md border-l-4 border-[#14213d] font-heading uppercase tracking-wider"
                  >
                    <span>Request Similar Project Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#000000]" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section: Linked Clients Directory */}
        <div id="clients" className="bg-white rounded-2xl border-2 border-[#e5e5e5] p-8 sm:p-12 shadow-sm space-y-10">
          
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#e5e5e5] pb-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-[#fca311] font-black text-xs uppercase tracking-widest block font-heading">
                Industrial Client Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#14213d] tracking-tight font-heading">
                Our Linked Industrial Clients
              </h2>
              <p className="text-[#14213d]/70 text-xs sm:text-sm leading-relaxed">
                A verified roster of corporations and industrial complexes where Power Industrial Solutions has provided multi-disciplinary contracting, turnaround maintenance, and heavy engineering fabrication.
              </p>
            </div>

            {/* Client Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-[#fca311] absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={clientSearch}
                onChange={(e) => setClientSearch(e.target.value)}
                placeholder="Search clients, sectors, or cities..."
                className="w-full text-base sm:text-xs pl-10 pr-4 py-2.5 min-h-[44px] rounded-xl border-2 border-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:border-transparent bg-white text-[#14213d] placeholder:text-[#14213d]/40"
              />
            </div>
          </div>

          {/* Sector Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'All', label: 'All Clients (21)' },
              { id: 'Power & Energy', label: 'Power & Energy' },
              { id: 'Oil & Gas', label: 'Oil & Gas Terminals' },
              { id: 'Sugar Processing', label: 'Sugar Mills & Ethanol' },
              { id: 'Textile & Manufacturing', label: 'Textile & Heavy Manufacturing' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setClientSector(tab.id)}
                className={`text-xs font-bold px-3.5 py-2 min-h-[40px] inline-flex items-center rounded-lg transition-all duration-200 font-heading ${
                  clientSector === tab.id
                    ? 'bg-[#fca311] text-[#000000] font-black shadow-md border-b-2 border-[#14213d]'
                    : 'bg-white text-[#14213d] hover:bg-[#e5e5e5]/50 border-2 border-[#e5e5e5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <span className="text-xs text-[#14213d]/50 ml-auto hidden sm:inline">
              Showing {filteredClients.length} of {CLIENTS_LIST.length} corporations
            </span>
          </div>

          {/* All Clients Logo Cards Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
          >
            <AnimatePresence>
              {filteredClients.map((client, idx) => (
                <motion.div 
                  layout
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: idx * 0.02 }}
                  className={`group p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between bg-white hover:shadow-xl hover-card-lift ${
                    client.highlight
                      ? 'border-[#fca311] ring-1 ring-[#fca311]/40'
                      : 'border-[#e5e5e5] hover:border-[#fca311]'
                  }`}
                >
                  <div>
                    {/* Clean Frameless Logo Bay */}
                    <div className="h-14 w-full flex items-center justify-center px-2 py-1 mb-3">
                      <img
                        src={client.logo}
                        alt={`${client.name} official logo`}
                        className="max-h-12 max-w-full object-contain transition-transform group-hover:scale-105 duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Header Meta */}
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#14213d] bg-[#e5e5e5]/60 px-2 py-0.5 rounded border border-[#e5e5e5]">
                        {client.sector || 'Heavy Industry'}
                      </span>
                      {client.highlight && (
                        <span className="text-[9px] font-black uppercase tracking-wider text-[#000000] bg-[#fca311] border border-[#fca311] px-2 py-0.5 rounded font-heading">
                          Key Client
                        </span>
                      )}
                    </div>

                    {/* Client Corporate Name */}
                    <h4 className="text-xs font-bold text-[#14213d] group-hover:text-[#fca311] leading-tight line-clamp-2 mt-1.5 transition-colors font-heading">
                      {client.name}
                    </h4>

                    {/* Contract Category */}
                    <p className="text-[11px] text-[#14213d]/60 mt-1 line-clamp-1">
                      {client.category}
                    </p>
                  </div>

                  {/* Location Footer */}
                  {client.location && (
                    <div className="pt-3 mt-3 border-t border-[#e5e5e5] flex items-center gap-1 text-[10px] text-[#14213d]/50">
                      <MapPin className="w-3 h-3 text-[#fca311] flex-shrink-0" />
                      <span className="truncate">{client.location}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredClients.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border-2 border-[#e5e5e5] space-y-2">
              <p className="text-sm font-bold text-[#14213d] font-heading">
                No clients match your filter criteria "{clientSearch}".
              </p>
              <button
                onClick={() => { setClientSearch(''); setClientSector('All'); }}
                className="text-xs text-[#fca311] font-bold hover:underline font-heading"
              >
                Clear all filters and show all 21 clients
              </button>
            </div>
          )}

          {/* Quality Assurance Agreement Box */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#e5e5e5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#fca311] uppercase tracking-widest font-heading">
                <ShieldCheck className="w-4 h-4 text-[#fca311]" />
                <span>100% Client Agreement & Quality Policy</span>
              </div>
              <h4 className="text-base font-bold text-[#14213d] font-heading">
                "To meet our clients agreement and satisfaction. Completion of job in time."
              </h4>
              <p className="text-xs text-[#14213d]/70 leading-relaxed">
                Registered policy of Power Industrial Solutions: Strict compliance with ASME/API welding codes, hydro-test certification, and continuous on-site HSE protocols.
              </p>
            </div>
            <Link
              href="/contact#quote"
              className="bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shadow-md border-l-4 border-[#14213d] font-heading"
            >
              Request Project RFQ
            </Link>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="bg-[#14213d] text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-l-8 border-[#fca311] shadow-2xl border-2 border-[#e5e5e5]/20">
          <div className="space-y-1">
            <span className="text-xs font-black text-[#fca311] uppercase tracking-widest font-heading">
              Ready to Join Our Portfolio of Satisfied Clients?
            </span>
            <h3 className="text-2xl font-black text-white font-heading">
              Let's engineer your next industrial milestone.
            </h3>
            <p className="text-xs text-[#e5e5e5]/80">
              Schedule a site inspection or send us your engineering specifications today.
            </p>
          </div>
          <Link
            href="/contact#quote"
            className="bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-7 py-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shadow-md border-l-4 border-[#000000] font-heading"
          >
            Start Your RFQ
          </Link>
        </div>

      </div>
    </div>
  );
}
