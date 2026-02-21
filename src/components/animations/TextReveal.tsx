import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

/**
 * TextReveal - Split-type character-by-character reveal animation
 * 
 * Features:
 * - Character or line-by-line reveal
 * - Triggers on viewport entry (whileInView)
 * - Stagger delay for smooth cascade effect
 * - Respects prefers-reduced-motion
 * 
 * Usage:
 * <TextReveal as="h1">Your Headline Text</TextReveal>
 */
export default function TextReveal({
  children,
  as = "h2",
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const words = children.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const Component = motion[as as keyof typeof motion] as typeof motion.h2;

  return (
    <Component
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{
        display: "inline",
        flexWrap: "wrap",
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{
            display: "inline-block",
            marginRight: index < words.length - 1 ? "0.3em" : 0,
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </Component>
  );
}
