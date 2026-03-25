"use client";

import React from 'react';
import { Montserrat } from 'next/font/google';
import { Lock, Cloud, Activity } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const IntegrationsTrust = () => {
    const trustPoints = [
        {
            icon: <Lock className="w-8 h-8 text-[#6A27D4]" />,
            title: "Enterprise Security",
            description: "GDPR and ISO27001 aligned for bank-grade data protection."
        },
        {
            icon: <Cloud className="w-8 h-8 text-[#6A27D4]" />,
            title: "Cloud-Native",
            description: "Full redundancy and 99.99% uptime for mission-critical operations."
        },
        {
            icon: <Activity className="w-8 h-8 text-[#6A27D4]" />,
            title: "Low Latency",
            description: "Optimised endpoints to support live dispatch and tracking at scale."
        }
    ];

    return (
        <section className={`w-full bg-white flex justify-center px-4 md:px-8 lg:px-24 py-6 md:py-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col items-center text-center">

                {/* Main Heading */}
                <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
                    Built for Scale, Security, and Speed
                </h2>

                {/* Trust Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 w-full mb-2">
                    {trustPoints.map((point, index) => (
                        <div key={index} className="bg-[#F8F7FF] rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
                            {/* Icon Container */}
                            <div className="mb-8">
                                {point.icon}
                            </div>

                            {/* Title */}
                            <h4 className="text-[#2F1C8C] font-bold text-[18px] md:text-[20px] mb-4">
                                {point.title}
                            </h4>

                            {/* Description */}
                            <p className="text-[#8B8B9B] font-medium text-[14px] md:text-[16px] leading-[1.6] max-w-[280px]">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Scaling Text */}
                <p className="text-[#8B8B9B] text-[15px] md:text-[17px] max-w-[700px] leading-[1.6]">
                    Finmile is designed to grow with your operation — whether you&apos;re connecting two systems or two hundred.
                </p>

            </div>
        </section>
    );
};
