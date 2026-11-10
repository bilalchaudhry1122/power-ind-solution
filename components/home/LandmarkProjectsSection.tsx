'use client';

import React from 'react';
import Link from 'next/link';
import { FEATURED_PROJECTS } from '@/data/pis-data';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandmarkProjectsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="text-xs font-black text-[#fca311] uppercase tracking-widest font-heading">
              Landmark Project History
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#14213d] tracking-tight font-heading">
              Major Industrial Executions
            </h2>
            <p className="text-[#14213d]/70 text-sm sm:text-base leading-relaxed">
              From historic firsts in national sugar refining to mega power plant civil networks and oil terminal piping, review our flagship engineering executions.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-black bg-[#fca311] hover:bg-[#e0910f] text-[#000000] px-6 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 shadow-md self-start md:self-auto active:scale-95 border-l-4 border-[#14213d] font-heading uppercase tracking-wider"
          >
            <span>View All Projects & Clients</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#000000]" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#ffffff] rounded-2xl border-2 border-[#e5e5e5] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-300 hover-card-lift hover:border-[#fca311] group"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-56 bg-[#000000] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.badge && (
                      <span className="bg-[#fca311] text-[#000000] text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm border border-[#000000]/20 font-heading">
                        {project.badge}
                      </span>
                    )}
                    <span className="bg-[#14213d] text-[#ffffff] text-[10px] font-semibold px-2 py-0.5 rounded border border-[#e5e5e5]/30">
                      {project.division}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 text-[#e5e5e5] font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#fca311]" />
                      <span>{project.location}</span>
                    </span>
                    {project.year && (
                      <span className="text-[11px] font-mono text-[#fca311] bg-[#000000]/90 px-2 py-0.5 rounded border border-[#fca311]/40 font-bold">
                        {project.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#fca311] uppercase tracking-wider block font-heading">
                      Client: {project.client}
                    </span>
                    <h3 className="text-base font-bold text-[#14213d] mt-1 group-hover:text-[#fca311] transition-colors font-heading">
                      {project.title}
                    </h3>
                  </div>

                  {project.partners && (
                    <div className="flex flex-wrap items-center gap-1.5 text-xs bg-[#e5e5e5]/40 px-3 py-1.5 rounded-lg text-[#14213d] border border-[#e5e5e5]">
                      <span className="text-[#14213d]/60 font-medium">Contract Partners:</span>
                      {project.partners.map((p, pIdx) => (
                        <span key={pIdx} className="font-bold text-[#14213d]">
                          {p}{pIdx < project.partners!.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-[#14213d]/70 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="border-t border-[#e5e5e5] pt-3 space-y-1.5">
                    <span className="text-[11px] font-bold text-[#14213d] uppercase tracking-wider block mb-1 font-heading">
                      Executed Scope:
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

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                <Link
                  href="/projects"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#14213d] hover:bg-[#000000] text-[#ffffff] border border-[#14213d] hover:border-[#fca311] text-xs font-bold py-2.5 rounded-lg transition-all duration-200 group-hover:text-[#fca311] shadow-xs font-heading"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#fca311] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
