'use client';

import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { hoverLift, hoverScale } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedCardProps
  extends Omit<HTMLMotionProps<'div'>, 'children' | 'className' | 'variants'> {
  children: ReactNode;
  variant?: Variants;
  index?: number;
  className?: string;
  hoverEffect?: 'scale' | 'lift' | 'none';
}

/**
 * Animated card component with intersection observer support
 */
export const AnimatedCard = ({
  children,
  variant,
  index = 0,
  className = '',
  hoverEffect = 'scale',
  ...props
}: AnimatedCardProps) => {
  const prefersReducedMotion = useReducedMotion();

  const hoverVariant =
    hoverEffect === 'scale'
      ? { whileHover: hoverScale }
      : hoverEffect === 'lift'
        ? { whileHover: hoverLift }
        : {};

  if (prefersReducedMotion) {
    return (
      <motion.div
        className={className}
        initial={false}
        whileInView={undefined}
        whileHover={undefined}
        whileTap={undefined}
        transition={undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variant}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
      className={className}
      {...hoverVariant}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedTextProps
  extends Omit<HTMLMotionProps<'p'>, 'children' | 'className' | 'variants'> {
  children: ReactNode;
  variant?: Variants;
  className?: string;
}

/**
 * Animated paragraph component
 */
export const AnimatedText = ({
  children,
  variant,
  className = '',
  ...props
}: AnimatedTextProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <motion.p
        className={className}
        initial={false}
        whileInView={undefined}
        transition={undefined}
        {...props}
      >
        {children}
      </motion.p>
    );
  }

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      variants={variant}
      viewport={{ once: true, amount: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.p>
  );
};

interface AnimatedButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children' | 'className' | 'onClick'> {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'solid' | 'outline' | 'ghost';
}

/**
 * Animated button component with pulse effect
 */
export const AnimatedButton = ({
  children,
  onClick,
  className = '',
  variant = 'solid',
  ...props
}: AnimatedButtonProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <motion.button
        onClick={onClick}
        className={className}
        initial={false}
        whileInView={undefined}
        whileHover={undefined}
        whileTap={undefined}
        transition={undefined}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};
