import React from 'react';
import { Server, Monitor, TrendingUp } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppRouteGuidance = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-16 lg:py-16 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center z-10 relative">

                {/* Left Side: Image */}
                <div className="flex justify-center lg:justify-start w-full order-2 lg:order-1 mt-10 lg:mt-0">
                    <img
                        src="/assets/images/half-dashboard.png"
                        alt="Route Guidance Dashboard"
                        className="w-full max-w-[550px] h-auto rounded-[24px] shadow-[0_20px_50px_rgba(47,28,140,0.1)] relative z-10 object-contain ml-[-20px] lg:ml-[-50px]"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start text-left order-1 lg:order-2">
                    <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-tight mb-6">
                        Route Guidance &<br />
                        Navigation
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-[500px]">
                        Drivers stay on track with precise AI-generated routes that adapt to changing conditions.
                    </p>

                    <div className="flex flex-col gap-8 w-full">
                        <div className="flex items-start gap-5">
                            <div className="mt-1 bg-[#F8F7FF] border border-[#E9E4FF] p-3 rounded-full flex shrink-0 shadow-sm">
                                <Server className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1A1A] font-semibold text-[16px] mb-1">AI-Generated Routes</h4>
                                <p className="text-[#6C757D] font-medium text-[14px]">
                                    Optimised for traffic, vehicle type, and windows.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="mt-1 bg-[#F8F7FF] border border-[#E9E4FF] p-3 rounded-full flex shrink-0 shadow-sm">
                                <Monitor className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1A1A] font-semibold text-[16px] mb-1">Real-time Rerouting</h4>
                                <p className="text-[#6C757D] font-medium text-[14px]">
                                    Instant updates if conditions change on the road.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="mt-1 bg-[#F8F7FF] border border-[#E9E4FF] p-3 rounded-full flex shrink-0 shadow-sm">
                                <TrendingUp className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1A1A] font-semibold text-[16px] mb-1">Dispatcher Sync</h4>
                                <p className="text-[#6C757D] font-medium text-[14px]">
                                    Stay connected with the control tower at all times.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
