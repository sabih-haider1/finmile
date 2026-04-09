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
  IndustryFinalCTA,
} from '@/components/pages/industries-shared';
import {
  Cpu,
  Activity,
  ClipboardCheck,
  Boxes,
  Truck,
  MapPinned,
  Wrench,
  Gauge,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Powered Automotive Logistics & Towing Management Software | Finmile',
  description:
    'Optimize your automotive supply chain with AI-driven route planning, real-time towing dispatch, and automated parts delivery. Reduce costs by 25% and eliminate downtime.',
};

export default function AutomotiveLogisticsTowingPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero title="Automotive Logistics & Towing" hideLogo={true} />

        <IndustryHeroIntro
          title="The Smartest Way to Move Parts and Vehicles."
          industryName="OEMs, Dealerships, and Towing Fleets"
          description="AI-powered logistics software designed for OEMs, dealerships, and towing fleets. Streamline on-demand deliveries, optimize heavy-duty towing routes, and gain 100% visibility over your automotive operations."
          image="/assets/images/features/AiDataSustainability.png"
          imageAlt="AI automotive logistics and towing management"
          ctaPrimaryText="Book A Demo"
          ctaPrimaryLink="https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform"
        />

        <IndustryProblemSection
          title="Why Automotive Logistics Needs an Upgrade"
          quote='"Traditional dispatching is slow, parts delivery is prone to errors, and towing wait times hurt customer satisfaction."'
          descriptionTop="Manual dispatching creates data silos, inefficient routing increases fuel costs and vehicle wear, and poor visibility leaves customers and dealerships guessing ETAs."
          descriptionBottom="Modern automotive operations need one AI control layer across parts delivery and towing execution to reduce downtime and improve service reliability."
          image="/assets/images/features/laptop-blue.png"
          imageAlt="Automotive dispatch and routing challenges"
        />

        <IndustrySolutionCards
          title="The AI Advantage"
          subtitle="Purpose-built intelligence for parts logistics, towing dispatch, and enterprise fleet management."
          cards={[
            {
              icon: <Cpu className="w-8 h-8" />,
              title: 'Dynamic Routing',
              description:
                'AI analyzes traffic, weather, and vehicle capacity to plan the fastest multi-stop routes.',
            },
            {
              icon: <ClipboardCheck className="w-8 h-8" />,
              title: 'Automated ePOD',
              description:
                'Capture signatures, delivery photos, and barcode scans to eliminate disputes.',
            },
            {
              icon: <Boxes className="w-8 h-8" />,
              title: 'Just-In-Time Inventory',
              description:
                'Sync delivery schedules with workshop repair orders so technicians never wait for parts.',
            },
            {
              icon: <Truck className="w-8 h-8" />,
              title: 'Auto-Dispatching',
              description:
                'Automatically assign the nearest tow truck by vehicle type and active load.',
            },
            {
              icon: <MapPinned className="w-8 h-8" />,
              title: 'Real-Time ETA Tracking',
              description:
                'Share live tracking links with stranded drivers for full visibility from dispatch to pickup.',
            },
            {
              icon: <Activity className="w-8 h-8" />,
              title: 'Recovery Workflows',
              description:
                'Run winch and recovery jobs with built-in safety checklists and on-site photo capture.',
            },
            {
              icon: <Wrench className="w-8 h-8" />,
              title: 'Predictive Maintenance',
              description:
                'Detect vehicle health issues before breakdowns to keep fleet uptime high.',
            },
            {
              icon: <Gauge className="w-8 h-8" />,
              title: 'Driver Analytics',
              description:
                'Score safety, fuel efficiency, and on-time performance across the fleet.',
            },
          ]}
        />

        <IndustryResultsStats
          title="Performance by the Numbers"
          subtitle="Automotive operators using Finmile consistently improve cost, speed, and tracking precision across parts delivery and towing operations."
          stats={[
            {
              label: 'FUEL CONSUMPTION',
              value: '-30% ',
              description: 'Reduction through AI route optimization and smarter dispatch sequencing.',
            },
            {
              label: 'DISPATCH SPEED',
              value: '+45%',
              description: 'Faster towing and recovery assignment for urgent roadside requests.',
            },
            {
              label: 'DELIVERY ACCURACY',
              value: '99.8%',
              description: 'High-confidence parts tracking and fulfillment with digital proof records.',
            },
            {
              label: 'DOWNTIME REDUCTION',
              value: '-25%',
              description: 'Fewer service interruptions from proactive scheduling and predictive maintenance alerts.',
            },
          ]}
        />

        <IndustryCTA
          title="How It Works"
          highlightText="Ingest. Optimize. Execute. Analyze."
          description="Orders and service calls are ingested directly from your DMS, ERP, or CRM. Finmile AI selects the best vehicle and route in milliseconds, dispatches instructions to drivers, and continuously analyzes real-time performance to improve every subsequent run."
          image="/assets/images/half-dashboard.png"
          imageAlt="Automotive logistics workflow and live operations dashboard"
          ctaText="Schedule a Consultation Today"
          ctaHref="https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform"
        />

        <IndustryFinalCTA
          title="Ready to accelerate your logistics?"
          description="Stop losing money on inefficient routes. Join the hundreds of automotive businesses using Finmile to power their fleets."
          ctaText="Schedule a Consultation Today"
          ctaHref="https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform"
        />
      </div>

      <Footer />
    </main>
  );
}