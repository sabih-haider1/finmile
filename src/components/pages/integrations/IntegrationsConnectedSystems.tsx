"use client";

import React from 'react';
import { Montserrat } from 'next/font/google';
import { Layers, Cpu, Zap, Activity } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const IntegrationsConnectedSystems = () => {
    const systemsFeatures = [
        {
            icon: <Layers className="w-6 h-6 text-[#6A27D4]" />,
            title: "Instant Order Sync",
            description: "Sync orders from commerce platforms without manual entry or delays."
        },
        {
            icon: <Cpu className="w-6 h-6 text-[#6A27D4]" />,
            title: "AI Route Planning",
            description: "Automated planning via live data streams for maximum efficiency."
        },
        {
            icon: <Zap className="w-6 h-6 text-[#6A27D4]" />,
            title: "Unified Analytics",
            description: "Holistic visibility across fleets, depots, and 3PL partners."
        },
        {
            icon: <Activity className="w-6 h-6 text-[#6A27D4]" />,
            title: "Smarter Orchestration",
            description: "Orchestrate deliveries with zero-latency data flows."
        }
    ];

    return (
        <section className={`w-full bg-[#FAFAFF] py-6 md:py-6 flex flex-col items-center px-4 md:px-8 lg:px-24 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col items-center text-center">

                {/* Main Heading */}
                <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
                    The Cost of Disconnected Systems
                </h2>

                {/* Subheading */}
                <p className="text-[#8B8B9B] font-medium text-[15px] md:text-[17px] max-w-[800px] leading-[1.6] mb-6">
                    Disconnected systems cost time, accuracy, and money. Finmile eliminates these gaps by integrating directly into your operational environment.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full mb-6 px-4">
                    {systemsFeatures.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-50 mb-6 group hover:-translate-y-1 transition-transform">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h4 className="text-[#2F1C8C] font-bold text-[17px] md:text-[18px] mb-3">
                                {feature.title}
                            </h4>

                            {/* Description */}
                            <p className="text-[#8B8B9B] font-medium text-[14px] md:text-[15px] leading-[1.6] max-w-[260px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Text & Button */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-[#8B8B9B] font-semibold text-[15px] md:text-[16px]">
                        Every integration extends your operational intelligence.
                    </p>

                    <button className="bg-[#6A27D4] text-white px-10 py-3.5 rounded-full text-[15px] md:text-[16px] shadow-[0_8px_25px_rgba(106,39,212,0.25)] hover:bg-[#5821B0] transition-all hover:-translate-y-1 active:translate-y-0">
                        See How Finmile Connects Everything
                    </button>
                </div>

            </div>
        </section>
    );
};
