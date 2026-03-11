import React from 'react';
import { Zap, Truck, Clock, TrendingDown } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const ThreePLChallenge = () => {
    const challenges = [
        {
            icon: <Zap className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />,
            title: "Volume Chaos",
            description: "Manual route planning that simply can't keep up with order volume spikes."
        },
        {
            icon: <Truck className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />,
            title: "Idle Fleets",
            description: "Drivers and vehicles under-utilised across multiple client accounts."
        },
        {
            icon: <Clock className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />,
            title: "Visibility Demands",
            description: "Customers and clients demanding live tracking and absolute certainty."
        },
        {
            icon: <TrendingDown className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />,
            title: "Thin Margins",
            description: "Rising fuel and operational costs cutting into your bottom line."
        }
    ];

    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-4 md:px-6 lg:px-24 py-16 md:py-24 border-y border-[#F0EDFF] ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col items-center z-10">
                
                {/* Header Sub-section */}
                <div className="text-center w-full max-w-[800px] mb-12 lg:mb-16">
                    <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] lg:text-[44px] leading-[1.2] tracking-tight mb-6">
                        Your Challenge
                    </h2>
                    
                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-relaxed">
                        Running a 3PL or courier network today means balancing endless moving parts. Chaos shouldn't be the cost of scaling.
                    </p>
                </div>

                {/* Grid of 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="bg-white rounded-[20px] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(47,28,140,0.04)] border border-white hover:border-[#E8E5FF] hover:shadow-[0_8px_30px_rgba(47,28,140,0.08)] transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-[#F8F7FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {challenge.icon}
                            </div>
                            <h3 className="text-[#0A1B33] font-semibold text-[16px] mb-3">
                                {challenge.title}
                            </h3>
                            <p className="text-[#6C757D] text-[14px] font-medium leading-relaxed">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className="w-full max-w-[1240px] bg-[#2F1C8C] rounded-full py-5 px-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(47,28,140,0.2)]">
                    <p className="text-white font-medium text-[15px] md:text-[16px] leading-snug text-center sm:text-left">
                        Finmile fixes that — giving your team the automation and analytics they need.
                    </p>
                    <button className="bg-[#6A27D4] text-white px-8 py-3 rounded-full font-semibold text-[14px] hover:bg-[#5821B0] transition-colors whitespace-nowrap shadow-md">
                        Fix My Operation
                    </button>
                </div>

            </div>
        </section>
    );
};
