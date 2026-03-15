"use client";

import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const ThreePLIntegrations = () => {
    const integrations = [
        "Shopify", "TikTok Shop", "JD.com", "Temu", "Power BI", "Zapier"
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-16 md:py-24 overflow-hidden relative ${montserrat.className}`}>
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto mb-10 md:mb-16">
                <h2 className="font-semibold text-[32px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.3]">
                    Integrate Seamlessly with<br />Your Existing Systems
                </h2>
            </div>

            {/* Changed flex-wrap to flex-nowrap and ensured justify-center */}
            <div
                className="w-full max-w-[1200px] z-10 flex flex-nowrap justify-center gap-3 md:gap-5 mb-12 md:mb-16 pb-4 md:pb-0 overflow-x-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {integrations.map((integration, idx) => (
                    <div
                        key={idx}
                        className="bg-[#F8F9FA] px-6 md:px-10 py-3 md:py-5 rounded-[16px] flex items-center justify-center min-w-max shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#F0F2F5] transition-transform hover:-translate-y-1 shrink-0"
                    >
                        <span className="text-[#8E8B99] font-bold italic text-[14px] md:text-[18px] tracking-tight">
                            {integration}
                        </span>
                    </div>
                ))}
            </div>

            <button className="bg-[#6A27D4] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] transition-transform hover:scale-105 hover:bg-[#5821B0] z-10">
                Explore All Integrations
            </button>
        </section>
    );
};