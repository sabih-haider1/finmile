'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { montserrat } from '@/lib/fonts';
import { TrendingDown, Zap, User } from 'lucide-react';
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const ReturnsFinalCTA = () => {
    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-6 lg:px-24 py-[clamp(32px,5vw,48px)] overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-stretch lg:items-center gap-12 lg:gap-[10px] z-10 relative">
                
                {/* Left Side - Dashboard Image with NO background and NO internal spacing */}
                <div className="w-full lg:w-1/2 flex items-stretch justify-center lg:justify-start -ml-6 lg:-ml-24">
                    <div className="w-full h-full flex items-center">
                        <Image 
                            src="/assets/images/half-dashboard.png" 
                            alt="Finmile Returns Dashboard" 
                            width={700}
                            height={600}
                            className="w-full h-auto object-contain mix-blend-multiply"
                        />
                    </div>
                </div>

                {/* Right Side - Content Card */}
                <div className="w-full lg:w-1/2 flex items-stretch">
                    <div className="bg-[#F8F7FF] rounded-3xl md:rounded-[24px] p-6 md:p-10 w-full shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white flex flex-col justify-center">
                        <div>
                            {/* Logo Chip */}
                            <div className="bg-white rounded-[24px] py-4 px-5 md:px-8 shadow-[0_15px_40px_rgba(47,28,140,0.06)] inline-flex items-center justify-center mb-8 border border-slate-50">
                                <Image
                                    src="/assets/logos/logo-blue.png"
                                    alt="Finmile Logo"
                                    width={140}
                                    height={32}
                                    className="h-8 md:h-10 w-auto object-contain"
                                />
                            </div>

                            <h2 className="text-[#2F1C8C] font-bold mb-8 leading-tight uppercase text-balance text-[clamp(32px,4vw,40px)]">
                                Get Started with<br />Smarter Returns
                            </h2>

                            {/* Features - More compact */}
                            <div className="space-y-3 mb-10">
                                <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-[#F0EDFF]/50 max-w-[360px]">
                                    <TrendingDown className="text-[#6A27D4] w-5 h-5" />
                                    <span className="text-[#1A1A1A] font-bold text-[16px]">Cut costs by 40%</span>
                                </div>
                                <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-[#F0EDFF]/50 max-w-[360px]">
                                    <Zap className="text-[#6A27D4] w-5 h-5" />
                                    <span className="text-[#1A1A1A] font-bold text-[16px]">3x Faster Refunds</span>
                                </div>
                                <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-[#F0EDFF]/50 max-w-[360px]">
                                    <User className="text-[#6A27D4] w-5 h-5" />
                                    <span className="text-[#1A1A1A] font-bold text-[16px]">98% CSAT Score</span>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
                            <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer" className="bg-[#6A27D4] text-white px-5 md:px-8 py-3.5 rounded-full font-semibold text-[14px] w-full sm:flex-1 hover:bg-[#5821B0] transition-colors text-center">
                                Book A Demo
                            </Link>
                            <Link href="/contact" className="w-full sm:flex-1 px-5 md:px-8 py-3.5 bg-white text-[#6A27D4] border border-[#6A27D4] rounded-full text-[14px] font-semibold transition-all hover:bg-[#2F1C8C] hover:text-white text-center">
                                Talk To Our Team
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
