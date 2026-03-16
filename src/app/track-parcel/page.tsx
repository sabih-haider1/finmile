import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "../../components/layout/PageHero";
import { TrackParcelInterface } from "../../components/pages/track-parcel/TrackParcelInterface";

export const metadata = {
    title: 'Track Parcel | Finmile',
    description: 'Track your parcels in real-time with Finmile\'s advanced delivery tracking system.',
};

export default function TrackParcelPage() {
    return (
        <main className="min-h-screen bg-[#0B0616] flex flex-col relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0B0616] -z-20" />

            <Header />

            <PageHero
                title="Track Parcel"
                hideLogo={true}
                gradientFrom="#2F1C8C"
                gradientTo="#6A27D4"
            />

            <TrackParcelInterface />

            <Footer />
        </main>
    );
}
