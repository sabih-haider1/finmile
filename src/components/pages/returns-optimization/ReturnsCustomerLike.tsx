import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

const features = [
    "Label-free, printer-free returns",
    "Doorstep pickup at convenience",
    "Live tracking & status updates",
    "Automatic refund notifications"
];

export const ReturnsCustomerLike = () => {
    return (
        <section className={`w-full bg-white py-4 lg:py-6 flex justify-center px-6 overflow-hidden relative ${montserrat.className}`}>

            {/* Subtle background decorative elements */}
            <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#E8E4FF] rounded-full blur-[120px] opacity-40 pointer-events-none" />

            <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">

                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start max-w-[640px] z-10">
                    <h2 className="font-semibold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.1] mb-8 text-balance text-[clamp(36px,4vw,56px)]">
                        Returns Customers Actually Like
                    </h2>

                    <p className="text-[#64748B] text-[16px] md:text-[18px] leading-[1.6] mb-10 max-w-[580px]">
                        Because an easy return often leads to the next purchase. We make the customer-facing part of returns as smooth as the operational part.
                    </p>

                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4 group">
                                <CheckCircle2 className="w-6 h-6 text-[#6A27D4] shrink-0" />
                                <span className="text-[#1A1A1A] text-[16px] md:text-[18px] font-medium">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Mockup Image Content */}
                <div className="relative w-full flex items-center justify-center z-10">
                    {/* Shadow/Glow behind the mockup card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-[#6A27D4]/10 rounded-[60px] blur-[80px] -z-10" />

                    <div className="relative w-full aspect-[1.4/1] max-w-[750px] group">
                        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                            <Image
                                src="/assets/images/features/return-customer.png"
                                alt="Returns Customers Actually Like Mockup"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
