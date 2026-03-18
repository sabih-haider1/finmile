import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppImageIntelligence = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-6 lg:py-6 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center z-10 relative">

                {/* Left Side: Image */}
                <div className="flex justify-center lg:justify-start w-full order-1 lg:order-1 mt-4 lg:mt-0 relative">
                    <img
                        src="/assets/images/features/laptop-blue.png"
                        alt="Advanced Image Intelligence Interface"
                        className="w-full max-w-[600px] h-auto relative z-10 object-contain drop-shadow-[0_30px_50px_rgba(47,28,140,0.15)]"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2 mt-8 lg:mt-0">
                    <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-tight mb-6">
                        Advanced Image<br />
                        Intelligence
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-[500px]">
                        Our embedded SDK ensures real-time image quality analysis, reducing failed validations by up to 90%.
                    </p>

                    <div className="flex flex-col space-y-4 mb-10 w-full">
                        <div className="flex items-center gap-3 bg-[#F8F7FF] py-3 px-4 rounded-xl border border-white max-w-[400px]">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0" strokeWidth={2.5} />
                            <p className="text-[14px] font-semibold text-[#1A1A1A]">
                                Real-time image quality analysis
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#F8F7FF] py-3 px-4 rounded-xl border border-white max-w-[400px]">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0" strokeWidth={2.5} />
                            <p className="text-[14px] font-semibold text-[#1A1A1A]">
                                Anti-fraud analysis
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#F8F7FF] py-3 px-4 rounded-xl border border-white max-w-[400px]">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0" strokeWidth={2.5} />
                            <p className="text-[14px] font-semibold text-[#1A1A1A]">
                                Parcel ID mismatch detection
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#F8F7FF] py-3 px-4 rounded-xl border border-white max-w-[400px]">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0" strokeWidth={2.5} />
                            <p className="text-[14px] font-semibold text-[#1A1A1A]">
                                Privacy-first on-device processing
                            </p>
                        </div>
                    </div>

                    <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] transition-transform hover:scale-105 hover:bg-[#5821B0] shadow-[0_10px_20px_rgba(106,39,212,0.2)]">
                        Learn More about AI POD Verification
                    </button>
                </div>

            </div>
        </section>
    );
};
