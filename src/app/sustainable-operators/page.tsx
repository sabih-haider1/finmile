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
import { Zap, BatteryCharging, Bike, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sustainable Logistics & EV Fleet Software | Finmile',
  description: 'Finmile offers AI-powered route optimization for sustainable logistics and EV fleets, managing range limits and environmental impact.',
};

export default function SustainableOperatorsPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero
          title="Sustainability"
          hideLogo={true}
        />

        <IndustryHeroIntro
          title="Smarter Routes, Lower Emissions — AI for Sustainable Delivery"
          industryName="Sustainability-Focused Operators"
          description="Decarbonising logistics isn’t optional anymore — it’s the new benchmark. Finmile helps green-minded operators and EV fleets plan smarter routes and measure impact automatically."
          image="/assets/images/features/AiDataSustainability.png"
          imageAlt="Sustainable Delivery Optimization"
        />

        <IndustryProblemSection
          title="The Challenge – Range Anxiety and Inefficiency"
          quote='"EV and micromobility fleets face different constraints: limited range, charging downtime, and route imbalance. Without precise planning, sustainability can turn into lost productivity."'
          descriptionTop="Whether you're running electric vans, e-cargo bikes, or hybrid fleets, moving parts require a different type of logistical intelligence to be successful."
          descriptionBottom="Going green shouldn't mean sacrificing service levels. Finmile ensures zero-emission deliveries stay profitable by learning from every electric route."
          image="/assets/images/features/laptop-blue.png"
          imageAlt="Sustainability Logistics Challenges"
        />

        <IndustrySolutionCards 
          title="AI Routing for Clean Transport"
          subtitle="Finmile’s AI engine considers vehicle range, charge level, payload, and local emission zones to maximise energy use and charging availability."
          cards={[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "EV Route Planning",
              description: "Intelligent planning that accounts for range limits and charging infrastructure."
            },
            {
              icon: <BatteryCharging className="w-8 h-8" />,
              title: "Smart Charge Scheduling",
              description: "Optimize for uptime with integrated charge level and energy tracking for the entire fleet."
            },
            {
              icon: <Bike className="w-8 h-8" />,
              title: "Multi-Mode Optimization",
              description: "Orchestrate mixed fleets of bikes, vans, and quads seamlessly in a single platform."
            },
            {
              icon: <Leaf className="w-8 h-8" />,
              title: "CO₂ Analytics",
              description: "Automated sustainability reporting and emission reduction impact dashboards."
            }
          ]}
        />

        <IndustryResultsStats 
          title="Sustainability That Pays Off"
          subtitle="A UK operator managing e-cargo bikes reduced total emissions by 35% and cut per-parcel cost by over 20% in the first month."
          stats={[
            {
              label: "TOTAL EMISSIONS",
              value: "-35%",
              description: "Reduction in carbon footprint through route optimization and density."
            },
            {
              label: "COST PER PARCEL",
              value: "-22%",
              description: "Significant improvement in the bottom line through micromobility efficiency."
            },
            {
              label: "REPORTING",
              value: "Live",
              description: "Data-driven sustainability reporting for client and regulatory compliance."
            },
            {
              label: "FLEET UPTIME",
              value: "High",
              description: "Better range management and charging schedules keep vehicles on the road."
            }
          ]}
        />

        <IndustryCTA 
          title="Finmile’s Commitment to Sustainable Logistics"
          highlightText="Green Intelligence by Design"
          description="We don’t treat sustainability as a checkbox. Our AI learns from every electric route to make the next one greener. Deliver smarter with Finmile."
          image="/assets/images/half-dashboard.png"
          imageAlt="Sustainable Fleet Dashboard"
          ctaText="Book A Demo"
          ctaHref="https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform"
        />

        <IndustryFinalCTA />
      </div>

      <Footer />
    </main>
  );
}
