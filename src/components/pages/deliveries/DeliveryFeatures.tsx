import React from 'react';
import { Target, ShieldCheck, TrendingUp, MapPin, Zap, BrainCircuit } from 'lucide-react';
import { montserrat } from '@/lib/fonts';

export const DeliveryFeatures = () => {
    const features = [
        {
            title: "Automated route optimization",
            description: "Finmile’s routing engine evaluates distance, capacity, time windows, and traffic to build perfect paths instantly.",
            icon: <Target className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Proof of non-pickup/delivery",
            description: "Timestamped and geofenced photographic proof protects your drivers from false claims and ensures SLA compliance.",
            icon: <ShieldCheck className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Predictive analytics",
            description: "Automatically forecast delays before they happen based on weather, traffic patterns, and driver speed history.",
            icon: <TrendingUp className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Geofencing",
            description: "Automate arrival notifications, check-ins, and POD triggering when drivers enter specifically drawn delivery zones.",
            icon: <MapPin className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Live exception management",
            description: "Automatically reroute drivers mid-flight and seamlessly manage failed deliveries or ad-hoc collections.",
            icon: <Zap className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "AI-backed performance",
            description: "Machine learning audits 100% of routes, constantly identifying ways to pack vehicles tighter and drive fewer miles.",
            icon: <BrainCircuit className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        }
    ];

    return (
        <section className={`w-full bg-[#fdfcff] flex flex-col items-center px-4 md:px-6 lg:px-24 py-[clamp(24px,4vw,32px)] overflow-hidden relative ${montserrat.className}`}>

            {/* Background Accent */}
            <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#2F1C8C] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center w-full z-10 flex flex-col items-center max-w-[900px] mx-auto mb-12 md:mb-8">
                    <h2 className="font-semibold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.2] mb-4 md:mb-6 text-balance text-[clamp(32px,4vw,48px)]">
                        Why Finmile Delivery Solutions
                    </h2>
                    <p className="font-medium text-[15px] md:text-[18px] text-[#6C757D] leading-relaxed max-w-[800px]">
                        Our platform is built to solve the hardest problems in modern logistics. Every feature is designed to cut miles, save time, and protect margins.
                    </p>
                </div>

                {/* 2x3 Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-[#F8F7FF] rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(47,28,140,0.03)] border border-transparent transition-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(47,28,140,0.06)] hover:border-[#E8E5FF] group">

                            <div className="w-[50px] h-[50px] rounded-[14px] bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-[#E9E4FF]">
                                {feature.icon}
                            </div>

                            <h3 className="text-[#0A1B33] font-bold text-[18px] mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-[#6C757D] text-[14px] font-medium leading-relaxed">
                                {feature.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
