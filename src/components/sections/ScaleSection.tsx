import React from 'react';
import { Layers, Navigation, Clock } from 'lucide-react';

export const ScaleSection = () => {
    return (
        <section className="w-full bg-[#fcfcff] flex flex-col items-center px-4 md:px-6 py-10 lg:py-12 overflow-hidden relative">

            {/* Section Header */}
            <div className="text-center mb-10 md:mb-14 w-full z-10 flex flex-col items-center">
                <h2 className="text-[#2F1C8C] text-[40px] md:text-[56px] lg:text-[60px] font-bold tracking-tight mb-6 leading-tight">
                    Built for scale. Designed for reality.
                </h2>
                <p className="text-[#848DA0] text-[18px] md:text-[22px] max-w-3xl font-medium mx-auto px-4">
                    As delivery volume grows, Finmile removes complexity instead of adding headcount.
                </p>
            </div>

            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-8 z-10 relative">

                {/* Left Side - Dashboard Representation */}
                <div className="w-full lg:w-[55%] flex items-center justify-center lg:justify-start">
                    <img
                        src="/assets/images/half-dashboard.png"
                        alt="Finmile Scale Dashboard"
                        className="w-full h-auto object-contain mix-blend-multiply"
                        style={{ maxHeight: '650px' }}
                    />
                </div>

                {/* Right Side - Info Card */}
                <div className="w-full lg:w-[45%] flex items-stretch justify-center lg:justify-end">

                    <div className="bg-[#fbfafe] rounded-3xl md:rounded-[40px] p-8 md:p-12 w-full max-w-[540px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white flex flex-col justify-between">

                        <div>
                            {/* Logo Chip */}
                            <div className="bg-white rounded-[24px] py-4 px-8 shadow-[0_15px_40px_rgba(47,28,140,0.06),inset_0_4px_12px_rgba(0,0,0,0.04)] inline-flex items-center justify-center mb-16 border border-slate-50">
                                <img src="/assets/logos/logo-blue.png" alt="Finmile Logo" className="h-8 md:h-10 w-auto object-contain" />
                            </div>

                            <h3 className="text-black font-bold text-[24px] md:text-[28px] mb-10 leading-tight">
                                Just predictable execution at scale.
                            </h3>

                            {/* List Features */}
                            <div className="space-y-4 mb-16">

                                <div className="flex items-center gap-4 bg-white px-6 py-5 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.02)]">
                                    <Layers className="text-[#6A27D4] w-6 h-6 shrink-0" strokeWidth={2} />
                                    <span className="text-gray-900 font-bold text-[17px]">Fewer Tools</span>
                                </div>

                                <div className="flex items-center gap-4 bg-white px-6 py-5 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.02)]">
                                    <Navigation className="text-[#6A27D4] w-6 h-6 shrink-0 transform rotate-45" strokeWidth={2} />
                                    <span className="text-gray-900 font-bold text-[17px]">Fewer Manual Decisions</span>
                                </div>

                                <div className="flex items-center gap-4 bg-white px-6 py-5 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.02)]">
                                    <Clock className="text-[#6A27D4] w-6 h-6 shrink-0" strokeWidth={2} />
                                    <span className="text-gray-900 font-bold text-[17px]">Fewer Operational Surprises</span>
                                </div>

                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
                            <button className="liquid-solid text-white px-8 py-4 rounded-full font-bold w-full sm:flex-1 text-[15px] transition-all whitespace-nowrap">
                                Book A Demo
                            </button>
                            <button className="text-[#6A27D4] px-6 py-4 rounded-full font-bold w-full sm:flex-[1.5] text-[15px] border border-[#6A27D4] hover:bg-indigo-50/50 transition-all bg-transparent whitespace-nowrap">
                                Calculate your route savings
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
