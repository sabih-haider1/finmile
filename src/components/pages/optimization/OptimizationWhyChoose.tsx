import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OptimizationWhyChoose = () => {
    const tableData = [
        {
            feature: "Intelligence",
            traditional: "Static Logic",
            finmile: "Self-Learning AI"
        },
        {
            feature: "Planning",
            traditional: "Manual Intervention",
            finmile: "Fully Automated"
        },
        {
            feature: "ETAs",
            traditional: "Best-Guess Estimations",
            finmile: "Live Predictive Modeling"
        },
        {
            feature: "OS Integration",
            traditional: "Isolated Tool",
            finmile: "Native OS Layer"
        },
        {
            feature: "Data",
            traditional: "Batch Processed",
            finmile: "Real-Time / Dynamic"
        }
    ];

    return (
        <section className={`w-full bg-white py-6 md:py-6 flex justify-center px-4 md:px-8 lg:px-24 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] flex flex-col items-start">
                
                {/* Heading */}
                <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.2] mb-10 md:mb-14 text-balance text-[clamp(36px,4vw,44px)]">
                    Switch to Finmile
                </h2>

                <div className="w-full flex flex-col">
                    
                    {/* Header Row */}
                    <div className="grid grid-cols-[120px_1fr_1fr] md:grid-cols-[200px_1fr_1fr] gap-3 md:gap-6 items-center w-full mb-4">
                        <div className="font-bold text-[#2F1C8C] text-[15px] md:text-[18px] pl-2 md:pl-4">
                            Comparison
                        </div>
                        
                        <div className="bg-[#707887] rounded-[16px] md:rounded-[20px] px-5 py-4 md:px-8 md:py-5 flex items-center justify-between shadow-sm">
                            <span className="font-semibold text-white text-[14px] md:text-[17px]">
                                Traditional Planners
                            </span>
                            {/* Workflow / Logic Nodes Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block opacity-90">
                                <rect x="3" y="10" width="4" height="4" rx="1" stroke="white" strokeWidth="1.5"/>
                                <rect x="17" y="10" width="4" height="4" rx="1" stroke="white" strokeWidth="1.5"/>
                                <rect x="10" y="3" width="4" height="4" rx="1" stroke="white" strokeWidth="1.5"/>
                                <rect x="10" y="17" width="4" height="4" rx="1" stroke="white" strokeWidth="1.5"/>
                                <path d="M12 7V10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M12 14V17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M7 12H10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M14 12H17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </div>
                        
                        <div className="bg-[#2F1C8C] rounded-[16px] md:rounded-[20px] px-5 py-4 md:px-8 md:py-5 flex items-center justify-between shadow-sm">
                            <span className="font-semibold text-white text-[14px] md:text-[17px]">
                                With Finmile
                            </span>
                            <Image 
                                src="/assets/logos/logo-white.png" 
                                alt="Finmile" 
                                width={60}
                                height={16}
                                className="h-3.5 md:h-4 w-auto object-contain opacity-95 hidden sm:block" 
                            />
                        </div>
                    </div>

                    {/* Data Rows */}
                    <div className="flex flex-col gap-2.5 md:gap-3">
                        {tableData.map((row, idx) => (
                            <div key={idx} className="grid grid-cols-[120px_1fr_1fr] md:grid-cols-[200px_1fr_1fr] gap-3 md:gap-6 items-center w-full">
                                
                                {/* Column 1: Feature Name */}
                                <div className="font-bold text-[#1A1A24] text-[13px] md:text-[15px] pl-2 md:pl-4">
                                    {row.feature}
                                </div>
                                
                                {/* Column 2: Traditional (Grey text) */}
                                <div className="bg-[#FAFAFF] rounded-[14px] md:rounded-[16px] px-5 py-4 md:px-8 md:py-[22px] flex items-center">
                                    <span className="text-[#8B8B9B] font-medium text-[13px] md:text-[15px]">
                                        {row.traditional}
                                    </span>
                                </div>
                                
                                {/* Column 3: Finmile (Bold black text) */}
                                <div className="bg-[#FAFAFF] rounded-[14px] md:rounded-[16px] px-5 py-4 md:px-8 md:py-[22px] flex items-center">
                                    <span className="text-[#1A1A24] font-bold text-[13px] md:text-[15px]">
                                        {row.finmile}
                                    </span>
                                </div>
                                
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};