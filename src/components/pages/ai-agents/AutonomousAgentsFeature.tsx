import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { montserrat } from '@/lib/fonts';
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const AutonomousAgentsFeature = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 pt-6 md:pt-6 lg:pt-6 pb-6 lg:pb-6 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center gap-10 lg:gap-12 z-10 relative">

                {/* Left Side: Image Container */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="bg-[#f8f7ff] rounded-[24px] md:rounded-[32px] p-6 md:p-12 w-full flex items-center justify-center relative shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-50">
                        <Image
                            src="/assets/images/features/laptop-blue.png"
                            alt="Finmile Autonomous AI Agents"
                            width={900}
                            height={560}
                            className="w-full h-auto object-contain relative z-10 max-h-[300px] md:max-h-none"
                        />
                    </div>
                </div>

                {/* Right Side: Text & Buttons */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <h2 className="text-[#2F1C8C] font-semibold leading-[1.2] tracking-normal md:tracking-tight mb-6 md:mb-8 text-balance text-[clamp(32px,4vw,48px)]">
                        Autonomous AI<br className="hidden md:block" />
                        Agents That Run Your<br className="hidden md:block" />
                        Logistics
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[18px] leading-relaxed mb-8 md:mb-10 max-w-[500px]">
                        Finmile&apos;s AI Agents observe, decide, and act &mdash; removing operational friction at every step.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/ai-agents" className="bg-[#6A27D4] text-white px-5 md:px-8 py-3.5 rounded-full font-semibold text-[15px] whitespace-nowrap transition-colors hover:bg-[#5821B0] leading-snug shadow-sm text-center">
                            See AI Agents in Action
                        </Link>
                        <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer" className="bg-transparent text-[#6A27D4] px-5 md:px-8 py-3.5 rounded-full font-semibold text-[15px] whitespace-nowrap transition-all border border-[#E8E5FF] hover:border-[#6A27D4] hover:bg-[#f8f7ff] leading-snug text-center">
                            Book A Demo
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};
