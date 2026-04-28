import React from 'react';
import Image from 'next/image';
import { montserrat } from '@/lib/fonts';

export const AboutContent = () => {
    return (
        <section className={`w-full py-6 lg:py-6 bg-white flex flex-col items-center px-6 lg:px-20 relative overflow-hidden ${montserrat.className}`}>
            <div className='max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center'>

                {/* Left Column: Text Content */}
                <div className='flex flex-col space-y-10 pt-4'>
                    <h2 className='text-[#2F1C8C] font-semibold leading-[1.1] tracking-normal md:tracking-tight text-balance text-[clamp(28px,4vw,48px)]'>
                        Intelligent Logistics. <br className='hidden md:block' />
                        Sustainable Future. Real <br className='hidden md:block' />
                        Results.
                    </h2>

                    <div className='flex flex-col space-y-6'>
                        {/* Paragraph 1 and 2 combined (no para space) */}
                        <p className='text-[#6C757D] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed'>
                            Finmile is an award-winning AI logistics platform transforming how<br className='hidden md:block' /> businesses plan, execute, and scale deliveries.<br className='hidden md:block' />
                            Built by logistics operators for logistics operators, our AI-powered route<br className='hidden md:block' /> optimisation and full stack operating platform helps fleets cut costs,<br className='hidden md:block' /> reduce emissions, and improve delivery performance — at scale.
                        </p>

                        {/* Paragraph 3 (<sp> paragraph space and new color & weight) */}
                        <p className='text-[#2F1C8C] text-[14px] md:text-[15px] lg:text-[16px] font-semibold leading-relaxed'>
                            Headquartered in London, with operations across the UK, Europe, and <br className='hidden md:block' />
                            the US, Finmile’s mission is to make every delivery smarter, cleaner, and<br className='hidden md:block' /> more efficient
                        </p>
                    </div>
                </div>

                {/* Right Column: Image with Overlays */}
                <div className='relative w-full flex items-center justify-center pt-8 md:pt-0 px-4 lg:px-0 min-h-[500px] lg:min-h-[600px]'>

                    {/* Background Highlight Glow */}
                    <div className='absolute inset-0 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none' />

                    <div className='relative z-10 w-full max-w-[800px]'>
                        <Image
                            src='/assets/images/features/app-screen.png'
                            alt='Finmile Dashboard and Mobile App'
                            width={800}
                            height={600}
                            className='w-full h-auto drop-shadow-[0_45px_90px_rgba(0,0,0,0.12)] object-contain relative z-10'
                        />

                        {/* 42% Card - Repositioned to Bottom Right (same place as the old 91% box) */}
                        <div className='absolute -bottom-6 right-0 md:-bottom-16 md:-right-8 z-20 bg-white/95 backdrop-blur-md rounded-[24px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white w-[200px] md:w-[320px]'>
                            <div className='text-[#2F1C8C] text-[36px] md:text-[40px] font-bold leading-none mb-1.5'>42%</div>
                            <div className='text-[#6B7280] text-[13px] md:text-[14px] font-medium leading-tight'>Fewer routes with AI optimisation</div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
