import React from 'react';
import { Database, Monitor, Activity, Zap, TrendingUp } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const AutonomousExecution = () => {
    return (
        <section className={`w-full bg-[#F8F7FF] flex flex-col items-center px-6 lg:px-24 py-16 lg:py-16 overflow-hidden relative ${montserrat.className}`}>

            {/* Header Content */}
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto mb-8 md:mb-8">
                <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.2]">
                    From Visibility to<br className="hidden md:block" />Autonomous Execution
                </h2>
            </div>

            {/* Timeline Layout */}
            <div className="w-full max-w-[1240px] relative z-10">

                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 items-start">

                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center relative">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group">
                            {/* Liquid Glass Background */}
                            <div className="absolute inset-0 w-full h-full rounded-full 
                            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.9),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.05)] bg-white/40
                            dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 w-full h-full rounded-full -z-10 bg-white/10 backdrop-blur-md" style={{ backdropFilter: 'url("#container-glass-timeline")' }} />
                            <Database className="w-8 h-8 text-[#6A27D4] relative z-10" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#0A1B33] font-bold text-[16px] mb-3">
                            Data Ingestion
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[13px] leading-relaxed max-w-[200px]">
                            Unified stream of fleet, weather, and traffic data.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center relative">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group">
                            {/* Liquid Glass Background */}
                            <div className="absolute inset-0 w-full h-full rounded-full 
                            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.9),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.05)] bg-white/40
                            dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 w-full h-full rounded-full -z-10 bg-white/10 backdrop-blur-md" style={{ backdropFilter: 'url("#container-glass-timeline")' }} />
                            <Monitor className="w-8 h-8 text-[#6A27D4] relative z-10" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#0A1B33] font-bold text-[16px] mb-3">
                            Monitoring
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[13px] leading-relaxed max-w-[200px]">
                            Continuous evaluation against operational SLAs.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center relative">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group">
                            {/* Liquid Glass Background */}
                            <div className="absolute inset-0 w-full h-full rounded-full 
                            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.9),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.05)] bg-white/40
                            dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 w-full h-full rounded-full -z-10 bg-white/10 backdrop-blur-md" style={{ backdropFilter: 'url("#container-glass-timeline")' }} />
                            <Activity className="w-8 h-8 text-[#6A27D4] relative z-10" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#0A1B33] font-bold text-[16px] mb-3">
                            Predictive Insight
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[13px] leading-relaxed max-w-[200px]">
                            AI forecasts risks and identifies inefficiencies.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center relative">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group">
                            {/* Liquid Glass Background */}
                            <div className="absolute inset-0 w-full h-full rounded-full 
                            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.9),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.05)] bg-white/40
                            dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 w-full h-full rounded-full -z-10 bg-white/10 backdrop-blur-md" style={{ backdropFilter: 'url("#container-glass-timeline")' }} />
                            <Zap className="w-8 h-8 text-[#6A27D4] relative z-10" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#0A1B33] font-bold text-[16px] mb-3">
                            Automatic Execution
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[13px] leading-relaxed max-w-[200px]">
                            Interventions applied without manual touch.
                        </p>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col items-center text-center relative">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group">
                            {/* Liquid Glass Background */}
                            <div className="absolute inset-0 w-full h-full rounded-full 
                            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.9),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.05)] bg-white/40
                            dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 w-full h-full rounded-full -z-10 bg-white/10 backdrop-blur-md" style={{ backdropFilter: 'url("#container-glass-timeline")' }} />
                            <TrendingUp className="w-8 h-8 text-[#6A27D4] relative z-10" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#0A1B33] font-bold text-[16px] mb-3">
                            Learning
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[13px] leading-relaxed max-w-[200px]">
                            System improves logic from every successful delivery.
                        </p>
                    </div>

                </div>
            </div>

            {/* Hidden SVG Filter Definition */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <filter
                        id="container-glass-timeline"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        colorInterpolationFilters="sRGB"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.05 0.05"
                            numOctaves="1"
                            seed="1"
                            result="turbulence"
                        />
                        <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="blurredNoise"
                            scale="70"
                            xChannelSelector="R"
                            yChannelSelector="B"
                            result="displaced"
                        />
                        <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
                        <feComposite in="finalBlur" in2="finalBlur" operator="over" />
                    </filter>
                </defs>
            </svg>

        </section>
    );
};
