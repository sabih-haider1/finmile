import React from 'react';
import { Montserrat } from 'next/font/google';
import { Navigation, MapPin, Zap } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

const operatorItems = [
    {
        icon: <Navigation className="w-8 h-8 text-[#6A27D4]" />,
        title: "Retailers & E-Commerce",
        description: "Doorstep collections, faster refunds, and a loyalty-driven return experience that keeps customers coming back."
    },
    {
        icon: <MapPin className="w-8 h-8 text-[#6A27D4]" />,
        title: "3PLs & Courier Networks",
        description: "Add returns as a high-margin service using your existing fleet without operational complexity."
    },
    {
        icon: <Zap className="w-8 h-8 text-[#6A27D4]" />,
        title: "Sustainable Fleets & DSPs",
        description: "Optimise reverse routes to prove CO2 savings and win sustainability-focused enterprise clients."
    }
];

export const ReturnsOperators = () => {
    return (
        <section className={`w-full bg-[#fcfcff] py-6 lg:py-[clamp(32px,5vw,48px)] flex flex-col items-center px-6 ${montserrat.className}`}>
            <div className="max-w-[1440px] w-full">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-[#2F1C8C] font-bold tracking-normal md:tracking-tight leading-[1.1] text-balance text-[clamp(36px,4vw,56px)]">
                        For Every Type of Operator
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {operatorItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[32px] p-10 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(47,28,140,0.03)] border border-white hover:shadow-[0_25px_60px_rgba(47,28,140,0.08)] transition-all duration-300 group"
                        >
                            <div className="mb-10 text-[#6A27D4] transform transition-transform group-hover:scale-110">
                                {item.icon}
                            </div>
                            <h3 className="text-[#1A1A1A] text-[22px] font-bold mb-6">
                                {item.title}
                            </h3>
                            <p className="text-[#64748B] text-[16px] leading-[1.6]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
