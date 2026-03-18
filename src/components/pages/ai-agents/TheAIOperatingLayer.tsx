import React from 'react';
import { Eye, TrendingUp, Cpu, Zap } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const TheAIOperatingLayer = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 pt-6 lg:pt-6 pb-6 md:pb-6 lg:pb-6 overflow-hidden relative ${montserrat.className}`}>

            {/* Header Content */}
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto mb-12 md:mb-8 md:mb-8">
                <h2 className="font-semibold text-[32px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.15] md:leading-tight mb-4 md:mb-6">
                    The AI Operating Layer That Never Stops
                </h2>
                <p className="font-medium text-[15px] md:text-[16px] text-[#6C757D] max-w-[800px] leading-relaxed px-4">
                    Autonomous agents working 24/7 across every operational pillar.
                </p>
            </div>

            {/* 4 Column Card Grid */}
            <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 z-10 relative items-stretch">

                {/* Card 1: Observe */}
                <div className="bg-[#F8F7FF] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-[#E8E5FF]">
                    <div className="mb-8">
                        <Eye className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[#0A1B33] font-bold text-[18px] mb-4">
                        Observe
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        Monitors real-time data, traffic,<br className="hidden lg:block" /> and delivery constraints.
                    </p>
                </div>

                {/* Card 2: Predict */}
                <div className="bg-[#F8F7FF] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-[#E8E5FF]">
                    <div className="mb-8">
                        <TrendingUp className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[#0A1B33] font-bold text-[18px] mb-4">
                        Predict
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        Forecasts potential delays and<br className="hidden lg:block" /> SLA risks before they happen.
                    </p>
                </div>

                {/* Card 3: Decide */}
                <div className="bg-[#F8F7FF] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-[#E8E5FF]">
                    <div className="mb-8">
                        <Cpu className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[#0A1B33] font-bold text-[18px] mb-4">
                        Decide
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        Selects optimal interventions<br className="hidden lg:block" /> from millions of possibilities.
                    </p>
                </div>

                {/* Card 4: Execute */}
                <div className="bg-[#F8F7FF] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-[#E8E5FF]">
                    <div className="mb-8">
                        <Zap className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[#0A1B33] font-bold text-[18px] mb-4">
                        Execute
                    </h3>
                    <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                        Applies changes automatically<br className="hidden lg:block" /> through direct fleet integration.
                    </p>
                </div>

            </div>
        </section>
    );
};
