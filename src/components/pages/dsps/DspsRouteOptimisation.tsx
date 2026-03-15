import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DspsRouteOptimisation = () => {
    return (
        <section className={`w-full bg-[#13072E] py-16 md:py-24 flex justify-center px-4 md:px-8 lg:px-24 overflow-hidden relative ${montserrat.className}`}>
            
            {/* Background Glow Effect to match the deep violet gradient lighting */}
            <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#3B1C8A] rounded-full blur-[150px] opacity-60 pointer-events-none z-0" />

            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center z-10 relative">
                
                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start w-full pr-0 lg:pr-8">
                    <h2 className="font-bold text-[36px] md:text-[44px] text-white tracking-tight leading-[1.2] mb-5">
                        AI Route Optimization
                    </h2>

                    {/* Paragraph with exact hardcoded line breaks matching the design */}
                    <p className="text-[#D3D1DF] font-medium text-[15px] md:text-[16px] leading-[1.65] mb-10">
                        Automatically plan the fastest, most efficient routes for same-day and next-<br className="hidden xl:block" />
                        day orders. Finmile analyses thousands of delivery combinations every<br className="hidden xl:block" />
                        second — cutting unnecessary miles and fuel.
                    </p>

                    {/* Exact Pill Callout - White bg, purple icon, uniform text size */}
                    <div className="bg-white px-5 py-3.5 rounded-[16px] inline-flex items-center gap-3 shadow-lg">
                        {/* Downward trending zigzag arrow SVG */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7L8.5 13.5L13.5 8.5L22 17" stroke="#2F1C8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 17H22V11" stroke="#2F1C8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="font-semibold text-[14.5px] md:text-[15px] text-[#1A1A24]">
                            -42% reduction in fleet mileage
                        </span>
                    </div>
                </div>

                {/* Right Side: Image Content */}
                <div className="relative w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
                    {/* Utilizing aspect ratio to keep the dashboard image appropriately sized */}
                    <div className="relative w-full max-w-[650px] aspect-[16/11]">
                        <Image 
                            src="/assets/images/features/route-dashboard.png" 
                            alt="AI Route Optimization Dashboard" 
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'right center' }}
                            priority
                            className="drop-shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};