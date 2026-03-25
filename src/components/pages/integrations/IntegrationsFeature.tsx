"use client";

import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const IntegrationsFeature = () => {
    return (
        <section className={`w-full bg-white flex justify-center px-4 md:px-8 lg:px-24 py-4 md:py-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side: Image Container */}
                <div className="w-full lg:w-[48%] flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-[580px] aspect-[1.15/1] bg-[#F7F5FF] rounded-[48px] overflow-hidden flex items-end justify-center">
                        <div className="relative w-[110%] h-[95%] -mb-4">
                            <Image
                                src="/assets/images/features/app-screen-blue.png"
                                alt="Finmile Seamless Connectivity Mobile App"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Text & Actions */}
                <div className="w-full lg:w-[52%] flex flex-col items-start text-left lg:pl-4">

                    {/* Main Heading */}
                    <h2 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[38px] lg:text-[48px] leading-[1.1] tracking-tight mb-8">
                        Seamless Connectivity.<br />
                        Smarter Delivery. Total<br />
                        Control.
                    </h2>

                    {/* Description Paragraphs */}
                    <div className="space-y-6 mb-10">
                        <p className="text-[#2F1C8C] font-medium text-[14px] md:text-[16px] leading-[1.6]">
                            Modern logistics runs on connectivity. Finmile integrates effortlessly with the tools, systems, and marketplaces you already use.
                        </p>
                        <p className="text-[#8B8B9B] font-medium text-[14px] md:text-[16px] leading-[1.6]">
                            From Shopify and TikTok Shop to Power BI and Zapier, Finmile connects your logistics stack end to end with real-time visibility.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-[#6A27D4] text-white px-10 py-3 rounded-full text-[15px] md:text-[16px] shadow-[0_8px_25px_rgba(106,39,212,0.25)] hover:bg-[#5821B0] transition-all hover:-translate-y-1 active:translate-y-0">
                        Free Savings Analysis
                    </button>
                </div>

            </div>
        </section>
    );
};
