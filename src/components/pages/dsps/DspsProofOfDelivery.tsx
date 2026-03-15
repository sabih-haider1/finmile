import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DspsProofOfDelivery = () => {
    return (
        <section className={`w-full bg-white py-12 md:py-16 flex justify-center px-4 md:px-6 lg:px-24 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left Side: Image Content */}
                <div className="relative w-full rounded-[20px] bg-[#FAFAFF] p-6 md:p-10 flex items-center justify-center h-[350px] md:h-[450px] lg:h-[500px]">
                    <div className="relative w-full h-full">
                        <Image 
                            src="/assets/images/features/laptop-route.png" 
                            alt="Proof of Delivery Laptop Screen" 
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col items-start w-full">
                    <h2 className="font-bold text-[32px] md:text-[40px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-6">
                        Proof of Delivery (ePOD)
                    </h2>

                    <p className="text-[#6C757D] font-medium text-[15px] md:text-[16px] leading-[1.7] mb-8">
                        Drivers capture geotagged photos, barcodes, or signatures through the <br className="hidden lg:block" />
                        Driver App. AI verifies accuracy automatically — no manual checks or <br className="hidden lg:block" />
                        disputes.
                    </p>

                    {/* Features List */}
                    <div className="flex flex-col gap-5">
                        {/* Item 1 */}
                        <div className="flex items-center gap-3">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#5630D4" strokeWidth="2" />
                                <circle cx="12" cy="12" r="7" fill="#5630D4" />
                                <path d="M9.5 12.5L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-semibold text-[15px] md:text-[16px] text-[#212529]">
                                Geotagged proof
                            </span>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center gap-3">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#5630D4" strokeWidth="2" />
                                <circle cx="12" cy="12" r="7" fill="#5630D4" />
                                <path d="M9.5 12.5L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-semibold text-[15px] md:text-[16px] text-[#212529]">
                                AI image validation
                            </span>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-center gap-3">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#5630D4" strokeWidth="2" />
                                <circle cx="12" cy="12" r="7" fill="#5630D4" />
                                <path d="M9.5 12.5L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-semibold text-[15px] md:text-[16px] text-[#212529]">
                                Instant sync to portal
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};