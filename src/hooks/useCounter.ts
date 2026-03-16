'use client';

import { useEffect, useRef, useState } from 'react';

interface UseCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Hook for animating number counters
 * Uses requestAnimationFrame for smooth performance
 */
export const useCounter = ({
  end,
  duration = 2.5,
  start = 0,
  prefix = '',
  suffix = '',
}: UseCounterOptions) => {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function: easeOut
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(start + (end - start) * easeProgress);

      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, start]);

  return `${prefix}${count}${suffix}`;
};
