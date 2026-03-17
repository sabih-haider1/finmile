import React from 'react';
import Image from 'next/image';
import { Database, Monitor, TrendingUp } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const RetailersModernDelivery = () => {
    return (
        <section className={`w-full bg-[#F8F9FC] flex flex-col items-center px-4 md:px-8 lg:px-24 py-16 lg:py-16 overflow-hidden relative ${montserrat.className}`}>
            
            {/* Soft background glow exactly behind the left text section */}
            <div className="absolute left-[-5%] top-[25%] w-[800px] h-[700px] bg-white rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center z-10 relative">

                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start text-left w-full">
                    
                    {/* Exact Title Line Breaks */}
                    <h2 className="text-[#2F1C8C] font-bold text-[36px] md:text-[42px] leading-[1.25] tracking-tight mb-6">
                        Meet Modern Delivery<br className="hidden sm:block" />
                        Expectations — Without<br className="hidden sm:block" />
                        Breaking Margins
                    </h2>

                    {/* Exact Main Paragraph Line Breaks */}
                    <p className="text-[#8B8B9B] font-medium text-[15px] leading-[1.6] mb-12">
                        The retail delivery landscape has changed. Customer patience is gone, and<br className="hidden xl:block" />
                        logistics costs are rising. Finmile helps you meet these challenges head-on.
                    </p>

                    <div className="flex flex-col gap-9 w-full">
                        
                        {/* Item 1 */}
                        <div className="flex items-start gap-6">
                            <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-[0_16px_40px_rgba(47,28,140,0.06)] relative z-10">
                                <Database className="w-[24px] h-[24px] text-[#5630D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col pt-1">
                                <h4 className="text-[#1A1A24] font-bold text-[16px] mb-1.5">Precision ETAs</h4>
                                {/* Exact Paragraph Line Breaks */}
                                <p className="text-[#8B8B9B] font-medium text-[14px] leading-[1.6]">
                                    Customers expect live tracking and absolute certainty on when<br className="hidden xl:block" />
                                    their order arrives.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-start gap-6">
                            <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-[0_16px_40px_rgba(47,28,140,0.06)] relative z-10">
                                <Monitor className="w-[24px] h-[24px] text-[#5630D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col pt-1">
                                <h4 className="text-[#1A1A24] font-bold text-[16px] mb-1.5">Rising Costs</h4>
                                {/* Exact Paragraph Line Breaks */}
                                <p className="text-[#8B8B9B] font-medium text-[14px] leading-[1.6]">
                                    Every mile and driver matters. Waste is the enemy of retail<br className="hidden xl:block" />
                                    margins.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-start gap-6">
                            <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-[0_16px_40px_rgba(47,28,140,0.06)] relative z-10">
                                <TrendingUp className="w-[24px] h-[24px] text-[#5630D4]" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col pt-1">
                                <h4 className="text-[#1A1A24] font-bold text-[16px] mb-1.5">Experience = Loyalty</h4>
                                {/* Exact Paragraph Line Breaks */}
                                <p className="text-[#8B8B9B] font-medium text-[14px] leading-[1.6]">
                                    A poor delivery experience loses customers instantly. Perfection is<br className="hidden xl:block" />
                                    the baseline.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Side: Image Container */}
                <div className="flex justify-center lg:justify-end w-full mt-10 lg:mt-0">
                    {/* UPDATED: Exact bg-[#6A27D4] applied here */}
                    <div className="relative w-full max-w-[480px] h-[400px] sm:h-[500px] bg-[#6A27D4] rounded-[32px] overflow-hidden flex items-end justify-center shadow-md">
                        
                        {/* The container for the laptop image. 
                            Anchored perfectly to the bottom of the purple box. */}
                        <div className="absolute bottom-0 w-[92%] h-[92%]">
                            <Image
                                src="/assets/images/features/laptop-route.png"
                                alt="Route optimization interface on a laptop"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
                                priority
                            />
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    );
};