import React from 'react';
import { montserrat } from '@/lib/fonts';

export const ConfidenceScoring = () => {
    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-[clamp(24px,4vw,32px)] overflow-hidden relative ${montserrat.className}`}>

            {/* Header Content */}
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto mb-12 md:mb-8">
                <h2 className="font-semibold text-[#2F1C8C] tracking-normal md:tracking-tight leading-[1.2] mb-4 md:mb-6 text-balance text-[clamp(32px,4vw,48px)]">
                    Trust & Control Through <br className="hidden md:block" /> Confidence Scoring
                </h2>
                <p className="font-medium text-[15px] md:text-[16px] text-[#6C757D] max-w-[800px] leading-relaxed px-4">
                    AI Agents operate with varying levels of autonomy based on prediction certainty.
                </p>
            </div>

            {/* 3 Column Grid */}
            <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-3 gap-6 z-10 relative items-stretch">

                {/* Card 1: Low Confidence */}
                <div className="bg-[#F8F7FF] rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 h-[300px] justify-between">
                    <div className="w-full flex flex-col items-center">
                        <span className="text-[#2F1C8C] font-bold text-[11px] uppercase tracking-widest mb-6">
                            Low Confidence
                        </span>
                        <h3 className="text-[#0A1B33] font-bold text-[18px] mb-4">
                            Manual Review Required
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                            Agent identifies risk but requires human verification for complex decisions.
                        </p>
                    </div>

                    {/* Progress Bar (1/3) */}
                    <div className="w-full flex gap-2 mt-auto">
                        <div className="h-1.5 flex-1 bg-[#6A27D4] rounded-full" />
                        <div className="h-1.5 flex-1 bg-[#E8E5FF] rounded-full" />
                        <div className="h-1.5 flex-1 bg-[#E8E5FF] rounded-full" />
                    </div>
                </div>

                {/* Card 2: Medium Confidence */}
                <div className="bg-[#F8F7FF] rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 h-[300px] justify-between">
                    <div className="w-full flex flex-col items-center">
                        <span className="text-[#2F1C8C] font-bold text-[11px] uppercase tracking-widest mb-6">
                            Medium Confidence
                        </span>
                        <h3 className="text-[#0A1B33] font-bold text-[18px] mb-4">
                            Assisted Suggestion
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                            Agent prepares an optimal response and presents it for one-click approval.
                        </p>
                    </div>

                    {/* Progress Bar (2/3) */}
                    <div className="w-full flex gap-2 mt-auto">
                        <div className="h-1.5 flex-1 bg-[#6A27D4] rounded-full" />
                        <div className="h-1.5 flex-1 bg-[#6A27D4] rounded-full" />
                        <div className="h-1.5 flex-1 bg-[#E8E5FF] rounded-full" />
                    </div>
                </div>

                {/* Card 3: High Confidence */}
                <div className="bg-[#F8F7FF] rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-50 h-[300px] justify-between">
                    <div className="w-full flex flex-col items-center">
                        <span className="text-[#2F1C8C] font-bold text-[11px] uppercase tracking-widest mb-6">
                            High Confidence
                        </span>
                        <h3 className="text-[#0A1B33] font-bold text-[18px] mb-4">
                            Auto-Execute
                        </h3>
                        <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                            Agent executes changes autonomously and provides an audit log of actions.
                        </p>
                    </div>

                    {/* Progress Bar (3/3) */}
                    <div className="w-full flex gap-2 mt-auto">
                        <div className="h-1.5 flex-1 bg-[#6A27D4] rounded-full" />
                        <div className="h-1.5 flex-1 bg-[#6A27D4] rounded-full" />
                        <div className="h-1.5 flex-1 bg-[#6A27D4] rounded-full" />
                    </div>
                </div>

            </div>
        </section>
    );
};
