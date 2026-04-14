"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Target, CheckCircle2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const SustainableDeliveryFeatures = () => {
    // Default to the second tab as seen in screenshot
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 0,
            title: "Route Optimization for Carbon Savings",
            icon: <Target className="w-7 h-7 text-white" strokeWidth={2} />,
            description: "Maximize efficiency to minimize your carbon footprint. Intelligent routing reduces unnecessary mileage and empty running, ensuring the most eco-friendly delivery paths.",
            bullet: "AI-driven algorithms for emission-focused routing",
            image: "/assets/images/features/app-dashboard.png"
        },
        {
            id: 1,
            title: "EV and E-Cargo Bike Optimization",
            icon: <Target className="w-7 h-7 text-white" strokeWidth={2} />,
            description: "Plan routes that play to the strengths of sustainable fleets. Account for battery range, charge points, and payload automatically. Mix vehicle types intelligently within one network.",
            bullet: "Range-aware planning & multi-vehicle orchestration",
            image: "/assets/images/features/app-dashboard.png"
        },
        {
            id: 2,
            title: "Bio-Diesel & Hybrid Fleet Planning",
            icon: <Target className="w-7 h-7 text-white" strokeWidth={2} />,
            description: "Efficiently orchestrate mixed fleets leveraging bio-diesel and hybrid vehicles. Dynamic allocation considers fuel types and zones to keep deliveries sustainable.",
            bullet: "Smart allocation for mixed-fuel fleet operations",
            image: "/assets/images/features/app-dashboard.png"
        },
        {
            id: 3,
            title: "Live CO₂ Tracking and Reporting",
            icon: <Target className="w-7 h-7 text-white" strokeWidth={2} />,
            description: "Monitor and report your fleet's carbon emissions in real time. Generate comprehensive sustainability reports to meet compliance standards and corporate goals.",
            bullet: "Real-time emission monitoring and analytics",
            image: "/assets/images/features/app-dashboard.png"
        }
    ];

    const currentTab = tabs[activeTab];

    return (
        <section className={`w-full bg-white pt-0 pb-[clamp(64px,10vw,200px)] flex flex-col items-center px-6 ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] flex flex-col items-center">

                {/* Header Sequence */}
                <div className="text-center mb-6 lg:mb-6">
                    <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.1] mb-2 text-balance text-[clamp(36px,4vw,48px)]">
                        Greener Logistics, Delivered
                    </h2>
                    <p className="text-[#64748B] font-medium text-[16px] md:text-[18px]">
                        Measurable impact powered by operational intelligence.
                    </p>
                </div>

                {/* Tabs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-2">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center justify-center text-center px-4 py-2 md:py-3 rounded-[16px] font-semibold text-[15px] md:text-[16px] transition-all duration-300 border ${isActive
                                    ? "bg-[#6A27D4] text-white border-[#6A27D4] shadow-[0_8px_20px_rgba(106,39,212,0.15)]"
                                    : "bg-white text-[#2F1C8C] border-[#F1F5F9] hover:bg-[#F8F7FF] hover:border-[#E2E8F0] shadow-sm"
                                    } whitespace-pre-wrap leading-tight h-full`}
                            >
                                {tab.title}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="w-full bg-[#FAFAFF] rounded-[40px] border border-[#F1F5F9]/50 shadow-[0_4px_30px_rgb(0,0,0,0.02)] grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-12 lg:p-14 lg:pr-6 items-center overflow-hidden">

                    {/* Left Column Text */}
                    <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-4">
                        <div className="w-[60px] h-[60px] rounded-[16px] bg-[#6A27D4] flex items-center justify-center mb-8 shadow-[0_8px_20px_rgba(106,39,212,0.2)]">
                            {currentTab.icon}
                        </div>

                        <h3 className="font-bold text-[32px] md:text-[36px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-6">
                            {currentTab.title}
                        </h3>

                        <p className="text-[#64748B] font-medium text-[15px] md:text-[17px] leading-[1.65] mb-8">
                            {currentTab.description}
                        </p>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-0.5">
                                <CheckCircle2 className="w-[22px] h-[22px] text-white fill-[#6A27D4]" strokeWidth={2.5} />
                            </div>
                            <span className="text-[#1E1B4B] font-semibold text-[15px] md:text-[16px] leading-snug">
                                {currentTab.bullet}
                            </span>
                        </div>
                    </div>

                    {/* Right Column Image */}
                    <div className="lg:col-span-7 flex justify-end items-end h-[350px] sm:h-[450px] lg:h-[400px] w-full relative -mr-6 -mb-14 lg:-mb-14 lg:-mr-6">
                        <Image
                            src={currentTab.image}
                            alt={currentTab.title}
                            fill
                            className="object-contain object-right-bottom"
                            priority
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};
