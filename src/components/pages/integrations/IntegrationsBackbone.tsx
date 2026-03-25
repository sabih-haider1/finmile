"use client";

import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const IntegrationsBackbone = () => {
    return (
        <section className={`w-full bg-[#FAFAFF] flex justify-center px-4 md:px-8 lg:px-24 py-6 md:py-12 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                
                {/* Left Side: Text Content */}
                <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
                    {/* Main Heading */}
                    <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[38px] lg:text-[48px] leading-[1.1] tracking-tight mb-8">
                        The Backbone of the<br />
                        Finmile Operating<br />
                        System
                    </h2>

                    {/* Blue Subheading Label */}
                    <p className="text-[#2F1C8C] font-bold text-[15px] md:text-[16px] leading-[1.4] mb-8 max-w-[550px]">
                        Together, they form a true operating system for modern delivery — 
                        unified, adaptive, and built for scale.
                    </p>

                    {/* Detailed Paragraphs */}
                    <div className="space-y-6">
                        <p className="text-[#8B8B9B] font-medium text-[14px] md:text-[16px] leading-[1.6]">
                            Integrations power the Finmile Operating System — the intelligent backbone that connects order intake, optimization, dispatch, and delivery analytics into one cohesive workflow.
                        </p>
                        <p className="text-[#8B8B9B] font-medium text-[14px] md:text-[16px] leading-[1.6]">
                            Each integration becomes an active part of a larger ecosystem that drives automation, real-time visibility, and control across the entire logistics chain.
                        </p>
                    </div>
                </div>

                {/* Right Side: Laptop Image Container */}
                <div className="w-full lg:w-[52%] flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[620px] aspect-[1.1/1] bg-[#F3F1FF] rounded-[48px] overflow-hidden flex items-center justify-center p-8 md:p-12">
                        <div className="relative w-full h-full">
                            <Image 
                                src="/assets/images/features/laptop-blue.png" 
                                alt="Finmile Operating System Dashboard on Laptop" 
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
