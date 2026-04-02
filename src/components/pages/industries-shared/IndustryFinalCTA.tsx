"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

interface IndustryFinalCTAProps {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
}

export const IndustryFinalCTA = ({
    title = "Ready to Deliver Smarter?",
    description = "Whether you move parcels, people, or parts, Finmile’s AI helps you deliver faster, cleaner, and more efficiently.",
    ctaText = "Book A Demo",
    ctaHref = DEMO_FORM_URL
}: IndustryFinalCTAProps) => {
    return (
        <section className={`w-full bg-white py-6 md:py-6 flex justify-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] bg-[#F8F7FF] rounded-[48px] p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden">

                {/* Ambient Glow behind icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#6A27D4] rounded-full blur-[100px] opacity-10 pointer-events-none" />

                {/* Top Icon Area */}
                <div className="relative mb-10">
                    <div className="w-[80px] h-[80px] rounded-full bg-white shadow-[0_8px_30px_rgba(47,28,140,0.1)] flex items-center justify-center relative z-10 overflow-hidden">
                        <div className="w-[45px] h-[45px] rounded-full bg-[#6A27D4] flex items-center justify-center">
                            <MapPin className="text-white w-6 h-6 fill-white" strokeWidth={2.5} />
                        </div>
                    </div>
                    {/* Pulsing rings or decorative elements could go here if needed to match the mockup's "glow" better */}
                </div>

                <h2 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[52px] lg:text-[60px] tracking-tight leading-[1.1] mb-6 relative z-10">
                    {title}
                </h2>

                <p className="text-[#64748B] font-medium text-[12px] md:text-[14px] lg:text-[16px] max-w-[800px] leading-relaxed mb-10 relative z-10">
                    {description}
                </p>

                <div className="relative z-10">
                    <Link href={ctaHref} target={ctaHref.startsWith('http') ? '_blank' : undefined} rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        <button className="bg-[#6A27D4] text-white px-10 py-4 rounded-full font-bold text-[16px] shadow-[0_10px_25px_rgba(106,39,212,0.25)] hover:bg-[#5821B0] transition-all hover:-translate-y-1 active:translate-y-0">
                            {ctaText}
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};
