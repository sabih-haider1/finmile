import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { AllBlogsGrid } from "@/components/pages/blog/AllBlogsGrid";

export const metadata = {
    title: 'All Blog Posts | Finmile',
    description: 'Explore all of Finmile\'s blog posts on logistics, AI, and delivery solutions.',
};

export default function AllBlogsPage() {
    return (
        <main className="min-h-screen bg-white text-foreground flex flex-col">
            <Header />
            <div className="flex-grow">
                <PageHero title="All Blog Posts" />
                <AllBlogsGrid />
            </div>
            <Footer />
        </main>
    );
}
