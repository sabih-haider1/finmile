import React from 'react';
import { Header } from '@/components/layout/Header';
import { PageHero } from '@/components/layout/PageHero';
import { Footer } from '@/components/layout/Footer';
import { PrivacyContent } from '@/components/pages/privacy/PrivacyContent';

export const metadata = {
  title: 'Privacy Policy - Finmile',
  description: 'Understand how Finmile handles your personal data and your privacy rights.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0616]">
      <Header />

      <PageHero
        title="Privacy Policy"
        hideLogo={true}
        gradientFrom="#531FD1"
        gradientTo="#3B257E"
      />

      <PrivacyContent />

      <Footer />
    </main>
  );
}
