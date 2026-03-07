import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { AutonomousAgentsFeature } from "../../components/sections/AutonomousAgentsFeature";
import { TheAIOperatingLayer } from "../../components/sections/TheAIOperatingLayer";
import { ConfidenceScoring } from "../../components/sections/ConfidenceScoring";
import { AutonomousExecution } from "../../components/sections/AutonomousExecution";
import { WhatAIAgentsMean } from "../../components/sections/WhatAIAgentsMean";
import { MeetTheSuite } from "../../components/sections/MeetTheSuite";
import { OutcomesAtScale } from "../../components/sections/OutcomesAtScale";
import { JoinTheJourney } from "../../components/sections/JoinTheJourney";

export const metadata = {
    title: 'AI Agents | Finmile',
    description: 'Discover Finmile\'s intelligent AI Agents powering the next generation of logistics.',
};

export default function AIAgentsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />
            <div className="flex-grow bg-[#0B0616]">
                <PageHero title="AI Agents" hideLogo={true} />
                <AutonomousAgentsFeature />
                <TheAIOperatingLayer />
                <ConfidenceScoring />
                <AutonomousExecution />
                <WhatAIAgentsMean />
                <MeetTheSuite />
                <OutcomesAtScale />
                <JoinTheJourney
                    heading={<>Don't Just Optimise<br />— Automate</>}
                    text1={<>AI Agents aren't suggestions — they're execution engines that<br className="hidden lg:block" /> improve with data. Start your autonomous journey today.</>}
                    text2={null}
                    secondaryButtonText="See Finmile in Action"
                />
            </div>
            <Footer />
        </main>
    );
}
