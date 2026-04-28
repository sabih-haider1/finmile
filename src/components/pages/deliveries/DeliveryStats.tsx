import React from 'react';
import { montserrat } from '@/lib/fonts';

export const DeliveryStats = () => {
    return (
        <section className={`w-full bg-[#fdfcff] flex flex-col items-center px-4 md:px-6 lg:px-24 py-[clamp(24px,4vw,32px)] overflow-hidden relative ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center w-full z-10 flex flex-col items-center max-w-[900px] mx-auto mb-12 md:mb-8">
                    <h2 className="font-semibold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.2] mb-4 md:mb-6 text-balance text-[clamp(32px,4vw,48px)]">
                        Why Finmile Delivery Solutions
                    </h2>
                    <p className="font-medium text-[15px] md:text-[16px] xl:text-[18px] text-[#6C757D] leading-relaxed max-w-[800px]">
                        Finmile goes beyond delivery tracking. We&apos;ve built fully responsive transport networks. Operating globally? We&apos;ve got 99.9% uptime for that.
                    </p>
                </div>

                {/* 4-column Grid */}
                <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 z-10 relative items-stretch">
                    {/* Stat 1 */}
                    <div className="bg-[#F8F7FF] rounded-[20px] md:rounded-[24px] p-6 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-transparent transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#E8E5FF] w-full relative pt-8 md:pt-12">
                        <span className="absolute top-6 text-[#6A27D4] text-[10px] md:text-[11px] font-bold tracking-widest uppercase">Cost Reduction</span>
                        <h3 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-none mb-4 md:mb-6 mt-2">-24%</h3>
                        <div className="w-2/3 h-[1px] bg-gray-100 mb-6" />
                        <p className="text-[#6C757D] font-medium text-[13px] md:text-[14px]">
                            Average drop in operational costs within 6 months
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-[#F8F7FF] rounded-[20px] md:rounded-[24px] p-6 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-transparent transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#E8E5FF] w-full relative pt-8 md:pt-12">
                        <span className="absolute top-6 text-[#6A27D4] text-[10px] md:text-[11px] font-bold tracking-widest uppercase">Route Efficiency</span>
                        <h3 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-none mb-4 md:mb-6 mt-2">+50%</h3>
                        <div className="w-2/3 h-[1px] bg-gray-100 mb-6" />
                        <p className="text-[#6C757D] font-medium text-[13px] md:text-[14px]">
                            Increase in driver route completion per shift
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-[#F8F7FF] rounded-[20px] md:rounded-[24px] p-6 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-transparent transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#E8E5FF] w-full relative pt-8 md:pt-12">
                        <span className="absolute top-6 text-[#6A27D4] text-[10px] md:text-[11px] font-bold tracking-widest uppercase">Delivery Precision</span>
                        <h3 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-none mb-4 md:mb-6 mt-2">+25%</h3>
                        <div className="w-2/3 h-[1px] bg-gray-100 mb-6" />
                        <p className="text-[#6C757D] font-medium text-[13px] md:text-[14px]">
                            Boost in on-time delivery precision rates
                        </p>
                    </div>

                    {/* Stat 4 */}
                    <div className="bg-[#F8F7FF] rounded-[20px] md:rounded-[24px] p-6 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-transparent transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#E8E5FF] w-full relative pt-8 md:pt-12">
                        <span className="absolute top-6 text-[#6A27D4] text-[10px] md:text-[11px] font-bold tracking-widest uppercase">System Reliability</span>
                        <h3 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-none mb-4 md:mb-6 mt-2">+99.9%</h3>
                        <div className="w-2/3 h-[1px] bg-gray-100 mb-6" />
                        <p className="text-[#6C757D] font-medium text-[13px] md:text-[14px]">
                            Automated route optimization capability uptime
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
