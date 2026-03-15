import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { DeliverySoftwareHero } from "../../components/pages/delivery-software/DeliverySoftwareHero";
import { DeliverySoftwarePainPoints } from "../../components/pages/delivery-software/DeliverySoftwarePainPoints";
import { DeliverySoftwarePlatform } from "../../components/pages/delivery-software/DeliverySoftwarePlatform";
import { DeliverySoftwareResults } from "../../components/pages/delivery-software/DeliverySoftwareResults";
import { DeliverySoftwareSteps } from "../../components/pages/delivery-software/DeliverySoftwareSteps";
import { DeliverySoftwareSectors } from "../../components/pages/delivery-software/DeliverySoftwareSectors";
import { DeliverySoftwareLiveDashboard } from "../../components/pages/delivery-software/DeliverySoftwareLiveDashboard";
import { DeliverySoftwareTestimonials } from "../../components/pages/delivery-software/DeliverySoftwareTestimonials";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";

export const metadata = {
    title: 'Delivery Software | Finmile',
    description: 'Transform your logistics with Finmile Delivery Software.',
};

export default function DeliverySoftwarePage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="Delivery Software"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />

            <DeliverySoftwareHero />
            <DeliverySoftwarePainPoints />
            <DeliverySoftwarePlatform />
            <DeliverySoftwareResults />
            <DeliverySoftwareSteps />
            <DeliverySoftwareSectors />
            <DeliverySoftwareLiveDashboard />
            <DeliverySoftwareTestimonials />

            <JoinTheJourney
                heading={<>Ready to Transform<br />Your Deliveries?</>}
                text1="Join thousands of operators already optimising with Finmile. Stop guessing — start saving today."
                text2={null}
                secondaryButtonText="Request Savings Analysis"
            />

            <Footer />
        </main>
    );
}
