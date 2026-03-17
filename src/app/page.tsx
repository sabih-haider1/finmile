import dynamicImport from 'next/dynamic';
import { Header } from "../components/layout/Header";
import { Hero } from "../components/pages/home/Hero";
import { TrustSection } from "../components/pages/home/MainFeatures";
import { Footer } from "../components/layout/Footer";

const FeaturesSection = dynamicImport(
  () => import('../components/pages/home/MainFeatures').then((mod) => mod.FeaturesSection),
  { loading: () => <section className="w-full min-h-[500px]" aria-hidden="true" /> }
);

const GenerativeIntelligence = dynamicImport(
  () => import('../components/pages/home/GenerativeIntelligence').then((mod) => mod.GenerativeIntelligence),
  { loading: () => <section className="w-full min-h-[500px]" aria-hidden="true" /> }
);

const AIAgentsSection = dynamicImport(
  () => import('../components/pages/home/AIAgents').then((mod) => mod.AIAgentsSection),
  { loading: () => <section className="w-full min-h-[500px]" aria-hidden="true" /> }
);

const UnifiedCommand = dynamicImport(
  () => import('../components/pages/home/UnifiedCommand').then((mod) => mod.UnifiedCommand),
  { loading: () => <section className="w-full min-h-[260px] bg-white" aria-hidden="true" /> }
);

const ScaleSection = dynamicImport(
  () => import('../components/pages/home/ScaleSection').then((mod) => mod.ScaleSection),
  { loading: () => <section className="w-full min-h-[320px] bg-[#fcfcff]" aria-hidden="true" /> }
);

export const revalidate = 3600; // revalidate at most every hour

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
