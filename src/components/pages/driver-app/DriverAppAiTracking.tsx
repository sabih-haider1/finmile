import React from 'react';
import { Database, Monitor, TrendingUp } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppAiTracking = () => {
    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-4 md:px-6 lg:px-24 py-16 lg:py-16 overflow-hidden relative border-y border-[#F0EDFF] ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center z-10 relative">

                {/* Left Side: Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
                    <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-tight mb-6 mt-4 lg:mt-0">
                        AI Tracking & Geofencing
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-[500px]">
                        High-fidelity tracking that provides precise ETA sharing and automated status updates without manual entry.
                    </p>

                    <div className="flex flex-col gap-8 w-full">
                        <div className="flex items-start gap-5">
                            <div className="mt-1 bg-white border border-[#E9E4FF] p-3 rounded-full flex shrink-0 shadow-sm">
                                <Database className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1A1A] font-semibold text-[16px] mb-1">Live GPS Updates</h4>
                                <p className="text-[#6C757D] font-medium text-[14px]">
                                    High-frequency telemetry for perfect visibility.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="mt-1 bg-white border border-[#E9E4FF] p-3 rounded-full flex shrink-0 shadow-sm">
                                <Monitor className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1A1A] font-semibold text-[16px] mb-1">Automated Status Updates</h4>
                                <p className="text-[#6C757D] font-medium text-[14px]">
                                    Geofencing triggers 'Arrived' and 'Departed' events.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="mt-1 bg-white border border-[#E9E4FF] p-3 rounded-full flex shrink-0 shadow-sm">
                                <TrendingUp className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1A1A] font-semibold text-[16px] mb-1">Predictive ETA Sharing</h4>
                                <p className="text-[#6C757D] font-medium text-[14px]">
                                    Keep customers informed with real-time arrivals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="flex justify-center lg:justify-end w-full order-1 lg:order-2 mt-4 lg:mt-0 relative">
                    {/* Background glow for the image to mimic design */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white rounded-[40px] shadow-[0_30px_60px_rgba(47,28,140,0.05)] -z-10" />
                    <img
                        src="/assets/images/features/laptop-live.png"
                        alt="AI Tracking Interface"
                        className="w-full max-w-[600px] h-auto rounded-[16px] relative z-10 object-contain mix-blend-multiply"
                    />
                </div>

            </div>
        </section>
    );
};
