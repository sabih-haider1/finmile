'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const SustainableDeliveryCTA = () => {
    return (
        <section
            className={`w-full bg-white flex flex-col items-center px-6 lg:px-24 py-12 lg:py-16 overflow-hidden relative ${montserrat.className}`}
        >
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-stretch lg:items-center gap-12 lg:gap-8 z-10 relative">

                {/* Left Side: Dashboard Image */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="relative w-full aspect-[1.1/1] overflow-hidden rounded-[32px]">
                        <Image
                            src="/assets/images/features/half-dashboard.png"
                            alt="Finmile Dashboard"
                            fill
                            className="object-cover mix-blend-multiply"
                        />
                    </div>
                </div>

                {/* Right Side: CTA Box */}
                <div className="w-full lg:w-1/2 flex items-stretch">
                    <div className="bg-[#F8F7FF] rounded-[40px] p-10 md:p-14 w-full shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white flex flex-col justify-center items-start">

                        {/* Logo Card */}
                        <div className="bg-white rounded-[24px] py-4 px-8 shadow-[0_15px_40px_rgba(47,28,140,0.06)] inline-flex items-center justify-center mb-10 border border-slate-50">
                            <Image
                                src="/assets/logos/logo-blue.png"
                                alt="Finmile Logo"
                                width={120}
                                height={30}
                                className="h-8 w-auto object-contain"
                            />
                        </div>

                        <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] lg:text-[48px] mb-6 leading-tight max-w-[500px]">
                            Start Reducing Emissions Today
                        </h2>

                        <p className="text-[#6C757D] font-medium text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-[500px]">
                            Join the operators already using Finmile to run cleaner, more profitable fleets. Cut carbon, not corners.
                        </p>

                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="bg-[#6A27D4] text-white px-10 py-4 rounded-full font-bold text-[16px] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 shadow-[0_10px_20px_rgba(106,39,212,0.2)] w-full sm:w-auto">
                                Book A Demo
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
