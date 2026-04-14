import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const DeliverySoftwareHero = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-12 md:py-16 lg:py-20 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center z-10 relative">

                {/* Left Side: Image */}
                <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1 relative mt-12 lg:mt-0">
                    <div className="w-full max-w-[550px] flex items-center justify-center">
                        <Image
                            src="/assets/images/features/screen-live.png"
                            alt="Finmile Delivery Software Live Tracking"
                            width={550}
                            height={550}
                            priority
                            className="w-full h-auto drop-shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500 object-contain"
                        />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start text-left order-1 lg:order-2">
                    <h2 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight mb-6">
                        Slash Your Delivery<br />
                        Costs by up to 42%
                    </h2>

                    <p className="text-[#2F1C8C] font-semibold text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] md:leading-[1.7] mb-4 max-w-[500px]">
                        AI-powered logistics that reduce cost, increase speed, and delight customers.
                    </p>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] md:leading-[1.7] mb-10 max-w-[500px]">
                        Stop burning cash on inefficient routes. Finmile&apos;s AI-powered delivery software transforms your logistics — from first mile to happy customer.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 w-full md:w-auto">
                        <Link
                            href={DEMO_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#6A27D4] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-colors w-full sm:w-auto whitespace-nowrap text-center"
                        >
                            Free Savings Analysis
                        </Link>
                        <Link href="/delivery-software#how-it-works" className="bg-white text-[#6A27D4] border-2 border-[#E8E5FF] px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-[14px] md:text-[15px] hover:bg-[#F8F7FF] transition-colors w-full sm:w-auto whitespace-nowrap shadow-[0_4px_10px_rgba(47,28,140,0.02)] text-center">
                            See How It Works
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};
