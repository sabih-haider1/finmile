import React from 'react';
import { Truck, HeadphonesIcon, LineChart } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const WhatDeliveriesMean = () => {
    return (
        <section className={`w-full bg-[#F8F7FF] flex flex-col items-center px-4 md:px-6 lg:px-24 py-[clamp(24px,4vw,32px)] overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-12 items-center z-10 relative">

                {/* Left Side: Text */}
                <div className="flex flex-col items-start text-left">
                    <h2 className="text-[#2F1C8C] font-semibold leading-[1.2] tracking-normal md:tracking-tight mb-6 max-w-[500px] text-balance text-[clamp(32px,4vw,48px)]">
                        What Finmile Deliveries Mean for Your Team
                    </h2>
                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[18px] leading-relaxed max-w-[500px]">
                        Finmile&apos;s intelligent automation translates directly into better days for everyone involved in your delivery network, from the depot to the doorstep.
                    </p>
                </div>

                {/* Right Side: List items */}
                <div className="flex flex-col gap-6 lg:gap-8 justify-center">

                    {/* Item 1 */}
                    <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-[14px] bg-white flex items-center justify-center border border-[#E9E4FF] shadow-sm">
                            <Truck className="w-6 h-6 text-[#6A27D4]" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col pt-1">
                            <h4 className="text-[#0A1B33] font-bold text-[18px] mb-1">For Drivers</h4>
                            <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                                Higher drop density, optimized routing sequences, and no more manual guesswork on the road.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-[14px] bg-white flex items-center justify-center border border-[#E9E4FF] shadow-sm">
                            <HeadphonesIcon className="w-6 h-6 text-[#6A27D4]" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col pt-1">
                            <h4 className="text-[#0A1B33] font-bold text-[18px] mb-1">For Dispatchers</h4>
                            <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                                Shift focus from building routes to managing high-level exceptions, as AI handles the heavy lifting.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-[14px] bg-white flex items-center justify-center border border-[#E9E4FF] shadow-sm">
                            <LineChart className="w-6 h-6 text-[#6A27D4]" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col pt-1">
                            <h4 className="text-[#0A1B33] font-bold text-[18px] mb-1">For Management</h4>
                            <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                                Instant visibility into fleet performance, SLA compliance, and cost-per-delivery metrics.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
