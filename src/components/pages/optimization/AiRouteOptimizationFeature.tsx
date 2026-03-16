import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const AiRouteOptimizationFeature = () => {
    return (
        <section className={`w-full bg-white flex justify-center px-4 md:px-8 lg:px-24 py-16 md:py-24 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side: Mobile Phones UI */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
                    {/* Shaped as a tall rectangle to perfectly match the design */}
                    <div className="relative w-full max-w-[500px] aspect-[4/4.5] bg-[#F7F5FF] rounded-[40px] overflow-hidden">
                        
                        {/* Expanded wrapper locked to the bottom to scale the phones up! */}
                        <div className="absolute bottom-0 w-[115%] h-[90%] left-1/2 -translate-x-1/2">
                            <Image 
                                src="/assets/images/features/app-screen-blue-full.png" 
                                alt="Finmile AI Route Optimization Mobile App" 
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
                                priority
                            />
                        </div>

                    </div>
                </div>

                {/* Right Side: Text & Buttons */}
                <div className="w-full lg:w-[55%] flex flex-col items-start text-left lg:pl-8">
                    
                    {/* Main Heading with forced line breaks for desktop */}
                    <h2 className="text-[#2F1C8C] font-bold text-[36px] md:text-[44px] lg:text-[48px] leading-[1.2] tracking-tight mb-8">
                        AI Route Optimization<br className="hidden lg:block" />
                        That Cuts Routes, Costs,<br className="hidden lg:block" />
                        and Carbon
                    </h2>

                    {/* Standard Text Subheading */}
                    <h4 className="text-[#2F1C8C] font-semibold text-[18px] md:text-[20px] mb-4">
                        Self-Learning Optimization
                    </h4>

                    {/* Paragraph Content */}
                    <p className="text-[#8B8B9B] font-medium text-[16px] md:text-[17px] leading-[1.6] mb-10 max-w-[550px]">
                        Finmile's AI learns from every parcel to plan the fastest, most efficient delivery routes — automatically.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0">
                            Free Savings Analysis
                        </button>
                        {/* Corrected border color to match the design */}
                        <button className="bg-transparent text-[#6A27D4] border border-[#6A27D4] px-8 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] hover:bg-[#F8F7FC] transition-all hover:-translate-y-0.5 active:translate-y-0">
                            Calculate Savings
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};