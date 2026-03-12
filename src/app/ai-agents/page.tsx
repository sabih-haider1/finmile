import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { AutonomousAgentsFeature } from "../../components/pages/ai-agents/AutonomousAgentsFeature";
import { TheAIOperatingLayer } from "../../components/pages/ai-agents/TheAIOperatingLayer";
import { ConfidenceScoring } from "../../components/pages/ai-agents/ConfidenceScoring";
import { AutonomousExecution } from "../../components/pages/ai-agents/AutonomousExecution";
import { WhatAIAgentsMean } from "../../components/pages/ai-agents/WhatAIAgentsMean";
import { MeetTheSuite } from "../../components/pages/ai-agents/MeetTheSuite";
import { OutcomesAtScale } from "../../components/pages/ai-agents/OutcomesAtScale";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";

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
                    secondaryButtonHref="#"
                />
            </div>
            <Footer />
        </main>
    );
}
