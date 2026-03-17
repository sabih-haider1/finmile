import React from 'react';
import { Bot } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DeliverySoftwareTestimonials = () => {
    // Extracted data from the screenshot for "Results That Speak for Themselves"
    const testimonials = [
        {
            category: "E-COMMERCE",
            title: "Urban Logistics Co.",
            description: "Agent identifies risk but requires human verification for complex decisions.",
            stats: [
                { label: "40% cost reduction" },
                { label: "32% fewer misses" }
            ]
        },
        {
            category: "LAST-MILE",
            title: "Metro Delivery Services",
            description: "Agent prepares an optimal response and presents it for one-click approval.",
            stats: [
                { label: "60% capacity increase" },
                { label: "Same fleet size" }
            ]
        },
        {
            category: "FOOD & BEVERAGE",
            title: "Fresh Foods Express",
            description: "Agent executes changes autonomously and provides an audit log of actions.",
            stats: [
                { label: "90% on-time delivery" },
                { label: "20% lower fuel spend" }
            ]
        }
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-12 py-12 md:py-16 lg:py-16 overflow-hidden relative ${montserrat.className}`}>

            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center w-full z-10 flex flex-col items-center max-w-[900px] mx-auto mb-12 md:mb-8">
                    <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.2]">
                        Results That Speak for Themselves
                    </h2>
                </div>

                {/* Grid of 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="bg-[#F8F7FF] rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(47,28,140,0.03)] border border-transparent transition-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(47,28,140,0.06)] hover:border-[#E8E5FF] group">

                            {/* Category Label */}
                            <span className="text-[#2F1C8C] text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-6">
                                {item.category}
                            </span>

                            {/* Title */}
                            <h3 className="text-[#0A1B33] font-bold text-[17px] xl:text-[18px] mb-3">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#6C757D] text-[13px] xl:text-[14px] font-medium leading-relaxed mb-8 h-[60px] flex items-center justify-center">
                                {item.description}
                            </p>

                            {/* Stats Flex Row at bottom */}
                            <div className="flex flex-row items-center justify-center space-x-6 w-full mt-auto">
                                {item.stats.map((stat, sIdx) => (
                                    <div key={sIdx} className="flex flex-row items-center space-x-2">
                                        <Bot className="w-4 h-4 text-[#6A27D4]" strokeWidth={2.5} />
                                        <span className="text-[#4D5156] font-semibold text-[12px] whitespace-nowrap">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
