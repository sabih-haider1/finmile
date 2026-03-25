import React from 'react';
import { Header } from '@/components/layout/Header';
import { PageHero } from '@/components/layout/PageHero';
import { Footer } from '@/components/layout/Footer';
import { TermsContent } from '@/components/pages/terms/TermsContent';

export const metadata = {
  title: 'Terms & Conditions - Finmile',
  description: 'Review the terms and conditions for using Finmile services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0616]">
      <Header />

      <PageHero
        title="Terms & Conditions"
        hideLogo={true}
        gradientFrom="#531FD1"
        gradientTo="#3B257E"
      />

      <TermsContent />

      <Footer />
    </main>
  );
}
