import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { ResourceGrid } from "@/components/pages/resources/ResourceGrid";

export const metadata = {
    title: 'All Resources | Finmile',
    description: 'Explore all of Finmile\'s resources, templates, and downloadable assets.',
};

export default function AllResourcesPage() {
    return (
        <main className="min-h-screen bg-white text-foreground flex flex-col">
            <Header />
            <div className="flex-grow">
                <PageHero title="All Resources" />
                <ResourceGrid />
            </div>
            <Footer />
        </main>
    );
}
