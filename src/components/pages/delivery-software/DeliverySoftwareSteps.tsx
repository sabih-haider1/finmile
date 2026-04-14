import React from 'react';
import { Database, Cpu, Navigation, MapPin, TrendingUp } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DeliverySoftwareSteps = () => {
    const steps = [
        {
            num: "STEP 1",
            title: "Import Orders",
            description: "Connect OMS, ERP, or upload manually via API.",
            icon: <Database className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            num: "STEP 2",
            title: "AI Optimises",
            description: "AI plans optimal routes in seconds.",
            icon: <Cpu className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            num: "STEP 3",
            title: "Dispatch & Track",
            description: "Assign and monitor deliveries in real time.",
            icon: <Navigation className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            num: "STEP 4",
            title: "Deliver & Delight",
            description: "POD captured, customers updated live.",
            icon: <MapPin className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            num: "STEP 5",
            title: "Analyse & Improve",
            description: "Review performance and unlock more savings.",
            icon: <TrendingUp className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        }
    ];

    return (
        <section className={`w-full bg-[#FAFAFC] flex flex-col items-center px-4 md:px-6 lg:px-12 py-[clamp(24px,4vw,32px)] overflow-hidden relative ${montserrat.className}`}>

            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center w-full z-10 flex flex-col items-center max-w-[900px] mx-auto mb-8 lg:mb-8">
                    <h2 className="font-semibold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.2] text-balance text-[clamp(32px,4vw,44px)]">
                        Simple Steps to Delivery Excellence
                    </h2>
                </div>

                {/* Horizontal Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 w-full relative">

                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#E8E5FF] to-transparent z-0"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center z-10 relative group">

                            <span className="text-[#2F1C8C] text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-4">
                                {step.num}
                            </span>

                            <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(47,28,140,0.06)] border border-[#E9E4FF] transition-transform duration-300 group-hover:scale-110">
                                {step.icon}
                            </div>

                            <h3 className="text-[#0A1B33] font-bold text-[15px] xl:text-[16px] mb-2">
                                {step.title}
                            </h3>

                            <p className="text-[#6C757D] text-[13px] font-medium leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
