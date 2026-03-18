import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const AiRouteOptimization = () => {
    return (
        <section className={`w-full bg-white py-6 md:py-6 flex justify-center px-4 md:px-6 lg:px-24 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                
                {/* Left Side: Image Content */}
                <div className="relative w-full flex items-center justify-center h-[350px] md:h-[450px] lg:h-[500px]">
                    <div className="relative w-full h-full">
                        <Image 
                            src="/assets/images/features/route-dashboard.png" 
                            alt="AI Route Optimization Dashboard" 
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start w-full">
                    <h2 className="font-bold text-[36px] md:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-5">
                        AI Route Optimization
                    </h2>

                    <p className="text-[#8B8B9B] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-8 max-w-[540px]">
                        Automatically plan the fastest, most efficient routes for same-day and next-day orders. Finmile analyses thousands of delivery combinations every second — cutting unnecessary miles and fuel.
                    </p>

                    {/* Metric Badge / Pill */}
                    <div className="inline-flex items-center gap-3 bg-[#F6F5FF] rounded-[14px] px-5 py-3">
                        {/* Downward trend arrow SVG */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7L8.5 13.5L13.5 8.5L22 17" stroke="#2F1C8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 17H22V11" stroke="#2F1C8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="font-semibold text-[14px] md:text-[15px] text-[#212529]">
                            -42% reduction in fleet mileage
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};