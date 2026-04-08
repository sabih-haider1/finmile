'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const slides = [
    '/assets/images/slider/slide1.png',
    '/assets/images/slider/slide2.webp',
    '/assets/images/slider/slide3.png'
];

export const UnifiedCommand = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
        }, []);

    return (
        <motion.section 
          className="w-full bg-white flex flex-col items-center px-4 md:px-6 py-6 lg:py-16 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >

            {/* Section Header */}
            <motion.div 
              className="text-center mb-3 md:mb-8 w-full flex flex-col items-center z-20"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.5 }}
            >
                <h2 className="text-[#2F1C8C] text-[28px] md:text-[36px] lg:text-[48px] font-semibold tracking-tight mb-3 md:mb-6 leading-tight">
                    One Unified Command Interface
                </h2>
                <p className="text-[#848DA0] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed px-4">
                    All agents operate through a single control layer with full visibility across planning, live execution, and outcomes.
                </p>
            </motion.div>

            {/* Center Complete Graphic */}
            <motion.div 
              className="w-full max-w-[1240px] h-[350px] md:h-[500px] flex items-center justify-center relative z-10 px-4 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -4 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                        className="w-full h-full flex items-center justify-center"
                                                whileHover={{ scale: 1.01 }}
                    >
                        <Image
                            src={slides[currentSlide]}
                            alt={`Finmile Unified Command Interface - Slide ${currentSlide + 1}`}
                            width={1240}
                            height={500}
                            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 86vw, 1240px"
                            className="max-w-full max-h-full object-contain drop-shadow-[0_20px_40px_rgba(45,27,105,0.05)]"
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Bottom Pagination controls */}
            <motion.div 
              className="mt-3 md:mt-10 flex items-center justify-center z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
                <div 
                    className="flex items-center gap-4 px-2 py-2 rounded-[32px]"
                    style={{
                        background: 'linear-gradient(208.41deg, #F5F3FF -9.69%, #FAF9FF 100.08%)'
                    }}
                >
                    <motion.button 
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full bg-white shadow-[0_4px_12px_rgba(47,28,140,0.08)] flex items-center justify-center text-[#0A1B33] hover:bg-[#2F1C8C] hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
                    </motion.button>
                    
                    <div className="flex items-center gap-1">
                        {slides.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                    currentSlide === index ? 'bg-[#2F1C8C] opacity-100' : 'bg-[#2F1C8C] opacity-20 hover:opacity-50'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                                whileHover={{ scale: 1.2 }}
                            />
                        ))}
                    </div>
                    
                    <motion.button 
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full bg-[#2F1C8C] text-white shadow-[0_4px_12px_rgba(47,28,140,0.2)] flex items-center justify-center hover:bg-[#5821B0] transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                    </motion.button>
                </div>
            </motion.div>

        </motion.section>
    );
};