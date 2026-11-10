import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Power Industrial Solutions (PIS) | Civil, Mechanical & Electrical Engineering',
  description: 'Power Industrial Solutions (PIS), established in 2010. Premier industrial contractor for Mechanical Fabrication, High Pressure Piping, Electrical Sub-Stations, DCS Automation, and Heavy Civil Construction.',
  keywords: [
    'Power Industrial Solutions',
    'PIS Pakistan',
    'Mechanical Fabrication',
    'High Pressure Piping',
    'Vertical Continuous Pan Ranipur',
    'Lucky Coal Power Plant',
    'Hascol Oil Storage',
    'Electrical Sub Station',
    'Industrial Civil Construction',
    'Sugar Mill Machinery Pakistan',
    'VFD Invertor DCS Pakistan'
  ],
  authors: [{ name: 'Power Industrial Solutions' }],
  icons: {
    icon: '/images/pis-symbol.png',
    apple: '/images/pis-symbol.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#14213d] selection:bg-[#fca311] selection:text-[#000000]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
