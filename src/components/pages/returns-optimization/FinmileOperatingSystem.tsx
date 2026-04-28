import React from 'react';
import { montserrat } from '@/lib/fonts';
import Image from 'next/image';
import { Database, Monitor, TrendingUp } from 'lucide-react';

const features = [
    {
        icon: <Database className="w-6 h-6 text-[#6A27D4]" />,
        title: "Unified Logic",
        description: "Delivery and returns are handled by the same AI brain."
    },
    {
        icon: <Monitor className="w-6 h-6 text-[#6A27D4]" />,
        title: "Control Tower Visibility",
        description: "Track every return from doorstep to depot in real time."
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-[#6A27D4]" />,
        title: "Driver-Friendly Tools",
        description: "Intuitive mobile app for scanning and verifying returns."
    }
];

export const FinmileOperatingSystem = () => {
    return (
        <section className={`w-full bg-white py-10 lg:py-[clamp(40px,5vw,64px)] flex justify-center px-6 overflow-hidden relative ${montserrat.className}`}>
            
            {/* Ambient background decorative elements */}
            <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#E8E4FF] rounded-full blur-[120px] opacity-40 pointer-events-none" />

            <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">
                
                {/* Left Side: Mockup Image Content */}
                <div className="relative w-full flex items-center justify-center z-10">
                    {/* Glowing card background for the mockup */}
                    <div className="relative w-full aspect-square max-w-[650px] rounded-[48px] overflow-hidden bg-[#F8F7FF] flex items-center justify-center p-8 group">
                        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                            <Image 
                                src="/assets/images/features/finmile-operations.png" 
                                alt="Finmile Operating System for Reverse Logistics" 
                                fill
                                style={{ objectFit: 'contain' }}
                                className="drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start max-w-[680px] z-10">
                    <h2 className="font-semibold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.1] mb-8 text-balance text-[clamp(36px,4vw,56px)]">
                        Finmile Operating System for Reverse Logistics
                    </h2>

                    <p className="text-[#64748B] text-[16px] md:text-[18px] leading-[1.6] mb-12 max-w-[600px]">
                        Returns optimization is a native capability of Finmile OS — the same platform powering route optimization, live tracking, driver workflows, and analytics.
                    </p>

                    <div className="space-y-10 w-full">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-6 group">
                                <div className="shrink-0 w-14 h-14 bg-white rounded-full shadow-[0_8px_20px_rgba(47,28,140,0.06)] border border-[#F0EDFF] flex items-center justify-center group-hover:shadow-[0_12px_30px_rgba(47,28,140,0.12)] transition-all">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[#1A1A1A] text-[20px] font-bold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#64748B] text-[16px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
