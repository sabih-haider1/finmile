'use client';

import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const PowerOfControlTower = () => {
    const tabs = [
        "Real-Time Delivery\nTracking",
        "Predictive ETA\nEngine",
        "AI-Powered POD\nManagement",
        "Exception\nManagement",
        "Live\nAnalytics",
        "Custom\nAlerts"
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-6 md:py-6 lg:py-6 overflow-hidden relative ${montserrat.className}`}>

            {/* Header Content */}
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto mb-10 md:mb-12">
                <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-4 md:mb-6">
                    The Power of the Finmile Control Tower
                </h2>
                <p className="font-medium text-[15px] md:text-[16px] text-[#6C757D] max-w-[700px] leading-relaxed px-4">
                    Finmile's Control Tower is your real-time delivery command centre — combining tracking, analytics, proof of delivery, and predictive insights into one control panel.
                </p>
            </div>

            {/* Tab Navigation Grid */}
            <div className="w-full max-w-[1240px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 mb-10 md:mb-12 z-10">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className="py-4 px-2 rounded-[12px] font-semibold text-[13px] md:text-[14px] leading-tight transition-all text-center flex items-center justify-center min-h-[70px] bg-white text-[#2F1C8C] border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:bg-[#6A27D4] hover:text-white hover:border-[#5821B0] hover:shadow-[0_10px_30px_rgba(106,39,212,0.3)] cursor-default"
                    >
                        <span className="whitespace-pre-line">{tab}</span>
                    </div>
                ))}
            </div>

            {/* Tab Content Container */}
            <div className="w-full max-w-[1240px] z-10 bg-[#F8F7FF] rounded-[24px] md:rounded-[32px] p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

                {/* Left Side: Text and List */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[#6A27D4] flex items-center justify-center mb-8 shadow-[0_10px_20px_rgba(106,39,212,0.2)]">
                        {/* Placeholder Icon representing AI POD */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="12" cy="12" r="1" />
                        </svg>
                    </div>

                    <h3 className="text-[#2F1C8C] font-semibold text-[24px] md:text-[28px] lg:text-[32px] mb-3 leading-tight">
                        AI-Powered POD Management
                    </h3>

                    <p className="text-[#6C757D] font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] md:leading-[1.6] mb-6 max-w-[500px]">
                        Close the loop on every delivery with intelligent proof of delivery verification. Finmile automatically reviews and validates POD photos, barcodes, and signatures using advanced machine learning.
                    </p>

                    <h4 className="text-[#2F1C8C] font-bold text-[14px] md:text-[15px] mb-4">How it works:</h4>

                    <ul className="flex flex-col gap-4 mb-8">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border-[2px] border-[#6A27D4] flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6A27D4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#0A1B33] font-medium text-[14px] leading-snug">
                                Drivers capture a POD via the Finmile App (photo, signature, barcode).
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border-[2px] border-[#6A27D4] flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6A27D4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#0A1B33] font-medium text-[14px] leading-snug">
                                The Control Tower's ML model analyses the image for accuracy, location match, and completeness.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border-[2px] border-[#6A27D4] flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6A27D4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#0A1B33] font-medium text-[14px] leading-snug">
                                AI auto-approves valid PODs and flags anomalies — blurred photos, wrong addresses, missing parcels — for manual review.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border-[2px] border-[#6A27D4] flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6A27D4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#0A1B33] font-medium text-[14px] leading-snug">
                                Approved PODs are instantly synced to your dashboard, reports, and customer portal.
                            </span>
                        </li>
                    </ul>

                    <button className="self-start px-8 py-3.5 bg-[#6A27D4] text-white rounded-full font-semibold text-[14px] transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(106,39,212,0.2)]">
                        Learn More about AI POD Verification
                    </button>
                </div>

                {/* Right Side: Image and Benefits Overlap Box */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative mt-12 lg:mt-0">

                    {/* Background Soft Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white rounded-[32px] opacity-60 pointer-events-none -z-10" />

                    <div className="relative w-[95%] md:w-full flex justify-center">
                        <img
                            src="/assets/images/features/laptop-live.png"
                            alt="Finmile Control Tower Dashboard"
                            className="w-full h-auto drop-shadow-2xl relative z-10 mix-blend-multiply"
                        />
                    </div>

                    {/* Purple Benefits Overlap Box */}
                    <div className="bg-[#2F1C8C] rounded-[24px] p-5 md:p-6 w-[90%] md:w-[85%] max-w-[500px] mt-[-30px] lg:mt-[-50px] relative z-20 shadow-[0_20px_50px_rgba(47,28,140,0.4)]">
                        <h4 className="text-white font-bold text-[14px] md:text-[15px] mb-3 border-b border-white/10 pb-2 inline-block">Benefits</h4>
                        <ul className="flex flex-col gap-2.5">
                            <li className="flex items-start gap-3">
                                <div className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full border-[2px] border-[#6A27D4] flex items-center justify-center">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span className="text-[#DEE2E6] font-medium text-[13px] leading-tight">
                                    Eliminate thousands of manual checks per week
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full border-[2px] border-[#6A27D4] flex items-center justify-center">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span className="text-[#DEE2E6] font-medium text-[13px] leading-tight">
                                    Improve delivery accountability and fraud detection
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full border-[2px] border-[#6A27D4] flex items-center justify-center">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span className="text-[#DEE2E6] font-medium text-[13px] leading-tight">
                                    Provide faster proof and billing for clients
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    );
};
