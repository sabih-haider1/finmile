import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const ThreePLHero = () => {
    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-4 md:px-6 lg:px-24 py-16 md:py-24 relative overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center z-10 relative">
                
                {/* Left Side: Image */}
                <div className="flex justify-center w-full order-2 lg:order-1 relative mt-12 lg:mt-0">
                    {/* Subtle glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#2F1C8C] rounded-full blur-[100px] opacity-10 pointer-events-none" />
                    <img
                        src="/assets/images/features/app-screen-full.png"
                        alt="Finmile OS Interface"
                        className="w-full max-w-[650px] h-auto rounded-[24px] relative z-10 object-contain drop-shadow-2xl mix-blend-multiply"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 lg:pl-10">
                    <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[1.2] tracking-tight mb-6">
                        Finmile OS — The AI<br className="hidden lg:block"/> Operating System for<br className="hidden lg:block"/> 3PLs & Courier Networks
                    </h2>

                    <h3 className="text-[#2F1C8C] font-semibold text-[15px] md:text-[16px] mb-4">
                        The AI platform built for scale, performance, and profitability.
                    </h3>

                    <p className="text-[#6C757D] font-medium text-[14.5px] md:text-[15.5px] leading-relaxed mb-10 max-w-[500px]">
                        Finmile helps third-party logistics providers and courier networks deliver faster, smarter, and more profitably. Manage thousands of deliveries across multiple clients in one unified platform.
                    </p>

                    <button className="bg-[#6A27D4] text-white px-10 py-3.5 rounded-full font-semibold text-[15px] transition-transform hover:scale-105 hover:bg-[#5821B0] shadow-[0_10px_20px_rgba(106,39,212,0.3)] w-full sm:w-auto">
                        Book A Demo
                    </button>
                </div>
                
            </div>
        </section>
    );
};
