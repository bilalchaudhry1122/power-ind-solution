'use client';

import React, { useState } from 'react';
import { Send, FileText, ShieldCheck } from 'lucide-react';
import SubmissionResultBanner, { type SubmissionResult } from './SubmissionResultBanner';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    division: 'Mechanical',
    projectTitle: '',
    projectScope: '',
    siteLocation: '',
    estimatedTimeline: '1 - 3 Months',
    estimatedBudget: '',
    technicalRequirements: ''
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setResult(data);
      if (data.success) {
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          division: 'Mechanical',
          projectTitle: '',
          projectScope: '',
          siteLocation: '',
          estimatedTimeline: '1 - 3 Months',
          estimatedBudget: '',
          technicalRequirements: ''
        });
      }
    } catch {
      setResult({
        success: false,
        error: 'Failed to communicate with the quotation engine. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#ffffff] rounded-2xl border-2 border-[#e5e5e5] shadow-lg overflow-hidden">
      <div className="bg-[#14213d] px-6 py-5 border-b-4 border-[#fca311] text-white">
        <div className="flex items-center gap-2 text-[#fca311] text-xs font-black uppercase tracking-wider font-heading">
          <FileText className="w-4 h-4" />
          <span>Official Request For Quotation (RFQ)</span>
        </div>
        <h3 className="text-lg font-bold mt-1 text-white font-heading">Project Estimation Details</h3>
        <p className="text-xs text-[#e5e5e5]/80">
          Submit project parameters for preliminary engineering review and schedule evaluation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
        <SubmissionResultBanner
          result={result}
          sentHeading="Formatted RFQ Emailed to powerindsolution@gmail.com"
          fallbackHeading="RFQ Registered — Dispatch Formatted Email"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#14213d] uppercase tracking-wider mb-1.5 font-heading">
              Company / Client Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Al-Noor Sugar Mills Ltd"
              className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14213d] uppercase tracking-wider mb-1.5 font-heading">
              Contact Person *
            </label>
            <input
              type="text"
              name="contactPerson"
              required
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Full Name / Designation"
              className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14213d] uppercase tracking-wider mb-1.5 font-heading">
              Business Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="engineer@company.com"
              className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14213d] uppercase tracking-wider mb-1.5 font-heading">
              Contact Phone / Mobile *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="0300-XXXXXXX"
              className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14213d] uppercase tracking-wider mb-1.5 font-heading">
              Engineering Division *
            </label>
            <select
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] transition-colors"
            >
              <option value="Mechanical">Mechanical Engineering (Piping, Tanks, Steel Structures)</option>
              <option value="Electrical">Electrical & Automation (Substations, Cable, Panels)</option>
              <option value="Civil">Civil Construction (Industrial Buildings, Foundations)</option>
              <option value="Multi-Disciplinary">Turnkey Multi-Disciplinary Plant EPC</option>
              <option value="Automation-DCS">Inverter & DCS Automation (0.4 – 315kW)</option>
              <option value="Instrumentation">Process Instrumentation & Valves</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14213d] uppercase tracking-wider mb-1.5 font-heading">
              Project Title *
            </label>
            <input
              type="text"
              name="projectTitle"
              required
              value={formData.projectTitle}
              onChange={handleChange}
              placeholder="e.g. High Pressure Piping & Jet Condenser Installation"
              className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14213d] uppercase tracking-wider mb-1.5 font-heading">
              Site Location / City
            </label>
            <input
              type="text"
              name="siteLocation"
              value={formData.siteLocation}
              onChange={handleChange}
              placeholder="e.g. Nawabshah / Karachi / Ranipur"
              className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14213d] uppercase tracking-wider mb-1.5 font-heading">
              Required Timeline
            </label>
            <select
              name="estimatedTimeline"
              value={formData.estimatedTimeline}
              onChange={handleChange}
              className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] transition-colors"
            >
              <option value="Immediate / Emergency">Immediate / Urgent Turnaround</option>
              <option value="1 - 3 Months">1 - 3 Months</option>
              <option value="3 - 6 Months">3 - 6 Months</option>
              <option value="6 - 12 Months">6 - 12 Months</option>
              <option value="Annual Shutdown">Annual Maintenance Shutdown</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#14213d] uppercase tracking-wider mb-1.5 font-heading">
            Technical Scope & Material Specifications
          </label>
          <textarea
            name="technicalRequirements"
            rows={4}
            value={formData.technicalRequirements}
            onChange={handleChange}
            placeholder="Please detail your project scope: design specifications, material grade (Carbon Steel / SS304 / SS316), dimensions, working pressure, or required equipment alignment..."
            className="w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border-2 border-[#e5e5e5] focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] bg-white text-[#14213d] placeholder:text-[#14213d]/40 transition-colors"
          ></textarea>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#14213d]/70">
            <ShieldCheck className="w-4 h-4 text-[#fca311]" />
            <span>PIS QA/QC and HSE protocol compliant</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-7 py-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 shadow-md border-l-4 border-[#14213d] font-heading"
          >
            {loading ? (
              <span>Processing RFQ...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5 text-[#000000]" />
                <span>Submit Quotation Request</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
