import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DspsAutomatedDispatch = () => {
    const bullets = [
        "Workload balancing",
        "Instant route push",
        "Real-time adjustments"
    ];

    return (
        <section className={`w-full bg-white py-16 md:py-24 flex justify-center px-4 md:px-8 lg:px-24 overflow-hidden ${montserrat.className}`}>
            {/* CHANGED: lg:grid-cols-[1.35fr_1fr] gives the image significantly more width, forcing its height to expand past the text block */}
            <div className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 items-center">
                
                {/* Left Side: Image Content */}
                <div className="relative w-full flex items-center justify-center lg:justify-start order-1">
                    {/* CHANGED: Removed the max-width restriction. Now it spans the entire 1.35fr column */}
                    <div className="relative w-full aspect-[16/10.5]">
                        <Image 
                            src="/assets/images/features/app-dashboard.png" 
                            alt="Automated Dispatch & Driver Assignment Dashboard" 
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'left center' }}
                            priority
                            className="drop-shadow-[0_20px_40px_rgba(47,28,140,0.08)]"
                        />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start w-full order-2 lg:pl-6">
                    
                    <h2 className="font-bold text-[36px] md:text-[42px] lg:text-[46px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-6">
                        <span className="whitespace-nowrap">Automated Dispatch &</span><br />
                        Driver Assignment
                    </h2>

                    <p className="text-[#8B8B9B] font-medium text-[15px] md:text-[16px] leading-[1.65] mb-8 max-w-[480px]">
                        Let Finmile handle dispatching. Jobs are matched to the right drivers in real time, balancing workload and keeping routes on schedule automatically.
                    </p>

                    <div className="flex flex-col gap-4.5 w-full">
                        {bullets.map((bullet, idx) => (
                            <div key={idx} className="flex items-center gap-3.5 mb-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                    <circle cx="12" cy="12" r="10.5" stroke="#6A27D4" strokeWidth="1.5" />
                                    <circle cx="12" cy="12" r="6.5" fill="#6A27D4" />
                                    <path d="M9.5 12L11 13.5L14.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-[#1A1A24] font-semibold text-[15px]">
                                    {bullet}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};