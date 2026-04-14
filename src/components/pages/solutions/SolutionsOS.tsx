'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const SolutionsOS = () => {
  return (
    <section className="w-full py-[clamp(32px,5vw,48px)] -mb-[1px] z-10 bg-white overflow-hidden relative">
      {/* Background Decorative Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#6A27D4]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#3B257E]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col space-y-8"
            variants={fadeInLeft}
          >
            <h2 className="text-[#2F1C8C] font-bold leading-[1.1] tracking-normal md:tracking-tight text-balance text-[clamp(34px,4vw,46px)]">
              Slash Your Delivery Costs by up to <span className="text-[#2F1C8C]">42%</span> with Finmile’s Intelligent Delivery Software
            </h2>

            <div className="space-y-6">
              <p className="text-[#6B7280] text-[16px] md:text-[18px] leading-relaxed">
                Stop burning cash on inefficient routes and manual processes. Finmile’s <span className="text-[#0B0616] font-semibold">AI-powered delivery software</span> transforms your logistics operations — from first mile to happy customer — helping you reduce costs, speed up deliveries, and enhance customer satisfaction.
              </p>
            </div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit"
            >
              <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="solid" size="lg" className="w-[240px]">
                  See How Finmile Works
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="relative"
            variants={fadeInRight}
          >
            {/* Ambient shadow/glow behind image */}
            <div className="absolute inset-0 bg-blue-50/50 rounded-[40px] blur-[80px] -z-10 transform translate-x-4 translate-y-4" />

            <div className="relative rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.12)] border border-gray-100 bg-white p-2">
              <Image
                src="/assets/images/features/Finmile-OS-1.png"
                alt="Finmile OS Operations Dashboard"
                width={800}
                height={600}
                className="w-full h-auto rounded-[24px]"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </div>

            {/* Subtle floating badge or element if needed, but keeping it clean for now */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
