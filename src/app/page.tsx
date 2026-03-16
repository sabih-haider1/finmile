import dynamicImport from 'next/dynamic';
import { Header } from "../components/layout/Header";
import { Hero } from "../components/pages/home/Hero";
import { TrustSection, FeaturesSection } from "../components/pages/home/MainFeatures";
import { GenerativeIntelligence } from "../components/pages/home/GenerativeIntelligence";
import { AIAgentsSection } from "../components/pages/home/AIAgents";
import { Footer } from "../components/layout/Footer";

const UnifiedCommand = dynamicImport(
  () => import('../components/pages/home/UnifiedCommand').then((mod) => mod.UnifiedCommand),
  { loading: () => <section className="w-full min-h-[260px] bg-white" aria-hidden="true" /> }
);

const ScaleSection = dynamicImport(
  () => import('../components/pages/home/ScaleSection').then((mod) => mod.ScaleSection),
  { loading: () => <section className="w-full min-h-[320px] bg-[#fcfcff]" aria-hidden="true" /> }
);

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <Hero />
      <TrustSection />
      <FeaturesSection />
      <AIAgentsSection />
      <GenerativeIntelligence />
      <UnifiedCommand />
      <ScaleSection />
      <Footer />
    </main>
  );
}
