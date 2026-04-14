'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Inbox, Brain, Send, CheckCircle, BarChart3 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const steps = [
  {
    number: '1',
    title: 'Import Orders',
    description: 'Connect your OMS, ERP, or e-commerce system — or upload manually.',
    icon: <Inbox className="w-7 h-7" />
  },
  {
    number: '2',
    title: 'AI Optimises Routes',
    description: "Finmile's engine plans the most efficient routes for your fleet in minutes.",
    icon: <Brain className="w-7 h-7" />
  },
  {
    number: '3',
    title: 'Dispatch & Track',
    description: 'Assign and monitor deliveries in real time from your central dashboard.',
    icon: <Send className="w-7 h-7" />
  },
  {
    number: '4',
    title: 'Deliver & Delight',
    description: 'Drivers follow optimised routes, capture POD, and customers receive live updates.',
    icon: <CheckCircle className="w-7 h-7" />
  },
  {
    number: '5',
    title: 'Analyse & Improve',
    description: 'Review performance and identify additional savings opportunities.',
    icon: <BarChart3 className="w-7 h-7" />
  }
];

export const SolutionsProcess = () => {
  return (
    <section className="w-full py-6 lg:py-6 -mb-[1px] z-10 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-6 lg:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#2F1C8C] font-bold leading-tight tracking-normal md:tracking-tight text-balance text-[clamp(34px,4vw,48px)]">
            Simple Steps to Delivery Excellence
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="flex flex-col items-center text-center group relative"
            >
              {/* Step Icon Container */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-[#F8F7FF] flex items-center justify-center text-[#2F1C8C] shadow-[0_8px_30px_rgba(47,28,140,0.06)] border border-gray-100 group-hover:bg-[#2F1C8C] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                  {step.icon}
                </div>

                {/* Step Number Tag */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#2F1C8C] text-[14px] font-bold group-hover:bg-[#2F1C8C] group-hover:text-white transition-colors duration-300">
                  {step.number}
                </div>
              </div>

              {/* Text Content */}
              <h4 className="text-[#0B0616] text-[18px] font-bold mb-4 tracking-tight group-hover:text-[#2F1C8C] transition-colors">
                {step.number}. {step.title}
              </h4>
              <p className="text-[#6B7280] text-[14px] md:text-[15px] leading-relaxed px-2">
                {step.description}
              </p>

              {/* Connector Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[70%] w-[60%] h-[1px] bg-gray-100 -z-10" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Section Footer */}
        <motion.div
          className="text-center mt-8 md:mt-10 pt-4 border-t border-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-[#2F1C8C] font-semibold text-[16px] md:text-[18px]">
            We help you become smarter, leaner, and more profitable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
