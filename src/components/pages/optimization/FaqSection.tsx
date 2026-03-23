"use client";

import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import { ChevronDown, ChevronUp } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const FaqSection = () => {
    // State to track which FAQ is currently open (defaulting to the second one to match your image)
    const [openIndex, setOpenIndex] = useState(1);

    const faqs = [
        {
            question: "What is AI route optimization?",
            answer: "AI route optimization uses advanced algorithms to calculate the most efficient delivery paths in real-time, taking into account traffic, delivery windows, and vehicle capacity."
        },
        {
            question: "How much can I save with Finmile?",
            answer: "Finmile helps reduce failed deliveries, lower operational costs (like fuel and vehicle maintenance), improve customer satisfaction with accurate ETAs, and increase the number of deliveries a single driver can make."
        },
        {
            question: "Is it enterprise-ready?",
            answer: "Yes, our platform is built for scale, supporting massive delivery volumes and complex fleet operations with enterprise-grade security and reliability."
        },
        {
            question: "How long does implementation take?",
            answer: "Implementation timelines vary depending on your operational complexity, but most customers are fully deployed and seeing value within 2 to 4 weeks."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`w-full bg-white py-6 md:py-6 flex justify-center px-4 md:px-8 lg:px-24 ${montserrat.className}`}>
            
            {/* Main FAQ Container with updated EXACT #F3F5FF background */}
            <div className="w-full max-w-[1000px] bg-[#F3F5FF] rounded-[32px] px-6 py-12 md:px-16 md:py-16 flex flex-col items-center shadow-[0_10px_40px_rgba(47,28,140,0.03)]">
                
                <h2 className="text-[#2F1C8C] font-bold text-[32px] md:text-[42px] mb-10 text-center tracking-tight">
                    Frequently Asked Questions
                </h2>

                <div className="w-full max-w-[850px] flex flex-col">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        
                        return (
                            <div 
                                key={idx} 
                                className={`flex flex-col border-b border-[#EAE8F4] py-6 ${idx === faqs.length - 1 ? 'border-none' : ''}`}
                            >
                                {/* Question Row (Clickable) */}
                                <button 
                                    onClick={() => toggleFaq(idx)}
                                    className="flex items-center justify-between w-full text-left focus:outline-none group"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#2F1C8C] font-bold text-[16px] md:text-[18px]">
                                            {idx + 1}.
                                        </span>
                                        <span className="text-[#1A1A24] font-bold text-[16px] md:text-[18px]">
                                            {faq.question}
                                        </span>
                                    </div>

                                    {/* Custom Toggle Icon */}
                                    <div className={`w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 ml-4 transition-colors duration-200 shadow-sm ${isOpen ? 'bg-[#6A27D4]' : 'bg-white'}`}>
                                        {isOpen ? (
                                            <ChevronUp className="w-4 h-4 text-white" strokeWidth={3} />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-[#6A27D4]" strokeWidth={3} />
                                        )}
                                    </div>
                                </button>

                                {/* Answer Dropdown */}
                                {isOpen && (
                                    <div className="pl-7 pr-4 md:pr-10 pt-4 pb-1 animate-in slide-in-from-top-2 fade-in duration-200">
                                        <p className="text-[#8B8B9B] font-medium text-[14.5px] md:text-[15px] leading-[1.65]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Call to action button */}
                <button className="mt-10 bg-[#6A27D4] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] md:text-[15px] shadow-[0_10px_20px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0">
                    Read Full FAQ&apos;s
                </button>

            </div>
        </section>
    );
};