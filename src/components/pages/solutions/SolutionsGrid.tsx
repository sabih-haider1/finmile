'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Bot,
  LayoutDashboard,
  Zap,
  RefreshCcw,
  Leaf,
  Smartphone,
  ChevronRight
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const solutions = [
  {
    title: 'AI Agents',
    description: 'Autonomous agents that plan, execute, and continuously improve delivery operations in real time.',
    icon: <Bot className="w-6 h-6" />,
    href: '/ai-agents',
    color: '#6A27D4'
  },
  {
    title: 'Control Tower',
    description: 'A unified command interface providing full operational visibility and real-time intervention capabilities.',
    icon: <LayoutDashboard className="w-6 h-6" />,
    href: '/control-tower',
    color: '#3B257E'
  },
  {
    title: 'Route Optimization',
    description: 'Dynamic multi-drop optimization that adapts to real-world conditions like traffic and driver patterns.',
    icon: <Zap className="w-6 h-6" />,
    href: '/optimization',
    color: '#531FD1'
  },
  {
    title: 'Returns Optimization',
    description: 'Transform reverse logistics from a cost center into a competitive advantage with automated returns.',
    icon: <RefreshCcw className="w-6 h-6" />,
    href: '/returns-optimization',
    color: '#6A27D4'
  },
  {
    title: 'Sustainable Delivery',
    description: 'Run greener delivery networks with EV routing, carbon tracking, and emission reduction tools.',
    icon: <Leaf className="w-6 h-6" />,
    href: '/sustainable-delivery',
    color: '#10B981'
  },
  {
    title: 'Driver App',
    description: 'Empower your fleet with a high-performance mobile app for seamless execution and communication.',
    icon: <Smartphone className="w-6 h-6" />,
    href: '/driver-app',
    color: '#2F1C8C'
  }
];

export const SolutionsGrid = () => {
  return (
    <section className="w-full py-6 bg-white px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={fadeInUp}
              className="group"
            >
              <Link href={solution.href} className="block h-full">
                <div className="h-full p-8 rounded-[32px] bg-[#F8F9FA] border border-gray-100 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${solution.color}15`, color: solution.color }}
                  >
                    {solution.icon}
                  </div>

                  <h3 className="text-[24px] font-bold text-[#0B0616] mb-4 group-hover:text-[#6A27D4] transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-[#6B7280] text-[16px] leading-relaxed mb-8 flex-grow">
                    {solution.description}
                  </p>

                  <div className="flex items-center text-[#6A27D4] font-semibold text-[15px] group/btn">
                    Explore Solution
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#6A27D4]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
