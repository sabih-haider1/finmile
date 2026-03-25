"use client";

import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const ApiDeveloperPlatform = () => {
    const apiFeatures = [
        "AI route optimisation endpoints",
        "Full order & dispatch lifecycle management",
        "Real-time vehicle tracking & ETA streams",
        "ePOD capture & verification services",
        "Sustainability & performance data feeds"
    ];

    return (
        <section className={`w-full bg-[#0B0616] flex justify-center px-4 md:px-8 lg:px-24 py-6 md:py-6 overflow-hidden relative ${montserrat.className}`}>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2A1B54] rounded-full blur-[160px] opacity-30 pointer-events-none" />

            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">

                {/* Left Side: Developers Content */}
                <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
                    <h2 className="text-white font-semibold text-[32px] md:text-[38px] lg:text-[48px] leading-[1.1] tracking-tight mb-8">
                        Finmile API &<br />
                        Developer Platform
                    </h2>

                    <p className="text-[#ADB5BD] font-medium text-[14px] md:text-[16px] leading-[1.6] mb-8 max-w-[550px]">
                        Finmile offers an open RESTful API for developers who want to embed
                        routing, tracking, and proof-of-delivery directly into their own tools.
                    </p>

                    {/* API Features List */}
                    <div className="space-y-4 mb-10">
                        {apiFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                                <span className="text-white/90 font-medium text-[14px] md:text-[15px]">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Documentation Glass Box */}
                    <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[24px] mb-8">
                        <h5 className="text-white font-bold text-[13px] tracking-[0.05em] uppercase mb-4">
                            DOCUMENTATION & SANDBOX ACCESS:
                        </h5>
                        <p className="text-[#ADB5BD] font-medium text-[13px] md:text-[14px] leading-[1.6] mb-6">
                            Developers can explore the full API in our Developer Portal, complete with schema documentation,
                            SDKs, example payloads, and authentication guides.
                        </p>
                        <button className="bg-[#6A27D4] text-white px-8 py-3 rounded-full text-[14px] font-semibold border border-white/10 hover:bg-[#5821B0] transition-all">
                            Access API Documentation
                        </button>
                    </div>
                </div>

                {/* Right Side: Visual Platform Image */}
                <div className="w-full lg:w-[52%] flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[620px] aspect-[1.2/1] bg-[#2A1B54]/40 rounded-[48px] border border-white/5 overflow-hidden flex items-center justify-center p-4">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/images/features/smartstreamlined.png"
                                alt="Finmile API & Developer Platform Interface"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
