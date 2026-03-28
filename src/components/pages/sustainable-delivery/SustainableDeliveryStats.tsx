"use client";

import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const SustainableDeliveryStats = () => {
    const stats = [
        {
            label: "CUSTOMERS EXPECT IT",
            value: "73%",
            description: "of customers prefer brands with visible sustainability action."
        },
        {
            label: "CITIES DEMAND IT",
            value: "Ultra Low Emissions Zones",
            description: "Zero-emission zones are expanding rapidly across global hubs."
        },
        {
            label: "PROFIT REWARDS IT",
            value: "-35%",
            description: "Zero-emission zones are expanding rapidly across global hubs."
        }
    ];

    return (
        <section className={`w-full bg-white py-6 lg:py-6 flex flex-col items-center px-6 ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] flex flex-col items-center">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#F8F9FF] border border-[#F1F5F9] rounded-[32px] p-10 flex flex-col items-center text-center justify-center min-h-[280px]"
                        >
                            <span className="text-[#6A27D4] font-bold text-[13px] tracking-wider mb-6 uppercase">
                                {stat.label}
                            </span>
                            <h3 className="font-bold text-[32px] md:text-[36px] lg:text-[40px] text-[#2F1C8C] mb-6 leading-tight">
                                {stat.value}
                            </h3>
                            <p className="text-[#64748B] font-medium text-[15px] leading-relaxed max-w-[280px]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Text */}
                <h4 className="text-[#2F1C8C] font-semibold text-[20px] md:text-[24px] text-center max-w-[1000px]">
                    With Finmile, sustainability isn't a box to tick — it's a measurable advantage.
                </h4>

            </div>
        </section>
    );
};
