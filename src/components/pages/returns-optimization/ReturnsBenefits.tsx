import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

const benefits = [
    {
        tag: "-40% COSTS",
        title: "Reduce Costs",
        description: "Merge forward + reverse routes. No extra trucks or shifts. AI chooses optimal pickup timing."
    },
    {
        tag: "3X FASTER",
        title: "Faster Refunds",
        description: "Instant collection confirmation. Live tracking & notifications. Refunds released immediately."
    },
    {
        tag: "UNIFIED OS",
        title: "Simplify Ops",
        description: "One dashboard for deliveries + returns. Automated driver assignments. SKU-level insights."
    },
    {
        tag: "GREEN FLEET",
        title: "Sustainability",
        description: "Fewer miles, lower CO2. Consolidated routes. Greener brand perception."
    }
];

const stats = [
    { value: "-40%", label: "Lower Return Costs" },
    { value: "3x", label: "Faster Refunds" },
    { value: "98%+", label: "Customer Satisfaction" }
];

export const ReturnsBenefits = () => {
    return (
        <section className={`w-full bg-[#0B0616] py-6 lg:py-[clamp(32px,5vw,48px)] flex flex-col items-center px-6 relative overflow-hidden ${montserrat.className}`}>

            {/* Ambient Background Glows */}
            <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-[#3B257E] rounded-full blur-[160px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[800px] h-[800px] bg-[#2F1C8C] rounded-full blur-[180px] opacity-40 pointer-events-none" />

            <div className="max-w-[1440px] w-full z-10">
                {/* Header */}
                <h2 className="text-white font-bold text-center mb-10 tracking-normal md:tracking-tight text-balance text-[clamp(36px,4vw,56px)]">
                    Key Benefits for Your Business
                </h2>

                {/* Top Grid: Benefit Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="border border-white/10 rounded-[24px] p-8 bg-white/5 backdrop-blur-sm flex flex-col items-start transition-all hover:border-white/20 hover:bg-white/[0.08]">
                            <span className="text-white font-bold text-[12px] tracking-widest mb-6 opacity-80 uppercase">
                                {benefit.tag}
                            </span>
                            <h3 className="text-white text-[22px] font-bold mb-4">
                                {benefit.title}
                            </h3>
                            <p className="text-[#A09DB0] text-[15px] leading-[1.6]">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Grid: Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-[#6A27D4] rounded-[32px] p-6 flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]">
                            <span className="text-white text-[52px] lg:text-[58px] font-bold mb-2 tabular-nums tracking-tight leading-none">
                                {stat.value}
                            </span>
                            <span className="text-white/80 text-[14px] lg:text-[16px] font-semibold">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
