import React from 'react';
import { Settings } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DspsWhyChoose = () => {
    const tableData = [
        {
            challenge: "Hours lost to manual planning",
            solution: "AI route optimization",
            result: "Plans done in minutes"
        },
        {
            challenge: "Missed or late deliveries",
            solution: "Predictive ETAs & dynamic routing",
            result: "98% on-time delivery"
        },
        {
            challenge: "No real visibility into drivers",
            solution: "Live Control Tower & GPS tracking",
            result: "100% operational oversight"
        },
        {
            challenge: "High costs per route",
            solution: "Fleet optimisation & consolidation",
            result: "Up to 42% cost reduction"
        },
        {
            challenge: "Client complaints",
            solution: "Automated POD & notifications",
            result: "Fewer disputes"
        }
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-12 md:py-16 ${montserrat.className}`}>
            <div className="w-full max-w-[1000px] flex flex-col items-center">

                <h2 className="font-bold text-[32px] md:text-[40px] text-[#2F1C8C] tracking-tight mb-10 text-center">
                    Why DSPs Choose Finmile
                </h2>

                <div className="w-full flex flex-col">
                    {/* Header Row */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4">
                        <div className="px-4 py-4 flex items-center">
                            <span className="font-bold text-[#2F1C8C] text-[15px] md:text-[16px]">Challenge</span>
                        </div>
                        <div className="bg-[#2F1C8C] rounded-lg px-6 py-4 flex items-center justify-between shadow-sm">
                            <span className="font-semibold text-white text-[15px] md:text-[16px]">Finmile Solution</span>
                            <img src="/assets/logos/logo-white.png" alt="Finmile" className="h-4 object-contain opacity-90" />
                        </div>
                        <div className="bg-[#2F1C8C] rounded-lg px-6 py-4 flex items-center justify-between shadow-sm">
                            <span className="font-semibold text-white text-[15px] md:text-[16px]">Result</span>
                            <Settings className="w-5 h-5 text-white/70" />
                        </div>
                    </div>

                    {/* Data Rows */}
                    <div className="flex flex-col gap-2">
                        {tableData.map((row, idx) => (
                            <div key={idx} className="grid grid-cols-3 gap-2 md:gap-4">
                                <div className="px-4 py-5 flex items-center border-b border-[#F3F4F6] last:border-0">
                                    <span className="font-bold text-[#0A1B33] text-[13px] md:text-[14px]">{row.challenge}</span>
                                </div>
                                <div className={`px-6 py-5 flex items-center rounded-lg ${idx % 2 === 0 ? 'bg-[#FAFAFF]' : 'bg-white'}`}>
                                    <span className="font-semibold text-[#6A27D4] text-[13px] md:text-[14px]">{row.solution}</span>
                                </div>
                                <div className={`px-6 py-5 flex items-center rounded-lg ${idx % 2 === 0 ? 'bg-[#FAFAFF]' : 'bg-white'}`}>
                                    <span className="font-bold text-[#0A1B33] text-[13px] md:text-[14px]">{row.result}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};