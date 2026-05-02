import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { Badge } from "../../ui/Badge";
import { Button } from "../../ui/Button";
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const Hero = () => {
  return (
    <section className="relative w-full pb-[clamp(32px,5vw,64px)] flex flex-col items-center justify-start pt-[140px] px-4 overflow-hidden bg-[#0B0616]">

      {/* Upper Subtle Glow behind text */}
      <div aria-hidden="true" className="absolute top-[5%] left-1/2 hidden h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-[#3B257E] blur-[110px] opacity-25 pointer-events-none transform-gpu translate-z-0 md:block md:w-[800px] md:h-[500px] md:blur-[140px] md:opacity-30" />

      {/* Massive Lower Intense Gradient Glow (The sweeping purple glow behind the hero image) */}
      <div aria-hidden="true" className="absolute top-[40%] left-1/2 hidden h-[420px] w-[820px] -translate-x-1/2 rounded-[100%] bg-[#531FD1] blur-[150px] opacity-25 pointer-events-none transform-gpu translate-z-0 sm:block md:w-[1400px] md:h-[800px] md:blur-[220px] md:opacity-40" />

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center max-w-[900px] mx-auto"
      >

        {/* Top Badge */}
        <div className="mb-[clamp(16px,2vw,24px)]">
          <Badge label="An operating system for execution, not another logistics tool" />
        </div>

        {/* Headline */}
        <h1
          className="text-white md:whitespace-nowrap font-bold tracking-normal md:tracking-tight leading-[1.05] text-balance mb-[clamp(16px,2.5vw,32px)] text-[clamp(44px,4vw,64px)]"
        >
          The <span className="gradient-text-os px-1">OS</span> for Modern Logistics
        </h1>

        {/* Sub-headline */}
        <p
          className="text-[#9CA3AF] text-[clamp(13px,1.3vw,18px)] font-normal w-full max-w-[760px] leading-relaxed mx-auto px-4 mb-[clamp(24px,4vw,48px)]"
        >
          Finmile AI automates delivery operations end to end, using agentic AI to optimise multi drop routes in
          seconds and deliver full operational visibility through a unified command interface.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <div>
            <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="solid" size="lg">
                See How It Works
              </Button>
            </Link>
          </div>
          <div>
            <Link href="/contact">
              <Button variant="liquid-glass" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Dashboard Mockup Image */}
      <div
        className="relative z-10 mt-[clamp(42px,7.6vw,94px)] w-full max-w-[1200px] mx-auto px-2 md:px-8 mb-[clamp(-68px,-5vw,-58px)]"
      >
        <Image
          src="/assets/images/hero-dashboard.webp"
          alt="Finmile Dashboard"
          width={1234}
          height={597}
          quality={70}
          priority
          fetchPriority="high"
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) calc(100vw - 16px), (max-width: 1280px) calc(100vw - 64px), 1234px"
        />
      </div>

    </section>
  );
};
