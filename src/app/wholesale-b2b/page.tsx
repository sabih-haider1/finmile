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
import { Truck, Navigation, CheckSquare, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wholesale & B2B Delivery Optimization Software | Finmile',
  description: 'Finmile offers dynamic delivery optimization for wholesale and B2B distributors, using AI to adapt routes and improve reliability.',
};

export default function WholesaleB2BPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero
          title="Wholesale & B2B"
          hideLogo={true}
        />

        <IndustryHeroIntro
          title="Dynamic Delivery Optimisation for Wholesale and B2B Networks"
          industryName="Wholesale & B2B Distributors"
          description="B2B distribution runs on reliability. Every late drop disrupts a customer’s supply chain. Finmile ensures your trucks and drivers run smarter using live data to adapt routes and PODs automatically."
          image="/assets/images/features/AiDataSustainability.png"
          imageAlt="Wholesale B2B Delivery Optimization"
        />

        <IndustryProblemSection
          title="The Challenge – Static Routes, Moving Targets"
          quote='"Most wholesale operations rely on fixed daily routes built on habit, not data. When orders fluctuate, routes don’t. That creates empty miles, wasted fuel, and unhappy clients waiting for late deliveries."'
          descriptionTop="Static routing is the enemy of efficiency in B2B distribution. Moving beverages, building materials, or food requires a dynamic approach to handle fluctuating order volumes."
          descriptionBottom="When B2B clients wait for late deliveries, their own operations suffer. Finmile replaces habit-based planning with real-time logistical intelligence."
          image="/assets/images/features/laptop-blue.png"
          imageAlt="B2B Static Routing Challenges"
        />

        <IndustrySolutionCards 
          title="Dynamic Routing That Evolves Daily"
          subtitle="Finmile’s AI re-optimises every route based on today’s actual orders and driver capacity. It eliminates empty journeys and prioritises high-value customers."
          cards={[
            {
              icon: <Truck className="w-8 h-8" />,
              title: "AI Route Optimisation",
              description: "Optimized route sequencing for complex multi-stop deliveries across industrial regions."
            },
            {
              icon: <Navigation className="w-8 h-8" />,
              title: "Predictive B2B ETAs",
              description: "Accurate arrival predictions factoring in industrial traffic and site-specific delays."
            },
            {
              icon: <CheckSquare className="w-8 h-8" />,
              title: "Digital Proof of Delivery",
              description: "Paperless capture including photos and signatures for reliable B2B record keeping."
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Sustainability Tracking",
              description: "Automated performance analytics and CO₂ reporting for corporate ESG goals."
            }
          ]}
        />

        <IndustryResultsStats 
          title="Lower Costs, Happier Customers"
          subtitle="Foodservice and industrial distributors using Finmile see falling overtime costs and soaring service reliability in as little as one month."
          stats={[
            {
              label: "MILEAGE SAVED",
              value: "29%",
              description: "Dramatic reduction in delivery mileage through smarter route density."
            },
            {
              label: "LATE DROPS",
              value: "-45%",
              description: "Improvement in on-time delivery reliability for critical supply chains."
            },
            {
              label: "COST PER DROP",
              value: "Lower",
              description: "Shorter routes and reduced fuel waste directly impact the bottom line."
            },
            {
              label: "POD STATUS",
              value: "100%",
              description: "Total transition to paperless delivery for faster billing and record keeping."
            }
          ]}
        />

        <IndustryCTA 
          title="Built for the Realities of B2B Delivery"
          highlightText="Predictable, Data-Driven Logistics"
          description="Finmile adapts to changing order patterns and customer needs — turning what used to be a logistical headache into a predictable process. Optimize your wholesale logistics."
          image="/assets/images/half-dashboard.png"
          imageAlt="Wholesale & B2B Fleet Dashboard"
          ctaText="Book A Demo"
          ctaHref="https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform"
        />

        <IndustryFinalCTA />
      </div>

      <Footer />
    </main>
  );
}
