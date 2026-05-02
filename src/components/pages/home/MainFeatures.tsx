'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from '@/lib/animations';
import { AnimatedCard } from '@/components/animated/AnimatedCard';

export const TrustSection = () => {
  const brands = [
    { name: 'UpToYourDoor', logo: '/assets/logos/brands/uptoyourdoor.png' },
    { name: 'AG1', logo: '/assets/logos/brands/ag1.png' },
    { name: 'TikTok Shop', logo: '/assets/logos/brands/tiktok-shop.png' },
    { name: 'Net Zero Logistics', logo: '/assets/logos/brands/net-zero.png' },
    { name: 'Ricoh', logo: '/assets/logos/brands/ricoh.png' },
  ];

  return (
    <motion.section 
      className="w-full py-[clamp(32px,4vw,40px)] pb-[41px] -mb-[1px] relative z-10 bg-white flex flex-col items-center px-6 lg:px-20"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 520px' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.h2 
        className='text-[#2F1C8C] font-bold text-[12px] tracking-[2px] uppercase mb-10 text-center leading-[15px] text-balance'
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        TRUSTED BY THE WORLD&apos;S BIGGEST BRANDS
      </motion.h2>

      <style>{`
        @keyframes mobileMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-mobile-marquee {
          animation: mobileMarquee 25s linear infinite;
          width: max-content;
        }
      `}</style>

      {/* Mobile View: Infinite Marquee Strip */}
      <div className="md:hidden relative w-[calc(100%+3rem)] -mx-6 overflow-hidden bg-white mb-6 pb-2">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-mobile-marquee hover:![animation-play-state:paused] items-center">
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="flex-shrink-0 bg-[#F6F8FA] rounded-[16px] flex items-center justify-center w-[130px] h-[72px] mx-3 overflow-hidden shadow-sm border border-gray-50/50">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={110}
                height={40}
                className="w-auto h-auto max-h-[28px] max-w-[100px] object-contain opacity-90 mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View: Grid Layout */}
      <motion.div 
        className='hidden md:flex md:flex-wrap md:justify-center md:items-center md:gap-11 mb-12 max-w-[1600px] w-full'
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {brands.map((brand, index) => {
          const isOddLastItem = brands.length % 2 !== 0 && index === brands.length - 1;

          return (
          <AnimatedCard 
            key={brand.name} 
            className={`bg-[#F6F8FA] rounded-[12px] p-3 flex items-center justify-center w-full max-w-[200px] h-[106px] sm:h-[112px] md:w-[220px] md:max-w-none md:h-[120px] ${isOddLastItem ? 'col-span-2 justify-self-center md:col-span-1' : ''}`}
            variant={fadeInUp}
            index={brands.findIndex((b) => b.name === brand.name)}
            hoverEffect='lift'
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={190}
              height={64}
              sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 190px"
              className="max-h-[62px] md:max-h-[56px] w-auto object-contain"
            />
          </AnimatedCard>
          );
        })}
      </motion.div>

    </motion.section>
  );
};

export const FeaturesSection = () => {
  return (
    <section
      className="w-full py-6 lg:py-6 pb-6 bg-white flex flex-col items-center px-6 lg:px-20 relative"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 860px' }}
    >
      <div className='max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start'>

        {/* Left Column */}
        <motion.div 
          className='flex flex-col space-y-8 pt-4'
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.h2
            variants={fadeInLeft}
            className='text-[#2F1C8C] font-semibold leading-[1.1] tracking-normal md:tracking-tight text-balance text-[clamp(28px,4vw,48px)]'
          >
            Stop Managing <br className='hidden md:block' />
            Software and Start <br className='hidden md:block' />
            Directing Outcomes.
          </motion.h2>

          <motion.div className='space-y-10' variants={staggerContainer}>
            <motion.p
              variants={fadeInLeft}
              className='text-[#848DA0] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed'
            >
              Finmile replaces fragmented logistics tools with autonomous agents that plan, execute, and continuously improve delivery operations in real time.
            </motion.p>

            <motion.p variants={fadeInLeft} className='text-[#2F1C8C] text-[14px] md:text-[15px] lg:text-[16px] font-medium'>
              You define the objective. The system handles the complexity.
            </motion.p>

            <motion.p
              variants={fadeInLeft}
              className='text-[#848DA0] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed'
            >
              Unlike static route planners, Finmile&apos;s AI constantly learns.
            </motion.p>

            <motion.p
              variants={fadeInLeft}
              className='text-[#848DA0] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed'
            >
              It adapts to real-world conditions such as traffic, weather, and driver patterns to create routes that get faster and cheaper every day.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className='relative z-20 w-full flex items-center justify-center pt-0 lg:pt-0 px-4 lg:px-0 min-h-[500px] lg:min-h-[600px]'
          initial="hidden"
          whileInView="visible"
          variants={fadeInRight}
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Background Highlight Glow */}
          <div aria-hidden="true" className='absolute inset-0 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none transform-gpu translate-z-0 z-30' />

          <div className='relative z-10 w-full max-w-[800px]'>
            <motion.div variants={scaleIn}>
              <Image
                src='/assets/images/features/app-screen.png'
                alt='Finmile Dashboard and Mobile App'
                width={800}
                height={640}
                sizes="(max-width: 1024px) 90vw, 800px"
                className='w-full h-auto drop-shadow-[0_45px_90px_rgba(0,0,0,0.12)] object-contain relative z-10'
              />
            </motion.div>

            {/* 42% Card - Top Left */}
            <motion.div 
              className='absolute -top-4 left-0 md:-top-10 md:-left-24 z-40 bg-white/95 backdrop-blur-md rounded-[24px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white w-[220px] md:w-[320px] transform-gpu will-change-transform'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className='text-[#2F1C8C] text-[36px] md:text-[40px] font-bold leading-none mb-1.5'>42%</div>
              <div className='text-[#6B7280] text-[13px] md:text-[14px] font-medium leading-tight'>Fewer routes with AI optimisation</div>
            </motion.div>

            {/* 91% Card - Bottom Right */}
            <motion.div 
              className='absolute -bottom-6 right-0 md:-bottom-16 md:-right-[-8] z-40 bg-[#2D1B69] rounded-[24px] p-6 w-[200px] md:w-[300px] transform-gpu will-change-transform'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className='text-white text-[36px] md:text-[40px] font-bold leading-none mb-1.5'>91%</div>
              <div className='text-white/80 text-[13px] md:text-[14px] font-medium leading-tight'>Reduction in WISMO inquiries</div>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
