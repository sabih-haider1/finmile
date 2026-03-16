import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const TrackParcelInterface = () => {
    return (
        <section className={`w-full bg-white py-16 md:py-24 flex flex-col items-center px-4 md:px-8 lg:px-24 overflow-hidden gap-10 ${montserrat.className}`}>
            
            {/* Top Card: Track Your Parcel */}
            <div className="w-full max-w-[540px] bg-[#F9F8FF] rounded-[32px] p-8 md:p-12 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.01)] border border-transparent">
                
                {/* Logo Pill */}
                <div className="bg-white px-8 py-3 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.04)] mb-8 flex items-center justify-center">
                    <Image 
                        src="/assets/logos/logo-blue.png" 
                        alt="Finmile Logo" 
                        width={100}
                        height={30}
                        className="object-contain"
                    />
                </div>

                {/* Headings */}
                <h2 className="font-semibold text-[32px] md:text-[36px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-3">
                    Track Your Parcel
                </h2>
                <p className="text-[#8B8B9B] font-medium text-[13px] md:text-[14px] leading-[1.6] max-w-[360px] mb-8">
                    Enter your tracking number and postcode to get real-time updates on your delivery
                </p>

                {/* Form Fields */}
                <div className="w-full flex flex-col items-start gap-5 mb-8">
                    <div className="w-full flex flex-col items-start text-left">
                        <label className="text-[#1A1A24] font-semibold text-[12px] md:text-[13px] mb-2 pl-1">
                            Order Number
                        </label>
                        <input
                            type="text"
                            className="w-full bg-white h-[48px] rounded-[14px] px-4 outline-none border-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-[#6A27D4]/20 transition-all text-[#1A1A24]"
                        />
                    </div>

                    <div className="w-full flex flex-col items-start text-left">
                        <label className="text-[#1A1A24] font-semibold text-[12px] md:text-[13px] mb-2 pl-1">
                            Postcode or ZIP Code
                        </label>
                        <input
                            type="text"
                            className="w-full bg-white h-[48px] rounded-[14px] px-4 outline-none border-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-[#6A27D4]/20 transition-all text-[#1A1A24]"
                        />
                    </div>
                </div>

                {/* Track Button */}
                <button className="bg-[#6A27D4] text-white px-10 py-3.5 rounded-full font-semibold text-[13px] md:text-[14px] shadow-[0_4px_15px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0">
                    Track Order
                </button>
            </div>

            {/* Bottom Card: Still Need Help? */}
            <div className="w-full max-w-[700px] bg-[#F9F8FF] rounded-[32px] p-8 md:p-12 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.01)] border border-transparent">
                
                {/* Icon Pill */}
                <div className="w-[50px] h-[50px] rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.04)] flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-[#6A27D4]" strokeWidth={2.5} />
                </div>

                {/* Headings */}
                <h2 className="font-semibold text-[28px] md:text-[32px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-3">
                    Still Need Help?
                </h2>
                <p className="text-[#8B8B9B] font-medium text-[13px] md:text-[14px] leading-[1.6] mb-8">
                    Need assistance with tracking your order?
                </p>

                {/* Help Button */}
                <button className="bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[13px] md:text-[14px] shadow-[0_4px_15px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0">
                    Fill Out the Help Form
                </button>
            </div>

        </section>
    );
};