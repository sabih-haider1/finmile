import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppHero = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-6 md:py-6 relative overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-12 z-10 relative">
                
                {/* Left Side: Image */}
                <div className="flex justify-center w-full order-1 lg:order-1 pt-8 lg:pt-0">
                    <Image
                        src="/assets/images/features/app-screen-mix.png"
                        alt="Finmile Driver App Interface"
                        width={500}
                        height={500}
                        priority
                        className="w-full max-w-[400px] lg:max-w-[500px] h-auto rounded-[24px] relative z-10 object-contain"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
                    <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-tight mb-6 mt-4 lg:mt-0">
                        Finmile Driver App:<br className="hidden md:block"/>
                        Proof of Delivery and<br className="hidden md:block"/>
                        Driver Management<br className="hidden md:block"/>
                        Made Simple
                    </h2>

                    <h3 className="text-[#2F1C8C] font-bold text-[16px] md:text-[18px] mb-4">
                        AI tracking. Instant ePOD. Total driver visibility.
                    </h3>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-[500px]">
                        The Finmile Driver App turns every driver&apos;s smartphone into a real-time logistics hub. From route guidance to proof of delivery, every mile is fully verified.
                    </p>

                    <button className="bg-[#6A27D4] text-white px-10 py-4 rounded-full font-semibold text-[15px] transition-transform hover:scale-105 hover:bg-[#5821B0] shadow-[0_10px_20px_rgba(106,39,212,0.3)] w-full sm:w-auto">
                        Book A Demo
                    </button>
                </div>
                
            </div>
        </section>
    );
};
