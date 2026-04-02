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
import { Zap, Warehouse, Clock, Smartphone, TrendingDown, RefreshCcw, AlertTriangle, LineChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automotive Parts Delivery Software | Finmile',
  description: 'Finmile offers dynamic route optimization for automotive parts distribution, helping distributors like Euro Car Parts streamline multi-drop routes.',
};

export default function AutomotivePartsPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero
          title="Automotive & Parts"
          hideLogo={true}
        />

        <IndustryHeroIntro
          title="Dynamic Route Optimization for Automotive Parts Distribution"
          industryName="Automotive & Parts Distribution"
          description="Parts logistics is high frequency, high precision, and high pressure. Deliveries must hit garages and dealerships on time, every time. Finmile’s AI takes the complexity out of multi-drop distribution."
          image="/assets/images/features/AiDataSustainability.png"
          imageAlt="Automotive Parts Delivery Optimization"
        />

        <IndustryProblemSection
          title="The Problem – Repetition, Waste, and Human Error"
          quote='"Parts distributors often run the same routes daily, regardless of order density. Drivers waste hours backtracking or idling between drops. Manual planning eats into productivity, and late deliveries stall workshop operations."'
          descriptionTop="Alliance Automotive and Euro Car Parts use Finmile to streamline daily deliveries across thousands of workshops — with fewer miles, fewer vehicles, and more predictable schedules."
          descriptionBottom="When parts arrive late, workshop operations stall. Manual planning just can't keep up with the dynamic nature of modern B2B parts distribution."
          image="/assets/images/features/laptop-blue.png"
          imageAlt="Automotive Logistics Bottlenecks"
        />

        <IndustrySolutionCards 
          title="Smarter Multi-Drop Planning"
          subtitle="Finmile’s AI platform rebuilds your routes every day based on real demand. It factors in delivery frequency, location, and driver capacity to minimize time and maximize output."
          cards={[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "AI Daily Optimization",
              description: "Rebuilds routes daily based on real-time order density and demand."
            },
            {
              icon: <Warehouse className="w-8 h-8" />,
              title: "Multi-Depot Scheduling",
              description: "Coordinate distribution across thousands of workshops and depots."
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Predictive ETAs",
              description: "Accurate arrival times even for high-frequency repeat deliveries."
            },
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: "Digital Proof of Delivery",
              description: "Driver app capture for real-time visibility from depot to workshop."
            }
          ]}
        />

        <IndustryResultsStats 
          title="Efficiency that Pays for Itself"
          subtitle="Finmile users in the automotive sector regularly see faster delivery cycles and significant mileage reduction while completing more drops in fewer hours."
          stats={[
            {
              label: "MILEAGE REDUCTION",
              value: "-35%",
              description: "Significant decrease in daily van mileage through AI-powered route density."
            },
            {
              label: "LABOR COSTS",
              value: "Lower",
              description: "Fewer hours on the road means reduced overtime and labor expenses."
            },
            {
              label: "RELIABILITY",
              value: "99%",
              description: "Avoid stalling workshop operations with precision delivery windows."
            },
            {
              label: "VISIBILITY",
              value: "Live",
              description: "Track performance in real-time to maintain strict B2B service levels."
            }
          ]}
        />

        <IndustryCTA 
          title="Built for the Automotive Supply Chain"
          highlightText="Tailored B2B Logistics Intelligence"
          description="Finmile isn’t generic software — it’s logistics intelligence tailored for high-frequency B2B networks. Book a Demo to see Finmile optimize your automotive logistics in real time."
          image="/assets/images/half-dashboard.png"
          imageAlt="Automotive Logistics Dashboard"
          ctaText="Book A Demo"
          ctaHref="https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform"
        />

        <IndustryFinalCTA />
      </div>

      <Footer />
    </main>
  );
}
