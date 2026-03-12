import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { AllCaseStudiesGrid } from "@/components/pages/resources/AllCaseStudiesGrid";

export const metadata = {
    title: 'All Case Studies | Finmile',
    description: 'Explore all of Finmile\'s case studies and customer success stories.',
};

export default function AllCaseStudiesPage() {
    return (
        <main className="min-h-screen bg-white text-foreground flex flex-col">
            <Header />
            <div className="flex-grow">
                <PageHero title="All Case Studies" />
                <AllCaseStudiesGrid />
            </div>
            <Footer />
        </main>
    );
}
