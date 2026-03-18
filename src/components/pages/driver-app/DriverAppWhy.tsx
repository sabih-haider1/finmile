import React from 'react';
import { Target, CheckCircle2, Zap, Cpu } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppWhy = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-6 md:py-6 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 items-start gap-12 lg:gap-12 z-10 relative">

                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start text-left">
                    <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-tight mb-6">
                        Why the Finmile<br />
                        Driver App
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-[500px]">
                        Your drivers are your brand on the road. Finmile gives them the tools to deliver perfectly — and gives you the visibility to manage them intelligently.
                    </p>

                    <div className="flex flex-col gap-8 w-full max-w-[480px]">
                        <div className="flex items-start gap-5">
                            <div className="bg-[#F8F7FF] border border-[#d6d0ff] p-4 rounded-full flex shrink-0 shadow-sm mt-1">
                                <Zap className="w-6 h-6 text-[#6A27D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1A1A] font-semibold text-[17px] mb-2">Zero Friction</h4>
                                <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                                    Designed for field conditions. Minimal taps, high reliability, and intuitive workflows.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="bg-[#F8F7FF] border border-[#d6d0ff] p-4 rounded-full flex shrink-0 shadow-sm mt-1">
                                <Cpu className="w-6 h-6 text-[#6A27D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1A1A] font-semibold text-[17px] mb-2">Edge Intelligence</h4>
                                <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                                    AI runs directly on the device to validate images and track location with high precision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Comparison Cards */}
                <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 justify-center lg:justify-end w-full lg:pt-12">

                    {/* Before Finmile Card */}
                    <div className="bg-[#F8F9FA] rounded-[24px] p-6 md:p-8 flex flex-col items-start w-full sm:w-[340px]">
                        <div className="bg-[#ADB5BD] p-3 rounded-[12px] mb-8">
                            <Target className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        <h4 className="text-[#ADB5BD] font-semibold text-[16px] mb-6">Before Finmile</h4>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-[#ADB5BD] font-medium text-[14px]">
                                <Target className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                                <span>Missed or disputed deliveries</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#ADB5BD] font-medium text-[14px]">
                                <Target className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                                <span>Inefficient communication</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#ADB5BD] font-medium text-[14px]">
                                <Target className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                                <span>Lack of real-time visibility</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#ADB5BD] font-medium text-[14px]">
                                <Target className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                                <span>Manual POD verification</span>
                            </li>
                        </ul>
                    </div>

                    {/* With Finmile Card */}
                    <div className="bg-[#F8F7FF] rounded-[24px] p-6 md:p-8 flex flex-col items-start w-full sm:w-[300px] border border-white shadow-[0_10px_40px_rgba(106,39,212,0.08)] relative overflow-hidden">
                        {/* Subtle glow behind logo */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6A27D4] rounded-full blur-[60px] opacity-10 pointer-events-none" />

                        <div className="bg-white py-4 px-4 rounded-[8px] mb-8 shadow-sm border border-gray-50 flex items-center justify-center">
                            <img src="/assets/logos/logo-blue.png" alt="Finmile Logo" className="h-4 object-contain" />
                        </div>
                        <h4 className="text-[#2F1C8C] font-semibold text-[16px] mb-6">With Finmile</h4>

                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-center gap-3 text-[#2F1C8C] font-semibold text-[13px]">
                                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#6A27D4]" strokeWidth={2.5} />
                                <span>Automatic, verified POD</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#2F1C8C] font-semibold text-[13px]">
                                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#6A27D4]" strokeWidth={2.5} />
                                <span>Dynamic route updates</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#2F1C8C] font-semibold text-[13px]">
                                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#6A27D4]" strokeWidth={2.5} />
                                <span>AI tracking visibility</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#2F1C8C] font-semibold text-[13px]">
                                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#6A27D4]" strokeWidth={2.5} />
                                <span>Instant customer updates</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};
