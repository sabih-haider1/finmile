'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Linkedin } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

const teamMembers = [
    {
        name: 'Chris Sargeant',
        role: 'Co-Founder & COO',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/placeholder.jpg'
    },
    {
        name: 'Rich Pleeth',
        role: 'Co-Founder & CEO',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/placeholder.jpg'
    },
    {
        name: 'Alex Chindris',
        role: 'Chief Technology Officer',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/placeholder.jpg'
    },
    {
        name: 'Amelia Smith',
        role: 'Head of Product',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/placeholder.jpg'
    },
    {
        name: 'Sarah Jenkins',
        role: 'VP of Engineering',
        bio: 'Ex-Amazon logistics. Scales our backend and route optimization algorithms.',
        image: '/assets/images/placeholder.jpg'
    },
    {
        name: 'Michael Chen',
        role: 'Head of Data Science',
        bio: 'PhD in Operations Research. Builds our predictive dispatch models.',
        image: '/assets/images/placeholder.jpg'
    },
    {
        name: 'Elena Rodriguez',
        role: 'Director of Customer Success',
        bio: 'Ensures seamless onboarding and continuous value delivery for all partners.',
        image: '/assets/images/placeholder.jpg'
    },
    {
        name: 'David Okafor',
        role: 'Head of Marketing',
        bio: 'Passionate about sustainable supply chains and global brand expansion.',
        image: '/assets/images/placeholder.jpg'
    }
];

export const OurLeadership = () => {
    const [currentPage, setCurrentPage] = useState(0);
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

    const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

    // Ensure we don't land on an empty page after resize
    useEffect(() => {
        if (currentPage >= totalPages && totalPages > 0) {
            setCurrentPage(totalPages - 1);
        }
    }, [totalPages, currentPage]);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToPage = (index: number) => {
        setCurrentPage(index);
    };

    // Calculate which members to show
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
        pages.push(teamMembers.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
    }

    return (
        <section className={`w-full bg-[#fcfcff] flex flex-col items-center px-6 lg:px-24 py-20 overflow-hidden relative ${montserrat.className}`}>

            {/* Centered Header */}
            <div className="text-center mb-16 w-full z-10 flex flex-col items-center max-w-[1000px] mx-auto">
                <h2 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#2F1C8C] tracking-tight mb-6 leading-tight">
                    Meet the Leadership Team
                </h2>
            </div>

            {/* Leadership Cards Grid / Container */}
            <div className="w-full max-w-[1440px] mb-16 z-10 relative items-start min-h-[500px] overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >
                    {pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {page.map((member, index) => (
                                <div
                                    key={`${pageIndex}-${member.name}`}
                                    className="bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-gray-100 h-full"
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
                    ))}
                </div>
            </div>

            {/* Bottom Pagination Controls */}
            {totalPages > 1 && (
                <div className="mt-2 flex items-center justify-center z-20">
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
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToPage(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${currentPage === index ? 'bg-[#2F1C8C] opacity-100' : 'bg-[#2F1C8C] opacity-20 hover:opacity-50'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
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
