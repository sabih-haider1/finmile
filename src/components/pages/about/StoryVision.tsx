import React from 'react';
import { montserrat } from '@/lib/fonts';
import Image from 'next/image';

export const StoryVision = () => {
    return (
        <section className={`w-full py-6 lg:py-6 bg-[#F8FAFC] flex flex-col items-center px-6 lg:px-20 relative overflow-hidden ${montserrat.className}`}>
            <div className='max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center'>

                {/* Left Column: Image */}
                <div className='w-full flex items-center justify-center lg:justify-start'>
                    <Image
                        src='/assets/images/features/app-screen-blue.png'
                        alt='Finmile Blue App Screen'
                        width={600}
                        height={600}
                        className='w-full max-w-[600px] h-auto object-cover rounded-[32px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.08)]'
                    />
                </div>

                {/* Right Column: Text Content */}
                <div className='flex flex-col space-y-8'>

                    {/* Heading: h2 style as requested (they wrote h1 but gave h2 sizing earlier) */}
                    <h2 className='font-semibold text-[#2F1C8C] leading-[1.1] tracking-normal md:tracking-tight text-balance text-[clamp(36px,4vw,42px)]'>
                        Our Story &amp; Vision
                    </h2>

                    <div className='flex flex-col space-y-6'>

                        {/* p1 */}
                        <p className='font-semibold text-[15px] md:text-[16px] text-[#2F1C8C] leading-relaxed'>
                            Reimagining Logistics: Building a Smarter, Sustainable Future
                        </p>

                        {/* p2 block 1 */}
                        <div className='flex flex-col'>
                            <p className='font-medium text-[15px] md:text-[16px] text-[#6C757D] leading-relaxed'>
                                Finmile was founded to solve the inefficiencies holding back <br className='hidden md:block' />global delivery networks.
                            </p>
                        </div>

                        {/* p2 block 2 */}
                        <div className='flex flex-col'>
                            <p className='font-medium text-[15px] md:text-[16px] text-[#6C757D] leading-relaxed'>
                                Our AI logistics software enables dynamic, real-time routing<br className='hidden md:block' /> that adapts to live traffic, parcel volume, and vehicle type — <br className='hidden md:block' />including electric vans and e-cargo bikes.
                            </p>
                        </div>

                        {/* p2 block 3 */}
                        <div className='flex flex-col'>
                            <p className='font-medium text-[15px] md:text-[16px] text-[#6C757D] leading-relaxed'>
                                We&apos;ve built the next generation of intelligent logistics systems <br className='hidden md:block' />where data drives every decision, fleets waste nothing, and <br className='hidden md:block' />sustainability and profitability go hand-in-hand.
                            </p>
                        </div>

                        {/* SEO Themes (Rendered as subtext) */}
                        <div className='flex flex-col pt-4'>
                            <p className='font-medium text-[13px] text-[#9CA3AF] leading-relaxed'>
                                Core SEO themes: AI route optimisation, last-mile delivery <br className='hidden md:block' />software, sustainable logistics, electric fleet routing
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
