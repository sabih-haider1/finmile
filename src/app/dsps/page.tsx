import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";
import { DspsSustainability } from "../../components/pages/dsps/DspsSustainability";
import { DspsAIOperatingSystem } from "../../components/pages/dsps/DspsAIOperatingSystem";
import { DspsFeaturesGrid } from "../../components/pages/dsps/DspsFeaturesGrid";
import { DspsRouteOptimisation } from "../../components/pages/dsps/DspsRouteOptimisation";
import { DspsAutomatedDispatch } from "../../components/pages/dsps/DspsAutomatedDispatch";
import { DspsFleetVisibility } from "../../components/pages/dsps/DspsFleetVisibility";
import { DspsProofOfDelivery } from "../../components/pages/dsps/DspsProofOfDelivery";
import { DspsOperationalImpact } from "../../components/pages/dsps/DspsOperationalImpact";
import { DspsIntegrations } from "../../components/pages/dsps/DspsIntegrations";
import { DspsWhyChoose } from "../../components/pages/dsps/DspsWhyChoose";

export const metadata = {
    title: 'DSPs | Finmile',
    description: 'Run a smarter, leaner delivery business with Finmile.',
};

export default function DspsPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="DSPs"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />

            <DspsAIOperatingSystem />
            <DspsFeaturesGrid />
            
            {/* The 4 new Zig-Zag feature sections */}
            <DspsWhyChoose />
            <DspsRouteOptimisation />
            <DspsAutomatedDispatch />
            <DspsFleetVisibility />
            <DspsProofOfDelivery />
            <DspsOperationalImpact />

            <DspsIntegrations />

            

            <DspsSustainability />

            <JoinTheJourney
                heading={<>Run a Smarter, Leaner<br />Delivery Business</>}
                text1={<>Start saving hours, cutting costs, and running routes that make sense.</>}
                text2={null}
                secondaryButtonText="Calculate your route savings"
            />

            <Footer />
        </main>
    );
}