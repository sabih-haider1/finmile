import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { FaqSection } from "../../components/pages/faqs/FaqSection";

export const metadata = {
    title: 'FAQs | Finmile',
    description: 'Find answers to frequently asked questions about Finmile\'s AI-powered delivery optimization platform.',
};

export default function FaqsPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="FAQs"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />

            <FaqSection />

           

            <Footer />
        </main>
    );
}
