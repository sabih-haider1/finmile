"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

interface IndustryHeroIntroProps {
    title: string;
    industryName: string;
    description: string;
    image: string;
    imageAlt: string;
    ctaPrimaryText?: string;
    ctaPrimaryLink?: string;
}

export const IndustryHeroIntro = ({
    title,
    industryName,
    description,
    image,
    imageAlt,
    ctaPrimaryText = "Book A Demo",
    ctaPrimaryLink = "/contact"
}: IndustryHeroIntroProps) => {
    return (
        <section className={`w-full bg-white py-6 md:py-12 flex justify-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side: Image Content */}
                <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
                    <div className="relative w-full aspect-[1.15/1] max-w-[580px] bg-[#F8F7FF]/60 rounded-[48px] p-8 md:p-12 flex items-center justify-center">
                        <div className="relative w-full h-full max-w-[500px]">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full lg:w-[50%] flex flex-col items-start lg:pl-4">
                    <h2 className="font-bold text-[36px] md:text-[48px] lg:text-[52px] text-[#2F1C8C] tracking-tight leading-[1.1] mb-6">
                        {title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-2 mb-8">
                        <span className="text-[#6A27D4] font-bold text-[18px] md:text-[20px]">
                            Industry:
                        </span>
                        <span className="text-[#2F1C8C] font-semibold text-[18px] md:text-[20px]">
                            {industryName}
                        </span>
                    </div>

                    <p className="text-[#64748B] font-medium text-[17px] md:text-[18px] leading-[1.6] mb-12 max-w-[560px]">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href={ctaPrimaryLink} className="w-full sm:w-auto">
                            <button className="bg-[#6A27D4] text-white px-10 py-4 rounded-3xl font-bold text-[16px] shadow-[0_10px_25px_rgba(106,39,212,0.25)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto">
                                {ctaPrimaryText}
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};
