import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { montserrat } from '@/lib/fonts';

export const WhatAIAgentsMean = () => {

    // The 6 bullet points from the screenshot
    const benefits = [
        "Fewer manual interventions",
        "Faster dispute resolution",
        "Lower SLA breaches",
        "Higher route efficiency",
        "Reduced support load",
        "Stronger margins"
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-[clamp(24px,4vw,32px)] overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-8 lg:gap-12 z-10 relative">

                {/* Left Side: Text & Checkmarks */}
                <div className="flex flex-col items-start text-left">
                    <h2 className="text-[#2F1C8C] font-semibold leading-[1.2] tracking-normal md:tracking-tight mb-4 md:mb-6 text-balance text-[clamp(32px,4vw,48px)]">
                        What Finmile AI<br className="hidden lg:block" />
                        Agents Mean for Your<br className="hidden lg:block" />
                        Team
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-[500px]">
                        Your team focuses on strategy and growth. Finmile handles the operational complexity.
                    </p>

                    {/* 2-Column Grid for Checkmarks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 w-full max-w-[600px]">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="text-[#6A27D4] w-6 h-6 shrink-0" strokeWidth={2} />
                                <span className="text-[#2F1C8C] font-semibold text-[15px]">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Dashboard Image */}
                <div className="w-full flex justify-center lg:justify-end">
                    <div className="w-full relative rounded-[32px] overflow-hidden drop-shadow-[0_20px_50px_rgba(47,28,140,0.1)]">
                        {/* 
                            The layout needs just the image. 
                            We use standard styling without a gray box to match the provided screenshot, 
                            which shows the white software UI floating directly against white page with a soft shadow.
                        */}
                        <Image
                            src="/assets/images/features/app-screen-white.png"
                            alt="Finmile Route Optimization App"
                            width={500}
                            height={600}
                            className="w-full h-auto object-contain relative z-10"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
