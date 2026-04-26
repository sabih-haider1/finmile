'use client';

import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from "../../ui/Badge";
import { Button } from "../../ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const Hero = () => {
  return (
    <section className="relative w-full pb-[clamp(32px,5vw,64px)] flex flex-col items-center justify-start pt-[140px] px-4 overflow-hidden bg-[#0B0616]">

      {/* Upper Subtle Glow behind text */}
      <div aria-hidden="true" className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3B257E] rounded-full blur-[140px] opacity-30 pointer-events-none transform-gpu translate-z-0" />

      {/* Massive Lower Intense Gradient Glow (The sweeping purple glow behind the hero image) */}
      <div aria-hidden="true" className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-40 pointer-events-none transform-gpu translate-z-0" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-[900px] mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >

        {/* Top Badge */}
        <motion.div variants={fadeInUp} className="mb-[clamp(16px,2vw,24px)]">
          <Badge label="An operating system for execution, not another logistics tool" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-white md:whitespace-nowrap font-bold tracking-normal md:tracking-tight leading-[1.05] text-balance mb-[clamp(16px,2.5vw,32px)] text-[clamp(44px,4vw,64px)]"
          variants={fadeInUp}
        >
          The <span className="gradient-text-os px-1">OS</span> for Modern Logistics
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-[#9CA3AF] text-[clamp(13px,1.3vw,18px)] font-normal w-full max-w-[760px] leading-relaxed mx-auto px-4 mb-[clamp(24px,4vw,48px)]"
          variants={fadeInUp}
        >
          Finmile AI automates delivery operations end to end, using agentic AI to optimise multi drop routes in
          seconds and deliver full operational visibility through a unified command interface.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          variants={fadeInUp}
        >
          <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="solid" size="lg">
                See How It Works
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact">
              <Button variant="liquid-glass" size="lg">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Dashboard Mockup Image */}
      <div
        className="relative z-10 mt-[clamp(42px,7.6vw,94px)] w-full max-w-[1200px] mx-auto px-2 md:px-8 mb-[clamp(-68px,-5vw,-58px)]"
      >
        <Image
          src="/assets/images/hero-dashboard.webp"
          alt="Finmile Dashboard"
          width={1234}
          height={597}
          priority
          fetchPriority="high"
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) 94vw, (max-width: 1280px) 92vw, 1234px"
        />
      </div>

    </section>
  );
};
