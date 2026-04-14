'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const TrackParcelContent = () => {
    const [orderNumber, setOrderNumber] = useState('');
    const [postcode, setPostcode] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!orderNumber || !postcode) {
            alert("Please fill in both fields");
            return;
        }
        const url = `https://findelivers.com/track-order/${orderNumber}?postCode=${postcode}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <section className={`${montserrat.className} py-4 px-6 bg-white overflow-hidden text-[#1E1B4B] flex flex-col items-center justify-center min-h-[80vh]`}>
            <div className="w-full max-w-[650px] mx-auto space-y-12">

                {/* Card 1: Track Your Parcel */}
                <div className="bg-[#F9F9FC] rounded-[40px] p-8 md:p-14 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.04)] border border-[#F1F5F9]/50 text-center relative">

                    {/* Logo Capsule */}
                    <div className="flex justify-center mb-4">
                        <div className="p-1.5 rounded-3xl bg-[#EBEBFA]/60 shadow-inner">
                            <div className="bg-white rounded-[20px] px-5 md:px-8 py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#F1F5F9]">
                                <Image
                                    src="/assets/logos/logo-blue.png"
                                    alt="Finmile"
                                    width={140}
                                    height={35}
                                    className="h-7 w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <h2 className="font-bold text-[#2F1C8C] tracking-normal md:tracking-tight mb-4 text-balance text-[clamp(32px,4vw,40px)]">
                        Track Your Parcel
                    </h2>

                    <p className="text-[#64748B] text-[15px] md:text-base leading-relaxed max-w-[460px] mx-auto mb-4">
                        Enter your tracking number and postcode to get real-time updates on your delivery
                    </p>

                    <form className="text-left space-y-2 max-w-[460px] mx-auto" onSubmit={handleSubmit}>
                        <div className="space-y-2.5">
                            <label htmlFor="orderNumber" className="text-[13px] font-bold text-[#1E1B4B]">
                                Order Number
                            </label>
                            <input
                                id="orderNumber"
                                type="text"
                                value={orderNumber}
                                onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
                                placeholder="e.g. FM12345678"
                                className="w-full bg-white border border-gray-200 shadow-[0_4px_14px_rgba(0,0,0,0.03)] rounded-xl px-5 py-4 text-[#1E1B4B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-2.5">
                            <label htmlFor="postcode" className="text-[13px] font-bold text-[#1E1B4B]">
                                Postcode or ZIP Code
                            </label>
                            <input
                                id="postcode"
                                type="text"
                                value={postcode}
                                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                                placeholder="e.g. SW1A 1AA"
                                className="w-full bg-white border border-gray-200 shadow-[0_4px_14px_rgba(0,0,0,0.03)] rounded-xl px-5 py-4 text-[#1E1B4B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 transition-all font-medium"
                            />
                        </div>

                        <div className="flex justify-center pt-4">
                            <Button
                                type="submit"
                                className="h-14 bg-[#6A27D4] hover:bg-[#581FB1] transition-colors rounded-full px-6 md:px-16 w-full md:w-auto min-w-[240px] text-[15px] font-semibold"
                            >
                                Track Order
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Card 2: Still Need Help? */}
                <div className="bg-[#F9F9FC] rounded-[40px] p-8 md:p-4 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.04)] border border-[#F1F5F9]/50 text-center">

                    {/* Icon Capsule */}
                    <div className="flex justify-center mb-4">
                        <div className="inline-flex w-[72px] h-[72px] rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] items-center justify-center border border-[#F1F5F9]">
                            <div className="w-10 h-10 bg-[#6A27D4] rounded-full flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <h3 className="text-[30px] md:text-[36px] font-bold text-[#2F1C8C] tracking-tight mb-3">
                        Still Need Help?
                    </h3>

                    <p className="text-[#64748B] text-[15px] md:text-base max-w-[400px] mx-auto mb-8">
                        Need assistance with tracking your order?
                    </p>

                    <Button
                        variant="solid"
                        className="h-14 bg-[#6A27D4] hover:bg-[#581FB1] transition-colors rounded-full px-6 md:px-12 text-[15px] font-semibold"
                    >
                        Fill Out the Help Form
                    </Button>
                </div>

            </div>
        </section>
    );
};
