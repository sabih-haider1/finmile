import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const AutonomousAgentsFeature = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 pt-12 md:pt-20 lg:pt-28 pb-8 lg:pb-12 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center gap-10 lg:gap-24 z-10 relative">

                {/* Left Side: Image Container */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="bg-[#f8f7ff] rounded-[24px] md:rounded-[32px] p-6 md:p-12 w-full flex items-center justify-center relative shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-50">
                        <img
                            src="/assets/images/features/laptop-blue.png"
                            alt="Finmile Autonomous AI Agents"
                            className="w-full h-auto object-contain relative z-10 max-h-[300px] md:max-h-none"
                        />
                    </div>
                </div>

                {/* Right Side: Text & Buttons */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight mb-6 md:mb-8">
                        Autonomous AI<br className="hidden md:block" />
                        Agents That Run Your<br className="hidden md:block" />
                        Logistics
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[18px] leading-relaxed mb-8 md:mb-10 max-w-[500px]">
                        Finmile's AI Agents observe, decide, and act — removing operational friction at every step.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] whitespace-nowrap transition-colors hover:bg-[#5821B0] leading-snug shadow-sm">
                            See AI Agents in Action
                        </button>
                        <button className="bg-transparent text-[#6A27D4] px-8 py-3.5 rounded-full font-semibold text-[15px] whitespace-nowrap transition-all border border-[#E8E5FF] hover:border-[#6A27D4] hover:bg-[#f8f7ff] leading-snug">
                            Book A Demo
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};
