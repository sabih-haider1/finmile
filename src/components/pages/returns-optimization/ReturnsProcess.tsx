import React from 'react';
import { Montserrat } from 'next/font/google';
import { Database, Cpu, Navigation, CheckCircle, TrendingUp } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

const processItems = [
    {
        icon: <Database className="w-8 h-8 text-[#6A27D4]" />,
        title: "Book Return",
        description: "Customer books via portal"
    },
    {
        icon: <Cpu className="w-8 h-8 text-[#6A27D4]" />,
        title: "AI Route Merge",
        description: "Dynamic pickup assignment"
    },
    {
        icon: <Navigation className="w-8 h-8 text-[#6A27D4]" />,
        title: "Driver Collects",
        description: "Verified via Driver App"
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-[#6A27D4]" />,
        title: "Live Tracking",
        description: "Visibility to depot"
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-[#6A27D4]" />,
        title: "Instant Refund",
        description: "Triggered on scan"
    }
];

export const ReturnsProcess = () => {
    return (
        <section className={`w-full bg-white py-[clamp(32px,5vw,48px)] flex justify-center px-6 ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] z-10 relative mt-16 md:mt-16 sm:mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
                    {processItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Icon Container with Glossy Effect */}
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-[#6A27D4]/10 rounded-full blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative w-24 h-24 bg-white rounded-full shadow-[0_8px_30px_rgba(47,28,140,0.08)] border border-[#F0EDFF] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_15px_45px_rgba(47,28,140,0.12)]">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-[#1A1A1A] text-[18px] md:text-[20px] font-bold mb-3 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-[#64748B] text-[14px] md:text-[15px] font-medium leading-[1.5] max-w-[180px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
