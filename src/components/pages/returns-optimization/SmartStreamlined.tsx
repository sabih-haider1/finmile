import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { Button } from '../../ui/Button';

const montserrat = Montserrat({ subsets: ['latin'] });

export const SmartStreamlined = () => {
    return (
        <section className={`w-full bg-[#fcfcff] py-4 lg:py-6 flex justify-center px-6 overflow-hidden relative ${montserrat.className}`}>

            {/* Subtle background decorative elements */}
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#E8E4FF] rounded-full blur-[120px] opacity-50 pointer-events-none" />

            <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">

                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start max-w-[640px] z-10 order-2 lg:order-1">
                    <h2 className="font-semibold text-[36px] md:text-[48px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.1] mb-6">
                        Smarter, Streamlined Reverse Logistics
                    </h2>

                    <p className="text-[#64748B] text-[16px] md:text-[18px] leading-[1.6] mb-10 max-w-[580px]">
                        Finmile's AI returns engine merges return collections directly into your existing delivery routes — no extra runs, no idle vehicles, no wasted time.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            className="bg-[#2F1C8C] hover:bg-[#5821B0] text-white border-none min-w-[180px]"
                            size="lg"
                        >
                            Book a Demo
                        </Button>
                    </div>
                </div>

                {/* Right Side: Mockup Image Content */}
                <div className="relative w-full flex items-center justify-center z-10 order-1 lg:order-2">

                    {/* Shadow/Glow behind the mockup card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-[#6A27D4]/10 rounded-[60px] blur-[80px] -z-10" />

                    <div className="relative w-full aspect-[1.3/1] max-w-[720px] rounded-[48px] overflow-hidden shadow-[0_32px_80px_rgba(47,28,140,0.1)] group">
                        <Image
                            src="/assets/images/features/smartstreamlined.png"
                            alt="Smarter, Streamlined Reverse Logistics"
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
