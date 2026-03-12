import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { PredictiveVisibility } from "../../components/pages/control-tower/PredictiveVisibility";
import { PowerOfControlTower } from "../../components/pages/control-tower/PowerOfControlTower";
import { AIVisibilityInAction } from "../../components/pages/control-tower/AIVisibilityInAction";
import { OperationalImpact } from "../../components/pages/control-tower/OperationalImpact";
import { HowItWorks } from "../../components/pages/control-tower/HowItWorks";
import { Integrations } from "../../components/pages/control-tower/Integrations";
import { WhyFinmileLeads } from "../../components/pages/control-tower/WhyFinmileLeads";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";

export const metadata = {
    title: 'Control Tower | Finmile',
    description: 'A unified view of your entire logistics network.',
};

export default function ControlTowerPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="Control Tower"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />

            <PredictiveVisibility />
            <PowerOfControlTower />
            <AIVisibilityInAction />
            <OperationalImpact />
            <HowItWorks />
            <Integrations />

            <WhyFinmileLeads />
            <JoinTheJourney
                heading={<>Take Control of <br className="hidden md:block" /> Every Delivery</>}
                text1={<>Stop reacting and start predicting. With Finmile's Control <br className="hidden md:block" /> Tower, every delivery becomes transparent, measurable, and <br className="hidden md:block" /> optimised.</>}
                text2={null}
                secondaryButtonText="Request a Live Walkthrough"
                secondaryButtonHref="#"
            />

            <Footer />
        </main>
    );
}
