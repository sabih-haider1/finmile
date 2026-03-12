import React from 'react';
import { Share2, X, AlertTriangle, CheckSquare } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const WhyFinmileLeads = () => {
    const rows = [
        {
            feature: "Predictive ETA AI",
            others: "Static estimates",
            othersStatus: "error",
            finmile: "Dynamic",
            finmileStatus: "success"
        },
        {
            feature: "AI POD Verification",
            others: "Manual check only",
            othersStatus: "error",
            finmile: "ML-based",
            finmileStatus: "success"
        },
        {
            feature: "Exception Automation",
            others: "Delayed",
            othersStatus: "warning",
            finmile: "Real-time workflow",
            finmileStatus: "success"
        },
        {
            feature: "CO₂ & Sustainability Metrics",
            others: "Add-on",
            othersStatus: "warning",
            finmile: "Built-in",
            finmileStatus: "success"
        },
        {
            feature: "Open API",
            others: "Limited",
            othersStatus: "warning",
            finmile: "Full developer access",
            finmileStatus: "success"
        }
    ];

    const getIcon = (status: string) => {
        switch (status) {
            case 'error':
                return <X className="w-4 h-4 text-red-500 mr-2" strokeWidth={3} />;
            case 'warning':
                return <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2" strokeWidth={2.5} fill="#FFC107" />;
            case 'success':
                return <CheckSquare className="w-4 h-4 text-green-500 mr-2" strokeWidth={2.5} fill="#28A745" color="white" />;
            default:
                return null;
        }
    };

    return (
        <section className={`w-full bg-[#fdfcff] flex flex-col items-center px-4 md:px-6 lg:px-24 py-12 md:py-16 lg:py-20 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] z-10 relative flex flex-col items-center">

                {/* Header Content */}
                <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-8 md:mb-12 text-center max-w-[800px]">
                    Why Finmile Leads in Tracking <br className="hidden md:block" /> & Visibility
                </h2>

                {/* Table Layout Grid */}
                <div className="w-full bg-white">
                    {/* Header Row - Desktop Only */}
                    <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4 mb-4">
                        <div className="px-6 py-4 flex items-center border-b border-gray-100">
                            <span className="text-[#2F1C8C] font-semibold text-[16px]">Features</span>
                        </div>
                        <div className="bg-[#6C757D] rounded-xl px-6 py-4 flex items-center justify-between">
                            <span className="text-white font-semibold text-[16px]">Others</span>
                            <Share2 className="w-5 h-5 text-white/50" />
                        </div>
                        <div className="bg-[#2F1C8C] rounded-xl px-6 py-4 flex items-center justify-between">
                            <span className="text-white font-semibold text-[16px]">Finmile</span>
                            <img src="/assets/logos/logo-white.png" alt="Finmile Logo" className="h-4 object-contain" />
                        </div>
                    </div>

                    {/* Data Rows */}
                    <div className="flex flex-col gap-4">
                        {rows.map((row, idx) => (
                            <div key={idx}>
                                {/* Mobile Card Layout */}
                                <div className="md:hidden bg-white border border-gray-100 rounded-xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col gap-3">
                                    <div className="flex flex-col gap-1 pb-3 border-b border-gray-100">
                                        <span className="text-[#6C757D] text-[11px] font-semibold uppercase tracking-wider">Feature</span>
                                        <span className="text-[#0A1B33] font-bold text-[15px]">{row.feature}</span>
                                    </div>
                                    <div className="flex justify-between items-center gap-4">
                                        <div className="flex flex-col gap-1.5 flex-1">
                                            <span className="text-[#6C757D] text-[11px] font-semibold uppercase tracking-wider">Others</span>
                                            <div className="flex items-center">
                                                {getIcon(row.othersStatus)}
                                                <span className="text-[#6C757D] font-medium text-[13px]">{row.others}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1.5 flex-1">
                                            <span className="text-[#2F1C8C] text-[11px] font-semibold uppercase tracking-wider">Finmile</span>
                                            <div className="flex items-center">
                                                {getIcon(row.finmileStatus)}
                                                <span className="text-[#2F1C8C] font-medium text-[13px]">{row.finmile}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Table Layout */}
                                <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4">
                                    <div className="bg-white px-6 py-4 flex items-center border-b border-gray-50">
                                        <span className="text-[#0A1B33] font-bold text-[14px]">{row.feature}</span>
                                    </div>
                                    <div className="bg-[#F8F9FA] px-6 py-4 rounded-xl flex items-center">
                                        {getIcon(row.othersStatus)}
                                        <span className="text-[#6C757D] font-medium text-[14px]">{row.others}</span>
                                    </div>
                                    <div className="bg-[#F8F7FF] px-6 py-4 rounded-xl flex items-center">
                                        {getIcon(row.finmileStatus)}
                                        <span className="text-[#6C757D] font-medium text-[14px]">{row.finmile}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[#6C757D] text-[15px] font-medium">
                        <strong className="text-[#0A1B33]">Finmile</strong> doesn't just track — it understands.
                    </p>
                </div>

            </div>
        </section>
    );
};
