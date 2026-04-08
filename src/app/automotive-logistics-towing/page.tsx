import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import {
  IndustryIntro,
  IndustryChallenge,
  IndustrySolutionCards,
  IndustryResultsStats,
  IndustryFinalCTA,
} from '@/components/pages/industries-shared';
import {
  Route,
  ClipboardCheck,
  Boxes,
  Truck,
  MapPinned,
  ShieldCheck,
  Wrench,
  Gauge,
  Link,
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

        <IndustryIntro
          title="The Smartest Way to Move Parts and Vehicles."
          descriptionTop="AI-powered logistics software designed for OEMs, dealerships, and towing fleets."
          descriptionBottom="Streamline on-demand deliveries, optimize heavy-duty towing routes, and gain 100% visibility over your automotive operations."
          image="/assets/images/features/AiDataSustainability.png"
          imageAlt="AI automotive logistics and towing management"
          ctaPrimaryText="Get a Demo"
          ctaPrimaryLink="https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform"
          ctaSecondaryText="Calculate Your ROI"
          ctaSecondaryLink="/contact"
        />

        <IndustryChallenge
          title="Why Automotive Logistics Needs an Upgrade"
          description="Traditional dispatching is slow, parts delivery is prone to errors, and towing wait times hurt customer satisfaction."
          bullets={[
            'Manual Dispatching: Over-reliance on phone calls leads to data silos.',
            'Inefficient Routing: Fuel costs and vehicle wear-and-tear eat your margins.',
            'Lack of Visibility: Customers and dealerships are left guessing ETAs.',
          ]}
          bottomText="Modern automotive operations need one AI control layer across parts delivery and towing execution."
          image="/assets/images/features/laptop-blue.png"
          imageAlt="Automotive dispatch and routing challenges"
        />

        <IndustrySolutionCards
          title="The AI Advantage"
          subtitle="Purpose-built intelligence for parts logistics, towing dispatch, and enterprise fleet management."
          cards={[
            {
              icon: <Route className="w-8 h-8" />,
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
              icon: <ShieldCheck className="w-8 h-8" />,
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
            {
              icon: <Link className="w-8 h-8" />,
              title: 'API Integrations',
              description:
                'Connect with CDK Global, Reynolds & Reynolds, and major ERP ecosystems.',
            },
          ]}
        />

        <section className="w-full bg-[#FAFAFF] py-14 md:py-20 px-6 flex justify-center">
          <div className="w-full max-w-[1240px]">
            <div className="text-center max-w-[900px] mx-auto mb-12">
              <h2 className="font-bold text-[34px] md:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.1] mb-4">
                Tailored Solutions for Every Automotive Stakeholder
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-[24px] p-8 border border-[#EEF2FF] shadow-[0_4px_24px_rgba(47,28,140,0.04)]">
                <h3 className="font-bold text-[20px] text-[#2F1C8C] mb-3">For Parts Distributors</h3>
                <p className="text-[#64748B] text-[15px] leading-[1.6]">
                  Scale high-volume daily deliveries to local mechanics and national retailers with precision.
                </p>
              </div>
              <div className="bg-white rounded-[24px] p-8 border border-[#EEF2FF] shadow-[0_4px_24px_rgba(47,28,140,0.04)]">
                <h3 className="font-bold text-[20px] text-[#2F1C8C] mb-3">For Dealership Groups</h3>
                <p className="text-[#64748B] text-[15px] leading-[1.6]">
                  Synchronize inter-branch parts transfers and coordinate customer vehicle pickups reliably.
                </p>
              </div>
              <div className="bg-white rounded-[24px] p-8 border border-[#EEF2FF] shadow-[0_4px_24px_rgba(47,28,140,0.04)]">
                <h3 className="font-bold text-[20px] text-[#2F1C8C] mb-3">For Roadside & Towing</h3>
                <p className="text-[#64748B] text-[15px] leading-[1.6]">
                  Enable high-speed dispatching for emergency recovery, roadside support, and repossession jobs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <IndustryResultsStats
          title="Performance by the Numbers"
          subtitle="Automotive operators using Finmile consistently improve cost, speed, and delivery accuracy."
          stats={[
            {
              label: 'FUEL CONSUMPTION',
              value: '-30%',
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
          ]}
        />

        <section className="w-full bg-white py-14 md:py-20 px-6 flex justify-center">
          <div className="w-full max-w-[1240px]">
            <div className="text-center max-w-[920px] mx-auto mb-12">
              <h2 className="font-bold text-[34px] md:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.1] mb-4">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 'Ingest',
                  detail:
                    'Orders or service calls are automatically pulled from your ERP or CRM.',
                },
                {
                  step: 'Optimize',
                  detail:
                    'AI calculates the best vehicle, route, and schedule in milliseconds.',
                },
                {
                  step: 'Execute',
                  detail:
                    'Drivers receive turn-by-turn instructions via our intuitive Mobile App.',
                },
                {
                  step: 'Analyze',
                  detail:
                    'Real-time dashboards provide instant insights into fleet productivity.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[24px] bg-[#F8F7FF] border border-[#EEF2FF] p-7 shadow-[0_4px_20px_rgba(47,28,140,0.03)]"
                >
                  <h3 className="font-bold text-[22px] text-[#2F1C8C] mb-3">{item.step}</h3>
                  <p className="text-[#64748B] text-[15px] leading-[1.6]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-[#FAFAFF] py-14 md:py-20 px-6 flex justify-center">
          <div className="w-full max-w-[1240px]">
            <div className="text-center max-w-[920px] mx-auto mb-10">
              <h2 className="font-bold text-[34px] md:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.1] mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              <details className="group bg-white rounded-[20px] border border-[#EEF2FF] p-6 open:shadow-[0_10px_30px_rgba(47,28,140,0.06)]">
                <summary className="cursor-pointer list-none font-semibold text-[#2F1C8C] text-[18px]">
                  Can this software handle heavy-duty towing?
                </summary>
                <p className="mt-3 text-[#64748B] text-[15px] leading-[1.6]">
                  Yes. The platform categorizes vehicles by GVWR so the right towing equipment is dispatched for every job.
                </p>
              </details>

              <details className="group bg-white rounded-[20px] border border-[#EEF2FF] p-6 open:shadow-[0_10px_30px_rgba(47,28,140,0.06)]">
                <summary className="cursor-pointer list-none font-semibold text-[#2F1C8C] text-[18px]">
                  Does it integrate with my existing DMS?
                </summary>
                <p className="mt-3 text-[#64748B] text-[15px] leading-[1.6]">
                  Yes. We support robust API integrations with major Dealer Management Systems and Warehouse Management Systems.
                </p>
              </details>

              <details className="group bg-white rounded-[20px] border border-[#EEF2FF] p-6 open:shadow-[0_10px_30px_rgba(47,28,140,0.06)]">
                <summary className="cursor-pointer list-none font-semibold text-[#2F1C8C] text-[18px]">
                  How does the AI optimize routes?
                </summary>
                <p className="mt-3 text-[#64748B] text-[15px] leading-[1.6]">
                  It uses machine learning on traffic patterns, load weights, and job priority levels to suggest the most cost-effective route.
                </p>
              </details>
            </div>
          </div>
        </section>

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