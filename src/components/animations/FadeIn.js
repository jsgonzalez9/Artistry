'use client';

import { motion } from 'framer-motion';

/**
 * FadeIn Component
 * A reusable wrapper for generic fade-in animations on scroll.
 * Wraps any content with a fade-in + slide-up effect when it enters the viewport.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to wrap
 * @param {number} props.duration - Animation duration in seconds (default: 0.5)
 * @param {number} props.yOffset - Y-axis offset for slide animation (default: 20)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.skipWhileInView - Skip whileInView animation (use manual trigger)
 */
export default function FadeIn({
  children,
  duration = 0.5,
  yOffset = 20,
  className = '',
  skipWhileInView = false,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={!skipWhileInView ? { opacity: 1, y: 0 } : undefined}
      viewport={{
        once: true,
        margin: '-50px',
        amount: 0.3,
      }}
      transition={{
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  );
}
