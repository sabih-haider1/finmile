import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { AboutContent } from "../../components/pages/about/AboutContent";
import { StoryVision } from "../../components/pages/about/StoryVision";
import { OurOrigin } from "../../components/pages/about/OurOrigin";
import { OurMission } from "../../components/pages/about/OurMission";
import { OurPlatform } from "../../components/pages/about/OurPlatform";
import { OurValues } from "../../components/pages/about/OurValues";
import { OurLeadership } from "../../components/pages/about/OurLeadership";
import { OurCollectiveEdge } from "../../components/pages/about/OurCollectiveEdge";
import { PressAndAwards } from "../../components/pages/about/PressAndAwards";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";

export const metadata = {
    title: 'About | Finmile',
    description: 'Learn more about Finmile, the OS for Modern Logistics.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />
            <div className="flex-grow bg-[#0B0616]">
                <PageHero title="About" />
                <AboutContent />
                <StoryVision />
                <OurOrigin />
                <OurMission />
                <OurPlatform />
                <OurValues />
                <OurLeadership />
                <OurCollectiveEdge />
                <PressAndAwards />
                <JoinTheJourney />
            </div>
            <Footer />
        </main>
    );
}
