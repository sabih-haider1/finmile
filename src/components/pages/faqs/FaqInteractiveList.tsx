"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaqContactCTA } from './FaqContactCTA';
import faqDataRaw from '../../../../faq_data.json';
import { sanitizeRichHtml } from '@/lib/security';

interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = faqDataRaw as FaqItem[];

export function FaqInteractiveList() {
  // Extract unique categories, preserving order essentially
  const categories = Array.from(new Set(faqData.map((item) => item.category)));

  // State
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || '');
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number>(0);

  const activeFaqs = faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="max-w-[1200px] mx-auto px-6 pb-24 flex flex-col md:flex-row gap-10 md:gap-16">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
        <div className="md:sticky md:top-32 flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-3 md:space-x-0 space-y-0 md:space-y-2 bg-[#2F1C8C] rounded-[20px] p-4 md:p-5 shadow-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenQuestionIndex(0);
                }}
                className={`shrink-0 text-center md:text-left px-4 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-text transition-all duration-200 border-b-2 md:border-b-0 md:border-l-4 ${isActive
                  ? 'bg-white/15 border-white text-white'
                  : 'border-transparent hover:bg-white/5 text-white/60 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <h3 className="text-[24px] md:text-[32px] font-semibold mb-8 text-[#2F1C8C] border-b border-gray-100 pb-4 tracking-tight">
          {activeCategory}
        </h3>

        <div className="space-y-4">
          {activeFaqs.map((faq, index) => {
            const isOpen = openQuestionIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#2F1C8C]/30 shadow-sm' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenQuestionIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-start gap-4 pr-4">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full bg-[#2F1C8C]/10 flex items-center justify-center text-sm font-bold mt-0.5"
                      style={{ color: '#2F1C8C' }}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`font-semibold text-base md:text-[17px] leading-snug transition-colors ${isOpen ? 'text-[#2F1C8C]' : 'text-gray-900'}`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 ${isOpen ? 'bg-[#6A27D4]' : 'bg-transparent'
                    }`}>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5" style={{ color: '#6A27D4' }} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1 ml-11">
                        <div
                          className="text-gray-600 prose prose-sm max-w-none prose-p:leading-relaxed prose-a:text-[#2F1C8C] prose-a:font-medium hover:prose-a:underline prose-em:italic"
                          dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(faq.answer) }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
        <FaqContactCTA />
      </div>
    </div>
  );
}
