import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const RetailersAIOperatingSystem = () => {
    return (
        <section className={`w-full bg-white py-12 md:py-16 flex justify-center px-4 md:px-6 lg:px-24 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left Side: Raw Image Content with #F6F4FF background */}
                <div className="relative w-full flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] bg-[#F6F4FF] rounded-2xl">
                    <Image 
                        src="/assets/images/features/app-screen-full.png" 
                        alt="Finmile Mobile App for Retailers" 
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start max-w-[540px]">
                    <h2 className="font-bold text-[32px] md:text-[40px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-6">
                        The AI Operating System for Modern Retail Delivery
                    </h2>

                    <p className="text-[#2F1C8C] font-semibold text-[16px] md:text-[18px] mb-4">
                        Smarter deliveries, happier customers, and better margins.
                    </p>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-8 pr-4">
                        Modern retail demands perfect delivery experiences. Finmile gives retailers the AI-powered tools to exceed customer expectations while controlling costs—from intelligent routing to real-time tracking.
                    </p>

                    <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0 w-fit">
                        Book A Demo
                    </button>
                </div>

            </div>
        </section>
    );
};
