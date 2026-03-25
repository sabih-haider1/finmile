'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

interface JoinTheJourneyProps {
    heading?: React.ReactNode;
    text1?: React.ReactNode;
    text2?: React.ReactNode;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

export const JoinTheJourney: React.FC<JoinTheJourneyProps> = ({
    heading = "Join the Journey",
    text1 = "Finmile is powering the future of intelligent logistics.",
    text2 = (
        <>
            From global e-commerce brands to last-mile startups, we’re<br className="hidden md:block" />
            helping businesses deliver more efficiently, more transparently,<br className="hidden md:block" />
            and more sustainably.
        </>
    ),
    secondaryButtonText = "Calculate your route savings",
    secondaryButtonHref
}) => {
    const secondaryButtonClass = "w-full sm:flex-1 px-4 lg:px-6 py-3 bg-white text-[#6A27D4] border border-[#6A27D4] rounded-[80px] text-[14px] font-medium whitespace-normal sm:whitespace-nowrap transition-all hover:bg-[#2F1C8C] hover:text-white leading-snug text-center";

    return (
        <section
            className={`w-full bg-[#fcfcff] flex flex-col items-center px-6 lg:px-24 py-6 lg:py-6 overflow-hidden relative ${montserrat.className}`}
        >
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-stretch lg:items-center xl:items-start gap-12 lg:gap-[10px] z-10 relative">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 flex items-stretch justify-center lg:justify-start">
                    <div className="w-full h-full flex items-center">
                        <Image
                            src="/assets/images/half-dashboard.png"
                            alt="Finmile Dashboard"
                            width={600}
                            height={500}
                            className="w-full h-full object-cover mix-blend-multiply"
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 flex items-stretch">
                    <div className="bg-[#F8F7FF] rounded-3xl md:rounded-[24px] p-6 md:p-10 w-full shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white flex flex-col justify-center">
                        <div>
                            {/* Logo Chip */}
                            <div className="bg-white rounded-[24px] py-6 px-8 shadow-[0_15px_40px_rgba(47,28,140,0.06),inset_0_4px_12px_rgba(0,0,0,0.04)] inline-flex items-center justify-center mb-10 border border-slate-50">
                                <Image
                                    src="/assets/logos/logo-blue.png"
                                    alt="Finmile Logo"
                                    width={160}
                                    height={40}
                                    className="h-8 md:h-10 w-auto object-contain"
                                />
                            </div>

                            <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] mb-6 mt-8 leading-tight">
                                {heading}
                            </h2>

                            {/* Paragraphs */}
                            <div className="mb-14 pt-6">
                                {text1 && (
                                    <p className="text-[#6C757D] font-medium text-[16px] md:text-[18px] leading-relaxed mb-6">
                                        {text1}
                                    </p>
                                )}
                                {text2 && (
                                    <p className="text-[#6C757D] font-medium text-[16px] md:text-[18px] leading-relaxed">
                                        {text2}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center w-full mt-auto">
                            <button className="bg-[#6A27D4] text-white px-6 lg:px-8 py-3 rounded-full font-semibold text-[14px] lg:text-[15px] whitespace-normal sm:whitespace-nowrap w-full sm:flex-1 hover:bg-[#5821B0] transition-colors leading-snug">
                                Book A Demo
                            </button>

                            {secondaryButtonHref ? (
                                <Link href={secondaryButtonHref} className={secondaryButtonClass}>
                                    {secondaryButtonText}
                                </Link>
                            ) : (
                                <button className={secondaryButtonClass}>
                                    {secondaryButtonText}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
