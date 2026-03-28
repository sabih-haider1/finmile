import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { TrackParcelContent } from '@/components/pages/track-parcel/TrackParcelContent';

export const metadata: Metadata = {
  title: 'Track Your Parcel | Finmile',
  description: 'Track your parcel with Finmile. Enter your tracking number and postcode to get real-time updates on your delivery.',
};

export default function TrackParcelPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero
          title="Track Parcel" hideLogo={true}
        />
        <TrackParcelContent />
      </div>

      <Footer />
    </main>
  );
}
