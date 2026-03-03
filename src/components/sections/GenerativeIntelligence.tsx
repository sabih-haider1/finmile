import React from 'react';

export const GenerativeIntelligence = () => {
    return (
        <section className="w-full bg-[#0B0616] py-20 flex flex-col items-center px-6 lg:px-24 relative overflow-hidden">

            {/* Background Glow Effects (Matching Hero style) */}
            <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#3B257E] rounded-full blur-[160px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-30 pointer-events-none" />

            <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center z-10">

                {/* Left Side: Command Prompt Graphic */}
                <div className="w-full flex justify-center lg:justify-start relative">
                    <div className="w-full max-w-[800px]">
                        <img
                            src="/assets/images/agents/AI-CommandPrompt.png"
                            alt="Finmile AI Command Interface"
                            className="w-full h-auto drop-shadow-[0_40px_100px_rgba(83,31,209,0.25)] rounded-2xl"
                        />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col space-y-8 pl-0 lg:pl-10">
                    <h2 className="text-white text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-tight">
                        Generative Intelligence
                    </h2>

                    <p className="text-[#C4C9D4] text-[18px] md:text-[20px] leading-relaxed font-normal opacity-90">
                        Next-generation email solutions with HandleMail and Orbit Mail for
                        enhanced engagement. Query live data, dispatch agents, and resolve
                        exceptions without touching a dashboard.
                    </p>

                    <p className="text-white text-[18px] md:text-[20px] font-medium leading-relaxed mt-2">
                        Logistics you can talk to. Execution that responds.
                    </p>

                    <button className="liquid-solid text-white px-10 py-4 rounded-full font-bold text-[15px] w-fit mt-10 transition-colors">
                        Get In Touch
                    </button>
                </div>

            </div>
        </section>
    );
};
