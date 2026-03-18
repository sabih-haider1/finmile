import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const PredictiveVisibility = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-6 md:py-6 lg:py-6 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-12 z-10 relative">

                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start text-left">
                    <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-tight mb-4 md:mb-6">
                        Real-Time Delivery<br className="hidden md:block" />
                        Tracking & Predictive<br className="hidden md:block" />
                        Visibility
                    </h2>

                    <h3 className="text-[#2F1C8C] font-semibold text-[16px] md:text-[18px] mb-4">
                        Know everything. Predict anything. Control every mile.
                    </h3>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-[500px]">
                        The Finmile Control Tower gives you complete real-time visibility across your delivery network — every parcel, vehicle, and route, in one intelligent dashboard.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] transition-transform hover:scale-105 hover:bg-[#5821B0] w-full sm:w-auto text-center">
                            See Control Tower in Action
                        </button>
                        <button className="bg-white text-[#6A27D4] border border-[#d6d0ff] px-8 py-3.5 rounded-full font-semibold text-[14px] transition-all hover:border-[#6A27D4] hover:shadow-[0_0_15px_rgba(106,39,212,0.15)] w-full sm:w-auto text-center">
                            Book A Demo
                        </button>
                    </div>
                </div>

                {/* Right Side: Comparison Cards */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-end w-full">

                    {/* Without Visibility Card */}
                    <div className="bg-[#F8F9FA] rounded-[24px] p-6 md:p-8 flex flex-col items-start w-full sm:w-[280px]">
                        <div className="bg-[#ADB5BD] p-3 rounded-[12px] mb-8">
                            <Target className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        <h4 className="text-[#ADB5BD] font-semibold text-[16px] mb-6">Without Visibility</h4>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-[#ADB5BD] font-medium text-[14px]">
                                <CheckCircle2 className="w-5 h-5 shrink-0" strokeWidth={2} />
                                <span>Dispatchers react late</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#ADB5BD] font-medium text-[14px]">
                                <CheckCircle2 className="w-5 h-5 shrink-0" strokeWidth={2} />
                                <span>Customers left in the dark</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#ADB5BD] font-medium text-[14px]">
                                <CheckCircle2 className="w-5 h-5 shrink-0" strokeWidth={2} />
                                <span>Lost operational trust</span>
                            </li>
                        </ul>
                    </div>

                    {/* With Finmile Card */}
                    <div className="bg-[#F8F7FF] rounded-[24px] p-6 md:p-8 flex flex-col items-start w-full sm:w-[280px] border border-white shadow-[0_10px_40px_rgba(106,39,212,0.08)] relative overflow-hidden">
                        {/* Subtle glow behind logo */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6A27D4] rounded-full blur-[60px] opacity-10 pointer-events-none" />

                        <div className="bg-white py-2 px-4 rounded-[8px] mb-8 shadow-sm border border-gray-50 flex items-center justify-center">
                            <img src="/assets/logos/logo-blue.png" alt="Finmile Logo" className="h-4 object-contain" />
                        </div>
                        <h4 className="text-[#2F1C8C] font-semibold text-[16px] mb-6">With Finmile</h4>

                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-center gap-3 text-[#2F1C8C] font-semibold text-[13px]">
                                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#6A27D4]" strokeWidth={2.5} />
                                <span>Every delivery visible — live</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#2F1C8C] font-semibold text-[13px]">
                                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#6A27D4]" strokeWidth={2.5} />
                                <span>Predictive ETAs surface risk</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#2F1C8C] font-semibold text-[13px]">
                                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#6A27D4]" strokeWidth={2.5} />
                                <span>AI auto-processes PODs</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};
