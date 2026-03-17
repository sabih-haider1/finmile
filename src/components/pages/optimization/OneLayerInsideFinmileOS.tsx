import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OneLayerInsideFinmileOS = () => {
    // Array ordered specifically so CSS Grid naturally matches the columns in the image
    const features = [
        "Planning",
        "Analytics",
        "Control Tower",
        "Integrations",
        "Driver App"
    ];

    return (
        <section className={`w-full bg-[#160B3A] py-16 md:py-16 flex justify-center px-4 md:px-8 lg:px-24 overflow-hidden relative ${montserrat.className}`}>
            
            {/* Background Radial Glow Effect matching the lighting in the image */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#4323A3] rounded-full blur-[180px] opacity-40 pointer-events-none z-0" />

            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center z-10 relative">
                
                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start w-full pr-0 lg:pr-4">
                    {/* Updated to text-[48px] and font-semibold */}
                    <h2 className="font-semibold text-[36px] md:text-[48px] text-white tracking-tight leading-[1.2] mb-6">
                        One Layer Inside the<br />
                        Finmile OS
                    </h2>

                    <p className="text-[#C4C1D4] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-10 max-w-[500px]">
                        Route optimization isn't a bolt-on. It's the native intelligence layer that powers every part of your operation, from the initial plan to the final delivery confirmation.
                    </p>

                    {/* Features Grid: 2 Columns */}
                    <div className="grid grid-cols-2 gap-y-5 gap-x-12 mb-12 w-full max-w-[450px]">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                {/* Custom Icon matching the exact UI (Transparent bg + border) */}
                                <div className="w-[22px] h-[22px] rounded-full bg-[#7C3AED]/20 border border-[#8B5CF6] flex items-center justify-center shrink-0">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span className="text-white text-[14px] md:text-[15px] font-medium">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button with the distinct border matching the UI */}
                    <button className="bg-[#6D28D9] border border-[#A78BFA] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_20px_rgba(109,40,217,0.3)] hover:bg-[#5B21B6] transition-all hover:-translate-y-0.5 active:translate-y-0">
                        Book a Demo
                    </button>
                </div>

                {/* Right Side: Image Content with the Taller Rectangular Container */}
                <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
                    
                    {/* Updated to a taller rectangular shape (aspect-[4/5] or min-h-[600px]) */}
                    <div className="relative w-full max-w-[500px] min-h-[550px] lg:min-h-[600px] aspect-[4/5] bg-[#F8F7FC] rounded-[24px] overflow-hidden flex items-end justify-center pt-8 md:pt-12 px-6">
                        
                        {/* Enlarged image container to ensure the laptop scales to the edges and bottom */}
                        <div className="absolute bottom-0 w-[115%] h-[80%] left-1/2 -translate-x-1/2">
                            <Image 
                                src="/assets/images/features/laptop-route.png" 
                                alt="Finmile OS Interface on Laptop" 
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
                                priority
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};