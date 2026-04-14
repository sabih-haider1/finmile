import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

interface PageHeroProps {
  title: string;
  hideLogo?: boolean;
  description?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function PageHero({ title, hideLogo, description, gradientFrom, gradientTo }: PageHeroProps) {
  return (
    <section className={`relative w-full overflow-hidden pt-[100px] md:pt-[140px] pb-6 md:pb-12 flex items-center justify-center bg-[#0B0616] min-h-[160px] md:min-h-[300px] ${montserrat.className}`}>

      {/* Ambient background glows */}
      <div
        className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[160px] opacity-40 pointer-events-none"
        style={{ backgroundColor: gradientFrom || '#3B257E' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] rounded-[100%] blur-[180px] opacity-50 pointer-events-none"
        style={{ backgroundColor: gradientFrom || '#2F1C8C' }}
      />

      {/* Bright Lower Corner Gradients */}
      <div
        className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] rounded-[100%] blur-[180px] opacity-10 pointer-events-none"
        style={{ backgroundColor: gradientTo || '#7E42FF' }}
      />
      <div
        className="absolute bottom-[-30%] right-[-10%] w-[600px] h-[600px] rounded-[100%] blur-[180px] opacity-10 pointer-events-none"
        style={{ backgroundColor: gradientTo || '#531FD1' }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 flex flex-col items-center justify-center">
        <h1
          className="text-white font-text tracking-normal md:tracking-tight text-center leading-[1.15] md:leading-[1.1] z-10 text-balance text-[clamp(36px,4vw,64px)]"
        >
          {title} {!hideLogo && <span className="text-white/100">Finmile</span>}
        </h1>
        {description && (
          <p className="text-[#ADB5BD] font-medium text-[16px] md:text-[18px] max-w-[800px] text-center mt-6 z-10">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
