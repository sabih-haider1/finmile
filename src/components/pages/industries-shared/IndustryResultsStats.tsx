"use client";

import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

interface StatItem {
    label: string;
    value: string;
    description: string;
}

interface IndustryResultsStatsProps {
    title: string;
    subtitle: string;
    stats: StatItem[];
}

export const IndustryResultsStats = ({ title, subtitle, stats }: IndustryResultsStatsProps) => {
    return (
        <section className={`w-full bg-[#0B0616] py-8 md:py-12 md:py-20 md:py-32 flex justify-center px-6 overflow-hidden relative ${montserrat.className}`}>
            
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#6A27D4] rounded-full blur-[150px] opacity-20" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#2F1C8C] rounded-full blur-[150px] opacity-20" />
            </div>

            <div className="w-full max-w-[1240px] flex flex-col items-center relative z-10">
                
                {/* Header Content */}
                <div className="text-center max-w-[900px] mb-16">
                    <h2 className="font-bold text-white tracking-normal md:tracking-tight leading-[1.1] mb-6 text-balance text-[clamp(36px,4vw,48px)]">
                        {title}
                    </h2>
                    <p className="text-[#ADB5BD] font-medium text-[15px] md:text-[16px] leading-[1.6]">
                        {subtitle}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="bg-white/5 backdrop-blur-sm rounded-[24px] p-6 text-center items-center md:p-8 flex flex-col md:items-start md:text-left border border-white/10 transition-all hover:bg-white/10 hover:border-white/20"
                        >
                            <span className="text-white/60 font-bold text-[12px] uppercase tracking-wider mb-6">
                                {stat.label}
                            </span>
                            <div className="text-white font-bold text-[48px] md:text-[56px] leading-tight mb-4">
                                {stat.value}
                            </div>
                            <p className="text-[#ADB5BD] font-medium text-[14px] leading-[1.5]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
