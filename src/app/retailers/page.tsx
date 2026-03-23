import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";
import { RetailersIntegrations } from "../../components/pages/retailers/RetailersIntegrations";
import { RetailersSustainability } from "../../components/pages/retailers/RetailersSustainability";
import { RetailersOperationalImpact } from "../../components/pages/retailers/RetailersOperationalImpact";
import {ReverseLogisticsOptimization} from "../../components/pages/retailers/ReverseLogisticsSection";
import {PredictiveEtasTracking} from "../../components/pages/retailers/PredictiveEtasTracking";
import {AiRouteOptimization} from "../../components/pages/retailers/AiRouteOptimization";
import {RetailersWhyChoose} from "../../components/pages/retailers/RetailersWhyChoose";
import { RetailersModernDelivery } from "../../components/pages/retailers/RetailersModernDelivery";
import { RetailersAIOperatingSystem } from "../../components/pages/retailers/RetailersAIOperatingSystem";

export const metadata = {
    title: 'Retailers | Finmile',
    description: 'Deliver the experience customers expect with Finmile.',
};

export default function RetailersPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="Retailers"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />
            <RetailersAIOperatingSystem/>
            <RetailersModernDelivery/>
            <RetailersWhyChoose/>
            <AiRouteOptimization/>
            <PredictiveEtasTracking/>
            <ReverseLogisticsOptimization/>
            <RetailersOperationalImpact/>
            <RetailersIntegrations />
            <RetailersSustainability />

            <JoinTheJourney
                heading={<>Deliver the<br />Experience<br />Customers Expect</>}
                text1={<>It&apos;s not just delivery — it&apos;s your competitive advantage.</>}
                text2={null}
                secondaryButtonText="Calculate your route savings"
            />

            <Footer />
        </main>
    );
}