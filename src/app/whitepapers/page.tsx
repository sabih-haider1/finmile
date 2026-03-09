import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { WhitepaperGrid } from "../../components/sections/WhitepaperGrid";
import { AiDataSustainability } from "@/components/sections/AIDataSustainability"; 

export const metadata = {
    title: 'Research & Whitepapers | Finmile',
    description: 'Explore Finmile\'s whitepapers and research on modern logistics and AI-powered delivery solutions.',
};

export default function WhitepapersPage() {
    return (
        <main className="min-h-screen bg-white text-foreground flex flex-col">
            <Header />
            <div className="flex-grow">
                <PageHero title="Research & Whitepapers" />
                <AiDataSustainability />
                <WhitepaperGrid />
            </div>
            <Footer />
        </main>
    );
}
