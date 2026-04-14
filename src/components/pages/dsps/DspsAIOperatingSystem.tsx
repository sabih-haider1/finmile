import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'] });
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const DspsAIOperatingSystem = () => {
    return (
        <section className={`w-full bg-white py-[clamp(32px,4vw,40px)] flex justify-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Raw Image Content */}
                <div className="relative w-full flex items-center justify-center h-[350px] md:h-[450px] lg:h-[500px]">
                    <Image 
                        src="/assets/images/features/app-screen-white.png" 
                        alt="Finmile Mobile App Routing" 
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start max-w-[540px]">
                    <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.2] mb-4 text-balance text-[clamp(32px,4vw,40px)]">
                        The AI Operating System for Delivery Service Providers
                    </h2>

                    <p className="text-[#2F1C8C] font-semibold text-[16px] md:text-[18px] mb-3">
                        Smarter routes, easier dispatching, and full fleet visibility.
                    </p>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-6 pr-4">
                        Running a delivery business means constant pressure. Finmile gives DSPs the tools to run more efficient, profitable operations—from automated dispatch to real-time visibility.
                    </p>

                    <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer" className="w-fit">
                        <button className="bg-[#6A27D4] text-white px-5 md:px-8 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0 w-fit">
                            Book A Demo
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};