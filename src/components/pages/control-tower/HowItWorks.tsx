import React from 'react';
import { Share2, Navigation, Zap, ShieldCheck, BarChart2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const HowItWorks = () => {
    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-4 md:px-6 lg:px-24 py-12 md:py-16 lg:py-20 overflow-hidden relative ${montserrat.className}`}>

            {/* Header Content */}
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto mb-10 md:mb-14 lg:mb-16">
                <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.2]">
                    How It Works
                </h2>
            </div>

            {/* Icon Timeline Grid */}
            <div className="w-full max-w-[1240px] relative z-10">

                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-[48px] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10" />

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4 items-start justify-items-center">

                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center relative w-[160px] md:w-[200px]">
                        <div className="w-[84px] h-[84px] md:w-[96px] md:h-[96px] rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_15px_40px_rgba(106,39,212,0.08)] border border-gray-50 group hover:-translate-y-2 transition-transform duration-300">
                            <Share2 className="w-8 h-8 md:w-10 md:h-10 text-[#6A27D4] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#0A1B33] font-bold text-[15px] mb-2 whitespace-nowrap">
                            Connect Data
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[12px] leading-relaxed px-2">
                            Orders, vehicles, apps via API
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center relative w-[160px] md:w-[200px]">
                        <div className="w-[84px] h-[84px] md:w-[96px] md:h-[96px] rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_15px_40px_rgba(106,39,212,0.08)] border border-gray-50 group hover:-translate-y-2 transition-transform duration-300">
                            <Navigation className="w-8 h-8 md:w-10 md:h-10 text-[#6A27D4] group-hover:scale-110 transition-transform rotate-45" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#0A1B33] font-bold text-[15px] mb-2 whitespace-nowrap">
                            Track Live
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[12px] leading-relaxed px-2">
                            Real-time driver & route view
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center relative w-[160px] md:w-[200px] lg:col-span-1 col-span-2 sm:col-span-1">
                        <div className="w-[84px] h-[84px] md:w-[96px] md:h-[96px] rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_15px_40px_rgba(106,39,212,0.08)] border border-gray-50 group hover:-translate-y-2 transition-transform duration-300 relative">
                            {/* Subtle inner pulse mapping to 'Alert' */}
                            <div className="absolute inset-x-0 bottom-0 top-[20%] mx-auto w-10 h-10 bg-[#6A27D4]/10 rounded-full blur-[20px] pointer-events-none" />
                            <Zap className="w-8 h-8 md:w-10 md:h-10 text-[#6A27D4] group-hover:scale-110 transition-transform relative z-10" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#0A1B33] font-bold text-[15px] mb-2 whitespace-nowrap">
                            Predict & Alert
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[12px] leading-relaxed px-2">
                            AI forecasts ETA shifts
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center relative w-[160px] md:w-[200px]">
                        <div className="w-[84px] h-[84px] md:w-[96px] md:h-[96px] rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_15px_40px_rgba(106,39,212,0.08)] border border-gray-50 group hover:-translate-y-2 transition-transform duration-300">
                            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-[#6A27D4] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#0A1B33] font-bold text-[15px] mb-2 whitespace-nowrap">
                            Verify Deliveries
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[12px] leading-relaxed px-2">
                            ML validates PODs
                        </p>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col items-center text-center relative w-[160px] md:w-[200px]">
                        <div className="w-[84px] h-[84px] md:w-[96px] md:h-[96px] rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_15px_40px_rgba(106,39,212,0.08)] border border-gray-50 group hover:-translate-y-2 transition-transform duration-300">
                            <BarChart2 className="w-8 h-8 md:w-10 md:h-10 text-[#6A27D4] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#0A1B33] font-bold text-[15px] mb-2 whitespace-nowrap">
                            Analyse
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[12px] leading-relaxed px-2">
                            Dashboards surface insights
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
