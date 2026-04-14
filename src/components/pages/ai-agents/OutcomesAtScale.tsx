import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const OutcomesAtScale = () => {
    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-4 md:px-6 lg:px-24 py-[clamp(24px,4vw,32px)] overflow-hidden relative ${montserrat.className}`}>

            {/* Header Content */}
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto mb-12 md:mb-8 md:mb-8">
                <h2 className="font-semibold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.15] md:leading-tight text-balance text-[clamp(32px,4vw,48px)]">
                    Outcomes Delivered at Scale
                </h2>
            </div>

            {/* 4 Column Stat Grid */}
            <div className="w-full max-w-[1440px] grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 z-10 relative items-stretch">

                {/* Stat 1 */}
                <div className="bg-white rounded-[20px] md:rounded-[24px] p-6 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 transition-transform hover:-translate-y-1">
                    <h3 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-none mb-4 md:mb-6">
                        42%
                    </h3>
                    <div className="w-2/3 h-[1px] bg-gray-100 mb-6" />
                    <p className="text-[#6C757D] font-medium text-[14px]">
                        fewer routes
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="bg-white rounded-[20px] md:rounded-[24px] p-6 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 transition-transform hover:-translate-y-1">
                    <h3 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-none mb-4 md:mb-6">
                        91%
                    </h3>
                    <div className="w-2/3 h-[1px] bg-gray-100 mb-6" />
                    <p className="text-[#6C757D] font-medium text-[14px]">
                        SLA compliance
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="bg-white rounded-[20px] md:rounded-[24px] p-6 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 transition-transform hover:-translate-y-1">
                    <h3 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-none mb-4 md:mb-6">
                        10M+
                    </h3>
                    <div className="w-2/3 h-[1px] bg-gray-100 mb-6" />
                    <p className="text-[#6C757D] font-medium text-[14px]">
                        parcels optimised
                    </p>
                </div>

                {/* Stat 4 */}
                <div className="bg-white rounded-[20px] md:rounded-[24px] p-6 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 transition-transform hover:-translate-y-1">
                    <h3 className="text-[#2F1C8C] font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-none mb-4 md:mb-6">
                        50+
                    </h3>
                    <div className="w-2/3 h-[1px] bg-gray-100 mb-6" />
                    <p className="text-[#6C757D] font-medium text-[14px]">
                        global brands
                    </p>
                </div>

            </div>
        </section>
    );
};
