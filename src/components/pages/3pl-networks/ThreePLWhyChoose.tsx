import React from 'react';
import { Target } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const ThreePLWhyChoose = () => {
    const rows = [
        {
            pain: "Manual route building",
            solution: "AI route optimisation",
            result: "Up to 42% fewer routes"
        },
        {
            pain: "Missed client SLAs",
            solution: "Predictive ETA & alerts",
            result: "98% on-time rate"
        },
        {
            pain: "Driver inefficiency",
            solution: "Real-time tracking & smart dispatch",
            result: "+20% productivity"
        },
        {
            pain: "Multi-client complexity",
            solution: "Unified control tower view",
            result: "All clients, one dashboard"
        },
        {
            pain: "Lack of transparency",
            solution: "Branded client portals",
            result: "Fewer support calls"
        }
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-16 md:py-24 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="w-full flex justify-center mb-12 lg:mb-16">
                    <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.2] text-center">
                        Why Leading 3PLs Choose Finmile
                    </h2>
                </div>

                {/* Table Layout */}
                <div className="w-full max-w-[1100px]">
                    
                    {/* Header Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-4 font-semibold text-[15px]">
                        {/* Mobile hide empty header, show on desktop */}
                        <div className="hidden md:flex bg-white px-6 py-4 rounded-xl items-center border-b border-white">
                            <span className="text-[#2F1C8C]">Pain Point</span>
                        </div>
                        {/* Finmile Solution Header */}
                        <div className="bg-[#2F1C8C] rounded-xl px-6 py-4 flex items-center justify-between">
                            <span className="text-white">Finmile Solution</span>
                            <img src="/assets/logos/logo-white.png" alt="Finmile" className="h-4 object-contain opacity-90" />
                        </div>
                        {/* Measurable Result Header */}
                        <div className="bg-[#2F1C8C] rounded-xl px-6 py-4 flex items-center justify-between">
                            <span className="text-white">Measurable Result</span>
                            <Target className="w-5 h-5 text-[#6A27D4]" strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Data Rows */}
                    <div className="flex flex-col gap-2">
                        {rows.map((row, idx) => (
                            <div key={idx} className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 bg-white md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 border border-gray-100 md:border-none shadow-sm md:shadow-none mb-4 md:mb-0">
                                
                                {/* Pain Point Column (Mobile: top stacked, Desktop: Grid) */}
                                <div className="md:bg-white md:px-6 md:py-5 flex items-center md:border-b border-gray-100 md:border-none mb-3 md:mb-0 justify-center md:justify-start">
                                    <span className="text-[#0A1B33] font-semibold text-[14px] md:text-[15px]">{row.pain}</span>
                                </div>
                                
                                {/* Solution Column */}
                                <div className="bg-[#F8F7FF] px-6 py-4 md:py-5 rounded-xl flex items-center justify-center md:justify-start border border-[#E9E4FF] md:border-none">
                                    <span className="text-[#6A27D4] md:text-[#2F1C8C] font-semibold text-[14px]">{row.solution}</span>
                                </div>
                                
                                {/* Result Column */}
                                <div className="bg-[#F8F9FA] px-6 py-4 md:py-5 rounded-xl flex items-center justify-center md:justify-start">
                                    <span className="text-[#0A1B33] font-bold text-[14px]">{row.result}</span>
                                </div>
                                
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};
