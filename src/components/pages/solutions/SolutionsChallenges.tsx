'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

const challenges = [
  {
    number: 1,
    title: 'Skyrocketing operational costs',
    description: 'Wasted miles, idle fleets, and driver overtime.'
  },
  {
    number: 2,
    title: 'Manual route planning headaches',
    description: 'Fragmented tools and excessive manual intervention.'
  },
  {
    number: 3,
    title: 'Lack of real-time visibility',
    description: 'No idea where your drivers are or when deliveries will arrive.'
  },
  {
    number: 4,
    title: 'Poor customer experience',
    description: 'Missed ETAs, inaccurate tracking, and refund claims.'
  },
  {
    number: 5,
    title: 'Inefficient resource allocation',
    description: 'Underutilised fleets or driver burnout.'
  }
];

export const SolutionsChallenges = () => {
  return (
    <section className="w-full py-6 lg:py-6 -mb-[1px] z-10 bg-white overflow-hidden relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#6A27D4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column: Challenges List */}
          <motion.div
            className="flex flex-col space-y-10"
            variants={fadeInLeft}
          >
            <h3 className="text-[#2F1C8C] text-[20px] font-bold tracking-tight uppercase">
              Challenges we solve:
            </h3>

            <div className="flex flex-col space-y-8">
              {challenges.map((challenge, index) => (
                <div key={challenge.number} className="flex items-start gap-6 relative group">
                  {/* Vertical Line Connector */}
                  {index < challenges.length - 1 && (
                    <div className="absolute left-[20px] top-[40px] bottom-[-32px] w-[1px] bg-gray-100 hidden md:block" />
                  )}

                  {/* Number Circle */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2F1C8C] flex items-center justify-center text-white text-[15px] font-bold shadow-[0_4px_20px_rgba(47,28,140,0.2)] group-hover:scale-110 transition-transform duration-300">
                    {challenge.number}
                  </div>

                  <div className="flex flex-col space-y-1.5 pt-1">
                    <h4 className="text-[#0B0616] text-[18px] md:text-[20px] font-bold">
                      {challenge.title}
                    </h4>
                    <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#0B0616] font-semibold text-[16px] md:text-[18px] mt-4 pt-2 border-t border-gray-50">
              It&apos;s time to turn your delivery network from a cost centre into a competitive advantage.
            </p>
          </motion.div>

          {/* Right Column: Main Proposition */}
          <motion.div
            className="flex flex-col space-y-8 lg:pt-20"
            variants={fadeInRight}
          >
            <h2 className="text-[#2F1C8C] font-bold leading-[1.1] tracking-normal md:tracking-tight text-balance text-[clamp(34px,4vw,46px)]">
              Are Outdated Delivery Processes Draining Your Profits?
            </h2>
            <div className="space-y-6">
              <p className="text-[#6B7280] text-[16px] md:text-[18px] leading-relaxed">
                If you’re feeling the pressure from rising fuel costs, delayed deliveries, and dissatisfied customers, you’re not alone.
              </p>
              <p className="text-[#6B7280] text-[16px] md:text-[18px] leading-relaxed">
                Traditional delivery systems weren’t built for today’s dynamic, data-driven logistics world.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
