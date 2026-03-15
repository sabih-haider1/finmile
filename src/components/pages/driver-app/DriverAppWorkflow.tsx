import React from 'react';
import { Layers, Camera, Cpu, Database, BarChart2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppWorkflow = () => {
    const steps = [
        {
            num: "STEP 1",
            title: "Route Assigned",
            description: "Driver receives intelligent sequence with navigation.",
            icon: <Layers className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            num: "STEP 2",
            title: "Deliver & Capture",
            description: "Capture ePOD with real-time quality feedback.",
            icon: <Camera className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            num: "STEP 3",
            title: "AI Verification",
            description: "AI reviews proof instantly on-device.",
            icon: <Cpu className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            num: "STEP 4",
            title: "Data Sync",
            description: "All data flows back to the Control Tower live.",
            icon: <Database className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        },
        {
            num: "STEP 5",
            title: "Feedback",
            description: "Delivery performance and scorecards.",
            icon: <BarChart2 className="w-5 h-5 text-[#6A27D4]" strokeWidth={2} />
        }
    ];

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-12 py-16 md:py-24 overflow-hidden relative ${montserrat.className}`}>

            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center w-full z-10 flex flex-col items-center max-w-[900px] mx-auto mb-16 lg:mb-24">
                    <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.2]">
                        Simple Workflow for<br />Maximum Performance
                    </h2>
                </div>

                {/* Horizontal Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 w-full relative">

                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#E8E5FF] to-transparent z-0"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center z-10 relative group">

                            <span className="text-[#2F1C8C] text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-4">
                                {step.num}
                            </span>

                            <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(47,28,140,0.06)] border border-[#E9E4FF] transition-transform duration-300 group-hover:scale-110">
                                {step.icon}
                            </div>

                            <h3 className="text-[#0A1B33] font-bold text-[15px] xl:text-[16px] mb-2">
                                {step.title}
                            </h3>

                            <p className="text-[#6C757D] text-[13px] font-medium leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
