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
import { Calendar, UserCheck, MapPin, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Field Service Route Optimization Software | Finmile',
  description: 'Finmile offers AI-powered route planning for field service and maintenance teams, reducing travel time and increasing daily job capacity.',
};

export default function FieldServicePage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero
          title="Field Service"
          hideLogo={true}
        />

        <IndustryHeroIntro
          title="AI Route Planning for Field Teams on the Move"
          industryName="Field Service & Maintenance Fleets"
          description="Every mile your technicians drive is time they’re not fixing or maintaining. Finmile uses AI to plan efficient routes so field teams spend less time on the road and more time serving customers."
          image="/assets/images/features/AiDataSustainability.png"
          imageAlt="Field Service Route Planning"
        />

        <IndustryProblemSection
          title="The Challenge – Chaos in the Daily Schedule"
          quote='"Dispatchers juggle hundreds of appointments, skill requirements, and time windows. Manual planning inevitably leads to overbooked technicians and late arrivals. It drains productivity and frustrates customers."'
          descriptionTop="Whether you manage telecom engineers, HVAC specialists, or utility teams, chaotic scheduling leads to missed appointments and excessive driving time."
          descriptionBottom="When technician routes don't make sense, burnout rises and service levels fall. Finmile brings the intelligence of advanced last-mile logistics to complex field operations."
          image="/assets/images/features/laptop-blue.png"
          imageAlt="Field Service Scheduling Challenges"
        />

        <IndustrySolutionCards 
          title="Intelligent Scheduling That Adapts"
          subtitle="Finmile’s AI matches jobs to the nearest qualified technician, factoring in skill, distance, and current workload. Routes adjust dynamically as new tasks appear."
          cards={[
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "Daily Route Sequencing",
              description: "AI-driven sequencing that optimizes for multi-appointment days automatically."
            },
            {
              icon: <UserCheck className="w-8 h-8" />,
              title: "Skill-Based Matching",
              description: "Match the right job to the right technician based on qualification and location."
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Real-Time Visibility",
              description: "Track technician locations across the entire fleet for smarter dynamic dispatching."
            },
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: "Integrated Mobile App",
              description: "Everything the team needs for job completion, navigation, and proof of service."
            }
          ]}
        />

        <IndustryResultsStats 
          title="30% More Jobs Per Day"
          subtitle="Maintenance companies using Finmile see significant increases in daily capacity and plummeting fuel consumption. Technician satisfaction soars when routes finally make sense."
          stats={[
            {
              label: "JOB CAPACITY",
              value: "+32%",
              description: "Increase in daily jobs completed per technician through efficient sequencing."
            },
            {
              label: "FUEL SAVINGS",
              value: "-27%",
              description: "Reduction in fuel consumption and mileage across the entire service fleet."
            },
            {
              label: "SERVICE SPEED",
              value: "Faster",
              description: "Improved customer response rates and on-time arrival for home appointments."
            },
            {
              label: "TEAM SATISFACTION",
              value: "High",
              description: "Happier, more productive teams with less stress and reduced overtime on the road."
            }
          ]}
        />

        <IndustryCTA 
          title="The Finmile Advantage"
          highlightText="Service Rhythms Intelligence"
          description="Our AI learns your service rhythms. It knows when to reroute, when to hold a technician nearby, and when to combine calls to cut travel entirely. Maximize your field team's time."
          image="/assets/images/half-dashboard.png"
          imageAlt="Field Service Fleet Dashboard"
          ctaText="Book A Demo"
          ctaHref="https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform"
        />

        <IndustryFinalCTA />
      </div>

      <Footer />
    </main>
  );
}
