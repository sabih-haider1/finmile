import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../ui/Button';

const montserrat = Montserrat({ subsets: ['latin'] });
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const ReturnsOptimizationFeature = () => {
    return (
        <section className={`w-full bg-[#fcfcff] py-[clamp(32px,5vw,48px)] flex justify-center px-6 overflow-hidden relative ${montserrat.className}`}>

            {/* Subtle background decorative elements */}
            <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[#E8E4FF] rounded-full blur-[120px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#F3E8FF] rounded-full blur-[120px] opacity-50 pointer-events-none" />

            <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">

                {/* Left Side: Mockup Image Content */}
                <div className="relative w-full flex items-center justify-center z-10">

                    {/* Shadow/Glow behind the mockup card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-[#6A27D4]/10 rounded-[60px] blur-[80px] -z-10" />

                    <div className="relative w-full aspect-[1.3/1] max-w-[720px] rounded-[48px] overflow-hidden shadow-[0_32px_80px_rgba(47,28,140,0.1)] group">
                        <Image
                            src="/assets/images/features/returns-optimization-hero1.png"
                            alt="Returns Optimization Dashboard Mockup"
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start max-w-[640px] z-10">
                    <h2 className="font-semibold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.1] mb-6 text-balance text-[clamp(36px,4vw,48px)]">
                        Make Returns Effortless for Customers — and Efficient for You
                    </h2>

                    <p className="text-[#2F1C8C] font-semibold text-[16px] md:text-[20px] leading-[1.4] mb-6">
                        Turn reverse logistics into a seamless extension of your daily delivery operations.
                    </p>

                    <p className="text-[#64748B] text-[16px] md:text-[16px] leading-[1.6] mb-10">
                        Returns don&apos;t have to be painful or expensive. Finmile&apos;s AI collects, routes, and processes returns faster — without adding vehicles or manual work.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer">
                            <Button
                                className="bg-[#2F1C8C] hover:bg-[#5821B0] text-white border-none min-w-[180px]"
                                size="lg"
                            >
                                Book a Demo
                            </Button>
                        </Link>
                        <Link href="/returns-optimization">
                            <Button
                                variant="outline"
                                className="border-[#2F1C8C] text-[#2F1C8C] hover:bg-[#6A27D4] hover:text-white min-w-[180px]"
                                size="lg"
                            >
                                See How It Works
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};
