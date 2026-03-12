import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const RetailersOperationalImpact = () => {
    const metrics = [
        {
            value: "-42%",
            label: "Cost per Delivery",
            subLabel: "Lower Return Costs"
        },
        {
            value: "99.9%",
            label: "On-Time Delivery",
            subLabel: "Delivery success rate"
        },
        {
            value: "-60%",
            label: "Refund Cycle",
            subLabel: "Faster reverse logistics"
        },
        {
            value: "20%",
            label: "Driver Productivity",
            subLabel: "More stops per hour"
        }
    ];

    return (
        <section className={`w-full relative flex flex-col items-center pt-16 md:pt-24 px-6 md:px-12 lg:px-24 ${montserrat.className}`}>
            
            {/* Added px-6 md:px-12 lg:px-24 to the section above to match the Integrations component */}
            
            {/* Dark background spanning top section with EXACT radial gradient */}
            <div 
                className="absolute top-0 left-0 w-full h-[calc(100%-120px)] md:h-[calc(100%-150px)] z-0 overflow-hidden"
                style={{
                    background: 'radial-gradient(120% 120% at -10% 50%, #441E93 0%, #150634 45%, #06020D 100%)'
                }}
            />

            {/* White background bottom section to create the overlap effect */}
            <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[150px] bg-white z-0" />

            {/* Removed the px padding from this inner div so it matches the 1240px max-width exactly */}
            <div className="w-full max-w-[1240px] z-10 relative">
                
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="font-bold text-[32px] md:text-[40px] text-white tracking-tight leading-[1.2]">
                        Results from Retail Clients
                    </h2>
                </div>

                {/* Metrics Cards - 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14 md:mb-16">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="bg-transparent border border-white/10 rounded-[20px] py-8 px-4 text-center flex flex-col items-center justify-center">
                            <div className="font-bold text-[36px] md:text-[40px] text-white mb-4 leading-none">
                                {metric.value}
                            </div>
                            <div className="text-white font-medium text-[14px] md:text-[15px] mb-1.5">
                                {metric.label}
                            </div>
                            <div className="text-white/60 font-normal text-[12px] md:text-[13px]">
                                {metric.subLabel}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial Card */}
                <div className="max-w-[950px] mx-auto text-center w-full">
                    {/* Adjusted bg color to match the deeper violet in the new image */}
                    <div className="bg-[#2D1987] rounded-[24px] px-8 py-10 md:px-16 md:py-12 shadow-2xl relative">
                        
                        {/* Centered Quote Icon */}
                        <div className="flex justify-center mb-6">
                            <span className="text-white text-[60px] md:text-[72px] font-serif leading-[0.4]">
                                “
                            </span>
                        </div>
                        
                        <blockquote className="text-white font-medium text-[16px] md:text-[19px] leading-[1.6] mb-8">
                            "Finmile gave us the delivery performance our customers expect without <br className="hidden lg:block" />
                            the cost explosion."
                        </blockquote>
                        
                        <div className="flex flex-col gap-1.5">
                            <cite className="text-white font-bold text-[14px] md:text-[15px] not-italic">
                                — Director of Operations
                            </cite>
                            <span className="text-white/70 font-normal text-[12px] md:text-[13px]">
                                Global E-Commerce Retailer
                            </span>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    );
};