import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DspsRouteOptimisation = () => {
    return (
        <section className={`w-full bg-[#0B0616] py-12 md:py-16 flex justify-center px-4 md:px-6 lg:px-24 overflow-hidden relative ${montserrat.className}`}>
            
            {/* Background Glow Effects (Exact Match to Reference) */}
            <div className="absolute top-[5%] left-[-15%] w-[900px] h-[900px] bg-[#3B257E] rounded-full blur-[160px] opacity-60 pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F1C8C] rounded-[100%] blur-[180px] opacity-70 pointer-events-none" />

            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center z-10 relative">
                
                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start max-w-[540px] order-2 lg:order-1 z-10">
                    <h2 className="font-bold text-[32px] md:text-[40px] text-white tracking-tight leading-[1.2] mb-6">
                        AI Route Optimisation
                    </h2>

                    <p className="text-[#A09DB0] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-8">
                        Automatically plan the fastest, most efficient routes for same-day and next-day orders. Finmile analyses thousands of delivery combinations every second — cutting unnecessary miles and fuel.
                    </p>

                    {/* Callout Box - Exact match to image design */}
                    <div className="bg-white px-6 py-3 rounded-full inline-flex items-center gap-3 shadow-md">
                        <span className="font-bold text-[20px] md:text-[24px] text-black">-42%</span>
                        <span className="font-semibold text-[14px] md:text-[15px] text-black">reduction in fleet mileage</span>
                    </div>
                </div>

                {/* Right Side: Image Content */}
                <div className="relative w-full flex items-center justify-center h-[350px] md:h-[450px] lg:h-[500px] order-1 lg:order-2 z-10 mt-8 lg:mt-0">
                    
                    {/* Background glow behind image (Exact Match to Reference) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#6A27D4] rounded-full blur-[100px] opacity-40 -z-10" />
                    
                    <div className="relative w-full h-full max-w-[600px]">
                        <Image 
                            src="/assets/images/features/route-dashboard.png" 
                            alt="AI Route Optimisation Dashboard" 
                            fill
                            style={{ objectFit: 'contain' }}
                            className="drop-shadow-2xl opacity-95"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};