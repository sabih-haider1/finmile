import React from 'react';
import Link from 'next/link';
import { montserrat } from '@/lib/fonts';

export const RetailersIntegrations = () => {
    const integrations = [
        "Shopify", "TikTok Shop", "JD.com", "Temu", "Power BI", "Zapier"
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-6 md:px-12 lg:px-24 py-6 md:py-6 overflow-hidden relative ${montserrat.className}`}>
            
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1240px] mx-auto mb-10 md:mb-12">
                <h2 className="font-semibold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.3] text-balance text-[clamp(32px,4vw,40px)]">
                    Integrate Seamlessly with<br />Your Tech Stack
                </h2>
            </div>

            {/* Mobile View: Infinite Marquee Strip */}
            <div className="md:hidden relative w-[calc(100%+3rem)] -mx-6 overflow-hidden mb-8">
                <style>{`
                    @keyframes techMarquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.333333%); }
                    }
                    .animate-tech-marquee {
                        animation: techMarquee 20s linear infinite;
                        width: max-content;
                    }
                `}</style>
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex animate-tech-marquee hover:![animation-play-state:paused] items-center">
                    {[...integrations, ...integrations, ...integrations].map((integration, idx) => (
                        <div key={`${integration}-${idx}`} className="flex-shrink-0 bg-[#FAFAFB] border border-[#F0F2F5] mx-2 py-[14px] px-8 rounded-[20px] flex items-center justify-center shadow-sm">
                            <span className="text-[#8E8B99] font-bold italic text-[15px] tracking-tight">{integration}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid w-full max-w-[1240px] z-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-10 md:mb-12">
                {integrations.map((integration, idx) => (
                    <div
                        key={idx}
                        className="bg-[#FAFAFB] border border-[#F0F2F5] py-4 md:py-[22px] rounded-[24px] flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1"
                    >
                        <span className="text-[#8E8B99] font-bold italic text-[15px] md:text-[17px] tracking-tight">
                            {integration}
                        </span>
                    </div>
                ))}
            </div>

            {/* Button styling updated with accurate purple glow shadow */}
            <Link href="/integrations" className="bg-[#612BDE] text-white px-5 md:px-8 py-4 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_24px_rgba(97,43,222,0.3)] hover:bg-[#5222C0] transition-all hover:-translate-y-0.5 active:translate-y-0 z-10 text-center">
                Explore All Integrations
            </Link>
            
        </section>
    );
};