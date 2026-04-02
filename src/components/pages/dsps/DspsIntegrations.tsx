"use client";

import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DspsIntegrations = () => {
    const integrations = [
        "Shopify", "TikTok Shop", "JD.com", "Temu", "Power BI", "Zapier"
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-6 py-10 overflow-hidden relative ${montserrat.className}`}>
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1440px] mx-auto mb-6">
                <h2 className="font-semibold text-[32px] md:text-[40px] text-[#2F1C8C] tracking-tight leading-[1.3]">
                    Integrate Seamlessly with<br />Your Existing Systems
                </h2>
            </div>

            {/* Changed flex-wrap to flex-nowrap and ensured justify-center */}
            <div
                className="w-full max-w-[1440px] z-10 flex flex-nowrap justify-center gap-6 md:gap-8 mb-6 pb-4 md:pb-0 overflow-x-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {integrations.map((integration, idx) => (
                    <div
                        key={idx}
                        className="bg-[#F8F9FA] px-6 md:px-10 py-3 md:py-5 rounded-[20px] flex items-center justify-center min-w-max shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#F0F2F5] transition-transform hover:-translate-y-1 shrink-0"
                    >
                        <span className="text-[#8E8B99] font-bold italic text-[14px] md:text-[18px] tracking-tight">
                            {integration}
                        </span>
                    </div>
                ))}
            </div>

            <Link href="/integrations" className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0 z-10 text-center">
                Explore All Integrations
            </Link>
        </section>
    );
};
