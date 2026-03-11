"use client";

import React from 'react';
import { Leaf } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const ThreePLSustainability = () => {
    return (
        <section className={`w-full bg-[#FAFAFF] py-16 md:py-24 flex justify-center px-6 md:px-12 lg:px-24 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start max-w-[540px]">
                    {/* ESG Badge */}
                    <div className="bg-[#E2FBF0] text-[#00A859] px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-6 flex items-center gap-1.5">
                        <Leaf className="w-3.5 h-3.5" strokeWidth={2.5} />
                        ESG ADVANTAGE
                    </div>

                    {/* Heading */}
                    <h2 className="font-bold text-[36px] md:text-[44px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.15] mb-6">
                        Sustainability That<br /> Wins Contracts
                    </h2>

                    {/* Description */}
                    <p className="text-[#6B7280] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-8 pr-4">
                        Show clients you're running smarter, cleaner operations.
                        Finmile supports EV routing, e-cargo bikes, and real-time
                        CO₂ tracking built in.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_8px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0 w-fit">
                        Learn More About Sustainable Logistics
                    </button>
                </div>

                {/* Right Side: Graphic Visual */}
                <div className="flex items-center justify-center lg:justify-end relative w-full pt-8 lg:pt-0">

                    {/* Main Concentric Container */}
                    <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] flex items-center justify-center">

                        {/* Outer Soft Shadow Base */}
                        <div className="absolute inset-0 bg-[#E8E8F2] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] opacity-60 translate-y-4 scale-95" />

                        {/* Outer Thick Lavender Track */}
                        <div className="absolute inset-0 rounded-full border-[16px] md:border-[20px] border-[#EAEBFA] bg-transparent shadow-inner" />

                        {/* Inner White Circle with Solid Purple Border */}
                        <div className="relative w-[210px] h-[210px] md:w-[250px] md:h-[250px] bg-white rounded-full border-[6px] md:border-[8px] border-[#6A27D4] flex items-center justify-center shadow-[inset_0_4px_10px_rgba(0,0,0,0.03)] z-10">

                            {/* Inner Green Leaf */}
                            <Leaf className="w-16 md:w-20 h-16 md:h-20 text-[#00E07E]" strokeWidth={2} />

                        </div>

                        {/* Floating Data Badge */}
                        <div className="absolute top-[12%] -right-[5%] md:-right-[2%] bg-white px-5 md:px-6 py-3 md:py-3.5 rounded-[12px] md:rounded-[16px] shadow-[0_15px_30px_rgba(0,0,0,0.08)] z-20 flex items-center">
                            <span className="font-bold text-[#2F1C8C] text-[15px] md:text-[16px] tracking-tight whitespace-nowrap">
                                -3.4t CO<sub className="text-[10px] md:text-[11px] font-bold bottom-[0.1em]">2</sub>
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};