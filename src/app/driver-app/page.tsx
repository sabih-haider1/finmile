import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { DriverAppHero } from "../../components/pages/driver-app/DriverAppHero";
import { DriverAppWhy } from "../../components/pages/driver-app/DriverAppWhy";
import { DriverAppEpod } from "../../components/pages/driver-app/DriverAppEpod";
import { DriverAppRouteGuidance } from "../../components/pages/driver-app/DriverAppRouteGuidance";
import { DriverAppAiTracking } from "../../components/pages/driver-app/DriverAppAiTracking";
import { DriverAppImageIntelligence } from "../../components/pages/driver-app/DriverAppImageIntelligence";
import { DriverAppWorkflow } from "../../components/pages/driver-app/DriverAppWorkflow";
import { DriverAppRealWorld } from "../../components/pages/driver-app/DriverAppRealWorld";
import { DriverAppOperationalImpact } from "../../components/pages/driver-app/DriverAppOperationalImpact";
import { DriverAppTestimonials } from "../../components/pages/driver-app/DriverAppTestimonials";
import { DriverAppEcosystem } from "../../components/pages/driver-app/DriverAppEcosystem";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";

export const metadata = {
    title: 'Driver App | Finmile',
    description: 'Empower your drivers with Finmile.',
};

export default function DriverAppPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="Driver App"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />

            {/* Driver App specific components */}
            <DriverAppHero />
            <DriverAppWhy />
            <DriverAppEpod />
            <DriverAppRouteGuidance />
            <DriverAppAiTracking />
            <DriverAppImageIntelligence />
            <DriverAppWorkflow />
            <DriverAppRealWorld />
            <DriverAppOperationalImpact />
            <DriverAppTestimonials />
            <DriverAppEcosystem />

            {/* Component Above Footer (Custom text provided by user) */}
            <JoinTheJourney
                heading={<>Transform Driver <br /> Performance and <br /> Proof of Delivery</>}
                text1={<>Finmile gives your drivers everything they need to deliver <br className="hidden md:block" /> flawlessly — and gives you the visibility to scale confidently.</>}
                text2={null}
                secondaryButtonText="Learn More"
            />

            <Footer />
        </main>
    );
}
