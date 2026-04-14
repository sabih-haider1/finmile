import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DspsAutomatedDispatch = () => {
    const bullets = [
        "One-click dispatch",
        "Live GPS tracking",
        "Predictive ETAs"
    ];

    return (
        <section className={`w-full bg-white py-6 flex justify-center px-6 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Image Content */}
                <div className="relative w-full flex items-center justify-center h-[350px] md:h-[400px] lg:h-[450px] order-1 transition-transform hover:scale-[1.02] duration-500">
                    <div className="relative w-full h-full">
                        <Image
                            src="/assets/images/features/app-dashboard.png"
                            alt="Automated Dispatch Dashboard"
                            fill
                            style={{ objectFit: 'contain' }}
                            className="drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start max-w-[500px] order-2 lg:ml-4">
                    <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.2] mb-4 text-balance text-[clamp(32px,4vw,40px)]">
                        Automated Dispatch & Tracking
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-[1.6] mb-6">
                        Let Finmile handle dispatching. Jobs are matched to the right drivers in real time, balancing workload and keeping routes on schedule automatically.
                    </p>

                    <div className="flex flex-col gap-4 w-full">
                        {bullets.map((bullet, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                {/* Solid Purple Circle Checkmarks */}
                                <div className="min-w-[20px] h-[20px] rounded-full bg-[#6A27D4] flex items-center justify-center shadow-sm">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                                </div>
                                <span className="text-[#0A1B33] font-semibold text-[15px] md:text-[16px]">
                                    {bullet}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};