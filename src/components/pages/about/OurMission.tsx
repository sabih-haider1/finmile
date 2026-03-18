import React from 'react';
import { Package, TrendingUp, Leaf } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OurMission = () => {
    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-6 lg:px-24 py-6 overflow-hidden relative ${montserrat.className}`}>

            {/* Centered Mission Header */}
            <div className="text-center mb-8 md:mb-8 w-full z-10 flex flex-col items-center">
                <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight mb-6 leading-tight">
                    Our Mission
                </h2>
                <p className="font-medium text-[16px] text-[#6C757D] max-w-[800px] leading-relaxed px-4">
                    To accelerate the global shift to efficient, low-emission logistics through intelligent,<br className="hidden md:block" /> scalable, and user-centric delivery software.
                </p>
            </div>

            {/* Replicated ScaleSection Layout */}
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-stretch lg:items-start gap-12 lg:gap-[10px] z-10 relative">

                {/* Left Side Image */}
                <div className="w-full lg:w-1/2 flex items-stretch justify-center lg:justify-start">
                    <div className="w-full h-full flex items-center">
                        <img
                            src="/assets/images/half-dashboard.png"
                            alt="Finmile Dashboard View"
                            className="w-full h-full object-cover mix-blend-multiply drop-shadow-sm"
                        />
                    </div>
                </div>

                {/* Right Side Content Card */}
                <div className="w-full lg:w-1/2 flex items-stretch">
                    <div className="bg-[#F8F7FF] rounded-3xl md:rounded-[24px] p-6 md:p-8 pb-8 w-full shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white flex flex-col">
                        <div>
                            {/* Coil Icon filling the glowing box perfectly */}
                            <div className="bg-white rounded-[24px] inline-flex items-center justify-center mb-10 lg:mb-8 border border-white w-[100px] h-[100px] overflow-hidden" style={{ boxShadow: '0 0 40px 8px rgba(106, 39, 212, 0.2)' }}>
                                <img
                                    src="/assets/images/features/coil-icon.png"
                                    alt="Finmile Coil Icon"
                                    className="w-full h-full object-cover scale-[3]"
                                />
                            </div>

                            <h3 className="text-gray-900 font-semibold text-[20px] md:text-[22px] mb-6 leading-tight pl-1">
                                We empower:
                            </h3>

                            {/* Features List matching the white pill cards */}
                            <div className="space-y-4 mb-8">

                                <div className="flex items-center gap-4 bg-white px-5 py-4 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-2 border-transparent hover:border-[#F0F0FF] transition-colors">
                                    <Package className="text-[#2F1C8C] w-6 h-6 shrink-0" strokeWidth={2} />
                                    <span className="text-[#6C757D] text-[15px] font-medium leading-snug">
                                        <b className="font-semibold text-gray-900">Retailers & E-commerce brands</b> to deliver faster and cheaper.
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 bg-white px-5 py-4 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-2 border-transparent hover:border-[#F0F0FF] transition-colors">
                                    <TrendingUp className="text-[#2F1C8C] w-6 h-6 shrink-0" strokeWidth={2} />
                                    <span className="text-[#6C757D] text-[15px] font-medium leading-snug">
                                        <b className="font-semibold text-gray-900">Logistics companies & 3PLs</b> to scale with fewer vehicles and higher utilisation.
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 bg-white px-5 py-4 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-2 border-transparent hover:border-[#F0F0FF] transition-colors">
                                    <Leaf className="text-[#2F1C8C] w-6 h-6 shrink-0" strokeWidth={2} />
                                    <span className="text-[#6C757D] text-[15px] font-medium leading-snug">
                                        <b className="font-semibold text-gray-900">Municipalities & Sustainability partners</b> to cut congestion and emissions.
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Button (Left Aligned Fixed Size) */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start w-full mt-auto pl-1">
                            <button className="bg-[#6A27D4] text-white px-8 md:px-16 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] whitespace-nowrap w-full sm:w-fit hover:bg-[#5821B0] transition-colors shadow-lg shadow-[#6A27D4]/20">
                                Book A Demo
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
