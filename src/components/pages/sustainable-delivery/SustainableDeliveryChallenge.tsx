import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { CheckCircle2 } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const SustainableDeliveryChallenge = () => {
    return (
        <section className={`w-full bg-white py-0 md:py-0 flex justify-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-[52%] flex flex-col items-start lg:pr-8 order-2 lg:order-1">
                    <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.1] mb-6 text-balance text-[clamp(36px,4vw,48px)]">
                        The Challenge: Deliver More, Emit Less
                    </h2>

                    <p className="text-[#64748B] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-8 pr-4">
                        Urban delivery demand is rising fast — but so are emissions, fuel costs, and city restrictions. Traditional routing tools weren&apos;t designed for sustainability targets.
                    </p>

                    <ul className="space-y-5 mb-8 w-full">
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-0.5">
                                <CheckCircle2 className="w-[22px] h-[22px] text-white fill-[#6A27D4]" strokeWidth={2.5} />
                            </div>
                            <span className="text-[#1E1B4B] font-semibold text-[14px] md:text-[15px] leading-snug">
                                Cuts unnecessary miles through AI-driven route optimization
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-0.5">
                                <CheckCircle2 className="w-[22px] h-[22px] text-white fill-[#6A27D4]" strokeWidth={2.5} />
                            </div>
                            <span className="text-[#1E1B4B] font-semibold text-[14px] md:text-[15px] leading-snug">
                                Plans around range limits and charge points for EVs and bikes
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-0.5">
                                <CheckCircle2 className="w-[22px] h-[22px] text-white fill-[#6A27D4]" strokeWidth={2.5} />
                            </div>
                            <span className="text-[#1E1B4B] font-semibold text-[14px] md:text-[15px] leading-snug">
                                Monitors CO₂ emissions in real time across every route
                            </span>
                        </li>
                    </ul>

                    <p className="text-[#2F1C8C] font-semibold text-[15px] md:text-[17px] leading-[1.5]">
                        You don&apos;t need a sustainability team to make a difference — Finmile automates it for you.
                    </p>
                </div>

                {/* Right Side: Image Content */}
                <div className="w-full lg:w-[48%] flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
                    <div className="relative w-full max-w-[580px] aspect-[1.15/1] bg-white rounded-[48px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center p-8">
                        <div className="relative w-full h-[90%] max-w-[500px]">
                        <Image
                            src="/assets/images/features/blue-screen-laptop.png"
                            alt="Sustainable Routing Dashboard"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
