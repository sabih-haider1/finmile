import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { SustainableDeliveryIntro } from '@/components/pages/sustainable-delivery/SustainableDeliveryIntro';
import { SustainableDeliveryChallenge } from '@/components/pages/sustainable-delivery/SustainableDeliveryChallenge';
import { SustainableDeliveryFeatures } from '@/components/pages/sustainable-delivery/SustainableDeliveryFeatures';
import { SustainableDeliveryOS } from '@/components/pages/sustainable-delivery/SustainableDeliveryOS';
import { SustainableDeliveryIntegrations } from '@/components/pages/sustainable-delivery/SustainableDeliveryIntegrations';
import { SustainableDeliveryStats } from '@/components/pages/sustainable-delivery/SustainableDeliveryStats';
import { SustainableDeliveryCTA } from '@/components/pages/sustainable-delivery/SustainableDeliveryCTA';

export const metadata: Metadata = {
  title: 'Sustainable Delivery | Finmile',
  description: 'Finmile helps logistics operators and retailers run greener, more efficient delivery networks.',
};

export default function SustainableDeliveryPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero
          title="Sustainable Delivery" hideLogo={true}
        />
        <SustainableDeliveryIntro />
        <SustainableDeliveryChallenge />
        <SustainableDeliveryFeatures />
      </div>

      <SustainableDeliveryOS />

      <div className="bg-white">
        <SustainableDeliveryIntegrations />
        <SustainableDeliveryStats />
        <SustainableDeliveryCTA />
      </div>

      <Footer />
    </main>
  );
}
