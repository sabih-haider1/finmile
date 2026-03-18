import React from 'react';
import { Target, Zap, Sparkles, BarChart2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OurCollectiveEdge = () => {
    return (
        <section className={`w-full bg-[#F8F7FF] flex flex-col items-center px-6 lg:px-24 py-6 overflow-hidden relative ${montserrat.className}`}>

            {/* Centered Header */}
            <div className="text-center mb-8 w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto">
                <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-tight">
                    Our Collective Edge
                </h2>
            </div>

            {/* 4 Column Feature Grid */}
            <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10 relative items-stretch">

                {/* Card 1 */}
                <div className="bg-white rounded-[32px] p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-start transition-transform hover:-translate-y-1">
                    <div className="mb-12">
                        <Target className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[#0A1B33] font-bold text-[22px] mb-3">
                        50+ years
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        50+ years of combined logistics and mobility leadership
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-[32px] p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-start transition-transform hover:-translate-y-1">
                    <div className="mb-12">
                        <Zap className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[#0A1B33] font-bold text-[22px] mb-3">
                        10M+
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        10M+ deliveries optimised globally
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-[32px] p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-start transition-transform hover:-translate-y-1">
                    <div className="mb-12">
                        <Sparkles className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[#0A1B33] font-bold text-[22px] mb-3">
                        Cross Experience
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        Cross-continent experience in Europe, North America, & MENA
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-[32px] p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-start transition-transform hover:-translate-y-1">
                    <div className="mb-12">
                        <BarChart2 className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[#0A1B33] font-bold text-[22px] mb-3">
                        Proven success
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        scaling venture-backed startups and logistics SaaS products
                    </p>
                </div>

            </div>
        </section>
    );
};
