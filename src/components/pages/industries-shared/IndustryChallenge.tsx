"use client";

import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { CheckCircle2 } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

interface IndustryChallengeProps {
    title: string;
    description: string;
    bullets: string[];
    bottomText?: string;
    image: string;
    imageAlt: string;
}

export const IndustryChallenge = ({ title, description, bullets, bottomText, image, imageAlt }: IndustryChallengeProps) => {
    return (
        <section className={`w-full bg-white py-0 md:py-0 flex justify-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-[52%] flex flex-col items-start lg:pr-8 order-2 lg:order-1">
                    <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.1] mb-6 text-balance text-[clamp(36px,4vw,48px)]">
                        {title}
                    </h2>

                    <p className="text-[#64748B] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-8 pr-4">
                        {description}
                    </p>

                    <ul className="space-y-5 mb-8 w-full">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-[22px] h-[22px] text-white fill-[#6A27D4]" strokeWidth={2.5} />
                                </div>
                                <span className="text-[#1E1B4B] font-semibold text-[14px] md:text-[15px] leading-snug">
                                    {bullet}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {bottomText && (
                        <p className="text-[#2F1C8C] font-semibold text-[15px] md:text-[17px] leading-[1.5]">
                            {bottomText}
                        </p>
                    )}
                </div>

                {/* Right Side: Image Content */}
                <div className="w-full lg:w-[48%] flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
                    <div className="relative w-full max-w-[580px] aspect-[1.15/1] bg-white rounded-[48px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center p-8">
                        <div className="relative w-full h-[90%] max-w-[500px]">
                        <Image
                            src={image}
                            alt={imageAlt}
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
