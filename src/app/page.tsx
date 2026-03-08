import { Header } from "../components/layout/Header";
import { Hero } from "../components/pages/home/Hero";
import { TrustSection, FeaturesSection } from "../components/pages/home/MainFeatures";
import { AIAgentsSection } from "../components/pages/home/AIAgents";
import { GenerativeIntelligence } from "../components/pages/home/GenerativeIntelligence";
import { UnifiedCommand } from "../components/pages/home/UnifiedCommand";
import { ScaleSection } from "../components/pages/home/ScaleSection";
import { Footer } from "../components/layout/Footer";

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
