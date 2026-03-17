import React from 'react';
import { Network } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppOperationalImpact = () => {
    const rows = [
        { metric: "POD Approval Time", before: "12-24 hours", after: "< 0.2 seconds", impact: "+98% faster" },
        { metric: "Delivery Accuracy", before: "89.2%", after: "99.4%", impact: "+10.2%" },
        { metric: "Failed POD Rate", before: "12%", after: "0.1%", impact: "-90% reduction" },
        { metric: "Support Tickets", before: "High (WISMO)", after: "-91%", impact: "-85% reduction" }
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-16 md:py-16 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] z-10 relative flex flex-col items-center">

                {/* Header Content */}
                <div className="w-full flex justify-center md:justify-start mb-10 lg:mb-12 text-center md:text-left">
                    <h2 className="font-semibold text-[30px] md:text-[40px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.2]">
                        Operational Impact
                    </h2>
                </div>

                {/* Table Layout Grid */}
                <div className="w-full">
                    {/* Header Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-2 md:mb-4">
                        <div className="hidden md:flex bg-white px-6 py-4 rounded-xl items-center border-b border-white">
                            <span className="text-[#2F1C8C] font-semibold text-[15px]">Capability</span>
                        </div>
                        <div className="bg-[#6B7177] rounded-xl px-6 py-4 flex items-center justify-between">
                            <span className="text-white font-semibold text-[15px]">Before Finmile</span>
                            <Network className="w-5 h-5 text-white/70" />
                        </div>
                        <div className="bg-[#2F1C8C] rounded-xl px-6 py-4 flex items-center justify-between">
                            <span className="text-white font-semibold text-[15px]">With Finmile</span>
                            <img src="/assets/logos/logo-white.png" alt="Finmile" className="h-4 object-contain opacity-90" />
                        </div>
                    </div>

                    {/* Data Rows */}
                    <div className="flex flex-col gap-2">
                        {rows.map((row, idx) => (
                            <div key={idx} className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 bg-white md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 border border-gray-100 md:border-none shadow-sm md:shadow-none mb-4 md:mb-0">

                                <div className="md:bg-white md:px-6 md:py-5 flex items-center md:border-b border-gray-100 md:border-none mb-3 md:mb-0 justify-center md:justify-start">
                                    <span className="text-[#0A1B33] font-bold text-[16px] md:text-[14px]">{row.metric}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 md:hidden mb-3">
                                    <div className="flex flex-col items-center justify-center p-3 bg-[#F8F9FA] rounded-[8px]">
                                        <span className="text-[11px] text-[#6C757D] uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                                            <Network className="w-3 h-3" /> Before
                                        </span>
                                        <span className="text-[#6C757D] font-medium text-[13px] text-center">{row.before}</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-3 bg-[#F8F7FF] rounded-[8px] border border-[#E9E4FF]">
                                        <span className="text-[11px] text-[#6A27D4] uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                                            <img src="/assets/logos/logo-blue.png" alt="Finmile" className="h-2 object-contain" /> Finmile
                                        </span>
                                        <span className="text-[#0A1B33] font-bold text-[13px] text-center">{row.after}</span>
                                    </div>
                                </div>

                                <div className="hidden md:flex bg-[#F8F9FA] px-6 py-5 rounded-xl items-center">
                                    <span className="text-[#6C757D] font-medium text-[14px]">{row.before}</span>
                                </div>
                                <div className="hidden md:flex bg-[#F8F7FF] px-6 py-5 rounded-xl items-center justify-between">
                                    <span className="text-[#0A1B33] font-bold text-[14px]">{row.after}</span>
                                    <span className="ml-2 px-2 py-1 bg-[#E8F8EE] text-[#12B76A] rounded text-[10px] font-bold tracking-wide uppercase whitespace-nowrap">
                                        {row.impact}
                                    </span>
                                </div>

                                {/* Mobile Impact Pill */}
                                <div className="flex md:hidden justify-center mt-2">
                                    <span className="px-3 py-1.5 bg-[#E8F8EE] text-[#12B76A] rounded-full text-[11px] font-bold tracking-wide uppercase whitespace-nowrap flex items-center gap-1">
                                        Impact: {row.impact}
                                    </span>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
