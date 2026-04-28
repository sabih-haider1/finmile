"use client";

import React from 'react';
import Link from 'next/link';
import { montserrat } from '@/lib/fonts';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const EcommerceIntegrations = () => {
    const integrations = [
        { name: "SHOPIFY", logo: "/assets/integration-logos/shopify.png" },
        { name: "TIKTOK SHOP", logo: "/assets/integration-logos/tiktok_shop.png" },
        { name: "JD.COM", logo: "/assets/integration-logos/jd.com.png" },
        { name: "TEMU", logo: "/assets/integration-logos/temu.png" },
        { name: "MAGENTO", logo: "/assets/integration-logos/magento.png" },
        { name: "WOOCOMMERCE", logo: "/assets/integration-logos/woocommerce.png" }
    ];

    const benefits = [
        "Automated order harvesting",
        "Real-time status sync back to store",
        "Branded tracking links for customers"
    ];

    return (
        <section className={`w-full bg-white flex justify-center px-4 md:px-8 lg:px-24 py-6 md:py-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side: Content */}
                <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
                    <h2 className="text-[#2F1C8C] font-semibold leading-[1.1] tracking-normal md:tracking-tight mb-8 text-balance text-[clamp(32px,4vw,48px)]">
                        E-Commerce &<br />
                        Marketplace Integrations
                    </h2>

                    <p className="text-[#8B8B9B] font-medium text-[14px] md:text-[16px] leading-[1.6] mb-8 max-w-[550px]">
                        Finmile acts as the intelligence layer across every commerce channel —
                        ensuring consistency, efficiency, and transparency from checkout to doorstep.
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-4 mb-10">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#6A27D4]" />
                                <span className="text-[#2F1C8C] font-semibold text-[14px] md:text-[15px]">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link href="/integrations" className="bg-[#6A27D4] text-white px-5 md:px-10 py-3.5 rounded-full text-[15px] md:text-[16px] shadow-[0_8px_25px_rgba(106,39,212,0.25)] hover:bg-[#5821B0] transition-all hover:-translate-y-1 active:translate-y-0">
                        Explore Commerce Integrations
                    </Link>
                </div>

                {/* Mobile View: Infinite Marquee Strip */}
                <div className="lg:hidden relative w-[calc(100%+2rem)] -mx-4 overflow-hidden py-4">
                    <style>{`
                        @keyframes ecommerceMarquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-33.333333%); }
                        }
                        .animate-ecommerce-marquee {
                            animation: ecommerceMarquee 25s linear infinite;
                            width: max-content;
                        }
                    `}</style>
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-ecommerce-marquee hover:![animation-play-state:paused] items-center">
                        {[...integrations, ...integrations, ...integrations].map((item, index) => (
                            <div key={`${item.name}-${index}`} className="flex-shrink-0 bg-[#F8F7FF] rounded-[24px] mx-2 p-6 flex flex-col items-center justify-center w-[160px] h-[80px] shadow-sm transition-transform hover:-translate-y-1">
                                <div className="relative w-[110px] h-[36px]">
                                    <Image
                                        src={item.logo}
                                        alt={`${item.name} Logo`}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop View: Logo Grid */}
                <div className="hidden lg:grid w-full lg:w-[52%] grid-cols-2 gap-4 md:gap-6">
                    {integrations.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#F8F7FF] rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-1"
                        >
                            <div className="relative w-full h-[60px] md:h-[80px]">
                                <Image
                                    src={item.logo}
                                    alt={`${item.name} Logo`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
