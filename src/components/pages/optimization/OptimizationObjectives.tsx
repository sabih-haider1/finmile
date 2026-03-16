import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OptimizationObjectives = () => {
    const objectives = [
        {
            value: "42%",
            description: "fewer vehicles"
        },
        {
            value: "24%",
            description: "lower cost"
        },
        {
            value: "33%",
            description: "lower fuel use"
        }
    ];

    return (
        <section className={`w-full bg-[#13072E] py-16 md:py-24 flex justify-center px-4 md:px-8 lg:px-24 overflow-hidden relative ${montserrat.className}`}>
            
            {/* Background Glow Effect to match the deep violet gradient lighting */}
            <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#3B1C8A] rounded-full blur-[150px] opacity-60 pointer-events-none z-0" />

            <div className="w-full max-w-[1240px] z-10 relative">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-semibold text-[48px] text-white tracking-tight leading-[1.2] mb-4">
                        Optimize for Every Objective
                    </h2>
                    <p className="text-[#D3D1DF] font-medium text-[16px] md:text-[18px] leading-[1.6]">
                        Balance time, cost, and emissions with one AI brain.
                    </p>
                </div>

                {/* Metrics Cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {objectives.map((objective, idx) => (
                        <div 
                            key={idx} 
                            className="bg-[#2F1C8C] rounded-[24px] px-8 py-10 md:px-10 md:py-12 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 shadow-lg"
                        >
                            <div className="font-bold text-[48px] md:text-[56px] text-white mb-3 md:mb-4">
                                {objective.value}
                            </div>
                            <div className="text-white font-medium text-[16px] md:text-[18px]">
                                {objective.description}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
