import React from 'react';
import { TrendingDown, AlertTriangle, MapPin, Clock, Users } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DeliverySoftwarePainPoints = () => {
    const features = [
        {
            title: "Skyrocketing operational costs",
            description: "Wasted miles, idle fleets, and driver overtime eating your margins.",
            icon: <TrendingDown className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Manual planning headaches",
            description: "Human error, inefficiency, and hours lost to static spreadsheets.",
            icon: <AlertTriangle className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Lack of real-time visibility",
            description: "No clarity on driver locations or true ETAs for your customers.",
            icon: <MapPin className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Poor customer experience",
            description: "Missed delivery windows, inaccurate tracking, and refund claims.",
            icon: <Clock className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Resource allocation gaps",
            description: "Underutilised fleets or driver burnout due to unbalanced loads.",
            icon: <Users className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        }
    ];

    return (
        <section className={`w-full bg-[#fdfcff] flex flex-col items-center px-4 md:px-6 lg:px-24 py-12 md:py-16 lg:py-16 overflow-hidden relative ${montserrat.className}`}>

            {/* Background Accent */}
            <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#2F1C8C] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center w-full z-10 flex flex-col items-center max-w-[900px] mx-auto mb-12 md:mb-8">
                    <h2 className="font-semibold text-[32px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-4 md:mb-6">
                        Are Outdated Delivery Processes<br />
                        Draining Your Profits?
                    </h2>
                    <p className="font-medium text-[15px] md:text-[18px] text-[#6C757D] leading-relaxed max-w-[800px]">
                        If you're feeling the pressure from rising fuel costs and manual planning, you're not alone. Traditional systems weren't built for today's dynamic logistics.
                    </p>
                </div>

                {/* 2x3 Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
                    {/* Normal Cards */}
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

                    {/* CTA Card (6th item) */}
                    <div className="bg-[#2F1C8C] rounded-[24px] p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-[0_10px_40px_rgba(47,28,140,0.15)] transition-transform hover:-translate-y-1">
                        <h3 className="text-white font-semibold text-[22px] leading-[1.3] mb-6 w-full">
                            Turn your delivery<br />network into a competitive<br />advantage.
                        </h3>
                        <button className="bg-[#6A27D4] text-white px-6 py-3 rounded-full font-semibold text-[13px] shadow-[0_4px_15px_rgba(106,39,212,0.3)] hover:bg-[#5821B0] transition-colors w-full whitespace-nowrap">
                            Explore How Finmile Fixes This
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};
