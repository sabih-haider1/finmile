import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DeliverySoftwareLiveDashboard = () => {
    return (
        <section className={`w-full bg-[#0B0616] py-12 md:py-16 lg:py-20 flex flex-col items-center px-6 lg:px-24 relative overflow-hidden ${montserrat.className}`}>

            {/* Background Glow Effects (Bright behind text, dark behind picture) */}
            <div className="absolute top-[5%] left-[-15%] w-[900px] h-[900px] bg-[#3B257E] rounded-full blur-[160px] opacity-70 pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F1C8C] rounded-[100%] blur-[180px] opacity-80 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-5 pointer-events-none" />

            <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-center z-10">

                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-6 pr-0 lg:pr-8 order-2 lg:order-1 pt-8 lg:pt-0">

                    <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[46px] text-[#FFFFFF] leading-[1.15] tracking-tight mb-2">
                        Live Dashboard Snapshot
                    </h2>

                    <p className="font-medium text-[15px] md:text-[16px] text-[#DEE2E6] leading-relaxed mb-8">
                        Monitor your entire operation in a single unified view. Real-time data drives every decision.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 mt-4">

                        {/* Stat Card 1 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:bg-white/10">
                            <h3 className="text-white font-bold text-[36px] md:text-[42px] leading-none mb-3">31%</h3>
                            <p className="text-[#DEE2E6] text-[13px] md:text-[14px] font-medium">Cost Reduction</p>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:bg-white/10">
                            <h3 className="text-white font-bold text-[36px] md:text-[42px] leading-none mb-3">2 min</h3>
                            <p className="text-[#DEE2E6] text-[13px] md:text-[14px] font-medium">Avg Delivery</p>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:bg-white/10">
                            <h3 className="text-white font-bold text-[36px] md:text-[42px] leading-none mb-3">99%</h3>
                            <p className="text-[#DEE2E6] text-[13px] md:text-[14px] font-medium">On-Time Rate</p>
                        </div>

                        {/* Stat Card 4 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:bg-white/10">
                            <h3 className="text-white font-bold text-[36px] md:text-[42px] leading-none mb-3">92%</h3>
                            <p className="text-[#DEE2E6] text-[13px] md:text-[14px] font-medium">Fleet Active</p>
                        </div>

                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full flex justify-center lg:justify-end relative order-1 lg:order-2 items-start lg:mt-2">

                    {/* Glowing backlight specifically for this phone image to make it stand out */}
                    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#6A27D4] rounded-full blur-[100px] opacity-40 z-0" />

                    <img
                        src="/assets/images/features/app-screen-blue.png"
                        alt="Finmile Mobile App live dashboard"
                        className="w-full max-w-[400px] lg:max-w-[480px] h-auto relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] lg:mr-12"
                    />
                </div>

            </div>
        </section>
    );
};
