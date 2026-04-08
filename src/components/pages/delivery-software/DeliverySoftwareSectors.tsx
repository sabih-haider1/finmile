"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Truck, Activity, Coffee, Zap } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DeliverySoftwareSectors = () => {
    // Default to Automotive Parts & Vehicle Towing Logistics for the new client request
    const [activeTab, setActiveTab] = useState(5);

    // Define the content for each tab
    const tabs = [
        {
            id: 0,
            title: "E-commerce & Retail",
            icon: <ShoppingBag className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Deliver delight, drop by drop.",
            bullets: ["Automated customer ETA texts", "Branded tracking links", "Contactless proof of delivery"],
            image: "/assets/images/people/meeting.png" // Placeholder, user will provide correct one later
        },
        {
            id: 1,
            title: "Logistics & 3PL",
            icon: <Truck className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Scale your capacity intelligently.",
            bullets: ["Multi-depot route planning", "Sub-contractor portal integration", "Live fleet visibility dashboards"],
            image: "/assets/images/people/meeting.png" // Placeholder
        },
        {
            id: 2,
            title: "Healthcare & Pharma",
            icon: <Activity className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Secure, compliant, essential logistics.",
            bullets: ["Chain of custody", "Time-critical drops", "Temperature control"],
            image: "/assets/images/people/meeting.png" // Specifically requested by user for this tab
        },
        {
            id: 3,
            title: "Food & Beverage",
            icon: <Coffee className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Keep it fresh, keep it fast.",
            bullets: ["SLA enforcement rules", "Dynamic time-window slotting", "Order batching for density"],
            image: "/assets/images/people/meeting.png" // Placeholder
        },
        {
            id: 4,
            title: "Urban Delivery (EV)",
            icon: <Zap className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Optimised for range and traffic.",
            bullets: ["EV charging constraint routing", "Bicycle lane pathing", "Low-emission zone compliance"],
            image: "/assets/images/people/meeting.png" // Placeholder
        },
        {
            id: 5,
            title: "Automotive Parts Delivery & Vehicle Towing Logistics",
            icon: <Truck className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Built for urgent parts, roadside recovery, and garage SLAs.",
            bullets: [
                "Automotive parts delivery software",
                "Same day and urgent auto parts delivery",
                "Vehicle towing and roadside assistance dispatch",
                "Breakdown recovery and fleet coordination",
                "Route optimisation for automotive logistics",
                "Workshop delivery scheduling and prioritisation",
                "Real time tracking for parts and recovery vehicles",
                "Reduce vehicle downtime and missed SLAs"
            ],
            image: "/assets/images/features/delivery-dashboard.png"
        }
    ];

    const currentTab = tabs[activeTab];

    return (
        <section className={`w-full py-6 md:py-6 lg:py-6 bg-white flex flex-col items-center px-4 md:px-6 lg:px-20 relative overflow-hidden ${montserrat.className}`}>

            {/* Top Text Header */}
            <div className="flex flex-col items-center text-center w-full z-10 mb-8 lg:mb-12">
                <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[44px] text-[#2F1C8C] tracking-tight leading-tight">
                    Tailored Solutions for Every Sector
                </h2>
            </div>

            {/* Pill Tabs Container - Scrollable on Mobile */}
            <div className="flex xl:justify-center overflow-x-auto w-full max-w-[1200px] z-10 no-scrollbar mb-2 px-2">
                <div className="flex gap-2 mx-auto min-w-max">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center justify-center h-[46px] md:h-[50px] px-6 rounded-full font-bold text-[13px] md:text-[14px] transition-all duration-300 border ${isActive
                                    ? "bg-[#6A27D4] text-white border-[#6A27D4] shadow-[0_4px_15px_rgba(106,39,212,0.25)]"
                                    : "bg-white text-[#2F1C8C] border-[#E8E5FF] hover:bg-[#F8F7FF] hover:border-[#D1CEF0] shadow-[0_2px_8px_rgba(47,28,140,0.03)]"
                                    } whitespace-nowrap`}
                            >
                                {tab.title}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Split Layout Content Area representing active tab */}
            <div className='max-w-[1200px] w-full bg-[#fdfcff] rounded-[32px] border border-[#F0EDFF] shadow-[0_8px_30px_rgba(47,28,140,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center z-10 p-6 md:p-8 lg:p-10 relative overflow-hidden'>

                {/* Subtle internal background accent */}
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#6A27D4] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

                {/* Left Column: Text Content */}
                <div className='lg:col-span-5 flex flex-col space-y-4 lg:pr-6 z-10'>

                    {/* Floating Icon matching the screenshot */}
                    <div className="w-[50px] h-[50px] rounded-[14px] bg-[#6A27D4] flex items-center justify-center mb-4 shadow-[0_8px_20px_rgba(106,39,212,0.3)]">
                        {React.cloneElement(currentTab.icon, { className: "w-6 h-6 text-white", strokeWidth: 2 })}
                    </div>

                    <h3 className='font-semibold text-[24px] md:text-[28px] text-[#2F1C8C] leading-[1.2] tracking-tight mb-4'>
                        {currentTab.title}
                    </h3>

                    {/* Checkmark Bullets */}
                    <ul className="flex flex-col gap-4">
                        {currentTab.bullets.map((bullet, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="min-w-[22px] h-[22px] rounded-full bg-[#EAE5FE] flex items-center justify-center mt-0.5">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="#6A27D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-[#6C757D] text-[14px] md:text-[15px] font-medium leading-tight">{bullet}</span>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Right Column: Image */}
                <div className='lg:col-span-7 w-full flex items-center justify-center lg:justify-end relative mt-8 lg:mt-0 z-10 h-full'>
                    <Image
                        src={currentTab.image}
                        alt={`Finmile ${currentTab.title}`}
                        width={700}
                        height={450}
                        className='w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-[24px] shadow-[0_20px_40px_rgba(47,28,140,0.08)] transform hover:scale-[1.01] transition-transform duration-700'
                    />
                </div>

            </div>

        </section>
    );
};
