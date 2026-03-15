import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";
import { ThreePLHero } from "../../components/pages/3pl-networks/ThreePLHero";
import { ThreePLChallenge } from "../../components/pages/3pl-networks/ThreePLChallenge";
import { ThreePLWhyChoose } from "../../components/pages/3pl-networks/ThreePLWhyChoose";
import { ThreePLMultiClient } from "../../components/pages/3pl-networks/ThreePLMultiClient";
import { ThreePLOperationalImpact } from "../../components/pages/3pl-networks/ThreePLOperationalImpact";
import { ThreePLIntegrations } from "../../components/pages/3pl-networks/ThreePLIntegrations";
import { ThreePLSustainability } from "../../components/pages/3pl-networks/ThreePLSustainability";

export const metadata = {
    title: '3PL & Networks | Finmile',
    description: 'Scale Your Network with AI Intelligence.',
};

export default function ThreePLNetworksPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="3PL & Networks"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />

            <ThreePLHero />
            <ThreePLChallenge />
            <ThreePLWhyChoose />
            <ThreePLMultiClient />
            <ThreePLOperationalImpact />
            <ThreePLIntegrations />
            <ThreePLSustainability />

            <JoinTheJourney
                heading={<>Scale Your Network<br />with AI Intelligence</>}
                text1={<>Join leading 3PLs and courier networks already optimising with<br className="hidden md:block"/>Finmile.</>}
                text2={null}
                secondaryButtonText="Book A Demo"
            />

            <Footer />
        </main>
    );
}
