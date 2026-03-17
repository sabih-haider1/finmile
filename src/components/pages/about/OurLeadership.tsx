'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Linkedin } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

import { authors } from '@/data/authors';

export const OurLeadership = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    // Responsive items per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(4);
            }
        };

        // Initial setup
        handleResize();

        // Listeners for adjustments
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextPage = () => {
        setCurrentIndex((prev) => (prev + 1) % authors.length);
    };

    const prevPage = () => {
        setCurrentIndex((prev) => (prev - 1 + authors.length) % authors.length);
    };

    const goToIndex = (index: number) => {
        setCurrentIndex(index);
    };

    // Get current visible members with wrapping
    const getVisibleMembers = () => {
        const members: Array<typeof authors[0] & { uniqueKey: string }> = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % authors.length;
            members.push({ ...authors[index], uniqueKey: `${index}-${currentIndex}` });
        }
        return members;
    };

    const visibleMembers = getVisibleMembers();

    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-6 lg:px-24 py-16 overflow-hidden relative ${montserrat.className}`}>

            {/* Centered Header */}
            <div className="text-center mb-8 w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto">
                <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight mb-6 leading-tight">
                    Meet the Leadership Team
                </h2>
            </div>

            {/* Leadership Cards Grid / Container */}
            <div className="w-full max-w-[1440px] mb-8 z-10 relative items-start min-h-[500px]">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visibleMembers.map((member) => (
                        <div
                            key={member.uniqueKey}
                            className="bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-gray-100 h-full animate-[fadeIn_0.5s_ease-in-out]"
                        >

                            {/* Image Placeholder */}
                            <div className="w-full h-[280px] bg-gray-200 shrink-0">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-grow">

                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-[#0A1B33] font-bold text-[20px] mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-[#2F1C8C] font-semibold text-[13px] tracking-wide">
                                            {member.role}
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="w-8 h-8 rounded-full bg-[#3B257E] text-white flex items-center justify-center shrink-0 hover:bg-[#5821B0] transition-colors"
                                        aria-label={`LinkedIn for ${member.name}`}
                                    >
                                        <Linkedin className="w-4 h-4" fill="currentColor" strokeWidth={0.5} />
                                    </a>
                                </div>

                                <p className="text-[#6C757D] text-[14px] leading-relaxed font-medium mt-auto">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Pagination Controls */}
            {authors.length > itemsPerPage && (
                <div className="flex items-center justify-center z-20">
                    <div
                        className="flex items-center gap-4 px-2 py-2 rounded-[32px]"
                        style={{ background: 'linear-gradient(208.41deg, #F5F3FF -9.69%, #FAF9FF 100.08%)' }}
                    >
                        <button
                            onClick={prevPage}
                            className="w-12 h-12 rounded-full bg-white shadow-[0_4px_12px_rgba(47,28,140,0.08)] flex items-center justify-center text-[#0A1B33] hover:bg-[#2F1C8C] hover:text-white transition-all duration-300 group"
                            aria-label="Previous Page"
                        >
                            <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
                        </button>

                        <div className="flex items-center gap-1">
                            {authors.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === index ? 'bg-[#2F1C8C] opacity-100' : 'bg-[#2F1C8C] opacity-20 hover:opacity-50'
                                        }`}
                                    aria-label={`Go to member ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextPage}
                            className="w-12 h-12 rounded-full bg-[#2F1C8C] text-white shadow-[0_4px_12px_rgba(47,28,140,0.2)] flex items-center justify-center hover:bg-[#5821B0] transition-all duration-300 group"
                            aria-label="Next Page"
                        >
                            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
};