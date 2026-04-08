'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '@/lib/animations';

export const GenerativeIntelligence = () => {
    return (
        <motion.section
            className="w-full bg-[#0B0616] py-16 flex flex-col items-center px-6 lg:px-24 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
        >

            {/* Background Glow Effects */}
            <div aria-hidden="true" className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#3B257E] rounded-full blur-[160px] opacity-40 pointer-events-none transform-gpu translate-z-0" />
            <div aria-hidden="true" className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-30 pointer-events-none transform-gpu translate-z-0" />

            <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center z-10">

                {/* Left Side: Command Prompt Graphic */}
                <motion.div
                  className="w-full flex flex-col items-center lg:items-start justify-center lg:justify-start relative gap-8"
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerContainer}
                  viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="w-full max-w-[800px]" variants={fadeInLeft}>
                        <Image
                            src="/assets/images/agents/AI-CommandPrompt.png"
                            alt="Finmile AI Command Interface"
                            width={800}
                            height={500}
                            className="w-full h-auto drop-shadow-[0_40px_100px_rgba(83,31,209,0.25)] rounded-2xl"
                        />
                    </motion.div>
                    
                    {/* Mobile Button */}
                    <motion.button
                        className="lg:hidden liquid-solid text-white px-10 py-4 rounded-full font-bold text-[15px] w-fit transition-colors"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>

                {/* Right Side: Text Content */}
                <motion.div
                  className="flex flex-col space-y-8 pl-0 lg:pl-10"
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerContainer}
                  viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 variants={fadeInRight} className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-[1.05] tracking-tight">
                        Generative Intelligence
                    </motion.h2>

                    <motion.p variants={fadeInRight} className="text-[#C4C9D4] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed opacity-90">
                        Next-generation email solutions with HandleMail and Orbit Mail for
                        enhanced engagement. Query live data, dispatch agents, and resolve
                        exceptions without touching a dashboard.
                    </motion.p>

                    <motion.p variants={fadeInRight} className="text-white text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed mt-2">
                        Logistics you can talk to. Execution that responds.
                    </motion.p>

                    {/* Desktop Button */}
                    <motion.button
                        className="hidden lg:flex liquid-solid text-white px-10 py-4 rounded-full font-bold text-[15px] w-fit mt-10 transition-colors"
                        variants={fadeInRight}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>

            </div>
        </motion.section>
    );
};
