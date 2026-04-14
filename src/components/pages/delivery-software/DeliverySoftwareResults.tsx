import React from 'react';
import Link from 'next/link';
import { Navigation, MapPin, Zap, Camera, BarChart3, Smartphone } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const DeliverySoftwareResults = () => {
    const results = [
        {
            title: "AI-Powered Route Optimisation",
            description: "Dynamic optimisation using live traffic, vehicle capacity, and constraints — saving up to 42%.",
            icon: <Navigation className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Real-Time GPS & Predictive ETAs",
            description: "Live vehicle visibility with customer-facing tracking links and accurate delivery windows.",
            icon: <MapPin className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Automated Dispatch & Scheduling",
            description: "Jobs assigned automatically based on proximity, workload, and vehicle type.",
            icon: <Zap className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Digital Proof of Delivery (POD)",
            description: "Missed delivery windows, inaccurate tracking, and refund claims.",
            icon: <Camera className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Performance Analytics",
            description: "Underutilised fleets or driver burnout due to unbalanced loads.",
            icon: <BarChart3 className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Driver App",
            description: "Turn-by-turn navigation, offline mode, and POD capture in one powerful interface.",
            icon: <Smartphone className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        }
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-12 md:py-16 lg:py-20 overflow-hidden relative ${montserrat.className}`}>

            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center w-full z-10 flex flex-col items-center max-w-[900px] mx-auto mb-12 md:mb-16">
                    <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.2]">
                        How Finmile Delivers Real-World Results
                    </h2>
                </div>

                {/* 2x3 Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full mb-12">
                    {results.map((result, idx) => (
                        <div key={idx} className="bg-[#F8F7FF] rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(47,28,140,0.03)] border border-transparent transition-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(47,28,140,0.06)] hover:border-[#E8E5FF] group">

                            <div className="w-[50px] h-[50px] rounded-[14px] bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-[#E9E4FF]">
                                {result.icon}
                            </div>

                            <h3 className="text-[#0A1B33] font-bold text-[16px] xl:text-[17px] mb-3">
                                {result.title}
                            </h3>

                            <p className="text-[#6C757D] text-[13px] xl:text-[14px] font-medium leading-relaxed">
                                {result.description}
                            </p>

                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer" className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-colors text-center">
                    See the Platform in Action
                </Link>

            </div>
        </section>
    );
};
