'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Zap, Smile, Eye } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

const benefits = [
  {
    title: 'Reduce costs',
    description: 'Cut up to 42% from your delivery spend using AI route optimisation and smart clustering.',
    icon: <TrendingDown className="w-6 h-6" />,
    color: '#6A27D4'
  },
  {
    title: 'Boost efficiency',
    description: 'Automate route planning, dispatching, and communication — freeing up your team for higher-value tasks.',
    icon: <Zap className="w-6 h-6" />,
    color: '#3B257E'
  },
  {
    title: 'Delight customers',
    description: 'Offer accurate live tracking, predictive ETAs, and proactive notifications.',
    icon: <Smile className="w-6 h-6" />,
    color: '#531FD1'
  },
  {
    title: 'Gain total visibility',
    description: 'Monitor your entire fleet in real time and proactively resolve delays.',
    icon: <Eye className="w-6 h-6" />,
    color: '#2F1C8C'
  }
];

export const SolutionsBenefits = () => {
  return (
    <section className="w-full py-6 lg:py-6 bg-[#FBFBFE] overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[#6A27D4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column: Introduction Content */}
          <motion.div
            className="flex flex-col space-y-8"
            variants={fadeInLeft}
          >
            <div className="space-y-4">
              <h2 className="text-[#2F1C8C] font-bold leading-[1.1] tracking-normal md:tracking-tight text-balance text-[clamp(34px,4vw,46px)]">
                Introducing Finmile: The AI Delivery Platform Built for Performance
              </h2>
              <h3 className="text-[#0B0616] text-[20px] md:text-[24px] font-semibold leading-tight pt-2">
                Unlock up to 42% Savings and Total Control with Finmile’s AI-Powered Delivery Software
              </h3>
            </div>

            <p className="text-[#6B7280] text-[16px] md:text-[18px] leading-relaxed">
              Finmile is an intelligent, all-in-one <span className="text-[#0B0616] font-semibold">delivery management platform</span> designed for logistics operators, retailers, and 3PLs that need speed, scalability, and sustainability.
            </p>

            <p className="text-[#0B0616] font-bold text-[16px]">
              With Finmile, you can:
            </p>
          </motion.div>

          {/* Right Column: Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={fadeInRight}
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="group p-8 rounded-[24px] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${benefit.color}10`, color: benefit.color }}
                >
                  {benefit.icon}
                </div>
                <h4 className="text-[#0B0616] text-[20px] font-bold mb-3">
                  {benefit.title}
                </h4>
                <p className="text-[#6B7280] text-[15px] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
