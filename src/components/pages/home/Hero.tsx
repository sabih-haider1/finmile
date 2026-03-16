import React from "react";
import Image from 'next/image';
import { Badge } from "../../ui/Badge";
import { Button } from "../../ui/Button";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-[140px] px-4 overflow-hidden bg-[#0B0616]">

      {/* Upper Subtle Glow behind text */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3B257E] rounded-full blur-[140px] opacity-30 pointer-events-none" />

      {/* Massive Lower Intense Gradient Glow (The sweeping purple glow behind the hero image) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-40 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] mx-auto space-y-6">

        {/* Top Badge */}
        <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
          <Badge label="An operating system for execution, not another logistics tool" />
        </div>

        {/* Headline */}
        <h1 
          className="text-white text-[44px] md:text-[60px] lg:text-[64px] md:whitespace-nowrap font-bold tracking-tight leading-[1.05] pb-2"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
        >
          The <span className="gradient-text-os px-1">OS</span> for Modern Logistics
        </h1>

        {/* Sub-headline */}
        <p 
          className="text-[#9CA3AF] text-[16px] font-normal w-full max-w-[760px] leading-relaxed mx-auto px-4 mt-2"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
        >
          Finmile AI automates delivery operations end to end, using agentic AI to optimise multi drop routes in
          seconds and deliver full operational visibility through a unified command interface.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6 w-full sm:w-auto"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
        >
          <Button variant="solid" size="lg">
            See How It Works
          </Button>
          <Button variant="liquid-glass" size="lg">
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Dashboard Mockup Image */}
      <div 
        className="relative z-10 mt-12 w-full max-w-[1200px] mx-auto px-2 md:px-8"
        style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
      >
        <Image
          src="/assets/images/hero-dashboard.png"
          alt="Finmile Dashboard"
          width={1200}
          height={720}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 96vw, (max-width: 1280px) 90vw, 1200px"
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
};