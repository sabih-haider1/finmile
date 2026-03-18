import React from 'react';
import { Database, Brain, Send, MapPin, TrendingUp } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const HowAiEngineWorks = () => {
    const steps = [
        {
            title: "Ingest",
            description: "Parcels, traffic, drivers, history",
            icon: <Database className="w-6 h-6 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Plan",
            description: "AI clusters & optimizes",
            icon: <Brain className="w-6 h-6 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Dispatch",
            description: "Real-time assignments",
            icon: <Send className="w-6 h-6 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Track",
            description: "Predictive ETAs update",
            icon: <MapPin className="w-6 h-6 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            title: "Learn",
            description: "System improves daily",
            icon: <TrendingUp className="w-6 h-6 text-[#6A27D4]" strokeWidth={2} />
        }
    ];

    return (
        <section className={`w-full bg-[#F8F9FC] flex flex-col items-center px-4 md:px-6 lg:px-24 py-6 md:py-6 overflow-hidden ${montserrat.className}`}>

            <div className="w-full max-w-[1240px] flex flex-col items-center">

                <h2 className="font-semibold text-[36px] md:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-4 text-center">
                    How the AI Engine Works
                </h2>

                <p className="text-[#64748B] font-medium text-[16px] md:text-[18px] leading-[1.6] mb-12 text-center max-w-[600px]">
                    A continuous learning loop that gets smarter with every drop.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 w-full mb-12">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-[0_8px_30px_rgba(47,28,140,0.06)] border border-[#E9E4FF] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(106,39,212,0.15)] group-hover:border-[#d6d0ff]">
                                {step.icon}
                            </div>
                            <h3 className="text-[#1A1A24] font-bold text-[18px] md:text-[20px] mb-2">
                                {step.title}
                            </h3>
                            <p className="text-[#64748B] font-medium text-[14px] md:text-[15px] leading-[1.5] max-w-[140px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0">
                    See the AI Engine in Action
                </button>

            </div>

        </section>
    );
};
