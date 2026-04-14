"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export interface IndustryFeatureTab {
    id: number;
    title: string;
    icon: React.ReactNode;
    description: string;
    bullet: string;
    image: string;
}

interface IndustryFeaturesProps {
    title: string;
    subtitle?: string;
    tabs: IndustryFeatureTab[];
}

export const IndustryFeatures = ({ title, subtitle, tabs }: IndustryFeaturesProps) => {
    // Default to the second tab as seen in screenshot (if 4+ tabs) or the first
    const [activeTab, setActiveTab] = useState(tabs.length > 1 ? 1 : 0);

    if (tabs.length === 0) return null;

    const currentTab = tabs[activeTab] || tabs[0];

    return (
        <section className={`w-full bg-white pt-0 pb-[clamp(64px,10vw,200px)] flex flex-col items-center px-6 ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] flex flex-col items-center">

                {/* Header Sequence */}
                <div className="text-center mb-6 lg:mb-6">
                    <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.1] mb-2 text-balance text-[clamp(36px,4vw,48px)]">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-[#64748B] font-medium text-[16px] md:text-[18px]">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Tabs Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(tabs.length, 4)} gap-4 w-full mb-2`}>
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
