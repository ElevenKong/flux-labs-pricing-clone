'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050415] to-[#1e1839]">
      <Header />
      <main>
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
