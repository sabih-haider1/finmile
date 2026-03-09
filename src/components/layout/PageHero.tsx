import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

interface PageHeroProps {
  title: string;
  hideLogo?: boolean;
}

export function PageHero({ title, hideLogo }: PageHeroProps) {
  return (
    <section className={`relative w-full overflow-hidden pt-40 pb-32 flex items-center justify-center bg-[#0B0616] min-h-[392px] ${montserrat.className}`}>

      {/* Ambient background glows inspired by landing page */}
      <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#3B257E] rounded-full blur-[160px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-[#2F1C8C] rounded-[100%] blur-[180px] opacity-50 pointer-events-none" />

      {/* Bright Lower Corner Gradients */}
      <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-[#7E42FF] rounded-[100%] blur-[180px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-[-30%] right-[-10%] w-[600px] h-[600px] bg-[#531FD1] rounded-[100%] blur-[180px] opacity-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 flex items-center justify-center">
        <h1
          className="text-white font-bold tracking-tight text-center leading-[1.15] md:leading-[1.1] z-10 text-[36px] md:text-[52px] lg:text-[64px]"
        >
          {title} {!hideLogo && <span className="text-white/90">Finmile</span>}
        </h1>
      </div>
    </section>
  );
}
