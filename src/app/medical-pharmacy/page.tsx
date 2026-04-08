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
import { Thermometer, ShieldCheck, FileCheck, LayoutDashboard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Courier & Pharmaceutical Delivery Software | Finmile',
  description: 'Finmile offers compliant, traceable, and life-critical delivery intelligence for medical and pharmaceutical couriers, ensuring GDP/MHRA compliance.',
};

export default function MedicalPharmacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col bg-white">
        <PageHero
          title="Medical & Pharmacy"
          hideLogo={true}
        />

        <IndustryHeroIntro
          title="Compliant, Traceable, and Life-Critical Delivery Intelligence"
          industryName="Medical & Pharmaceutical Couriers"
          description="When lives depend on timing, there’s no room for guesswork. Finmile is built to help medical and pharmaceutical couriers deliver every specimen on time, with full traceability."
          image="/assets/images/features/AiDataSustainability.png"
          imageAlt="Medical Delivery Traceability"
        />

        <IndustryProblemSection
          title="The Challenge – Compliance and Complexity"
          quote='"Healthcare logistics is unique. You’re moving temperature-sensitive items under strict regulations across hospitals. Manual routing creates risk. Late deliveries can cost more than money — they affect patient care."'
          descriptionTop="From Polar Speed to NHS Trust contractors, Finmile ensures time-critical deliveries arrive exactly where they’re needed — every time."
          descriptionBottom="Non-compliance or missed scans in the medical supply chain aren't just an operational failure — they are a patient safety risk. Finmile automates the audit trail so you don't have to."
          image="/assets/images/features/laptop-blue.png"
          imageAlt="Medical Logistics Compliance"
        />

        <IndustrySolutionCards 
          title="AI That Understands Compliance"
          subtitle="Finmile automates routing, documentation, and proof-of-delivery, building audit-ready compliance trails (GDP / MHRA-ready) automatically."
          cards={[
            {
              icon: <Thermometer className="w-8 h-8" />,
              title: "Temp-Sensitive Routing",
              description: "Optimized routing with strict time-window prioritisation for sensitive medical cargo."
            },
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Chain-of-Custody",
              description: "Geotagged proof-of-delivery and secure records for every handoff."
            },
            {
              icon: <FileCheck className="w-8 h-8" />,
              title: "MHRA-Ready Audit Trails",
              description: "Automated compliance reports designed for strict healthcare regulations."
            },
            {
              icon: <LayoutDashboard className="w-8 h-8" />,
              title: "Control Tower Monitoring",
              description: "Real-time visibility through a centralized dashboard for every critical specimen."
            }
          ]}
        />

        <IndustryResultsStats 
          title="Reliability That Builds Trust"
          subtitle="One UK pharmaceutical courier reduced failed deliveries by 41% using Finmile's predictive orchestration. Audit times dropped by over half."
          stats={[
            {
              label: "FAILED DELIVERIES",
              value: "-41%",
              description: "Massive reduction in missed hospital and pharmacy delivery windows."
            },
            {
              label: "AUDIT TIME",
              value: "-60%",
              description: "Improvement in audit compliance search and retrieval speed."
            },
            {
              label: "DATA SECURITY",
              value: "AES",
              description: "Secure, encrypted storage for sensitive patient and delivery data."
            },
            {
              label: "RELIABILITY",
              value: "100%",
              description: "Full traceability ensures confidence in every handoff in the supply chain."
            }
          ]}
        />

        <IndustryCTA 
          title="Why Finmile for Healthcare Logistics"
          highlightText="Because Every Minute Matters"
          description="Finmile transforms medical logistics from reactive to predictive — ensuring the right delivery reaches the right hands at the right time. Scale your medical network with confidence."
          image="/assets/images/half-dashboard.png"
          imageAlt="Healthcare Logistics Dashboard"
          ctaText="Book A Demo"
          ctaHref="https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform"
        />

        <IndustryFinalCTA />
      </div>

      <Footer />
    </main>
  );
}
