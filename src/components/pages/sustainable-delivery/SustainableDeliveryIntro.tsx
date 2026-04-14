import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const SustainableDeliveryIntro = () => {
    return (
        <section className={`w-full bg-white pt-2 pb-2 md:pt-2 md:pb-0 lg:pt-6 flex justify-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-6">

                {/* Left Side: Image Content */}
                <div className="w-full lg:w-[48%] flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-[580px] aspect-[1.15/1] bg-[#F8F7FF] rounded-[48px] flex items-center justify-center p-8 md:p-12">
                        <div className="relative w-full h-[90%] max-w-[500px]">
                            <Image
                                src="/assets/images/features/laptop-blue.png"
                                alt="Sustainable Delivery Platform"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full lg:w-[52%] flex flex-col items-start lg:pl-8">
                    <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.1] mb-6 text-balance text-[clamp(36px,4vw,48px)]">
                        Sustainable Delivery, Powered by AI
                    </h2>

                    <p className="text-[#2F1C8C] font-bold text-[16px] md:text-[18px] mb-4">
                        Profit meets planet. Smarter routes, cleaner miles, and measurable CO₂ savings.
                    </p>

                    <p className="text-[#64748B] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-8 pr-4">
                        Finmile helps logistics operators and retailers run greener, more efficient delivery networks — without sacrificing speed or cost.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className="bg-[#6A27D4] text-white px-5 md:px-8 py-3.5 rounded-full font-semibold text-[15px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto">
                                Book A Demo
                            </button>
                        </Link>
                        <Link href="/solutions" className="w-full sm:w-auto">
                            <button className="border border-[#7C3AED] text-[#7C3AED] bg-white px-5 md:px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#F5F3FF] transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};
