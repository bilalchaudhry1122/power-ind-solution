'use client';

import React from 'react';
import Link from 'next/link';
import { Cog, Sliders, ArrowRight, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SpecializedManufacturingSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#14213d] text-white border-b-2 border-[#000000] relative overflow-hidden">
      {/* Background Accent Glow in #fca311 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(252,163,17,0.12),_transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(0,0,0,0.6),_transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-2.5">
          <div className="text-xs font-heading font-black text-[#fca311] uppercase tracking-wider">
            In-House Manufacturing & Automation
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            Specialized Industrial Machinery & Control Systems
          </h2>
          <p className="text-[#e5e5e5]/90 text-sm sm:text-base leading-relaxed font-sans">
            In-house manufacturing of complex heavy process machinery, automated jet condensers, high-capacity crystallizers, and state-of-the-art DCS automation systems.
          </p>
        </div>

        {/* 3 Pillars of Manufacturing & Automation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Process Equipment */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#000000] rounded-2xl p-6 sm:p-7 border-2 border-[#14213d] hover:border-[#fca311] hover:shadow-2xl transition-all duration-300 hover-card-lift flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#14213d] pb-3">
                <span className="text-xs font-heading font-black text-[#fca311] uppercase tracking-wider">
                  Process Machinery & Tanks
                </span>
                <Cog className="w-5 h-5 text-[#fca311] group-hover:rotate-45 transition-transform duration-300" />
              </div>

              <h3 className="text-xl font-black text-white font-heading group-hover:text-[#fca311] transition-colors">
                Sugar & Chemical Plant Equipment
              </h3>
              <p className="text-xs text-[#e5e5e5]/80 leading-relaxed font-sans">
                Fabrication of Indian Design Jet Condensers with automation, Falling Film Evaporators, Continuous Pans, U-Shape Crystallizers, Juice Heaters, and Clarifiers.
              </p>
              
              <ul className="space-y-2 text-xs text-[#e5e5e5] pt-2 border-t border-[#14213d]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>Indian Design Jet Condenser with automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>Continuous Pans & Falling Film Evaporators</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>Boiler ID/FD Fans & Mud Fertilizer Plants</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>Juice Clarifiers & Talofloc Systems</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#14213d] mt-4">
              <Link
                href="/services#manufacturing"
                className="inline-flex items-center gap-2 text-xs font-heading font-black text-[#fca311] hover:text-white transition-colors group-hover:translate-x-1"
              >
                <span>View Full Equipment List</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Inverters & DCS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#000000] rounded-2xl p-6 sm:p-7 border-2 border-[#14213d] hover:border-[#fca311] hover:shadow-2xl transition-all duration-300 hover-card-lift flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#14213d] pb-3">
                <span className="text-xs font-heading font-black text-[#fca311] uppercase tracking-wider">
                  0.4kW ~ 315kW Drives
                </span>
                <Cpu className="w-5 h-5 text-[#fca311] group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-xl font-black text-white font-heading group-hover:text-[#fca311] transition-colors">
                Invertor & DCS Automation
              </h3>
              <p className="text-xs text-[#e5e5e5]/80 leading-relaxed font-sans">
                Sensorless vector control VFDs based on high-performance DSP platform. Supporting 220V to 525V with Modbus RTU/ASCII protocols for seamless plant automation.
              </p>

              <ul className="space-y-2 text-xs text-[#e5e5e5] pt-2 border-t border-[#14213d]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>Sensorless Vector Control with parameter auto-tuning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>Built-in DC reactors above 18.5kW</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>Modbus RTU / ASCII RS485 communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>12 applications: Cranes, textiles, CNC, elevators</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#14213d] mt-4">
              <Link
                href="/services#automation"
                className="inline-flex items-center gap-2 text-xs font-heading font-black text-[#fca311] hover:text-white transition-colors group-hover:translate-x-1"
              >
                <span>Technical Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Process Instrumentation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#000000] rounded-2xl p-6 sm:p-7 border-2 border-[#14213d] hover:border-[#fca311] hover:shadow-2xl transition-all duration-300 hover-card-lift flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#14213d] pb-3">
                <span className="text-xs font-heading font-black text-[#fca311] uppercase tracking-wider">
                  Hazardous & Process Lines
                </span>
                <Sliders className="w-5 h-5 text-[#fca311] group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-xl font-black text-white font-heading group-hover:text-[#fca311] transition-colors">
                Instrumentation & Control
              </h3>
              <p className="text-xs text-[#e5e5e5]/80 leading-relaxed font-sans">
                High-precision measurement and control for Pressure, Temperature, Level & Flow. Equipped with smart HART transmitters, control valves, and RTD sensors.
              </p>

              <ul className="space-y-2 text-xs text-[#e5e5e5] pt-2 border-t border-[#14213d]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>Pressure transmitters, gauges & photogenic switches</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>RTD sensors, Thermocouples (K/J/S/R) & thermowells</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>Electromagnetic, turbine & ultrasonic flow meters</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fca311]"></span>
                  <span>Pneumatic on/off control valves & solenoid valves</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#14213d] mt-4">
              <Link
                href="/services#instrumentation"
                className="inline-flex items-center gap-2 text-xs font-heading font-black text-[#fca311] hover:text-white transition-colors group-hover:translate-x-1"
              >
                <span>View Instrumentation Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Technical Callout */}
        <div className="bg-[#000000] border-2 border-[#14213d] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl">
          <div>
            <h4 className="text-base sm:text-lg font-black text-white font-heading">
              Fabrication according to custom engineering drawings & ASME/API standards.
            </h4>
            <p className="text-xs text-[#e5e5e5]/80 mt-1 font-sans">
              Submit your engineering drawings for rapid quote assessment and delivery timeline.
            </p>
          </div>
          <Link
            href="/contact#quote"
            className="w-full sm:w-auto text-center flex items-center justify-center min-h-[44px] bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-heading font-black px-7 py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl border-l-4 border-[#000000]"
          >
            Submit Drawing for Quote
          </Link>
        </div>

      </div>
    </section>
  );
}
