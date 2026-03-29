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
import { Link, Layers, Brain, Bell, BarChart3, MessageSquare, Ship, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-Commerce & Retail Delivery Visibility | Finmile',
  description: 'Finmile helps retail and e-commerce brands control the delivery experience with Amazon-level orchestration and parcel-level intelligence.',
};

export default function EcommerceRetailPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero
          title="E-Commerce & Retail"
          hideLogo={true}
        />

        <IndustryHeroIntro
          title="Amazon-Level Delivery Visibility for Every Brand"
          industryName="E-Commerce, Retail & Brands"
          description="Your customer’s experience doesn’t end at checkout — it ends at the doorstep. Finmile helps retail and e-commerce brands control the delivery experience, no matter how many carriers you use."
          image="/assets/images/features/AiDataSustainability.png"
          imageAlt="E-Commerce Delivery Orchestration"
        />

        <IndustryProblemSection
          title="The Challenge – Delivery Experience Is Fragmented"
          quote='"Most brands depend on multiple carriers — each with their own systems, tracking portals, and performance metrics. The result is a patchwork of data and inconsistent customer experience."'
          descriptionTop="Without unified visibility, brands can’t spot delays, manage exceptions, or forecast delivery performance. That’s where Finmile steps in."
          descriptionBottom="Finmile’s orchestration platform brings consistency, speed, and transparency to the last mile for global giants and direct-to-consumer brands alike."
          image="/assets/images/features/laptop-blue.png"
          imageAlt="Fragmented Delivery Data Problem"
        />

        <IndustrySolutionCards 
          title="The Solution – Unified Delivery Orchestration"
          subtitle="Finmile connects all your carriers and logistics partners into one intelligent platform. Every parcel is tracked in real time, every ETA is predicted dynamically."
          cards={[
            {
              icon: <Link className="w-8 h-8" />,
              title: "Direct Integrations",
              description: "Integrates directly with Shopify, TikTok Shop, Temu, and JD systems."
            },
            {
              icon: <Layers className="w-8 h-8" />,
              title: "Data Aggregation",
              description: "Aggregates data across carriers for end-to-end visibility."
            },
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Predictive AI",
              description: "Uses predictive AI to forecast delivery success automatically."
            },
            {
              icon: <Bell className="w-8 h-8" />,
              title: "Branded Notifications",
              description: "Sends live notifications to customers with your unique branding."
            }
          ]}
        />

        <IndustryResultsStats 
          title="The Results – Reliable, Measurable Delivery Performance"
          subtitle="Brands using Finmile see measurable cost reductions per parcel and significantly improved customer satisfaction benchmarks."
          stats={[
            {
              label: "SUPPORT EXPERIENCE",
              value: "-30%",
              description: "Fewer 'Where is my order?' queries through proactive live tracking."
            },
            {
              label: "VISIBILITY",
              value: "100%",
              description: "Unified carrier visibility gives you a single source of truth for all parcels."
            },
            {
              label: "COST SAVINGS",
              value: "Lower",
              description: "Reduced cost per parcel by optimizing carrier performance benchmarks."
            },
            {
              label: "RELIABILITY",
              value: "Faster",
              description: "More predictable deliveries and improved on-time arrival rates."
            }
          ]}
        />

        <IndustryCTA 
          title="Ready to out-deliver the competition?"
          highlightText="Total Delivery Orchestration"
          description="Finmile gives you what Amazon built internally — total delivery orchestration — without needing an army of engineers. See how brands use parcel-level intelligence to scale."
          image="/assets/images/half-dashboard.png"
          imageAlt="Finmile E-Commerce Dashboard"
          ctaText="Book A Demo"
          ctaHref="/contact"
        />

        <IndustryFinalCTA />
      </div>

      <Footer />
    </main>
  );
}
