import dynamic from 'next/dynamic';
import { Header } from "../components/layout/Header";
import { Hero } from "../components/pages/home/Hero";
import { TrustSection, FeaturesSection } from "../components/pages/home/MainFeatures";
import { GenerativeIntelligence } from "../components/pages/home/GenerativeIntelligence";
import { Footer } from "../components/layout/Footer";

const AIAgentsSection = dynamic(
  () => import('../components/pages/home/AIAgents').then((mod) => mod.AIAgentsSection),
  { loading: () => <section className="w-full min-h-[300px] bg-white" aria-hidden="true" /> }
);

const UnifiedCommand = dynamic(
  () => import('../components/pages/home/UnifiedCommand').then((mod) => mod.UnifiedCommand),
  { loading: () => <section className="w-full min-h-[260px] bg-white" aria-hidden="true" /> }
);

const ScaleSection = dynamic(
  () => import('../components/pages/home/ScaleSection').then((mod) => mod.ScaleSection),
  { loading: () => <section className="w-full min-h-[320px] bg-[#fcfcff]" aria-hidden="true" /> }
);

export const revalidate = 3600;

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
