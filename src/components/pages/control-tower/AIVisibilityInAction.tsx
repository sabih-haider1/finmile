import React from 'react';
import { GitMerge, Share2, Workflow } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const AIVisibilityInAction = () => {
    const rows = [
        { metric: "Predictive ETA AI", capability: "±0.2 seconds", impact: "Fewer missed deliveries" },
        { metric: "AI POD Verification", capability: "99% auto-approved", impact: "99.9% DNR reduction" },
        { metric: "Exception Automation", capability: "100%", impact: "91% WISMO reduction" },
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-10 md:py-14 lg:py-16 overflow-hidden relative gap-0 -mt-4 md:-mt-8 ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] z-10 relative flex flex-col items-center">

                {/* Header Content */}
                <h2 className="font-semibold text-[30px] md:text-[40px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-10 lg:mb-12 text-center">
                    AI Visibility in Action
                </h2>

                {/* Table Layout Grid */}
                <div className="w-full">
                    {/* Header Row - Desktop Only */}
                    <div className="hidden md:grid md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-white px-6 py-4 rounded-xl flex items-center border-b border-white">
                            <span className="text-[#2F1C8C] font-semibold text-[15px]">Metric</span>
                        </div>
                        <div className="bg-[#2F1C8C] rounded-xl px-6 py-4 flex items-center justify-between">
                            <span className="text-white font-semibold text-[15px]">Capability</span>
                            <GitMerge className="w-5 h-5 text-white/70" />
                        </div>
                        <div className="bg-[#2F1C8C] rounded-xl px-6 py-4 flex items-center justify-between">
                            <span className="text-white font-semibold text-[15px]">Impact</span>
                            <Workflow className="w-5 h-5 text-white/70" />
                        </div>
                    </div>

                    {/* Data Rows */}
                    <div className="flex flex-col gap-4">
                        {rows.map((row, idx) => (
                            <div key={idx}>
                                {/* Mobile Card Layout */}
                                <div className="md:hidden bg-white border border-gray-100 rounded-xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col gap-3">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[#6C757D] text-[11px] font-semibold uppercase tracking-wider">Metric</span>
                                        <span className="text-[#0A1B33] font-semibold text-[15px]">{row.metric}</span>
                                    </div>
                                    <div className="flex justify-between items-center gap-4 pt-2 border-t border-gray-100">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[#6C757D] text-[11px] font-semibold uppercase tracking-wider">Capability</span>
                                            <span className="text-[#6A27D4] font-semibold text-[14px]">{row.capability}</span>
                                        </div>
                                        <div className="flex flex-col gap-1 text-right">
                                            <span className="text-[#6C757D] text-[11px] font-semibold uppercase tracking-wider">Impact</span>
                                            <span className="text-[#6C757D] font-semibold text-[14px]">{row.impact}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Table Layout */}
                                <div className="hidden md:grid md:grid-cols-3 gap-4">
                                    <div className="bg-white px-6 py-5 rounded-xl flex items-center border border-gray-50 shadow-[0_2px_10px_rgba(0,0,0,0.015)]">
                                        <span className="text-[#0A1B33] font-semibold text-[14px]">{row.metric}</span>
                                    </div>
                                    <div className="bg-[#F8F7FF] px-6 py-5 rounded-xl flex items-center">
                                        <span className="text-[#6A27D4] font-semibold text-[14px]">{row.capability}</span>
                                    </div>
                                    <div className="bg-[#F8F9FA] px-6 py-5 rounded-xl flex items-center">
                                        <span className="text-[#6C757D] font-semibold text-[14px]">{row.impact}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
