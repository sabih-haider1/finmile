"use client";

import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { Battery, Bike, Fuel, BarChart3 } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const SustainableDeliveryIntegrations = () => {
    const integrations = [
        {
            title: "EV Routing",
            description: "Charging-aware route planning for electric fleets.",
            icon: <Battery className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
        },
        {
            title: "E-Cargo Bikes",
            description: "Hub management for urban zero-emission access.",
            icon: <Bike className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
        },
        {
            title: "Bio-Diesel Fleets",
            description: "Operational optimization for transitional fleets.",
            icon: <Fuel className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
        },
        {
            title: "Sustainability Dashboards",
            description: "Power BI & Zapier integrations for ESG reporting.",
            icon: <BarChart3 className="w-8 h-8 text-[#6A27D4]" strokeWidth={1.5} />
        }
    ];

    return (
        <section className={`w-full bg-white py-8 lg:py-8 flex flex-col items-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] flex flex-col items-center">

                {/* Heading */}
                <h2 className="font-semibold text-[#2F1C8C] text-center tracking-normal md:tracking-tight leading-[1.1] mb-16 max-w-[800px] text-balance text-[clamp(34px,4vw,46px)]">
                    Works with the Fleets and Tools You Already Use
                </h2>

                {/* Integrations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
                    {integrations.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#F8F9FF] border border-[#F1F5F9] rounded-[32px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#6A27D4]/10 hover:-translate-y-1 group"
                        >
                            <div className="mb-2 p-4 rounded-2xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-[20px] text-[#2F1C8C] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[#64748B] font-medium text-[15px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <Link href="/integrations">
                    <button className="bg-[#6A27D4] text-white px-5 md:px-10 py-4 rounded-full font-bold text-[16px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0">
                        Explore All Integrations
                    </button>
                </Link>

            </div>
        </section>
    );
};
