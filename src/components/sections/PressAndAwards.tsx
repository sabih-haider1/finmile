import React from 'react';
import { Award } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const PressAndAwards = () => {

    const awards2025 = [
        "Top 100 Startups in the UK (2025 & 2026)",
        "Startup of the Year \u2013 London Startup Awards (2025)",
        "Fleet of the Year \u2013 Fleet News Awards (2025)",
        "Soonicorn Winner \u2013 SeedLegals Tech Awards (2025)"
    ];

    const awards2024 = [
        "SET Awards 2024, 2025 and 2026 winner",
        "EIT Urban Mobility Awards 2025 \u2013 Finalist",
        "CIHT Sustainability Leader Award 2025 \u2013 Nominee",
        "Grow London Global Programme 2025 - 2026 \u2013 Selected"
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-6 lg:px-24 py-20 overflow-hidden relative ${montserrat.className}`}>

            {/* Header Area */}
            <div className="text-center mb-16 w-full z-10 flex flex-col items-center max-w-[800px] mx-auto">
                <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight mb-6 leading-tight">
                    Press & Awards
                </h2>
                <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-relaxed px-4">
                    Finmile's innovation and measurable results have been recognised by industry leaders,
                    <br className="hidden md:block" /> sustainability organisations, and technology accelerators worldwide.
                </p>
            </div>

            {/* Awards Columns */}
            <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 mb-16 z-10 relative">

                {/* 2025 Column */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-[#2F1C8C] font-bold text-[13px] uppercase tracking-wider mb-2 px-2">
                        2025 AWARDS & HONOURS
                    </h3>
                    {awards2025.map((award, idx) => (
                        <div key={idx} className="bg-[#F8F7FF] rounded-2xl px-6 py-4 flex items-center gap-4 transition-colors hover:bg-[#F2EFFC]">
                            <Award className="w-5 h-5 text-[#6A27D4] shrink-0" strokeWidth={2} />
                            <span className="text-[#0A1B33] font-bold text-[14px]">
                                {award}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 2024 & Placements Column */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-[#2F1C8C] font-bold text-[13px] uppercase tracking-wider mb-2 px-2">
                        2024 AWARDS & FINALIST PLACEMENTS
                    </h3>
                    {awards2024.map((award, idx) => (
                        <div key={idx} className="bg-[#F8F7FF] rounded-2xl px-6 py-4 flex items-center gap-4 transition-colors hover:bg-[#F2EFFC]">
                            <Award className="w-5 h-5 text-[#6A27D4] shrink-0" strokeWidth={2} />
                            <span className="text-[#0A1B33] font-bold text-[14px]">
                                {award}
                            </span>
                        </div>
                    ))}
                </div>

            </div>

            {/* Footer Text */}
            <div className="w-full max-w-[900px] mb-8 mt-4 pt-10 border-t border-gray-100 z-10 text-center">
                <p className="text-[#6C757D] font-medium text-[14px] leading-relaxed">
                    Finmile has been featured or quoted in <b className="text-[#0A1B33]">Forbes, Quartz, Newsweek, TechRound, and the Supply Chain <br className="hidden md:block" /> Excellence Awards Journal.</b> We actively contribute to global conversations around AI logistics, sustainability, <br className="hidden md:block" /> and the future of mobility.
                </p>
            </div>

        </section>
    );
};
