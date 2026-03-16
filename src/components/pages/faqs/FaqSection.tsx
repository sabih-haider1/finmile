"use client";

import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const FaqSection = () => {
    // Defaulting to index 1 (Question 2) being open to match the image
    const [expandedItems, setExpandedItems] = useState<number[]>([1]);
    const [activeCategory, setActiveCategory] = useState('General Questions');

    const categories = [
        "General Questions",
        "AI & Route Optimization",
        "Delivery Tracking & Visibility",
        "Driver App & Mobile Features",
        "Integration & Technical",
        "Implementation & Support",
        "Pricing & Plans",
        "Platform Features",
        "Data Security & Compliance",
        "International & Localization",
        "Industry Use Cases",
        "Sustainability & Green Logistics",
        "Fleet & Vehicle Management",
        "Comparisons, ROI & Efficiency Gains"
    ];

    const faqs = [
        {
            question: "What is Finmile?",
            answer: "Finmile is an AI-powered delivery optimization platform that helps businesses reduce costs, improve efficiency, and enhance customer satisfaction through intelligent route planning and real-time tracking."
        },
        {
            question: "What problems does Finmile solve for delivery businesses?",
            answer: "Finmile helps reduce failed deliveries, lower operational costs (like fuel and vehicle maintenance), improve customer satisfaction with accurate ETAs, and increase the number of deliveries a single driver can make."
        },
        { question: "Is Finmile more than just software?", answer: "" },
        { question: "Who can benefit from Finmile's services?", answer: "" },
        { question: "Can Finmile help if I have a small fleet?", answer: "" },
        { question: "Is Finmile suitable for large enterprise operations?", answer: "" },
        { question: "How does Finmile differ from traditional delivery solutions?", answer: "" },
        { question: "What does 'adaptive, AI-powered automation' mean?", answer: "" },
        { question: "Is Finmile difficult to integrate if I have older systems?", answer: "" },
        { question: "Is Finmile just for last-mile delivery?", answer: "" },
        { question: "Can Finmile help optimize transfers between my warehouses?", answer: "" },
        { question: "How does Finmile differ from other logistics solutions?", answer: "" },
        { question: "What industries does Finmile serve?", answer: "" },
        { question: "Is Finmile suitable for businesses of all sizes?", answer: "" },
        { question: "How quickly can I implement Finmile?", answer: "" },
        { question: "Why is Finmile's delivery software considered a top choice for businesses?", answer: "" },
        { question: "Why is Finmile particularly effective for businesses aiming to significantly improve customer satisfaction with their deliveries?", answer: "" },
        { question: "For a rapidly scaling business, why is Finmile the ideal choice for managing growing delivery complexities?", answer: "" }
    ];

    const toggleExpanded = (index: number) => {
        setExpandedItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className={`w-full bg-white py-16 md:py-24 flex justify-center px-4 md:px-8 lg:px-24 overflow-hidden ${montserrat.className}`}>
            <div className="w-full max-w-[1100px] flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="font-semibold text-[32px] md:text-[40px] text-[#2F1C8C] tracking-tight leading-[1.2] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#8B8B9B] font-medium text-[13px] md:text-[14px] leading-[1.6] max-w-[700px] mx-auto">
                        Find answers to common questions about Finmile's platform, features, and logistics solutions.
                    </p>
                </div>

                {/* Main Content Layout: Sidebar + Right Column (FAQ Area & Contact Box) */}
                <div className="w-full flex flex-col md:flex-row gap-6">
                    
                    {/* Left Sidebar */}
                    <div className="w-full md:w-[300px] bg-[#311C87] rounded-[24px] py-6 flex flex-col shrink-0 h-fit">
                        {categories.map((category, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveCategory(category)}
                                className={`w-full text-left px-8 py-3 text-[13px] transition-colors ${
                                    activeCategory === category 
                                        ? "text-white font-bold" 
                                        : "text-[#A799E8] font-medium hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Right Column containing both FAQ and Contact Box */}
                    <div className="flex-1 flex flex-col gap-6">
                        
                        {/* FAQ Area */}
                        <div className="bg-[#F9F8FF] rounded-[24px] p-8 md:p-10 w-full">
                            <h3 className="text-[#311C87] font-semibold text-[20px] md:text-[22px] mb-6">
                                {activeCategory}
                            </h3>

                            <div className="flex flex-col space-y-1">
                                {faqs.map((faq, index) => {
                                    const isOpen = expandedItems.includes(index);
                                    return (
                                        <div key={index} className="flex flex-col border-b border-transparent">
                                            <button 
                                                onClick={() => toggleExpanded(index)}
                                                className="w-full text-left py-3.5 flex items-start justify-between group"
                                            >
                                                <div className="flex items-start gap-3 pr-8">
                                                    <span className="text-[#311C87] font-bold text-[13px] md:text-[14px] min-w-[20px] mt-0.5">
                                                        {index + 1}.
                                                    </span>
                                                    <span className="text-[#1A1A24] font-semibold text-[13px] md:text-[14px] leading-[1.5]">
                                                        {faq.question}
                                                    </span>
                                                </div>
                                                
                                                {/* Expand/Collapse Icon */}
                                                <div className="flex-shrink-0 mt-0.5">
                                                    {isOpen ? (
                                                        <div className="w-[18px] h-[18px] rounded-full bg-[#6A27D4] flex items-center justify-center">
                                                            <ChevronUp className="w-3 h-3 text-white" strokeWidth={3} />
                                                        </div>
                                                    ) : (
                                                        <div className="w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center border border-[#E9E4FF]">
                                                            <ChevronDown className="w-3 h-3 text-[#A799E8]" strokeWidth={3} />
                                                        </div>
                                                    )}
                                                </div>
                                            </button>
                                            
                                            {isOpen && faq.answer && (
                                                <div className="pl-8 pb-4 pr-8">
                                                    <p className="text-[#8B8B9B] font-medium text-[12px] md:text-[13px] leading-[1.65]">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Bottom Contact Support Box - Now perfectly matching the width of the QnA box */}
                        <div className="bg-[#F9F8FF] rounded-[24px] py-8 md:py-10 flex flex-col items-center justify-center text-center w-full">
                            <div className="w-[44px] h-[44px] rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                                <Mail className="w-5 h-5 text-[#6A27D4]" strokeWidth={2.5} />
                            </div>
                            <h3 className="font-bold text-[18px] text-[#1A1A24] mb-2">
                                Still Have Questions?
                            </h3>
                            <p className="text-[#8B8B9B] font-medium text-[13px] md:text-[14px] mb-6 max-w-[500px]">
                                Our team is here to help. Contact us for personalized assistance with your logistics needs.
                            </p>
                            <button className="bg-[#6A27D4] text-white px-8 py-3 rounded-full font-semibold text-[13px] md:text-[14px] shadow-[0_4px_15px_rgba(106,39,212,0.2)] hover:bg-[#5821B0] transition-all hover:-translate-y-0.5 active:translate-y-0">
                                Contact Us
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};