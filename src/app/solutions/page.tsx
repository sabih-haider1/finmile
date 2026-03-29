import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { SolutionsGrid } from '@/components/pages/solutions/SolutionsGrid';
import { SolutionsOS } from '@/components/pages/solutions/SolutionsOS';
import { SolutionsChallenges } from '@/components/pages/solutions/SolutionsChallenges';
import { SolutionsBenefits } from '@/components/pages/solutions/SolutionsBenefits';
import { SolutionsProcess } from '@/components/pages/solutions/SolutionsProcess';
import { SolutionsResults } from '@/components/pages/solutions/SolutionsResults';
import { JoinTheJourney } from '@/components/shared/JoinTheJourney';

export const metadata: Metadata = {
  title: 'Logistics Solutions | Finmile',
  description: 'Explore Finmile\'s comprehensive suite of AI-driven logistics solutions including autonomous agents, route optimization, and more.',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero
          title="Our Solutions"
          hideLogo={true}
        />
        <SolutionsOS />
        <SolutionsChallenges />
        <SolutionsBenefits />
        <SolutionsProcess />
        <SolutionsResults />
        <SolutionsGrid />
        <JoinTheJourney />
      </div>

      <Footer />
    </main>
  );
}
