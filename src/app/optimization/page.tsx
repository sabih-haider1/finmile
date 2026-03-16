import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";
import { FaqSection } from "../../components/pages/optimization/FaqSection";
import { OptimizationWhyChoose } from "../../components/pages/optimization/OptimizationWhyChoose";
import { OptimizationIntegrations } from "../../components/pages/optimization/OptimizationIntegrations";
import { OptimizationObjectives } from "../../components/pages/optimization/OptimizationObjectives";
import { MultiFleetOptimization } from "../../components/pages/optimization/MultiFleetOptimization";
import { PredictiveEtas } from "../../components/pages/optimization/PredictiveEtas";
import { HowAiEngineWorks } from "../../components/pages/optimization/HowAiEngineWorks";
import { ProofOverPromises } from "../../components/pages/optimization/ProofOverPromises";
import { OneLayerInsideFinmileOS } from "../../components/pages/optimization/OneLayerInsideFinmileOS";
import { OptimizationPainPoints } from "../../components/pages/optimization/OptimizationPainPoints";
import { AiRouteOptimizationFeature } from "../../components/pages/optimization/AiRouteOptimizationFeature";
export const metadata = {
    title: 'Optimization | Finmile',
    description: 'See how Finmile\'s AI route optimization cuts costs and boosts performance.',
};

export default function OptimizationPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="AI Route Optimization"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />
            <AiRouteOptimizationFeature/>
            <OptimizationPainPoints/>
            <OneLayerInsideFinmileOS/>
            <ProofOverPromises/>
            <PredictiveEtas/>
            <MultiFleetOptimization/>
            <OptimizationObjectives/>
            <HowAiEngineWorks/>
            <OptimizationIntegrations/>
            
            <OptimizationWhyChoose/>
            <FaqSection/>
            <JoinTheJourney
                heading="Ready to Deliver Smarter?"
                text1="See how Finmile's AI route optimization cuts costs and boosts performance."
                text2="Join the future of logistics."
                secondaryButtonText="Calculate your route savings"
            />

            <Footer />
        </main>
    );
}