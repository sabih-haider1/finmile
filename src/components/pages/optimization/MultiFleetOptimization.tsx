import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { BatteryMedium, Globe, Layers } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const MultiFleetOptimization = () => {
    const features = [
        {
            icon: <BatteryMedium className="w-[26px] h-[26px] text-[#6A27D4]" strokeWidth={2} />,
            title: "Battery & range awareness",
            description: "Never strand an EV with range-aware routing."
        },
        {
            icon: <Globe className="w-[26px] h-[26px] text-[#6A27D4]" strokeWidth={2} />,
            title: "Offline routing",
            description: "Drivers keep moving even without signal."
        },
        {
            icon: <Layers className="w-[26px] h-[26px] text-[#6A27D4]" strokeWidth={2} />,
            title: "Centralized monitoring",
            description: "One dashboard for all modes."
        }
    ];

    return (
        <section className={`w-full bg-white py-6 md:py-6 flex justify-center px-4 md:px-8 lg:px-24 overflow-hidden ${montserrat.className}`}>
            
            {/* The giant rounded background container matching the mockup */}
            <div className="w-full max-w-[1240px] bg-[#F8F9FC] rounded-[32px] md:rounded-[48px] px-6 py-16 md:px-12 md:py-16 flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-8">
                    <h2 className="font-bold text-[34px] md:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-4">
                        Multi-Fleet & Multi-Mode Optimization
                    </h2>
                    <p className="text-[#8B8B9B] font-medium text-[15px] md:text-[16px] leading-[1.6]">
                        Optimize for any vehicle, any range, any zone.
                    </p>
                </div>

                {/* Vehicle Cards */}
                <div className="w-full max-w-[1050px] grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-8">
                    
                    {/* Van Card */}
                    <div className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgba(47,28,140,0.04)] flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
                        <div className="relative w-full h-[220px] md:h-[260px] rounded-[16px] overflow-hidden mb-6">
                            <Image
                                src="/assets/images/transport/four-wheels.png"
                                alt="Vans & Long-Haul"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </div>
                        <span className="text-[#6A27D4] font-bold text-[11px] tracking-widest uppercase mb-3">
                            SUBURBAN
                        </span>
                        <h3 className="font-bold text-[22px] md:text-[26px] text-[#2F1C8C] mb-3">
                            Vans & Long-Haul
                        </h3>
                        <p className="text-[#8B8B9B] font-medium text-[14px] md:text-[15px] leading-[1.6] max-w-[400px]">
                            Maximize load capacity and minimize fuel consumption over longer distances.
                        </p>
                    </div>

                    {/* E-Cargo Bike Card */}
                    <div className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgba(47,28,140,0.04)] flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
                        <div className="relative w-full h-[220px] md:h-[260px] rounded-[16px] overflow-hidden mb-6">
                            <Image
                                src="/assets/images/transport/three-wheels.png"
                                alt="E-Cargo Bikes & EVs"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </div>
                        <span className="text-[#6A27D4] font-bold text-[11px] tracking-widest uppercase mb-3">
                            URBAN ZERO-EMISSION
                        </span>
                        <h3 className="font-bold text-[22px] md:text-[26px] text-[#2F1C8C] mb-3">
                            E-Cargo Bikes & EVs
                        </h3>
                        <p className="text-[#8B8B9B] font-medium text-[14px] md:text-[15px] leading-[1.6] max-w-[400px]">
                            Account for battery range and city-center access restrictions automatically.
                        </p>
                    </div>
                </div>

                {/* Features */}
                <div className="w-full max-w-[950px] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-14 md:mb-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            {/* Pure white circle with soft shadow to pop off the light gray background */}
                            <div className="w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center mb-5 shadow-[0_8px_24px_rgba(47,28,140,0.06)]">
                                {feature.icon}
                            </div>
                            <h4 className="font-bold text-[16px] md:text-[17px] text-[#1A1A24] mb-2.5">
                                {feature.title}
                            </h4>
                            <p className="text-[#8B8B9B] font-medium text-[14px] leading-[1.6] max-w-[250px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_24px_rgba(106,39,212,0.25)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0">
                        See How Finmile Handles Mixed Fleets
                    </button>
                </div>

            </div>
        </section>
    );
};