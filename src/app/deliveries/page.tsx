import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { SmarterDeliveries } from "../../components/pages/deliveries/SmarterDeliveries";
import { DeliveryStats } from "../../components/pages/deliveries/DeliveryStats";
import { DeliverySolutions } from "../../components/pages/deliveries/DeliverySolutions";
import { DeliveryFeatures } from "../../components/pages/deliveries/DeliveryFeatures";
import { WhatDeliveriesMean } from "../../components/pages/deliveries/WhatDeliveriesMean";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";

export const metadata = {
    title: 'Deliveries | Finmile',
    description: 'Manage and optimize your deliveries with Finmile.',
};

export default function DeliveriesPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="Deliveries"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />

            <SmarterDeliveries />
            <DeliveryStats />
            <DeliverySolutions />
            <DeliveryFeatures />
            <WhatDeliveriesMean />
            <JoinTheJourney
                heading={<>Ready to Transform<br />Your Deliveries?</>}
                text1="Join the businesses routing smarter, delivering faster, and scaling effortlessly with Finmile's predictive network."
                text2={null}
                secondaryButtonText="View Pricing Plans"
            />

            <Footer />
        </main>
    );
}
