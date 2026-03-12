import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { AllGuidesGrid } from "@/components/pages/guides/AllGuidesGrid";

export const metadata = {
    title: 'All Finmile Guides | Finmile',
    description: 'Explore all of Finmile\'s comprehensive guides on logistics and delivery optimization.',
};

export default function AllGuidesPage() {
    return (
        <main className="min-h-screen bg-white text-foreground flex flex-col">
            <Header />
            <div className="flex-grow">
                <PageHero title="All Finmile Guides" />
                <AllGuidesGrid />
            </div>
            <Footer />
        </main>
    );
}
