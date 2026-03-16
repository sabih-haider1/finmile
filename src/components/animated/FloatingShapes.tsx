'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FloatingShapeProps {
  className?: string;
}

/**
 * Floating animated background shape
 */
export const FloatingShape = ({ className = '' }: FloatingShapeProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        prefersReducedMotion
          ? {}
          : {
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }
      }
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    />
  );
};

interface GradientBackgroundProps {
  animate?: boolean;
  className?: string;
}

/**
 * Animated gradient background
 */
export const GradientBackground = ({
  animate = true,
  className = '',
}: GradientBackgroundProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        prefersReducedMotion || !animate
          ? {}
          : {
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
      className={className}
      style={{
        backgroundSize: '200% 200%',
      }}
    />
  );
};
