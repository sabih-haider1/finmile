import React from 'react';
import { Zap, RefreshCw, Map, Camera, LayoutDashboard, TrendingDown } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DspsFeaturesGrid = () => {
    const features = [
        {
            title: "AI-Driven Routing",
            description: <>Auto-planning and real-time<br className="hidden lg:block" /> re-routing for maximum efficiency.</>,
            icon: <Zap className="w-7 h-7 text-[#6A27D4]" strokeWidth={1.5} />
        },
        {
            title: "Automated Dispatch",
            description: <>Match jobs to drivers instantly<br className="hidden lg:block" /> based on load and location.</>,
            icon: <RefreshCw className="w-7 h-7 text-[#6A27D4]" strokeWidth={1.5} />
        },
        {
            title: "Live GPS Tracking",
            description: <>Total visibility with high-fidelity<br className="hidden lg:block" /> performance analytics.</>,
            icon: <Map className="w-7 h-7 text-[#6A27D4]" strokeWidth={1.5} />
        },
        {
            title: "Digital ePOD",
            description: <>Capture geotagged photos, barcodes,<br className="hidden lg:block" /> and signatures instantly.</>,
            icon: <Camera className="w-7 h-7 text-[#6A27D4]" strokeWidth={1.5} />
        },
        {
            title: "Unified Dashboard",
            description: <>Everything in one place for easier,<br className="hidden lg:block" /> more profitable management.</>,
            icon: <LayoutDashboard className="w-7 h-7 text-[#6A27D4]" strokeWidth={1.5} />
        },
        {
            title: "Cost Reduction",
            description: <>Up to 42% fewer routes needed<br className="hidden lg:block" /> with AI optimization.</>,
            icon: <TrendingDown className="w-7 h-7 text-[#6A27D4]" strokeWidth={1.5} />
        }
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-6 md:py-6 overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] z-10 flex flex-col">

                {/* Header Content - Split Layout */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-12">
                    <h2 className="font-bold text-[32px] md:text-[40px] text-[#2F1C8C] tracking-tight leading-[1.2] max-w-[550px]">
                        Run Delivery Operations<br />
                        That Practically Manage<br />
                        Themselves
                    </h2>
                    
                    <div className="flex flex-col gap-6 w-full max-w-[520px]">
                        <p className="font-medium text-[14px] md:text-[15px] text-[#6C757D] leading-relaxed">
                            If you're spending half your day planning routes or chasing drivers for<br className="hidden lg:block" />
                            updates, you're not scaling — you're firefighting.
                        </p>
                        <p className="font-medium text-[14px] md:text-[15px] text-[#6C757D] leading-relaxed">
                            Finmile fixes that with a single platform designed specifically for delivery<br className="hidden lg:block" />
                            service providers:
                        </p>
                    </div>
                </div>

                {/* 2x3 Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-[#F8F7FF] rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(47,28,140,0.06)] group">

                            <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            <h3 className="text-[#0A1B33] font-bold text-[17px] md:text-[18px] mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-[#6C757D] text-[13px] md:text-[14px] font-medium leading-[1.6]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};