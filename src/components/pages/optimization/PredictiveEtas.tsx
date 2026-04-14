import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { Check } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const PredictiveEtas = () => {
    const features = [
        {
            title: "Live predictive ETA modeling",
            description: "High-precision calculations updated every 5 seconds."
        },
        {
            title: "Automatic rerouting",
            description: "Instantly adjust routes based on road closures or delays."
        },
        {
            title: "Customer-facing ETA APIs",
            description: "Give your customers real-time visibility."
        },
        {
            title: "Dispatcher visibility",
            description: "Full control via the Control Tower."
        }
    ];

    return (
        <section className={`w-full py-6 md:py-6 bg-white flex justify-center px-4 md:px-8 lg:px-24 overflow-hidden ${montserrat.className}`}>
            {/* Changed items-center to items-stretch to match column heights exactly */}
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-stretch">
                
                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start w-full pr-0 lg:pr-8">
                    {/* Updated to text-[48px] and font-semibold */}
                    <h2 className="font-semibold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.2] mb-6 text-balance text-[clamp(36px,4vw,48px)]">
                        Predictive ETAs &<br />
                        Real-Time Routing
                    </h2>

                    <p className="text-[#64748b] font-medium text-[16px] md:text-[17px] leading-[1.6] mb-10 max-w-[480px]">
                        Finmile recalculates ETAs dynamically using live traffic, weather, and delivery performance. No more guessing windows.
                    </p>

                    <div className="flex flex-col gap-8 w-full">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-5">
                                {/* Custom Checkmark Icon matching the design */}
                                <div className="w-[60px] h-[60px] rounded-full bg-white shadow-[0_8px_30px_rgba(47,28,140,0.06)] flex items-center justify-center shrink-0 border border-[#f4f4f5]">
                                    <div className="w-6 h-6 rounded-full border-[1.5px] border-[#2F1C8C] flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-[#2F1C8C]" strokeWidth={3} />
                                    </div>
                                </div>
                                
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-[17px] md:text-[18px] text-[#1e293b] mb-1">
                                        {feature.title}
                                    </h4>
                                    <p className="text-[#64748b] font-medium text-[15px] leading-[1.6]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Image Content */}
                <div className="relative w-full h-full min-h-[400px] mt-12 lg:mt-0">
                    {/* Updated Background Color to #F6F4FF and set height to match text container */}
                    <div className="relative w-full h-full bg-[#F6F4FF] rounded-[48px] flex items-center justify-center p-8">
                        {/* Image Container with scaling to pop out slightly if needed */}
                        <div className="relative w-full h-full min-h-[350px] lg:scale-[1.1] origin-center">
                            <Image 
                                src="/assets/images/features/app-screen-full.png" 
                                alt="Predictive ETAs & Real-Time Routing Interface" 
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'center' }}
                                className="drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};