"use client";

import React, { useState } from 'react';
import { Target, Users, Map, Activity, Layers, CheckCircle2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const ThreePLMultiClient = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            title: "Centralised Control Tower",
            icon: <Map className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Monitor all deliveries, drivers, and routes from one place — even across multiple clients and regions.",
            bullets: [
                "Live tracking of drivers and fleets",
                "Real-time alerts for delays",
                "Client-specific performance reports"
            ],
            image: "/assets/images/features/location-dashboard.png"
        },
        {
            id: 1,
            title: "Smart Route & Load Optimisation",
            icon: <Target className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Automatically balance loads across multiple depots and vehicles based on SLA constraints.",
            bullets: [
                "Multi-depot balancing",
                "Vehicle capacity matching",
                "Dynamic rerouting for urgent drops"
            ],
            image: "/assets/images/features/location-dashboard.png"
        },
        {
            id: 2,
            title: "Driver Management & POD",
            icon: <Users className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Equip your fleet with a powerful app to capture verified proof of delivery and manage shifts.",
            bullets: [
                "AI-verified photo capture",
                "Geofenced arrival detection",
                "Sub-contractor portal access"
            ],
            image: "/assets/images/features/location-dashboard.png"
        },
        {
            id: 3,
            title: "Branded Client Dashboards",
            icon: <Layers className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Give your top clients their own portal to track their specific freight in real-time.",
            bullets: [
                "White-label tracking links",
                "Custom status updates via SMS/Email",
                "Granular ROI reporting"
            ],
            image: "/assets/images/features/location-dashboard.png"
        },
        {
            id: 4,
            title: "Returns & Reverse Logistics",
            icon: <Activity className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Turn messy returns into a streamlined, profitable part of your network operations.",
            bullets: [
                "Automatic return route integration",
                "Reason code tracking",
                "Warehouse receiving sync"
            ],
            image: "/assets/images/features/location-dashboard.png"
        }
    ];

    const currentTab = tabs[activeTab];

    return (
        <section className={`w-full py-16 lg:py-28 bg-[#0B0616] flex flex-col items-center px-6 lg:px-20 relative overflow-hidden ${montserrat.className}`}>

            {/* Background Glow Effects */}
            <div className="absolute top-[5%] left-[-15%] w-[900px] h-[900px] bg-[#3B257E] rounded-full blur-[160px] opacity-60 pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F1C8C] rounded-[100%] blur-[180px] opacity-70 pointer-events-none" />
            
            {/* Top Text Header */}
            <div className="flex flex-col items-center text-center w-full z-10 mb-12 lg:mb-16">
                <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[44px] text-white tracking-tight leading-[1.2] mb-4">
                    Built for Multi-Client Operations —<br className="hidden md:block"/> Unified by Finmile OS
                </h2>
                <p className="text-[#A09DB0] font-medium text-[15px] md:text-[16px] max-w-[600px]">
                    Handle complexity without requiring extra staff or systems.
                </p>
            </div>

            {/* Glassmorphic Tabs Container */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-12 lg:mb-16 w-full max-w-[1200px] z-10">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative inline-flex items-center justify-center w-full h-[60px] md:h-[70px] xl:h-[60px] rounded-[16px] font-semibold text-[12px] md:text-[13px] transition-all duration-300 group outline-none ${isActive ? "text-white scale-[1.02]" : "text-white/70 hover:text-white"
                                }`}
                        >
                            {/* Glass Shadow & Border Layer */}
                            <div className={`absolute top-0 left-0 z-0 h-full w-full rounded-[16px] transition-all duration-300 ${isActive
                                ? "bg-[#6A27D4]/30 shadow-[0_0_8px_rgba(106,39,212,0.4),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.2),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.1),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(106,39,212,0.5)] border border-[#6A27D4]/50"
                                : "bg-transparent shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] group-hover:bg-white/5 border border-transparent"
                                }`}
                            />

                            {/* Heavy Distortion SVG Layer */}
                            <div
                                className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-[16px]"
                                style={{ backdropFilter: 'url("#container-glass-3pl")' }}
                            />

                            {/* Content */}
                            <div className="pointer-events-none z-10 relative flex items-center justify-center gap-2 px-3 w-full h-full text-center">
                                <div className="flex items-center justify-center p-1 rounded-full border border-current opacity-80 shrink-0">
                                    {React.cloneElement(tab.icon, { className: "w-3 h-3 md:w-3.5 md:h-3.5", strokeWidth: 2 })}
                                </div>
                                <span className="whitespace-normal leading-tight text-left">{tab.title}</span>
                            </div>
                        </button>
                    )
                })}
            </div>

            {/* Split Layout Content Area representing active tab */}
            <div className='max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10'>

                {/* Left Column: Text Content */}
                <div className='lg:col-span-4 flex flex-col space-y-6 lg:pr-6 pt-0'>

                    <h3 className='font-semibold text-[26px] md:text-[32px] text-white leading-[1.2] tracking-tight'>
                        {currentTab.title}
                    </h3>

                    <p className='font-normal text-[15px] md:text-[16px] text-[#A09DB0] leading-relaxed'>
                        {currentTab.subtitle}
                    </p>

                    {/* Checkmark Bullets */}
                    <ul className="flex flex-col gap-4">
                        {currentTab.bullets.map((bullet, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="min-w-[20px] h-[20px] rounded-full bg-[#6A27D4] flex items-center justify-center">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                                </div>
                                <span className="text-white text-[14px] md:text-[15px] font-medium leading-snug">{bullet}</span>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Right Column: Image */}
                <div className='lg:col-span-8 w-full flex items-center justify-center lg:justify-end relative mt-8 lg:mt-0'>
                    {/* Background glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#6A27D4] rounded-full blur-[100px] opacity-40 -z-10" />

                    <img
                        src={currentTab.image}
                        alt={`Finmile ${currentTab.title} Dashboard`}
                        className='w-full max-w-[900px] h-auto object-cover rounded-[16px] drop-shadow-2xl opacity-95'
                    />
                </div>

            </div>

            {/* Hidden SVG Filter Definition for the Liquid Glass Tabs */}
            <svg className="hidden">
                <defs>
                    <filter
                        id="container-glass-3pl"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        colorInterpolationFilters="sRGB"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.05 0.05"
                            numOctaves="1"
                            seed="1"
                            result="turbulence"
                        />
                        <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="blurredNoise"
                            scale="70"
                            xChannelSelector="R"
                            yChannelSelector="B"
                            result="displaced"
                        />
                        <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
                        <feComposite in="finalBlur" in2="finalBlur" operator="over" />
                    </filter>
                </defs>
            </svg>

        </section>
    );
};
