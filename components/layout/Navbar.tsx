'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, Mail, MapPin, Clock, Menu, X, ChevronDown, ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/pis-data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Services & Scope', 
      href: '/services',
      hasDropdown: true,
      children: [
        { name: 'All Services & Scope', href: '/services' },
        { name: 'Mechanical Engineering', href: '/services#mechanical' },
        { name: 'Electrical & Automation', href: '/services#electrical' },
        { name: 'Civil Infrastructure', href: '/services#civil' },
        { name: 'Process Equipment & Machinery', href: '/services#manufacturing' },
        { name: 'Invertor & DCS Automation', href: '/services#automation' },
        { name: 'Process Instrumentation & Valves', href: '/services#instrumentation' },
      ]
    },
    { name: 'Our Work', href: '/work' },
    { name: 'Projects & Clients', href: '/projects' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* Top Contact Bar - Hidden on mobile phones to save vertical space, visible on tablet+ */}
      <div className="hidden sm:block bg-[#000000] text-[#e5e5e5] text-xs py-2 px-4 border-b border-[#14213d]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 lg:gap-6">
            <span className="flex items-center gap-1.5 text-[#e5e5e5]">
              <MapPin className="w-3.5 h-3.5 text-[#fca311] flex-shrink-0" />
              <span className="truncate">Shahpur Jahania, Nawabshah, Sindh</span>
            </span>
            <a 
              href={`tel:${COMPANY_INFO.contact.telephone}`} 
              className="flex items-center gap-1.5 hover:text-[#fca311] transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#fca311] flex-shrink-0" />
              <span>{COMPANY_INFO.contact.telephone} | {COMPANY_INFO.contact.mobiles[0]}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} 
              className="hidden lg:flex items-center gap-1.5 hover:text-[#fca311] transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-[#fca311] flex-shrink-0" />
              <span>{COMPANY_INFO.contact.primaryEmail}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden xl:flex items-center gap-1.5 text-[#e5e5e5]/80">
              <Clock className="w-3.5 h-3.5 text-[#fca311] flex-shrink-0" />
              <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
            </span>
            <span className="hidden xl:inline text-[#14213d]">|</span>
            <Link 
              href="/contact#quote" 
              className="inline-flex items-center gap-1.5 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] font-black px-3.5 py-1 rounded text-xs transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm font-heading uppercase tracking-wider"
            >
              <span>Request RFQ</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar - Pure White with Crisp Platinum Border */}
      <div className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg py-2 border-b border-[#e5e5e5]' 
          : 'bg-white border-b border-[#e5e5e5] py-2.5 sm:py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Authentic Refined Logo with Mobile-Optimized Scaling */}
          <Link href="/" className="flex items-center group py-0.5">
            <img 
              src="/images/pis-logo.png" 
              alt="Power Industrial Solutions Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3.5 py-2 text-sm font-bold rounded-lg transition-all duration-200 font-heading ${
                        isActive
                          ? 'text-[#14213d] bg-[#fca311]/15 border-b-2 border-[#fca311]'
                          : 'text-[#14213d] hover:text-[#000000] hover:bg-[#e5e5e5]/50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#14213d]/60 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Desktop Dropdown */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border-2 border-[#e5e5e5] py-2 mt-1 z-50 animate-fade-in">
                        {link.children?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2.5 text-xs font-semibold text-[#14213d] hover:bg-[#e5e5e5]/50 hover:text-[#000000] border-l-2 border-transparent hover:border-[#fca311] transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-bold rounded-lg transition-all duration-200 font-heading ${
                    isActive 
                      ? 'text-[#14213d] bg-[#fca311]/15 border-b-2 border-[#fca311]' 
                      : 'text-[#14213d] hover:text-[#000000] hover:bg-[#e5e5e5]/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button on Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#fca311]/25 transition-all duration-200 border-l-4 border-[#14213d] hover:translate-x-0.5 active:scale-95 font-heading"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#000000]" />
            </Link>
          </div>

          {/* Mobile menu button with 48x48 touch target */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact#quote"
              className="sm:hidden bg-[#fca311] text-[#000000] text-[10px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-md font-heading"
            >
              RFQ
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg text-[#14213d] hover:text-[#000000] hover:bg-[#e5e5e5]/60 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Full Touch Ergonomics & Safe Area */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-[#e5e5e5] shadow-2xl px-4 pt-3 pb-6 space-y-2 animate-fade-in max-h-[85vh] overflow-y-auto">
          
          {/* Quick Contact Header in Mobile Drawer */}
          <div className="bg-[#14213d] text-white p-3.5 rounded-xl space-y-1.5 text-xs mb-3 border-l-4 border-[#fca311]">
            <div className="flex items-center gap-2 text-[#fca311] font-bold font-heading">
              <Phone className="w-3.5 h-3.5 text-[#fca311]" />
              <span>Direct Engineering Line</span>
            </div>
            <div className="text-[11px] text-[#e5e5e5]">
              <a href={`tel:${COMPANY_INFO.contact.telephone}`} className="hover:underline font-bold text-white block">
                {COMPANY_INFO.contact.telephone}
              </a>
              <a href={`tel:${COMPANY_INFO.contact.mobiles[0]}`} className="hover:underline block">
                {COMPANY_INFO.contact.mobiles[0]}
              </a>
            </div>
          </div>

          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-bold transition-colors font-heading ${
                  pathname === link.href 
                    ? 'text-[#14213d] bg-[#fca311]/20 font-black border-l-4 border-[#fca311]' 
                    : 'text-[#14213d] hover:bg-[#e5e5e5]/50'
                }`}
              >
                {link.name}
              </Link>
              {link.children && (
                <div className="pl-4 space-y-1 my-1 border-l-2 border-[#e5e5e5] ml-3">
                  {link.children.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs font-semibold text-[#14213d]/80 hover:text-[#000000] rounded hover:bg-[#e5e5e5]/50 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-3 border-t border-[#e5e5e5]">
            <Link
              href="/contact#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#fca311] hover:bg-[#e0910f] text-[#000000] text-xs font-black uppercase tracking-wider py-3.5 rounded-lg shadow-md border-l-4 border-[#14213d] font-heading"
            >
              <span>Request a Quote (RFQ)</span>
              <ArrowRight className="w-4 h-4 text-[#000000]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
