import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import DivisionsSection from '@/components/home/DivisionsSection';
import SpecializedManufacturingSection from '@/components/home/SpecializedManufacturingSection';
import LandmarkProjectsSection from '@/components/home/LandmarkProjectsSection';
import OurWorkShowcase from '@/components/home/OurWorkShowcase';
import ValuesPolicySection from '@/components/home/ValuesPolicySection';
import ClientsSection from '@/components/home/ClientsSection';
import HomeQuoteSection from '@/components/home/HomeQuoteSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <DivisionsSection />
      <SpecializedManufacturingSection />
      <LandmarkProjectsSection />
      <OurWorkShowcase />
      <ValuesPolicySection />
      <ClientsSection />
      <HomeQuoteSection />
    </div>
  );
}
