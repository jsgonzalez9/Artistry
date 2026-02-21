'use client';

import { motion } from 'framer-motion';

/**
 * StaggerGrid Component
 * A wrapper for product grids with automatic staggered entrance animations.
 * Children will fade in + slide up one-by-one with a stagger delay.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Grid items to animate (must be direct children)
 * @param {number} props.duration - Individual item animation duration in seconds (default: 0.5)
 * @param {number} props.staggerDelay - Delay between each item's animation start (default: 0.1)
 * @param {number} props.yOffset - Y-axis offset for slide animation (default: 20)
 * @param {string} props.className - Additional CSS classes for the container
 * @param {string} props.itemClassName - CSS classes applied to each child wrapper
 */
export default function StaggerGrid({
  children,
  duration = 0.5,
  staggerDelay = 0.1,
  yOffset = 20,
  className = '',
  itemClassName = '',
}) {
  // Container variants with staggerChildren
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  // Item variants for individual animations
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Wrap children in motion.divs if they're not already motion components
  const wrappedChildren = React.Children.map(children, (child, index) => {
    if (!child) return null;
    return (
      <motion.div
        className={itemClassName}
        variants={itemVariants}
        style={{
          willChange: 'transform, opacity',
        }}
      >
        {child}
      </motion.div>
    );
  });

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-100px',
        amount: 0.2,
      }}
    >
      {wrappedChildren}
    </motion.div>
  );
}
