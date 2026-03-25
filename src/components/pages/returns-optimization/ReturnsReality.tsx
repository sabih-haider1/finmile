import React from 'react';
import { Montserrat } from 'next/font/google';
import { TrendingDown, AlertTriangle, MapPin, Clock } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

const realityItems = [
    {
        icon: <TrendingDown className="w-8 h-8 text-[#6A27D4]" />,
        title: "Scattered Requests",
        description: "Return requests coming from multiple channels with zero orchestration."
    },
    {
        icon: <AlertTriangle className="w-8 h-8 text-[#6A27D4]" />,
        title: "Manual Pickups",
        description: "Drivers chasing returns manually, leading to missed windows and high stress."
    },
    {
        icon: <MapPin className="w-8 h-8 text-[#6A27D4]" />,
        title: "Costly Second Routes",
        description: "Dispatching extra vehicles just for returns, killing your logistics margins."
    },
    {
        icon: <Clock className="w-8 h-8 text-[#6A27D4]" />,
        title: "Refund Frustration",
        description: "Customers waiting weeks for refunds, destroying brand loyalty and LTV."
    }
];

export const ReturnsReality = () => {
    return (
        <section className={`w-full bg-white py-6 lg:py-12 flex flex-col items-center px-6 ${montserrat.className}`}>
            <div className="max-w-[1440px] w-full">
                {/* Header Section */}
                <div className="text-center mb-10 px-4">
                    <h2 className="text-[#2F1C8C] text-[36px] md:text-[48px] lg:text-[56px] font-semibold tracking-tight leading-[1.1] mb-6">
                        The Reality of Returns Today
                    </h2>
                    <p className="text-[#64748B] text-[16px] md:text-[18px] font-medium">
                        Every operator knows the struggle
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {realityItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#F8F7FF] rounded-[32px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#F0EDFF]/50"
                        >
                            <div className="mb-8 p-4 bg-white rounded-2xl shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-[#1A1A1A] text-[20px] md:text-[22px] font-bold mb-4">
                                {item.title}
                            </h3>
                            <p className="text-[#64748B] text-[15px] md:text-[16px] leading-[1.6]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
