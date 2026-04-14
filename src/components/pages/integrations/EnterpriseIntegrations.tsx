"use client";

import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const EnterpriseIntegrations = () => {
    const dataPoints = [
        {
            title: "Power BI",
            description: "Live performance & sustainability dashboards"
        },
        {
            title: "Zapier",
            description: "Workflow automation across 5,000+ tools"
        }
    ];

    return (
        <section className={`w-full bg-[#FAFAFF] flex justify-center px-4 md:px-8 lg:px-24 py-8 md:py-12 md:py-[clamp(40px,5vw,64px)] overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side: Image Content */}
                <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-[600px] aspect-[1.2/1] bg-[#F7F5FF] rounded-[48px] overflow-hidden flex items-center justify-center">
                        <div className="relative w-[90%] h-[85%]">
                            <Image
                                src="/assets/images/features/app-screen-full.png"
                                alt="Finmile Enterprise Integrations on Laptop and Mobile"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Text & Features */}
                <div className="w-full lg:w-[50%] flex flex-col items-start text-left lg:pl-4">

                    {/* Main Heading */}
                    <h2 className="text-[#2F1C8C] font-semibold leading-[1.1] tracking-normal md:tracking-tight mb-8 text-balance text-[clamp(32px,4vw,48px)]">
                        Enterprise & Data<br />
                        Integrations
                    </h2>

                    {/* Lead Description */}
                    <p className="text-[#8B8B9B] font-medium text-[14px] md:text-[16px] leading-[1.6] mb-10 max-w-[550px]">
                        Connect Finmile with your analytics, reporting, and automation stack to unlock deeper operational insight and smarter decision-making.
                    </p>

                    {/* Data Features List */}
                    <div className="space-y-8 mb-12">
                        {dataPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-gray-50 shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-[#6A27D4]" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[#2F1C8C] font-bold text-[17px] md:text-[18px] mb-1">
                                        {point.title}
                                    </h4>
                                    <p className="text-[#8B8B9B] font-medium text-[14px] md:text-[15px]">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link href="/contact" className="bg-[#6A27D4] text-white px-5 md:px-10 py-3.5 rounded-full text-[15px] md:text-[16px] shadow-[0_8px_25px_rgba(106,39,212,0.25)] hover:bg-[#5821B0] transition-all hover:-translate-y-1 active:translate-y-0">
                        Access API Documentation
                    </Link>
                </div>

            </div>
        </section>
    );
};
