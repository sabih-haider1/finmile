"use client";

import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

interface IndustryProblemSectionProps {
    title: string;
    quote?: string;
    descriptionTop: string;
    descriptionBottom: string;
    image: string;
    imageAlt: string;
}

export const IndustryProblemSection = ({
    title,
    quote,
    descriptionTop,
    descriptionBottom,
    image,
    imageAlt
}: IndustryProblemSectionProps) => {
    return (
        <section className={`w-full bg-[#FAFAFF] py-6 md:py-8 flex justify-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-[50%] flex flex-col items-start order-2 lg:order-1">
                    <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.1] mb-8 text-balance text-[clamp(36px,4vw,52px)]">
                        {title}
                    </h2>

                    {quote && (
                        <p className="text-[#2F1C8C] font-semibold text-[16px] md:text-[16px] lg:text-[18px] leading-[1.4] mb-8">
                            {quote}
                        </p>
                    )}

                    <p className="text-[#64748B] font-medium text-[16px] md:text-[18px] leading-[1.7] mb-6">
                        {descriptionTop}
                    </p>

                    <p className="text-[#64748B] font-medium text-[16px] md:text-[18px] leading-[1.7]">
                        {descriptionBottom}
                    </p>
                </div>

                {/* Right Side: Image Content */}
                <div className="w-full lg:w-[50%] flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative w-full aspect-[1.1/1] max-w-[620px]">
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
        </section>
    );
};
