import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { AboutContent } from "../../components/sections/AboutContent";
import { StoryVision } from "../../components/sections/StoryVision";
import { OurOrigin } from "../../components/sections/OurOrigin";
import { OurMission } from "../../components/sections/OurMission";
import { OurPlatform } from "../../components/sections/OurPlatform";
import { OurValues } from "../../components/sections/OurValues";
import { OurLeadership } from "../../components/sections/OurLeadership";
import { OurCollectiveEdge } from "../../components/sections/OurCollectiveEdge";
import { PressAndAwards } from "../../components/sections/PressAndAwards";
import { JoinTheJourney } from "../../components/sections/JoinTheJourney";

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
