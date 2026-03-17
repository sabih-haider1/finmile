import React from 'react';
import { Montserrat } from 'next/font/google';
import { GlassButton } from '../../ui/glass-button';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OurOrigin = () => {
    return (
        <section className={`w-full bg-[#0B0616] py-16 flex flex-col items-center px-6 lg:px-24 relative overflow-hidden ${montserrat.className}`}>

            {/* Background Glow Effects (Bright behind text, dark behind picture) */}
            <div className="absolute top-[5%] left-[-15%] w-[900px] h-[900px] bg-[#3B257E] rounded-full blur-[160px] opacity-70 pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F1C8C] rounded-[100%] blur-[180px] opacity-80 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-5 pointer-events-none" />

            <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center z-10">

                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-8 pr-0 lg:pr-10 order-2 lg:order-1">

                    {/* Glass Button above header */}
                    <div className="inline-block relative self-start">
                        <GlassButton
                            className="bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10"
                            size="sm"
                        >
                            Our Origin
                        </GlassButton>
                    </div>

                    {/* h1 / h2 white */}
                    <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#FFFFFF] leading-[1.1] tracking-tight">
                        Operators Solving <br className="hidden lg:block" />Operator Problems
                    </h2>

                    <div className="flex flex-col space-y-6">
                        {/* p3 */}
                        <p className="font-medium text-[15px] md:text-[16px] text-[#DEE2E6] leading-relaxed">
                            Founded in 2022 by Rich Pleeth and Chris Sargeant, Finmile was born out of <br className="hidden lg:block" />
                            frustration with outdated routing tools and disconnected delivery systems.
                        </p>

                        {/* p3 */}
                        <p className="font-medium text-[15px] md:text-[16px] text-[#DEE2E6] leading-relaxed">
                            Before writing a single line of code, we ran delivery fleets ourselves — <br className="hidden lg:block" />
                            understanding first-hand how costly, inefficient, and environmentally <br className="hidden lg:block" />
                            damaging manual planning could be.
                        </p>

                        {/* p3 */}
                        <p className="font-medium text-[15px] md:text-[16px] text-[#DEE2E6] leading-relaxed">
                            That real-world insight shaped our platform’s DNA: practical, scalable, and <br className="hidden lg:block" />
                            built for performance under pressure.
                        </p>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full flex justify-center lg:justify-end relative order-1 lg:order-2">
                    <img
                        src="/assets/images/features/laptop-live.png"
                        alt="Finmile Operator Origin"
                        className="w-full max-w-[700px] h-auto rounded-[32px] drop-shadow-[0_40px_100px_rgba(83,31,209,0.25)] relative z-10"
                    />
                </div>

            </div>
        </section>
    );
};
