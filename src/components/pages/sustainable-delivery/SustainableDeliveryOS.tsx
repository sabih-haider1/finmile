"use client";

import React from 'react';
import Image from 'next/image';
import { montserrat } from '@/lib/fonts';

export const SustainableDeliveryOS = () => {
    return (
        <section className={`w-full bg-[#0B0616] py-2 lg:py-2 flex flex-col items-center px-6 relative z-20 ${montserrat.className}`}>
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(47,28,140,0.15),transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(106,39,212,0.1),transparent_50%)] pointer-events-none" />

            <div className="w-full max-w-[1440px] flex flex-col items-center relative z-10">

                {/* Quote Card - Overlapping */}
                <div className="w-full max-w-[900px] bg-[#3D2D99] rounded-[32px] p-6 md:p-6 lg:p-6 relative overflow-hidden flex flex-col items-center text-center mb-16 lg:mb-24 shadow-2xl -mt-32 lg:-mt-40">
                    <div className="mb-6 opacity-80">
                        <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 15V0H15V15H7.5C7.5 19.1421 10.8579 22.5 15 22.5V30C6.71573 30 0 23.2843 0 15Z" fill="white" />
                            <path d="M25 15V0H40V15H32.5C32.5 19.1421 35.8579 22.5 40 22.5V30C31.7157 30 25 23.2843 25 15Z" fill="white" />
                        </svg>
                    </div>

                    <h3 className="text-white font-semibold text-[22px] md:text-[28px] lg:text-[32px] leading-[1.35] mb-4 max-w-[800px]">
                        &ldquo;Finmile helped us prove that sustainability and efficiency aren&apos;t opposites — they&apos;re the same thing.&rdquo;
                    </h3>

                    <div className="flex flex-col items-center">
                        <span className="text-white font-semibold text-[16px] md:text-[18px]">
                            — Sustainability Lead
                        </span>
                        <span className="text-white/50 text-[14px] mt-1">
                            National Retailer
                        </span>
                    </div>
                </div>

                {/* Operating System Section */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:items-start max-w-[1240px]">

                    {/* Image Area - Larger and no border */}
                    <div className="w-full flex justify-center lg:justify-start">
                        <div className="relative w-full aspect-[1.1/1] max-w-[600px]">
                            <Image
                                src="/assets/images/features/half-dashboard.png"
                                alt="Finmile Operating System"
                                fill
                                className="object-contain object-left-top"
                                priority
                            />
                        </div>
                    </div>

                    {/* Text Area - Closer to mockup typography */}
                    <div className="w-full flex flex-col items-start lg:pt-4">
                        <h2 className="font-bold text-white tracking-normal md:tracking-tight leading-[1.1] mb-8 text-balance text-[clamp(32px,4vw,46px)]">
                            The Finmile Operating System for Sustainable Logistics
                        </h2>

                        <div className="space-y-6 text-white/80">
                            <p className="font-medium text-[15px] md:text-[16px] leading-[1.6]">
                                Behind every CO₂-saving route and optimized fleet is the Finmile Operating System — an end-to-end logistics platform that unites planning, execution, tracking, and analytics.
                            </p>

                            <p className="font-medium text-[15px] md:text-[16px] leading-[1.6]">
                                From AI-driven route optimization and dynamic fleet management to driver tools and real-time performance dashboards, Finmile connects every aspect of your delivery network.
                            </p>

                            <p className="font-medium text-[15px] md:text-[16px] leading-[1.6]">
                                This unified system ensures that sustainability goals and operational performance move together — smarter routes, cleaner miles, measurable results.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};