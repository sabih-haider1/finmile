import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

const partners = [
    "Shopify",
    "TikTok Shop",
    "JD.com",
    "Temu",
    "Power BI",
    "Zapier"
];

export const ReturnsTrust = () => {
    return (
        <section className={`w-full bg-white py-12 lg:py-6 flex flex-col items-center px-6 ${montserrat.className}`}>
            <div className="max-w-[1440px] w-full text-center">
                {/* Header Section */}
                <h2 className="text-[#2F1C8C] text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-10">
                    Trusted by Enterprise Logistics Leaders
                </h2>

                {/* Partner Chips Grid */}
                <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-12">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-[#F8F7FF] px-10 py-6 rounded-2xl flex items-center justify-center min-w-[180px] shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-default border border-[#F0EDFF]/50"
                        >
                            <span className="text-[#64748B] text-[20px] font-bold italic opacity-80 uppercase tracking-tight">
                                {partner}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Horizontal Line */}
                <div className="w-full max-w-[1200px] h-[1px] bg-[#F0EDFF] mx-auto mb-12" />

                {/* Testimonial Section */}
                <div className="max-w-[1000px] mx-auto px-4">
                    <p className="text-[#1A1A1A] text-[16px] md:text-[14px] font-bold italic leading-[1.6] mb-10">
                        &quot;Finmile turned returns from a cost drain into a competitive advantage. We&apos;ve seen a 40% reduction in reverse logistics spend in just six months.&quot;
                    </p>
                    <p className="text-[#2F1C8C] text-[14px] md:text-[16px] font-semibold tracking-tight">
                        Finmile OS — The AI Operating System for Modern Logistics & Returns
                    </p>
                </div>
            </div>
        </section>
    );
};
