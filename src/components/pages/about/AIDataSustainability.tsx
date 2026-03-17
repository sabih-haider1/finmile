import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const AiDataSustainability = () => {
    return (
        <section className={`w-full py-16 lg:py-16 bg-white flex flex-col items-center px-6 lg:px-20 relative overflow-hidden ${montserrat.className}`}>
            <div className='max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-12 lg:gap-12 items-center'>

                {/* Left Column: Text Content */}
                <div className='flex flex-col space-y-10 pt-4'>
                    <h2 className='text-[#2F1C8C] text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.1] tracking-tight'>
                        AI. Data. Sustainability.<br className='hidden md:block' />
                        Efficiency. The intelligence that<br className='hidden md:block' />
                        drives the future of delivery.
                    </h2>

                    <div className='flex flex-col space-y-6'>
                        <p className='text-[#6C757D] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed'>
                            Finmile isn't just another logistics software company — we're a research-driven AI platform reshaping how the world moves parcels.
                        </p>

                        <p className='text-[#6C757D] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed'>
                            Here you'll find every Finmile whitepaper, report, and insight on AI route optimization, last-mile delivery innovation, sustainability strategy, and the economics of intelligent logistics.
                        </p>

                        <p className='text-[#6C757D] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed'>
                            Each paper is grounded in live operational data from thousands of deliveries handled across the UK, US, EMEA, and APAC, offering practical, evidence-based insights for logistics leaders, retailers, and fleet operators.
                        </p>
                    </div>
                </div>

                {/* Right Column: Image with Overlays */}
                <div className='relative w-full flex items-center justify-center pt-8 md:pt-0 px-4 lg:px-0 min-h-[500px] lg:min-h-[600px]'>

                    {/* Background Highlight Glow */}
                    <div className='absolute inset-0 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none' />

                    <div className='relative z-10 w-full max-w-[800px]'>
                        <img
                            src='/assets/images/features/AiDataSustainability.png'
                            alt='Finmile Dashboard and Mobile App'
                            className='w-full h-auto drop-shadow-[0_45px_90px_rgba(0,0,0,0.12)] object-contain relative z-10'
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};
