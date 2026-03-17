import React from 'react';
import { Target, Zap, Sparkles, BarChart2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OurPlatform = () => {
    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-6 lg:px-24 py-16 overflow-hidden relative ${montserrat.className}`}>

            {/* Top Header & Context */}
            <div className="text-center mb-8 w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto">
                <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight mb-6 leading-tight">
                    Our Platform: Intelligence That Delivers
                </h2>
                <p className="font-medium text-[16px] text-[#6C757D] max-w-[800px] leading-relaxed px-4">
                    Finmile OS combines AI route optimisation, real-time delivery visibility, and <br className="hidden md:block" /> predictive analytics into one unified control system.
                </p>
            </div>

            {/* 4 Column Feature Grid */}
            <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 z-10 relative">

                {/* Card 1 */}
                <div className="bg-[#F8F7FF] rounded-[24px] p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="mb-6">
                        <Target className="text-[#6A27D4] w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-gray-900 font-semibold text-[18px] mb-3">
                        Dynamic Route Optimisation
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        Up to 42% fewer routes via live AI clustering
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#F8F7FF] rounded-[24px] p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="mb-6">
                        <Zap className="text-[#6A27D4] w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-gray-900 font-semibold text-[18px] mb-3">
                        EV-Specific Routing
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        Range, charge, and payload-aware planning.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#F8F7FF] rounded-[24px] p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="mb-6">
                        <Sparkles className="text-[#6A27D4] w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-gray-900 font-semibold text-[18px] mb-3">
                        Proactive Rerouting
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        Automatic response to traffic and time window changes.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-[#F8F7FF] rounded-[24px] p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="mb-6">
                        <BarChart2 className="text-[#6A27D4] w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-gray-900 font-semibold text-[18px] mb-3">
                        Data Intelligence
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        Parcel-level insights & predictive analytics.
                    </p>
                </div>

            </div>

            {/* Bottom Context Paragraph */}
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto">
                <p className="font-medium text-[16px] text-[#6C757D] max-w-[800px] leading-relaxed px-4">
                    These capabilities allow logistics operators to scale capacity, cut emissions, and <br className="hidden md:block" /> improve customer experience simultaneously.
                </p>
            </div>

        </section>
    );
};
