import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { FaqSection } from '@/components/pages/faqs/FaqSection';
import { FaqInteractiveList } from '@/components/pages/faqs/FaqInteractiveList';

export const metadata = {
  title: 'FAQs | Finmile',
  description: 'Find answers to common questions about Finmile.',
};

export default function FaqsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50/30">
        <PageHero 
          title="FAQs" 
          hideLogo={true} 
        />
        <div className="bg-white">
          <FaqSection />
          <FaqInteractiveList />
        </div>
      </main>
      <Footer />
    </>
  );
}
