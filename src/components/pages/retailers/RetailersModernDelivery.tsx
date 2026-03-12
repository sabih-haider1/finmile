import React from 'react';
import Image from 'next/image';
import { Box, Monitor, TrendingUp } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const RetailersModernDelivery = () => {
    return (
        <section className={`w-full relative flex flex-col items-center py-16 md:py-24 px-4 md:px-6 lg:px-24 bg-white ${montserrat.className}`}>
            <div className="w-full max-w-[1240px] z-10 relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Section - Text Content */}
                <div className="flex flex-col items-start text-left">
                    <h2 className="font-bold text-[32px] md:text-[40px] text-[#2F1C8C] tracking-tight mb-6">
                        Meet Modern Delivery<br />Expectations — Without<br />Breaking Margins
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-8">
                        The retail delivery landscape has changed. Customer patience is gone, and
                        logistics costs are rising. Finmile helps you meet these challenges head-on.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="p-3 rounded-full bg-[#FAFAFF] text-[#6A27D4] mr-4 shadow-sm">
                                <Box className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-[#0A1B33] mb-1">Precision ETAs</h3>
                                <p className="text-gray-600 text-base">
                                    Customers expect live tracking and absolute certainty on when
                                    their order arrives.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="p-3 rounded-full bg-[#FAFAFF] text-[#6A27D4] mr-4 shadow-sm">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-[#0A1B33] mb-1">Rising Costs</h3>
                                <p className="text-gray-600 text-base">
                                    Every mile and driver matters. Waste is the enemy of retail
                                    margins.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="p-3 rounded-full bg-[#FAFAFF] text-[#6A27D4] mr-4 shadow-sm">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-[#0A1B33] mb-1">Experience = Loyalty</h3>
                                <p className="text-gray-600 text-base">
                                    A poor delivery experience loses customers instantly. Perfection is
                                    the baseline.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-full max-w-lg">
                        <Image
                            src="/assets/images/features/laptop-route.png"
                            alt="Route optimization interface showing modern delivery management"
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
