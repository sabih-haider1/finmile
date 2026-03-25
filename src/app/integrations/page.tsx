import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { IntegrationsFeature } from "../../components/pages/integrations/IntegrationsFeature";
import { IntegrationsBackbone } from "../../components/pages/integrations/IntegrationsBackbone";
import { IntegrationsConnectedSystems } from "../../components/pages/integrations/IntegrationsConnectedSystems";
import { EcommerceIntegrations } from "../../components/pages/integrations/EcommerceIntegrations";
import { EnterpriseIntegrations } from "../../components/pages/integrations/EnterpriseIntegrations";
import { ApiDeveloperPlatform } from "../../components/pages/integrations/ApiDeveloperPlatform";
import { IntegrationsTrust } from "../../components/pages/integrations/IntegrationsTrust";
import { JoinTheJourney } from "../../components/shared/JoinTheJourney";

export const metadata = {
    title: 'Integrations | Finmile',
    description: 'Connect Finmile with your favorite platforms and tools for full logistics visibility.',
};

export default function IntegrationsPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col">
            <Header />
            <div className="flex-grow">
                <PageHero
                    title="Integrations"
                    hideLogo={true}
                    gradientFrom="#2F1C8C"
                    gradientTo="#6A27D4"
                />

                <IntegrationsFeature />
                <IntegrationsBackbone />
                <IntegrationsConnectedSystems />
                <EcommerceIntegrations />
                <EnterpriseIntegrations />
                <ApiDeveloperPlatform />
                <IntegrationsTrust />
                <JoinTheJourney 
                    heading={<>Integrate Once. <br className="hidden md:block" /> Scale Everywhere.</>}
                    text1={<>Finmile’s ecosystem-first approach means your logistics operation <br className="hidden md:block" /> can evolve without disruption. Add new clients, carriers, or <br className="hidden md:block" /> marketplaces in minutes.</>}
                    text2={null}
                    secondaryButtonText="Request a Live Walkthrough"
                    secondaryButtonHref="#"
                />

            </div>
            <Footer />
        </main>
    );
}
