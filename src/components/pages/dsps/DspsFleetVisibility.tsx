import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DspsFleetVisibility = () => {
    return (
        <section className={`w-full bg-[#FAFAFF] py-6 md:py-6 flex justify-center px-4 md:px-6 lg:px-24 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
                
                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start w-full order-2 lg:order-1 z-10">
                    <h2 className="font-bold text-[32px] md:text-[40px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-6">
                        Fleet Visibility & Live <br className="hidden sm:block" />
                        Tracking
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-8">
                        See every vehicle, route, and driver&apos;s progress in real time. Get instant alerts <br/>
                        for delays, missed stops, or vehicle issues — before clients notice.
                    </p>

                    {/* Callout Box */}
                    <div className="bg-[#FFF4F4] px-4 py-2.5 rounded-[20px] flex items-center gap-2.5">
                        <svg 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="#E11D48" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        <span className="font-bold text-[14px] md:text-[15px] text-[#E11D48]">
                            -42% reduction in fleet mileage
                        </span>
                    </div>
                </div>

                {/* Right Side: Image Content */}
                <div className="relative w-full flex items-center justify-center h-[450px] md:h-[600px] lg:h-[750px] order-1 lg:order-2">
                    <div className="relative w-full h-full">
                        <Image 
                            src="/assets/images/features/app-screen-blue-full.png" 
                            alt="Fleet Visibility & Live Tracking App Screens" 
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'center right' }}
                            className="drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};