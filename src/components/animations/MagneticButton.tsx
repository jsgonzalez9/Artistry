import React, { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  intensity?: number;
  radius?: number;
}

/**
 * MagneticButton - Button that subtly follows cursor on hover
 * 
 * Features:
 * - Magnetic effect within defined radius (default 50px)
 * - Smooth spring physics for natural feel
 * - Returns to center on mouse leave
 * - Works with any button content
 * 
 * Usage:
 * <MagneticButton intensity={0.5} radius={50}>
 *   <button>Request a Quote</button>
 * </MagneticButton>
 */
export default function MagneticButton({
  children,
  onClick,
  className = "",
  intensity = 0.4,
  radius = 50,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for natural feel
  const springX = useSpring(x, {
    stiffness: 200,
    damping: 25,
    mass: 0.6,
  });

  const springY = useSpring(y, {
    stiffness: 200,
    damping: 25,
    mass: 0.6,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from cursor to center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Check if cursor is within magnetic radius
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < radius) {
      // Apply magnetic pull (scaled by intensity)
      x.set(distanceX * intensity);
      y.set(distanceY * intensity);
    } else {
      // Return to center
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        cursor: "pointer",
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
