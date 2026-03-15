import React from 'react';
import { Zap, RefreshCw, Map } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppEcosystem = () => {
    const features = [
        {
            title: "Route Optimization",
            description: "Sync plans directly to drivers.",
            icon: <Zap className="w-6 h-6 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Control Tower",
            description: "Real-time monitoring of fleet status.",
            icon: <RefreshCw className="w-6 h-6 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "API & Integrations",
            description: "Connect to your existing WMS or ERP.",
            icon: <Map className="w-6 h-6 text-[#6A27D4]" strokeWidth={2} />
        }
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-16 lg:py-24 border-t border-[#F0EDFF] ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col z-10 relative">

                {/* Header Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center mb-12 lg:mb-16 text-center lg:text-left">
                    <div>
                        <h2 className="text-[#2F1C8C] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-tight">
                            Connect the Driver<br className="hidden lg:block"/>
                            App to Your Finmile<br className="hidden lg:block"/>
                            Ecosystem
                        </h2>
                    </div>
                    
                    <div className="flex flex-col items-center lg:items-start lg:pl-10 lg:border-l border-transparent lg:border-white">
                        <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-[450px]">
                            The Driver App is just one part of the OS. It syncs instantly with your Control Tower and Optimisation Engine.
                        </p>
                        
                        <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] transition-transform hover:scale-105 hover:bg-[#5821B0] shadow-[0_10px_20px_rgba(106,39,212,0.2)] w-full sm:w-auto">
                            Explore the Finmile Platform
                        </button>
                    </div>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-[#F8F7FF] rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(106,39,212,0.08)]">
                            
                            <div className="mb-6">
                                {feature.icon}
                            </div>
                            
                            <h3 className="text-[#0A1B33] font-bold text-[16px] md:text-[18px] mb-3">
                                {feature.title}
                            </h3>
                            
                            <p className="text-[#6C757D] font-medium text-[14px]">
                                {feature.description}
                            </p>
                            
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
