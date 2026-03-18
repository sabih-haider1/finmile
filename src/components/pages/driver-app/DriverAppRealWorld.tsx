import React from 'react';
import { Smartphone, Zap, Settings, Globe, ShieldCheck, Lock } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppRealWorld = () => {
    const features = [
        {
            title: "Android & iOS",
            icon: <Smartphone className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Offline Fallback",
            icon: <Zap className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Lightweight",
            icon: <Settings className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Multi-language",
            icon: <Globe className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "GDPR Compliant",
            icon: <ShieldCheck className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Security First",
            icon: <Lock className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        }
    ];

    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-4 md:px-6 lg:px-12 py-6 md:py-6 border-t border-[#E9E4FF] ${montserrat.className}`}>

            <div className="w-full max-w-[1240px] flex flex-col items-center">

                <h2 className="font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-12">
                    Built for the Real World
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 w-full">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(47,28,140,0.05)] border border-[#E9E4FF] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(106,39,212,0.15)] group-hover:border-[#d6d0ff]">
                                {feature.icon}
                            </div>
                            <span className="text-[#0A1B33] font-semibold text-[13px] md:text-[14px]">
                                {feature.title}
                            </span>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};
