'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MarqueeProps {
  children: React.ReactNode;
  duration?: number;
  pauseOnHover?: boolean;
}

/**
 * Auto-scrolling marquee component
 * Pauses on hover for better UX
 */
export const Marquee = ({ children, duration = 20, pauseOnHover = true }: MarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        animate={{
          x: prefersReducedMotion ? 0 : [0, -1000],
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
        className="flex gap-8"
      >
        {/* Original content */}
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </motion.div>
    </div>
  );
};
