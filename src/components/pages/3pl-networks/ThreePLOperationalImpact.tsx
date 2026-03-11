"use client";

import React from 'react';
import { Quote } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const ThreePLOperationalImpact = () => {
    return (
        <section className={`w-full bg-white py-16 md:py-24 flex flex-col items-center px-4 md:px-6 lg:px-24 relative overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center text-center mx-auto">
                <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-12 md:mb-16">
                    Operational Impact
                </h2>

                {/* 4-column Grid for Stats */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 z-10 relative items-stretch mb-8 md:mb-12">
                    {/* Stat 1 */}
                    <div className="bg-[#F8F7FF] rounded-[20px] md:rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-transparent transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#E8E5FF] w-full relative">
                        <span className="text-[#6A27D4] text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-4">Route Count</span>
                        <div className="flex items-baseline gap-1 mb-4">
                            <h3 className="text-[#2F1C8C] font-semibold text-[44px] md:text-[56px] leading-none">42</h3>
                            <span className="text-[#2F1C8C] font-semibold text-[24px] md:text-[32px]">↓%</span>
                        </div>
                        <p className="text-[#6C757D] font-medium text-[13px] md:text-[14px]">
                            Lower cost per parcel
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-[#F8F7FF] rounded-[20px] md:rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-transparent transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#E8E5FF] w-full relative">
                        <span className="text-[#6A27D4] text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-4">On-Time Rate</span>
                        <div className="flex items-baseline gap-1 mb-4">
                            <h3 className="text-[#2F1C8C] font-semibold text-[44px] md:text-[56px] leading-none">99.9</h3>
                            <span className="text-[#2F1C8C] font-semibold text-[24px] md:text-[32px]">↑%</span>
                        </div>
                        <p className="text-[#6C757D] font-medium text-[13px] md:text-[14px]">
                            Stronger client SLAs
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-[#F8F7FF] rounded-[20px] md:rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-transparent transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#E8E5FF] w-full relative">
                        <span className="text-[#6A27D4] text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-4">Driver Productivity</span>
                        <div className="flex items-baseline gap-1 mb-4">
                            <h3 className="text-[#2F1C8C] font-semibold text-[44px] md:text-[56px] leading-none">20</h3>
                            <span className="text-[#2F1C8C] font-semibold text-[24px] md:text-[32px]">↑%</span>
                        </div>
                        <p className="text-[#6C757D] font-medium text-[13px] md:text-[14px]">
                            Same volume, fewer vehicles
                        </p>
                    </div>

                    {/* Stat 4 */}
                    <div className="bg-[#F8F7FF] rounded-[20px] md:rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-transparent transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#E8E5FF] w-full relative">
                        <span className="text-[#6A27D4] text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-4">Admin Time</span>
                        <div className="flex items-baseline gap-1 mb-4">
                            <h3 className="text-[#2F1C8C] font-semibold text-[44px] md:text-[56px] leading-none">70</h3>
                            <span className="text-[#2F1C8C] font-semibold text-[24px] md:text-[32px]">↓%</span>
                        </div>
                        <p className="text-[#6C757D] font-medium text-[13px] md:text-[14px]">
                            Automated reporting
                        </p>
                    </div>
                </div>

                {/* Bold Testimonial Card */}
                <div className="w-full bg-[#2F1E85] rounded-[24px] p-10 md:p-16 lg:px-24 flex flex-col items-center text-center shadow-[0_20px_40px_rgba(47,30,133,0.15)] relative overflow-hidden">
                    {/* Inner highlight glow */}
                    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-white opacity-[0.03] blur-[80px] pointer-events-none rounded-full" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#6A27D4] opacity-[0.4] blur-[100px] pointer-events-none rounded-full" />

                    <Quote className="w-10 h-10 text-white opacity-80 mb-6 relative z-10" fill="currentColor" />

                    <p className="text-white font-medium text-[18px] md:text-[22px] lg:text-[24px] leading-[1.6] mb-8 relative z-10 max-w-[800px] mx-auto">
                        "We operate across six clients and three depots — Finmile unified it all. Routing went from hours to minutes, and client SLA reports generate automatically."
                    </p>

                    <div className="relative z-10 flex flex-col items-center">
                        <span className="text-white font-semibold text-[15px] mb-1 tracking-wide">— Head of Operations</span>
                        <span className="text-white/70 text-[13px] tracking-wide">Network 3PL</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
