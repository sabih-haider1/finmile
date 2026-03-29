import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { 
  IndustryHeroIntro, 
  IndustryProblemSection, 
  IndustrySolutionCards, 
  IndustryResultsStats, 
  IndustryCTA, 
  IndustryFinalCTA 
} from '@/components/pages/industries-shared';
import { Cpu, Zap, Activity, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Logistics & Delivery Software | Finmile',
  description: 'Finmile offers smarter last-mile logistics software for courier and delivery providers, built by operators who lived the chaos.',
};

export default function LogisticsDeliveryPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero
          title="Logistics & Delivery"
          hideLogo={true}
        />

        <IndustryHeroIntro
          title="Smarter Last-Mile Logistics Software"
          industryName="Courier & Delivery Providers"
          description="Every courier company faces the same daily grind: unpredictable routes and driver shortages. Finmile was built by operators who lived that chaos — and fixed it with AI."
          image="/assets/images/features/AiDataSustainability.png"
          imageAlt="Last-Mile Logistics Dashboard"
        />

        <IndustryProblemSection
          title="The Problem – Manual Operations Are Holding You Back"
          quote='"One London courier using spreadsheets discovered they were driving 17% more miles than necessary — simply because no one could see the big picture."'
          descriptionTop="Manual dispatching and static routing cost logistics companies thousands every week. Routes are built by hand, drivers are underutilized, and visibility ends the moment a parcel leaves the depot."
          descriptionBottom="The result? Fuel waste, delivery errors, and frustrated customers who expect Amazon-speed service."
          image="/assets/images/features/laptop-blue.png"
          imageAlt="Manual Operations Problem"
        />

        <IndustrySolutionCards 
          title="The Solution – AI Route Optimization Built for Delivery Networks"
          subtitle="Finmile's platform uses real-time data from every parcel, driver, and route to plan deliveries with machine precision. The AI continuously recalculates routes based on traffic, driver performance, and delivery density."
          cards={[
            {
              icon: <Cpu className="w-8 h-8" />,
              title: "AI Route Optimization",
              description: "Reduce mileage and planning time instantly."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Automated Dispatch",
              description: "Assign jobs intelligently to the best-fit driver."
            },
            {
              icon: <Activity className="w-8 h-8" />,
              title: "Live Tracking & ETAs",
              description: "Monitor performance from the Control Tower."
            },
            {
              icon: <CheckCircle2 className="w-8 h-8" />,
              title: "Proof of Delivery",
              description: "Capture photo, signature, and timestamps."
            }
          ]}
        />

        <IndustryResultsStats 
          title="The Results – More Efficiency, Less Stress"
          subtitle="Clients typically cut routes by 25–40% in the first month. One UK DSP reduced daily van mileage by 33% while improving on-time rates. Driver overtime dropped by nearly half."
          stats={[
            {
              label: "FEWER FAILED DELIVERIES",
              value: "98.4%",
              description: "AI-verified addresses and precise windows ensure first-time success."
            },
            {
              label: "ROUTE DENSITY",
              value: "+42%",
              description: "Pack more drops into every route without overworking your team."
            },
            {
              label: "COST PER PARCEL",
              value: "-24%",
              description: "Lower fuel and maintenance costs directly impact your bottom line."
            },
            {
              label: "DRIVER SATISFACTION",
              value: "92%",
              description: "Clear instructions and realistic schedules keep your best talent."
            }
          ]}
        />

        <IndustryCTA 
          title="Ready to out-deliver the competition?"
          highlightText="The Finmile Advantage"
          description="Unlike traditional logistics software, Finmile learns continuously. Each parcel delivered trains the AI to perform better next time. That means every day your operation gets smarter — automatically."
          image="/assets/images/half-dashboard.png"
          imageAlt="Finmile Dashboard"
          ctaText="Book A Demo"
          ctaHref="/contact"
        />

        <IndustryFinalCTA />
      </div>

      <Footer />
    </main>
  );
}
