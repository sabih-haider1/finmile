'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

const results = [
  {
    company: 'Urban Logistics Co.',
    industry: 'E-commerce',
    quote: 'Finmile reduced our delivery costs by 40% while improving customer satisfaction scores.',
    metrics: ['40% cost reduction', '32% fewer missed deliveries']
  },
  {
    company: 'Metro Delivery Services',
    industry: 'Last-Mile Delivery',
    quote: 'We’ve increased daily delivery capacity by 60% without adding more vehicles.',
    metrics: ['60% capacity increase', 'Same fleet size']
  },
  {
    company: 'Fresh Foods Express',
    industry: 'Food & Beverage',
    quote: 'Our on-time delivery rate improved from 85% to 98% in just one month.',
    metrics: ['98% on-time delivery', '20% lower fuel spend']
  }
];

export const SolutionsResults = () => {
  return (
    <section className="w-full py-6 lg:py-6 bg-[#F8F9FF] overflow-hidden relative">
      {/* Background Subtle Glows */}
      <div className="absolute top-[5%] right-[-5%] w-[400px] h-[400px] bg-[#6A27D4]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-[#2F1C8C]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#2F1C8C] text-[34px] md:text-[42px] lg:text-[48px] font-bold tracking-tight">
            Results That Speak for Themselves
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column: Results List */}
          <motion.div
            className="flex flex-col space-y-6"
            variants={fadeInLeft}
          >
            <div className="space-y-5">
              {results.map((result) => (
                <div key={result.company} className="flex flex-col space-y-3">
                  <h3 className="text-[#0B0616] text-[18px] md:text-[20px] font-bold">
                    {result.company} — <span className="italic font-medium text-[#6B7280]">{result.industry}</span>
                  </h3>
                  <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-[500px]">
                    "{result.quote}"
                  </p>
                  <div className="flex items-center gap-2 text-[#2F1C8C] font-semibold text-[14px] md:text-[15px]">
                    <MoveRight className="w-4 h-4 flex-shrink-0" />
                    <span>{result.metrics.join(' | ')}</span>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <Link href="/case-studies/all">
                <Button variant="solid" size="lg" className="w-[240px]">
                  Read More Case Studies
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Creative Asset */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={fadeInRight}
          >
            <div className="relative w-full max-w-[600px] transform hover:scale-[1.02] transition-transform duration-700">
              <Image
                src="/assets/images/features/last-mile-1024x556-1.png"
                alt="Delivery Logistics Visualization"
                width={1024}
                height={556}
                className="w-full h-auto drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              {/* Optional ambient background elements to match the image style */}
              <div className="absolute -z-10 bg-white/50 rounded-full blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
