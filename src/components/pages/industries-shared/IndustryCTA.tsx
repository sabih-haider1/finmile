"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { montserrat } from '@/lib/fonts';
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

interface IndustryCTAProps {
    title: string;
    description: string;
    highlightText?: string;
    image: string;
    imageAlt: string;
    ctaText?: string;
    ctaHref?: string;
}

export const IndustryCTA = ({
    title,
    description,
    highlightText,
    image,
    imageAlt,
    ctaText = "Book A Demo",
    ctaHref = DEMO_FORM_URL
}: IndustryCTAProps) => {
    return (
        <section className={`w-full bg-[#fcfcff] py-6 md:py-6 flex justify-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">

                {/* Left Side: Image Content */}
                <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-start">
                    <div className="w-full h-full rounded-[40px] overflow-hidden flex items-end justify-center">
                        <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="object-contain object-left-bottom mix-blend-multiply"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full lg:w-[50%] flex items-stretch">
                    <div className="bg-[#F8F7FF] rounded-[40px] p-6 text-center items-center md:items-start md:text-left md:p-12 w-full border border-white flex flex-col justify-center shadow-[0_20px_50px_rgba(47,28,140,0.05)]">

                        {/* Logo Chip */}
                        <div className="bg-white rounded-[24px] py-6 px-5 md:px-10 shadow-[0_15px_40px_rgba(47,28,140,0.08)] inline-flex items-center justify-center mb-10 w-fit mx-auto md:mx-0">
                            <Image
                                src="/assets/logos/logo-blue.png"
                                alt="Finmile Logo"
                                width={180}
                                height={45}
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </div>

                        <h2 className="text-[#2F1C8C] font-bold mb-6 leading-tight text-balance text-[clamp(32px,4vw,44px)]">
                            {title}
                        </h2>

                        {highlightText && (
                            <p className="text-[#6A27D4] font-bold text-[18px] mb-4">
                                {highlightText}
                            </p>
                        )}

                        <p className="text-[#64748B] font-medium text-[16px] md:text-[18px] leading-relaxed mb-10">
                            {description}
                        </p>

                        <div className="mt-auto flex justify-center md:justify-start w-full">
                            <Link href={ctaHref} target={ctaHref.startsWith('http') ? '_blank' : undefined} rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}>
                                <button className="bg-[#6A27D4] text-white px-5 md:px-10 py-4 rounded-full font-bold text-[16px] shadow-[0_10px_25px_rgba(106,39,212,0.25)] hover:bg-[#5821B0] transition-all hover:-translate-y-1">
                                    {ctaText}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
