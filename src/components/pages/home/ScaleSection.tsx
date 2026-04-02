'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers, Navigation, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const RouteCalculatorPopup = dynamic(
  () => import('../../shared/RouteCalculatorPopup').then((mod) => mod.RouteCalculatorPopup),
  { ssr: false }
);
const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

export const ScaleSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {isPopupOpen && (
        <RouteCalculatorPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}

      <motion.section
        className="w-full bg-[#fcfcff] flex flex-col items-center px-4 md:px-6 py-10 lg:py-12 overflow-hidden relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-14 w-full z-10 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-[#2F1C8C] text-[28px] md:text-[36px] lg:text-[48px] font-semibold tracking-tight mb-6 leading-tight">
            Built for scale. Designed for reality.
          </h2>
          <p className="text-[#848DA0] text-[14px] md:text-[15px] lg:text-[16px] font-medium mx-auto px-4">
            As delivery volume grows, Finmile removes complexity instead of adding headcount.
          </p>
        </motion.div>

        <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-stretch lg:items-start gap-12 lg:gap-[10px] z-10 relative">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 flex items-stretch justify-center lg:justify-start">
            <motion.div className="w-full h-full flex items-center" whileHover={{ scale: 1.01 }}>
              <Image
                src="/assets/images/half-dashboard.png"
                alt="Finmile Scale Dashboard"
                width={620}
                height={620}
                sizes="(max-width: 1024px) 92vw, 620px"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex items-stretch">
            <motion.div
              className="bg-[#F8F7FF] rounded-3xl md:rounded-[24px] p-6 md:p-8 pb-6 w-full shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white flex flex-col"
              whileHover={{ scale: 1.005 }}
            >
              <div>
                {/* Logo Chip */}
                <div className="bg-white rounded-[24px] py-6 px-8 shadow-[0_15px_40px_rgba(47,28,140,0.06),inset_0_4px_12px_rgba(0,0,0,0.04)] inline-flex items-center justify-center mb-14 border border-slate-50">
                  <Image
                    src="/assets/logos/logo-blue.png"
                    alt="Finmile Logo"
                    width={168}
                    height={40}
                    sizes="168px"
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </div>

                <h3 className="text-black font-semibold text-[18px] md:text-[20px] mb-10 leading-tight">
                  Just predictable execution at scale.
                </h3>

                {/* Features */}
                <motion.div
                  className="space-y-3 mb-10"
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerContainer}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.02)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Layers
                      className="text-[#2F1C8C] w-6 h-6 shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-gray-900 font-semibold text-[16px]">
                      Fewer Tools
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.02)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Navigation
                      className="text-[#2F1C8C] w-6 h-6 shrink-0 rotate-45"
                      strokeWidth={2}
                    />
                    <span className="text-gray-900 font-semibold text-[16px]">
                      Fewer Manual Decisions
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.02)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Clock
                      className="text-[#2F1C8C] w-6 h-6 shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-gray-900 font-semibold text-[16px]">
                      Fewer Operational Surprises
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1">
                  <motion.button
                    className="bg-[#6A27D4] text-white px-6 lg:px-8 py-3 rounded-full font-semibold text-[14px] whitespace-nowrap w-full sm:flex-1 hover:bg-[#5821B0] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book A Demo
                  </motion.button>
                </Link>

                <motion.button
                  id="Calculate"
                  className="w-full sm:flex-1 px-4 lg:px-6 py-3 bg-white text-[#6A27D4] border border-[#6A27D4] rounded-[80px] text-[14px] font-semibold whitespace-nowrap transition-all hover:bg-[#2F1C8C] hover:text-white"
                  onClick={() => setIsPopupOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Calculate your route savings
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};