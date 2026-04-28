"use client";

import React from 'react';
import { montserrat } from '@/lib/fonts';

interface SolutionCard {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface IndustrySolutionCardsProps {
    title: string;
    subtitle: string;
    cards: SolutionCard[];
}

export const IndustrySolutionCards = ({ title, subtitle, cards }: IndustrySolutionCardsProps) => {
    return (
        <section className={`w-full bg-white py-6 md:py-6 flex justify-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center max-w-[900px] mb-16">
                    <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.1] mb-6 text-balance text-[clamp(36px,4vw,48px)]">
                        {title}
                    </h2>
                    <p className="text-[#64748B] font-medium text-[15px] md:text-[16px] leading-[1.6]">
                        {subtitle}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#F8F7FF] rounded-[24px] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#F1F5F9]/50 transition-all hover:shadow-[0_10px_30px_rgba(106,39,212,0.05)] hover:-translate-y-1"
                        >
                            <div className="w-[60px] h-[60px] rounded-[16px] bg-white flex items-center justify-center mb-6 shadow-sm">
                                <div className="text-[#6A27D4]">
                                    {card.icon}
                                </div>
                            </div>
                            <h3 className="font-bold text-[18px] text-[#2F1C8C] mb-3">
                                {card.title}
                            </h3>
                            <p className="text-[#64748B] font-medium text-[14px] leading-[1.5]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
