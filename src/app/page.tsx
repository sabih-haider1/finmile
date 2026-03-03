import { Header } from "../components/layout/Header";
import { Hero } from "../components/sections/Hero";
import { TrustSection, FeaturesSection } from "../components/sections/MainFeatures";
import { AIAgentsSection } from "../components/sections/AIAgents";
import { GenerativeIntelligence } from "../components/sections/GenerativeIntelligence";
import { UnifiedCommand } from "../components/sections/UnifiedCommand";
import { ScaleSection } from "../components/sections/ScaleSection";
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
