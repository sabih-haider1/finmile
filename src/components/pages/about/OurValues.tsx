import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { GlassButton } from '../../ui/glass-button';
import { FrostedGlassCard } from '../../ui/interactive-frosted-glass-card';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OurValues = () => {
    return (
        <section className={`w-full bg-[#0B0616] py-6 flex flex-col items-center px-6 lg:px-24 relative overflow-hidden ${montserrat.className}`}>

            {/* Background Glow Effects (Matched to OurOrigin/GenerativeIntelligence) */}
            <div className="absolute top-[5%] left-[-15%] w-[900px] h-[900px] bg-[#3B257E] rounded-full blur-[160px] opacity-70 pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F1C8C] rounded-[100%] blur-[180px] opacity-80 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-5 pointer-events-none" />

            {/* Header Title (Full Width Above Grid) */}
            <div className="w-full max-w-[1440px] z-10 mb-12 flex flex-col space-y-6 lg:padding-left-0">
                {/* Glass Button above header */}
                <div className="inline-block relative self-start">
                    <GlassButton
                        className="bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10"
                        size="sm"
                    >
                        Our Values
                    </GlassButton>
                </div>

                {/* Heading */}
                <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#FFFFFF] leading-[1.1] tracking-tight">
                    The Finmile Compass
                </h2>
            </div>

            <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-12 items-start z-10">

                {/* Left Side: Card Grid */}
                <div className="flex flex-col lg:pr-6 order-2 lg:order-1">
                    {/* 2x2 Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full relative z-20" style={{ perspective: '1000px' }}>
                        <FrostedGlassCard
                            number="01"
                            title="Innovation"
                            description="We push logistics technology forward through applied AI and automation."
                        />
                        <FrostedGlassCard
                            number="02"
                            title="Sustainability"
                            description="Every feature is designed to reduce emissions and create greener supply chains."
                        />
                        <FrostedGlassCard
                            number="03"
                            title="Customer Obsession"
                            description="We co-build solutions with operators to solve real-world pain points."
                        />
                        <FrostedGlassCard
                            number="04"
                            title="Transparency & Integrity"
                            description="Long-term trust is built on clarity, data, and reliability."
                        />
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full flex justify-center lg:justify-end relative order-1 lg:order-2">
                    <Image
                        src="/assets/images/features/app-screen-white.png"
                        alt="Finmile Platform White UI"
                        width={650}
                        height={480}
                        className="w-full max-w-[650px] h-auto rounded-[32px] drop-shadow-[0_40px_100px_rgba(83,31,209,0.3)] relative z-10"
                    />
                </div>

            </div>
        </section>
    );
};
