"use client";

import React, { useState } from 'react';
import { Target, Cpu, Users, BarChart } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const MeetTheSuite = () => {
    // Determine which tab is active (0 to 3)
    const [activeTab, setActiveTab] = useState(1); // Default to Planning Agent to match screenshot

    // Define the content for each tab
    const tabs = [
        {
            id: 0,
            title: "Live Operations Agent",
            icon: <Target className="w-4 h-4" strokeWidth={2} />,
            subtitle: "The Live Operations Agent constantly evaluates live performance.",
            p1: "If traffic spikes or drivers deviate from routes, it triggers adjustments automatically. No waiting for a dispatcher to notice the issue. No manual rebuilding. The system adapts in real time.",
            bullets: ["Automated dispatching", "Real-time rerouting", "Proactive delay alerts"],
            image: "/assets/images/features/app-dashboard.png" // Placeholder image for tabs 0, 2, 3
        },
        {
            id: 1,
            title: "Planning Agent",
            icon: <Cpu className="w-4 h-4" strokeWidth={2} />,
            subtitle: "The Planning Agent constantly evaluates whether a route plan is still optimal.",
            p1: "If demand shifts, stops are delayed, or constraints change, it triggers the optimiser automatically. No waiting for a dispatcher to notice the issue. No manual rebuilds. The system adapts in real time.",
            bullets: ["Higher drop density", "Fewer trips", "Plans that adapt in seconds"],
            image: "/assets/images/features/app-dashboard.png" // The primary screenshot requested
        },
        {
            id: 2,
            title: "Customer Agent",
            icon: <Users className="w-4 h-4" strokeWidth={2} />,
            subtitle: "The Customer Agent constantly handles inbound inquiries and WISMOs.",
            p1: "If a customer asks 'where is my order?', it instantly cross-references live tracking data and replies automatically. No waiting for support agents to investigate. The system handles it in real time.",
            bullets: ["Instant WISMO resolution", "Predictive ETA updates", "Multilingual support"],
            image: "/assets/images/features/app-dashboard.png"
        },
        {
            id: 3,
            title: "Finance Agent",
            icon: <BarChart className="w-4 h-4" strokeWidth={2} />,
            subtitle: "The Finance Agent constantly audits driver pay and invoice accuracy.",
            p1: "If a route takes longer than expected or fuel prices fluctuate, it calculates fair compensation automatically. No waiting for manual reconciliation at month-end. The system audits in real time.",
            bullets: ["Automated driver payouts", "Real-time cost tracking", "Instant invoice generation"],
            image: "/assets/images/features/app-dashboard.png"
        }
    ];

    const currentTab = tabs[activeTab];

    return (
        <section className={`w-full py-16 lg:py-24 bg-[#0B0616] flex flex-col items-center px-6 lg:px-20 relative overflow-hidden ${montserrat.className}`}>

            {/* Background Glow Effects (Matched from OurOrigin) */}
            <div className="absolute top-[5%] left-[-15%] w-[900px] h-[900px] bg-[#3B257E] rounded-full blur-[160px] opacity-70 pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F1C8C] rounded-[100%] blur-[180px] opacity-80 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-5 pointer-events-none" />

            {/* Top Text Header */}
            <div className="flex flex-col items-center text-center w-full z-10 mb-10">
                <span className="bg-white/5 border border-white/10 text-white rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-wider mb-6 shadow-sm">
                    AI Agents
                </span>
                <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-white tracking-tight leading-tight">
                    Meet the Suite
                </h2>
            </div>

            {/* Glassmorphic Tabs Container - Even Full Width */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 w-full max-w-[1200px] z-10">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative inline-flex items-center justify-center w-full h-[60px] rounded-[16px] font-semibold text-[13px] md:text-[14px] transition-all duration-300 group outline-none ${isActive ? "text-white scale-[1.02]" : "text-white/70 hover:text-white"
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
                                style={{ backdropFilter: 'url("#container-glass")' }}
                            />

                            {/* Content */}
                            <div className="pointer-events-none z-10 relative flex items-center gap-2 md:gap-3 px-4">
                                <div className="flex items-center justify-center p-1 rounded-full border border-current opacity-80">
                                    {React.cloneElement(tab.icon, { className: "w-4 h-4 md:w-5 md:h-5", strokeWidth: 2 })}
                                </div>
                                <span className="whitespace-nowrap truncate">{tab.title}</span>
                            </div>
                        </button>
                    )
                })}
            </div>

            {/* Split Layout Content Area representing active tab */}
            <div className='max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start z-10'>

                {/* Left Column: Text Content */}
                <div className='lg:col-span-5 xl:col-span-4 flex flex-col space-y-4 pt-0'>

                    {/* Floating Icon matching the screenshot */}
                    <div className="w-[48px] h-[48px] rounded-[14px] bg-[#6A27D4] flex items-center justify-center mb-1 shadow-[0_8px_30px_rgba(106,39,212,0.5)] border border-white/20">
                        <div className="p-0.5 rounded-full border border-white">
                            {React.cloneElement(currentTab.icon, { className: "w-5 h-5 text-white", strokeWidth: 1.5 })}
                        </div>
                    </div>

                    <h3 className='font-semibold text-[26px] md:text-[30px] text-white leading-[1.1] tracking-tight'>
                        {currentTab.title}
                    </h3>

                    <p className='font-normal text-[14px] md:text-[15px] text-[#A09DB0] leading-relaxed'>
                        {currentTab.subtitle}
                    </p>

                    <p className='font-normal text-[14px] md:text-[15px] text-[#A09DB0] leading-relaxed mb-2'>
                        {currentTab.p1}
                    </p>

                    {/* Checkmark Bullets */}
                    <ul className="flex flex-col gap-2.5">
                        {currentTab.bullets.map((bullet, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="min-w-[18px] h-[18px] rounded-full bg-[#6A27D4] flex items-center justify-center">
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-white text-[13px] md:text-[14px] font-medium">{bullet}</span>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Right Column: Image */}
                <div className='lg:col-span-7 xl:col-span-8 w-full flex items-center justify-center lg:justify-end'>
                    <img
                        src={currentTab.image}
                        alt={`Finmile ${currentTab.title} Interface`}
                        className='w-full h-auto object-cover rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.5)] border border-white/10'
                    />
                </div>

            </div>

            {/* Hidden SVG Filter Definition for the Liquid Glass Tabs */}
            <svg className="hidden">
                <defs>
                    <filter
                        id="container-glass"
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
