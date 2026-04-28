import React from 'react';
import { montserrat } from '@/lib/fonts';

export const DspsOperationalImpact = () => {
    const metrics = [
        {
            value: "-95%",
            label: "Planning Time"
        },
        {
            value: (
                <div className="flex items-start justify-center">
                    99.9%
                </div>
            ),
            label: "On-Time Rate"
        },
        {
            value: "+99%",
            label: "POD Accuracy"
        }
    ];

    return (
        <section className={`w-full relative flex flex-col items-center pt-10 ${montserrat.className}`}>

            {/* Dark background spanning top section */}
            <div className="absolute top-0 left-0 w-full h-[calc(100%-120px)] md:h-[calc(100%-150px)] bg-[#0A0318] z-0 overflow-hidden">
                {/* Smooth purple glow to match the image gradient */}
                <div className="absolute top-[-30%] left-[-10%] w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(75,35,170,0.45)_0%,_rgba(10,3,24,0)_70%)] blur-[60px]" />
            </div>

            {/* White background bottom section to create the overlap effect */}
            <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[150px] bg-white z-0" />

            <div className="w-full max-w-[1440px] z-10 relative px-6">

                {/* Header */}
                <div className="text-center mb-6 md:mb-8">
                    <h2 className="font-bold text-white tracking-normal md:tracking-tight leading-[1.2] text-balance text-[clamp(32px,4vw,40px)]">
                        Operational Impact
                    </h2>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="bg-transparent border border-white/10 rounded-[20px] py-[clamp(32px,4vw,40px)] px-6 text-center">
                            <div className="font-bold text-[38px] md:text-[42px] text-white mb-3 flex items-center justify-center">
                                {metric.value}
                            </div>
                            <div className="text-white/80 font-medium text-[14px] md:text-[15px]">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial Card */}
                <div className="max-w-[950px] mx-auto text-center w-full">
                    <div className="bg-[#311E8F] rounded-[20px] px-5 md:px-8 py-10 md:px-16 md:py-14 shadow-2xl relative">

                        {/* Centered Quote Icon */}
                        <div className="flex justify-center mb-6">
                            <span className="text-white text-[60px] md:text-[72px] font-serif leading-[0.4]">
                                “
                            </span>
                        </div>

                        <blockquote className="text-white font-medium text-[16px] md:text-[20px] leading-[1.6] mb-8">
                            &quot;Finmile took us from chaos to control. Route planning went from half a <br className="hidden lg:block" />
                            day to 10 minutes, and our drivers are happier than ever.&quot;
                        </blockquote>

                        <div className="flex flex-col gap-1.5">
                            <cite className="text-white font-medium text-[15px] md:text-[16px] not-italic">
                                — Owner
                            </cite>
                            <span className="text-white/70 font-normal text-[13px] md:text-[14px]">
                                Independent DSP Partner
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};