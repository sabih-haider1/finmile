import React from 'react';
import { Quote } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OperationalImpact = () => {
    return (
        <section className={`w-full bg-[#0B0616] py-12 md:py-16 lg:py-16 flex flex-col items-center px-4 md:px-6 lg:px-24 relative overflow-hidden ${montserrat.className}`}>

            {/* Background Glows matching OurOrigin */}
            <div className="absolute top-[5%] left-[-15%] w-[900px] h-[900px] bg-[#3B257E] rounded-full blur-[160px] opacity-70 pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F1C8C] rounded-[100%] blur-[180px] opacity-80 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-5 pointer-events-none" />

            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center text-center mb-10 md:mb-14">
                <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-white tracking-tight leading-[1.2]">
                    Operational Impact
                </h2>
            </div>

            <div className="w-full max-w-[1240px] z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                {/* Left Side: 2x2 Grid using glass cards */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                    {/* Card 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:bg-white/10">
                        <span className="text-white/60 text-[10px] md:text-[11px] font-bold tracking-wider uppercase mb-3 md:mb-4">High Confidence</span>
                        <h3 className="text-white font-bold text-[36px] md:text-[48px] leading-none mb-2">+42%</h3>
                        <p className="text-[#DEE2E6] text-[13px] md:text-[14px] font-medium">Route Efficiency</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:bg-white/10">
                        <span className="text-white/60 text-[10px] md:text-[11px] font-bold tracking-wider uppercase mb-3 md:mb-4">Predictive Intel</span>
                        <h3 className="text-white font-bold text-[36px] md:text-[48px] leading-none mb-2">+99%</h3>
                        <p className="text-[#DEE2E6] text-[13px] md:text-[14px] font-medium">On-Time Rate</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:bg-white/10">
                        <span className="text-white/60 text-[10px] md:text-[11px] font-bold tracking-wider uppercase mb-3 md:mb-4">Auto-Processing</span>
                        <h3 className="text-white font-bold text-[36px] md:text-[48px] leading-none mb-2">-99.9%</h3>
                        <p className="text-[#DEE2E6] text-[13px] md:text-[14px] font-medium">Manual POD Review</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:bg-white/10">
                        <span className="text-white/60 text-[10px] md:text-[11px] font-bold tracking-wider uppercase mb-3 md:mb-4">Fewer Inquiries</span>
                        <h3 className="text-white font-bold text-[36px] md:text-[48px] leading-none mb-2">91%</h3>
                        <p className="text-[#DEE2E6] text-[13px] md:text-[14px] font-medium">Support Tickets</p>
                    </div>
                </div>

                {/* Right Side: Bold Testimonial Card */}
                <div className="bg-[#6A27D4] rounded-[24px] p-8 md:p-12 flex flex-col items-start justify-center shadow-[0_20px_50px_rgba(106,39,212,0.3)] relative overflow-hidden h-[100%]">
                    {/* Inner highlight glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-[0.05] blur-[100px] pointer-events-none rounded-full" />

                    <Quote className="w-10 h-10 text-white/50 mb-8" fill="currentColor" />

                    <p className="text-white font-medium text-[20px] md:text-[24px] lg:text-[28px] leading-[1.4] mb-10 relative z-10">
                        "With Finmile, we know what's happening before our customers do — and AI now approves 90% of PODs automatically. It's changed how we scale."
                    </p>

                    <div className="mt-auto relative z-10">
                        <h4 className="text-white font-bold text-[15px] mb-1">Head of Operations</h4>
                        <span className="text-white/70 text-[13px]">Global Retail Carrier</span>
                    </div>
                </div>

            </div>
        </section>
    );
};
