import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DeliverySoftwarePlatform = () => {
    return (
        <section className={`w-full bg-[#0B0616] py-6 md:py-6 lg:py-6 flex flex-col items-center px-6 lg:px-24 relative overflow-hidden ${montserrat.className}`}>

            {/* Background Glow Effects (Bright behind text, dark behind picture) */}
            <div className="absolute top-[5%] left-[-15%] w-[900px] h-[900px] bg-[#3B257E] rounded-full blur-[160px] opacity-70 pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F1C8C] rounded-[100%] blur-[180px] opacity-80 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-5 pointer-events-none" />

            <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-12 items-center z-10">

                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-8 pr-0 lg:pr-10 order-1">

                    <h2 className="font-semibold text-[32px] md:text-[42px] lg:text-[48px] text-[#FFFFFF] leading-[1.1] tracking-tight">
                        Introducing Finmile: The <br className="hidden lg:block" />AI Delivery Platform Built<br className="hidden lg:block" /> for Performance
                    </h2>

                    <p className="font-medium text-[15px] md:text-[16px] text-[#DEE2E6] leading-relaxed mb-4 lg:mb-6">
                        Finmile is an intelligent, all-in-one delivery management platform designed for operators that need speed, scalability, and sustainability.
                    </p>

                    <div className="flex flex-col space-y-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 mt-0.5" />
                            <p className="text-[14px] md:text-[15px] text-[#A09DB0]">
                                <span className="text-white font-semibold">Reduce costs:</span> Cut up to 42% using AI route optimisation and smart clustering
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 mt-0.5" />
                            <p className="text-[14px] md:text-[15px] text-[#A09DB0]">
                                <span className="text-white font-semibold">Boost efficiency:</span> Automate planning, dispatching, and communication
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 mt-0.5" />
                            <p className="text-[14px] md:text-[15px] text-[#A09DB0]">
                                <span className="text-white font-semibold">Delight customers:</span> Live tracking, predictive ETAs, proactive notifications
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 mt-0.5" />
                            <p className="text-[14px] md:text-[15px] text-[#A09DB0]">
                                <span className="text-white font-semibold">Gain total visibility:</span> Monitor your entire fleet in real time
                            </p>
                        </div>
                    </div>

                    <button className="bg-[#6A27D4] text-white self-start px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_20px_rgba(106,39,212,0.3)] hover:bg-[#5821B0] transition-colors mt-8">
                        Explore Features
                    </button>

                </div>

                {/* Right Side: Image */}
                <div className="w-full flex justify-center lg:justify-end relative order-1 lg:order-2">
                    <img
                        src="/assets/images/features/laptop-live.png"
                        alt="Finmile Platform on Laptop"
                        className="w-full max-w-[700px] h-auto rounded-[32px] drop-shadow-[0_40px_100px_rgba(83,31,209,0.25)] relative z-10"
                    />
                </div>

            </div>
        </section>
    );
};
