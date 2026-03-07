'use client';

import React, { useRef, useEffect } from 'react';

interface FrostedGlassCardProps {
    number: string;
    title: string;
    description: string;
}

export const FrostedGlassCard: React.FC<FrostedGlassCardProps> = ({ number, title, description }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Reduce multiplier for a softer, more premium Glassmorphism tilt
            const rotateY = ((x - centerX) / centerX) * 6;
            const rotateX = ((y - centerY) / centerY) * -6;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div style={{ perspective: '1000px' }} className="w-full h-full relative z-20">
            <div
                ref={cardRef}
                className="w-full h-full rounded-[24px] p-6 md:p-8 text-white border border-white/10 bg-white/[0.04] shadow-lg transition-transform duration-200 ease-out flex flex-col"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="mb-6" style={{ transform: 'translateZ(10px)' }}>
                    <div className="w-12 h-10 bg-[#482CE5] rounded-lg flex items-center justify-center font-bold text-[16px] text-white tracking-widest leading-none shadow-md">
                        {number}
                    </div>
                </div>
                <h3 className="text-white font-semibold text-[20px] mb-3 leading-tight" style={{ transform: 'translateZ(20px)' }}>
                    {title}
                </h3>
                <p className="text-[#DEE2E6] font-medium text-[15px] leading-relaxed" style={{ transform: 'translateZ(10px)' }}>
                    {description}
                </p>
            </div>
        </div>
    );
};
