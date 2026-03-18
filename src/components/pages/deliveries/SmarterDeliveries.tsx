import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'] });

export const SmarterDeliveries = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-6 md:py-6 lg:py-6 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center z-10 relative">

                {/* Left Side: Image */}
                <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1 relative mt-12 lg:mt-0">
                    <div className="w-full max-w-[550px] flex items-center justify-center">
                        <Image
                            src="/assets/images/features/laptop-blue.png"
                            alt="Finmile Smarter Deliveries Dashboard"
                            width={550}
                            height={400}
                            className="w-full h-auto drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500 object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start text-left order-1 lg:order-2">
                    <h2 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight mb-6">
                        Smarter, Faster,<br />
                        Greener Deliveries
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] md:leading-[1.7] mb-6 max-w-[500px]">
                        From dynamic route optimisation to live tracking, Finmile equips you with the tools to master the last mile.
                    </p>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] md:leading-[1.7] mb-10 max-w-[500px]">
                        Deliver on your promises, cut operational costs, and build a delivery network that scales with your ambition.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 w-full md:w-auto">
                        <Link href="#contact" className="w-full sm:w-auto">
                            <button className="bg-[#6A27D4] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-colors w-full sm:w-auto whitespace-nowrap">
                                Book a Demo
                            </button>
                        </Link>
                        <Link href="#features" className="w-full sm:w-auto">
                            <button className="bg-white text-[#2F1C8C] border-2 border-[#2F1C8C] px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-[14px] md:text-[15px] hover:bg-[#F8F7FF] transition-colors w-full sm:w-auto whitespace-nowrap shadow-[0_4px_10px_rgba(47,28,140,0.05)]">
                                See Finmile in Action
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};
