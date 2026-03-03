import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const UnifiedCommand = () => {
    return (
        <section className="w-full bg-white flex flex-col items-center px-4 md:px-6 py-16 lg:py-24 overflow-hidden">

            {/* Section Header */}
            <div className="text-center mb-10 md:mb-16 w-full flex flex-col items-center z-20">
                <h2 className="text-[#2F1C8C] text-[40px] md:text-[56px] lg:text-[64px] font-bold tracking-tight mb-6 leading-tight">
                    One Unified Command Interface
                </h2>
                <p className="text-[#848DA0] text-[18px] md:text-[20px] max-w-3xl font-medium leading-relaxed px-4">
                    All agents operate through a single control layer with full visibility across planning, live execution, and outcomes.
                </p>
            </div>

            {/* Center Complete Graphic (contains phone, cards, arrows, circles) */}
            <div className="w-full max-w-[1240px] flex items-center justify-center relative z-10 px-4">
                <img
                    src="/assets/images/Mobile.png"
                    alt="Finmile Unified Command Interface"
                    className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(45,27,105,0.05)]"
                />
            </div>

            {/* Bottom Pagination controls */}
            <div className="mt-12 md:mt-20 flex items-center justify-center gap-6 z-20">
                <button className="w-14 h-14 rounded-full bg-white shadow-[0_10px_30px_rgba(47,28,140,0.06)] border border-indigo-50 flex items-center justify-center text-[#2D1B69] hover:bg-slate-50 transition-colors">
                    <ArrowLeft className="w-6 h-6 opacity-60" strokeWidth={2} />
                </button>
                <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E2DFF5]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2F1C8C]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E2DFF5]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E2DFF5]"></div>
                </div>
                <button className="w-14 h-14 rounded-full bg-[#2F1C8C] shadow-[0_15px_30px_rgba(45,27,105,0.25)] flex items-center justify-center text-white hover:bg-[#3B257E] transition-colors">
                    <ArrowRight className="w-6 h-6" strokeWidth={2} />
                </button>
            </div>

        </section>
    );
};
