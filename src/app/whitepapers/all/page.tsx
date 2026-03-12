import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { AllWhitepapersGrid } from "@/components/pages/whitepapers/AllWhitepapersGrid";

export const metadata = {
    title: 'All Whitepapers & Research | Finmile',
    description: 'Explore Finmile\'s complete catalog of whitepapers and research on modern logistics and AI-powered delivery solutions.',
};

export default function AllWhitepapersPage() {
    return (
        <main className="min-h-screen bg-white text-foreground flex flex-col">
            <Header />
            <div className="flex-grow">
                <PageHero title="All Whitepapers" />
                <AllWhitepapersGrid />
            </div>
            <Footer />
        </main>
    );
}
