import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const RouteCalculatorPopup = dynamic(
    () => import('../../shared/RouteCalculatorPopup').then((mod) => mod.RouteCalculatorPopup),
    { ssr: false }
);

export const ProofOverPromises = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const metrics = [
        {
            value: "42%",
            label: "fewer routes"
        },
        {
            value: "24%",
            label: "lower cost per parcel"
        },
        {
            value: "33%",
            label: "lower fuel consumption"
        },
        {
            value: "99.9%",
            label: "on-time performance"
        }
    ];

    return (
        <>
            {isPopupOpen && (
                <RouteCalculatorPopup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                />
            )}

            <section className={`w-full bg-white py-6 md:py-6 flex justify-center px-4 md:px-8 lg:px-24 overflow-hidden ${montserrat.className}`}>
            
            <div className="w-full max-w-[1240px] flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-8">
                    <h2 className="font-semibold text-[36px] md:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.2]">
                        Proof Over Promises
                    </h2>
                </div>

                {/* Metrics Cards Grid - Stays the same full width */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {metrics.map((metric, idx) => (
                        <div 
                            key={idx} 
                            className="bg-[#F8F7FC] rounded-[24px] flex flex-col w-full hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="py-10 md:py-12 flex justify-center items-center">
                                <span className="font-semibold text-[42px] md:text-[48px] text-[#2F1C8C] leading-none">
                                    {metric.value}
                                </span>
                            </div>
                            
                            {/* Subtle Divider Line */}
                            <div className="mx-6 h-[1px] bg-[#EAE8F2]"></div>
                            
                            <div className="py-6 md:py-8 flex justify-center items-center">
                                <span className="text-[#8B8B9B] text-[14px] md:text-[15px] font-medium text-center px-4">
                                    {metric.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial Block */}
                {/* Increased width to max-w-[1000px] to better align with the cards above */}
                <div className="w-full max-w-[1000px] bg-[#2F1C8C] rounded-[24px] px-10 py-12 md:py-16 md:px-12 flex flex-col items-center mb-8 relative overflow-hidden">
                    
                    {/* Double Quote Icon replacing SVG */}
                    <div className="mb-4 flex justify-center h-[40px] items-center">
                        <span className="text-white text-[72px] md:text-[84px] font-serif font-bold leading-none translate-y-4">
                            “
                        </span>
                    </div>
                    
                    {/* Quote Text with standard quotes and wider container */}
                    <blockquote className="text-white font-medium text-[20px] md:text-[24px] leading-[1.6] mb-10 text-center max-w-[800px]">
                        &quot;Finmile&apos;s AI didn&apos;t just make routes shorter — it made our entire operation calmer.&quot;
                    </blockquote>
                    
                    {/* Author & Company */}
                    <div className="flex flex-col items-center gap-2">
                        <cite className="text-white font-semibold text-[16px] md:text-[18px] not-italic">
                            — US Delivery Partner
                        </cite>
                        <span className="text-white/70 font-medium text-[13px] md:text-[14px]">
                            NetZero Logistics
                        </span>
                    </div>
                    
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-[#6A27D4] text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0" onClick={() => setIsPopupOpen(true)}>
                        Calculate My Route Savings
                    </button>
                </div>

            </div>
            </section>
        </>
    );
};