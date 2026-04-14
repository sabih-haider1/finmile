import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppEpod = () => {
    return (
        <section className={`w-full bg-[#0B0616] py-6 md:py-6 flex flex-col items-center px-6 lg:px-24 relative overflow-hidden ${montserrat.className}`}>

            {/* Background Glow Effects (Bright behind text, dark behind picture) */}
            <div className="absolute top-[5%] left-[-15%] w-[800px] h-[800px] bg-[#3B257E] rounded-full blur-[140px] opacity-60 pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[800px] h-[500px] bg-[#2F1C8C] rounded-[100%] blur-[160px] opacity-70 pointer-events-none" />

            <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center z-10">

                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-8 pr-0 lg:pr-10 order-1">

                    <h2 className="font-semibold text-[#FFFFFF] leading-[1.2] tracking-normal md:tracking-tight text-balance text-[clamp(32px,4vw,48px)]">
                        Intelligent Proof of<br />
                        Delivery (ePOD)
                    </h2>

                    <p className="font-medium text-[15px] md:text-[16px] text-[#DEE2E6] leading-relaxed mb-4 lg:mb-6 max-w-[500px]">
                        Close the loop on every delivery with absolute certainty. Our ePOD system uses computer vision to ensure every photo is high-quality and verified.
                    </p>

                    <div className="flex flex-col space-y-4">
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 mt-0.5" strokeWidth={2.5} />
                            <p className="text-[14px] md:text-[15px] text-[#FFFFFF] font-medium">
                                Photo, signature, or barcode confirmation
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 mt-0.5" strokeWidth={2.5} />
                            <p className="text-[14px] md:text-[15px] text-[#FFFFFF] font-medium">
                                Geotagged proof with timestamps
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 mt-0.5" strokeWidth={2.5} />
                            <p className="text-[14px] md:text-[15px] text-[#FFFFFF] font-medium">
                                Offline capture mode (Sync when back online)
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-5 h-5 text-[#6A27D4] shrink-0 mt-0.5" strokeWidth={2.5} />
                            <p className="text-[14px] md:text-[15px] text-[#FFFFFF] font-medium">
                                AI validation via Control Tower
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right Side: Image */}
                <div className="w-full flex justify-center lg:justify-end relative order-1 lg:order-2">
                    {/* Add subtle border/shadow similar to the real-time visibility screenshot */}
                    <div className="relative w-full max-w-[650px] rounded-[16px] overflow-hidden drop-shadow-[0_20px_50px_rgba(83,31,209,0.3)]">
                        <Image
                            src="/assets/images/features/delivery-dashboard.png"
                            alt="Intelligent ePOD Interface"
                            width={650}
                            height={400}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
