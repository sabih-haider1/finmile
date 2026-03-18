import React from 'react';
import { TrendingDown, AlertTriangle, MapPin, Clock, Users } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OptimizationPainPoints = () => {
    const features = [
        {
            title: "20–40% wasted mileage",
            description: "Inefficient paths result in massive fuel waste.",
            icon: <TrendingDown className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Missed delivery windows",
            description: "Inaccurate ETAs frustrate customers and kill loyalty.",
            icon: <AlertTriangle className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Rising cost per parcel",
            description: "Inefficiency eats directly into your bottom line.",
            icon: <MapPin className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Overworked drivers",
            description: "Poor routes lead to driver burnout and turnover.",
            icon: <Clock className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Underutilized fleets",
            description: "Vans sit idle while demand goes unmet.",
            icon: <Users className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        }
    ];

    return (
        <section className={`w-full bg-[#fdfcff] flex flex-col items-center px-4 md:px-6 lg:px-24 py-6 md:py-6 lg:py-6 overflow-hidden relative ${montserrat.className}`}>

            {/* Background Accent */}
            <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#2F1C8C] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center w-full z-10 flex flex-col items-center max-w-[900px] mx-auto mb-12 md:mb-8">
                    <h2 className="font-semibold text-[32px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-4 md:mb-6">
                        Route Planning Is Broken
                    </h2>
                    <p className="font-medium text-[15px] md:text-[18px] text-[#6C757D] leading-relaxed max-w-[800px]">
                        Traditional routing tools are static, outdated, and blind to real-world change.
                    </p>
                </div>

                {/* 2x3 Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
                    {/* Normal Cards */}
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-[#F8F7FF] rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(47,28,140,0.03)] border border-transparent transition-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(47,28,140,0.06)] hover:border-[#E8E5FF] group">
                            <div className="w-[50px] h-[50px] rounded-[14px] bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-[#E9E4FF]">
                                {feature.icon}
                            </div>
                            <h3 className="text-[#0A1B33] font-bold text-[18px] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-[#6C757D] text-[14px] font-medium leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                    {/* CTA Card (6th item) */}
                    <div className="bg-[#2F1C8C] rounded-[24px] p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-[0_10px_40px_rgba(47,28,140,0.15)] transition-transform hover:-translate-y-1">
                        <h3 className="text-white font-semibold text-[22px] leading-[1.3] mb-6 w-full">
                            Turn your delivery<br />network into a competitive<br />advantage.
                        </h3>
                        <button className="bg-[#6A27D4] text-white px-6 py-3 rounded-full font-semibold text-[13px] shadow-[0_4px_15px_rgba(106,39,212,0.3)] hover:bg-[#5821B0] transition-colors w-full whitespace-nowrap">
                            See How AI Fixes It
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};