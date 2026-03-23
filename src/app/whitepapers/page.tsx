import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { AiDataSustainability } from "@/components/pages/about/AIDataSustainability";
import { CaseStudiesGrid } from "@/components/pages/resources/CaseStudiesGrid";
import { GuideGrid } from "@/components/pages/guides/GuideGrid";
import { BlogGrid } from "@/components/pages/blog/BlogGrid";
import { WhitepaperSection } from "@/components/pages/whitepapers/WhitepaperSection";

export const metadata = {
    title: 'Whitepapers & Blogs',
    description: 'Explore Finmile\'s whitepapers and research on modern logistics and AI-powered delivery solutions.',
};

export default function WhitepapersPage() {
    return (
        <main className="min-h-screen bg-white text-foreground flex flex-col">
            <Header />
            <div className="flex-grow">
                <PageHero title="Whitepapers & Blogs" hideLogo />
                <AiDataSustainability />
                <WhitepaperSection />
                <CaseStudiesGrid />
                <GuideGrid />
                <BlogGrid />
            </div>
            <Footer />
        </main>
    );
}
