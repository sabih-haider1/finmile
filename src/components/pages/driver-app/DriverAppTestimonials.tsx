'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const DriverAppTestimonials = () => {
    // Repeated placeholder data for the carousel
    const testimonials = [
        {
            quote: "\"We operate across six clients and three depots — Finmile unified it all. Routing went from hours to minutes, and client SLA reports generate automatically.\"",
            author: "— Head of Operations",
            company: "National 3PL"
        },
        {
            quote: "\"We operate across six clients and three depots — Finmile unified it all. Routing went from hours to minutes, and client SLA reports generate automatically.\"",
            author: "— Head of Operations",
            company: "National 3PL"
        },
        {
            quote: "\"Before Finmile, our route planning took 3 hours every morning. Now it's done in 15 minutes, and our on-time delivery rate has jumped by 14%.\"",
            author: "— Fleet Manager",
            company: "Urban Delivery Network"
        },
        {
            quote: "\"The visibility we get with the Control Tower is a game-changer. We caught a potential 2-hour delay before it happened and rerouted seamlessly.\"",
            author: "— Logistics Director",
            company: "Fresh Foods Express"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, [testimonials.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    }, [testimonials.length]);

    // Optional: Auto-play functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, 8000); // Change slide every 8 seconds
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className={`w-full bg-white flex flex-col items-center px-4 md:px-6 lg:px-12 py-12 md:py-16 overflow-hidden relative ${montserrat.className}`}>

            <div className="w-full max-w-[1240px] z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center w-full z-10 flex flex-col items-center max-w-[900px] mx-auto mb-10 md:mb-14">
                    <h2 className="font-semibold text-[32px] md:text-[40px] lg:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.2]">
                        Trusted by Drivers and Fleets
                    </h2>
                </div>

                {/* Grid of Cards (Functional Carousel) */}
                <div className="relative w-full max-w-[1000px] overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="w-full flex-shrink-0 px-2 lg:px-4">
                                <div className="w-full bg-[#2F1C8C] rounded-[24px] p-8 md:p-12 lg:p-16 flex flex-col items-center text-center relative overflow-hidden h-full">
                                    
                                    {/* Inner glow */}
                                    <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-white opacity-[0.03] blur-[60px] pointer-events-none rounded-full" />

                                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-white mb-6 md:mb-8" fill="currentColor" />

                                    <p className="text-white font-medium text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed mb-8 md:mb-10 flex-grow relative z-10">
                                        {item.quote}
                                    </p>

                                    <div className="mt-auto relative z-10">
                                        <h4 className="text-white font-bold text-[15px] md:text-[16px] mb-1">{item.author}</h4>
                                        <span className="text-white/60 text-[13px] md:text-[14px]">{item.company}</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-center gap-6 mt-10">
                    <button 
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full bg-white border border-[#E9E4FF] flex items-center justify-center text-[#6C757D] hover:border-[#6A27D4] hover:text-[#6A27D4] transition-all shadow-sm"
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    
                    <div className="flex gap-3 text-center">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Go to testimonial ${idx + 1}`}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                    currentIndex === idx ? 'bg-[#6A27D4]' : 'bg-[#E9E4FF] hover:bg-[#d6d0ff]'
                                }`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full bg-[#6A27D4] text-white flex items-center justify-center hover:bg-[#5821B0] transition-colors shadow-md"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </section>
    );
};
