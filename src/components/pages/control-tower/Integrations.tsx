import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const Integrations = () => {
    const integrations = [
        "Shopify", "TikTok Shop", "JD.com", "Temu", "Power BI", "Zapier"
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-24 py-6 md:py-6 lg:py-6 overflow-hidden relative ${montserrat.className}`}>
            <div className="text-center w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto mb-8 md:mb-12">
                <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#2F1C8C] tracking-tight leading-[1.2]">
                    Integrations for Full Visibility
                </h2>
            </div>

            <div className="w-full max-w-[1240px] z-10 flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                {integrations.map((integration, idx) => (
                    <div key={idx} className="bg-[#F8F9FA] px-8 md:px-12 py-4 rounded-full flex items-center justify-center min-w-[120px] md:min-w-[160px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-50 transition-transform hover:-translate-y-1">
                        <span className="text-[#6C757D] font-bold italic text-[15px] md:text-[18px] tracking-tight">{integration}</span>
                    </div>
                ))}
            </div>

            <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] transition-transform hover:scale-105 hover:bg-[#5821B0] z-10">
                Explore All Integrations
            </button>
        </section>
    );
};
