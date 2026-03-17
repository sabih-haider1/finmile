import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const PredictiveEtasTracking = () => {
    return (
        <section className={`w-full bg-white py-12 md:py-16 flex justify-center px-4 md:px-6 lg:px-24 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                
                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start w-full">
                    <h2 className="font-bold text-[36px] md:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-5">
                        Predictive ETAs & Real-<br className="hidden md:block" />
                        Time Tracking
                    </h2>

                    <p className="text-[#8B8B9B] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-10 max-w-[500px]">
                        Your customers see exactly when their order will arrive, while your team can intervene before delays happen.
                    </p>

                    {/* Data Points - Side by Side Cards */}
                    <div className="flex flex-row gap-4 md:gap-6 w-full max-w-[500px]">
                        {/* Accuracy Card */}
                        <div className="flex-1 bg-[#F8F9FC] rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex flex-col gap-3">
                            <span className="font-bold text-[11px] md:text-[12px] text-black uppercase tracking-widest">
                                Accuracy
                            </span>
                            <span className="font-bold text-[38px] md:text-[44px] text-[#2F1C8C] leading-none">
                                99.2%
                            </span>
                        </div>

                        {/* Update Rate Card */}
                        <div className="flex-1 bg-[#F8F9FC] rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex flex-col gap-3">
                            <span className="font-bold text-[11px] md:text-[12px] text-black uppercase tracking-widest">
                                Update Rate
                            </span>
                            <span className="font-bold text-[38px] md:text-[44px] text-[#2F1C8C] leading-none">
                                5 sec
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image Content */}
                <div className="relative w-full flex items-center justify-center h-[350px] md:h-[450px] lg:h-[500px]">
                    <div className="relative w-full h-full">
                        <Image 
                            src="/assets/images/features/app-screen-white.png" 
                            alt="Predictive ETAs & Real-Time Tracking Mobile App" 
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'right center' }}
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};