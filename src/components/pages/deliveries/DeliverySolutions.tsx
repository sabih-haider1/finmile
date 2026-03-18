"use client";

import React, { useState } from 'react';
import { Target, Users, Factory, Map, Activity, Layers } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DeliverySolutions = () => {
    // Determine which tab is active (0 to 5) - default to B2C (1)
    const [activeTab, setActiveTab] = useState(1);

    // Define the content for each tab
    const tabs = [
        {
            id: 0,
            title: "B2B Logistics",
            icon: <Factory className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Scalable, precise, real-time control.",
            bullets: ["Dynamic routing for complex SLAs", "Multi-driver fleet automation", "Predictive dispatching", "Cross-docking synchronization"],
            image: "/assets/images/features/delivery-dashboard.png"
        },
        {
            id: 1,
            title: "B2C Logistics",
            icon: <Users className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Unmatched customer delivery experiences.",
            bullets: ["Live ETA tracking links", "Automated customer SMS/Email alerts", "Contactless PODs", "Returns management integration"],
            image: "/assets/images/features/delivery-dashboard.png"
        },
        {
            id: 2,
            title: "Courier Platforms",
            icon: <Layers className="w-4 h-4" strokeWidth={2} />,
            subtitle: "High-volume orchestration and analytics.",
            bullets: ["Sub-contractor portal access", "Gig fleet management", "Per-drop payment calculation", "API connection to aggregators"],
            image: "/assets/images/features/delivery-dashboard.png"
        },
        {
            id: 3,
            title: "Retail/Grocery",
            icon: <Target className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Same-day execution at scale.",
            bullets: ["Store-to-door slot booking", "Cold-chain vehicle tracking", "Barcode scanning per item", "Instant driver reassignment"],
            image: "/assets/images/features/delivery-dashboard.png"
        },
        {
            id: 4,
            title: "Healthcare/Pharma",
            icon: <Activity className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Secure, compliant, essential logistics.",
            bullets: ["Temperature monitoring integrations", "Chain-of-custody tracking", "Signature verification enforcement", "Priority routing rules"],
            image: "/assets/images/features/delivery-dashboard.png"
        },
        {
            id: 5,
            title: "Large Enterprises",
            icon: <Map className="w-4 h-4" strokeWidth={2} />,
            subtitle: "Global visibility across your entire network.",
            bullets: ["Multi-depot balancing", "Carrier performance dashboards", "ERP & WMS deep integration", "Custom analytics reporting"],
            image: "/assets/images/features/delivery-dashboard.png"
        }
    ];

    const currentTab = tabs[activeTab];

    return (
        <section className={`w-full py-6 lg:py-6 bg-[#0B0616] flex flex-col items-center px-6 lg:px-20 relative overflow-hidden ${montserrat.className}`}>

            {/* Background Glow Effects (Matched from OurOrigin) */}
            <div className="absolute top-[5%] left-[-15%] w-[900px] h-[900px] bg-[#3B257E] rounded-full blur-[160px] opacity-70 pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F1C8C] rounded-[100%] blur-[180px] opacity-80 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-5 pointer-events-none" />

            {/* Top Text Header */}
            <div className="flex flex-col items-center text-center w-full z-10 mb-12 lg:mb-8">
                <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-white tracking-tight leading-tight mb-4">
                    Delivery Solutions for Every Business
                </h2>
                <p className="text-[#A09DB0] font-medium text-[15px] md:text-[18px] max-w-[800px]">
                    From high-volume consumer goods to strict SLA enterprise networks. Our platform adapts to your specific logistics needs.
                </p>
            </div>

            {/* Glassmorphic Tabs Container - Even Full Width */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4 mb-12 lg:mb-8 w-full max-w-[1200px] z-10">
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
                                style={{ backdropFilter: 'url("#container-glass-deliveries")' }}
                            />

                            {/* Content */}
                            <div className="pointer-events-none z-10 relative flex items-center gap-2 px-3">
                                <div className="flex items-center justify-center p-1 rounded-full border border-current opacity-80 shrink-0">
                                    {React.cloneElement(tab.icon, { className: "w-3 h-3 md:w-3.5 md:h-3.5", strokeWidth: 2 })}
                                </div>
                                <span className="whitespace-nowrap truncate">{tab.title}</span>
                            </div>
                        </button>
                    )
                })}
            </div>

            {/* Split Layout Content Area representing active tab */}
            <div className='max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center z-10'>

                {/* Left Column: Text Content */}
                <div className='lg:col-span-5 flex flex-col space-y-4 lg:pr-6 pt-0'>

                    {/* Floating Icon matching the screenshot */}
                    <div className="w-[48px] h-[48px] rounded-[14px] bg-[#6A27D4] flex items-center justify-center mb-1 shadow-[0_8px_30px_rgba(106,39,212,0.5)] border border-white/20">
                        <div className="p-0.5 rounded-full border border-white">
                            {React.cloneElement(currentTab.icon, { className: "w-5 h-5 text-white", strokeWidth: 1.5 })}
                        </div>
                    </div>

                    <h3 className='font-semibold text-[26px] md:text-[32px] text-white leading-[1.1] tracking-tight'>
                        {currentTab.title}
                    </h3>

                    <p className='font-normal text-[15px] md:text-[16px] text-[#A09DB0] leading-relaxed mb-4'>
                        {currentTab.subtitle}
                    </p>

                    {/* Checkmark Bullets */}
                    <ul className="flex flex-col gap-3 mb-6">
                        {currentTab.bullets.map((bullet, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="min-w-[20px] h-[20px] rounded-full bg-[#6A27D4] flex items-center justify-center">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-white text-[14px] md:text-[15px] font-medium">{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="self-start mt-2 bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-transform hover:scale-105">
                        Learn More
                    </button>

                </div>

                {/* Right Column: Image */}
                <div className='lg:col-span-7 w-full flex items-center justify-center lg:justify-end relative mt-8 lg:mt-0'>

                    {/* Background glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#6A27D4] rounded-full blur-[100px] opacity-40 -z-10" />

                    <img
                        src={currentTab.image}
                        alt={`Finmile ${currentTab.title} Dashboard`}
                        className='w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700 drop-shadow-2xl'
                    />
                </div>

            </div>

            {/* Hidden SVG Filter Definition for the Liquid Glass Tabs */}
            <svg className="hidden">
                <defs>
                    <filter
                        id="container-glass-deliveries"
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
