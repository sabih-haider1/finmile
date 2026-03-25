import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { ReturnsOptimizationFeature, ReturnsReality, SmartStreamlined, ReturnsCustomerLike, ReturnsProcess, ReturnsOperators, ReturnsBenefits, FinmileOperatingSystem, ReturnsTrust, ReturnsFinalCTA } from "../../components/pages/returns-optimization";

export const metadata = {
    title: 'Returns Optimization | Finmile',
    description: 'Transform reverse logistics into a seamless extension of your daily delivery operations with Finmile.',
};

export default function ReturnsOptimizationPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="Returns Optimization"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />
            <ReturnsOptimizationFeature />
            <ReturnsReality />
            <SmartStreamlined />
            <ReturnsProcess />
            <ReturnsBenefits />
            <FinmileOperatingSystem />
            <ReturnsOperators />
            <ReturnsCustomerLike />
            <ReturnsTrust />
            <ReturnsFinalCTA />

            {/* You might want to add more sections here later */}

            <Footer />
        </main>
    );
}
