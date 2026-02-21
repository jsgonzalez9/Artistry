import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface ImageMaskProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  delay?: number;
  duration?: number;
}

/**
 * ImageMask - Clip-path "unfold" animation on scroll
 * 
 * Features:
 * - Clip-path inset animation (vertical or horizontal reveal)
 * - Triggers when image enters viewport
 * - Smooth cubic bezier easing for premium feel
 * - Uses next/image for optimization
 * 
 * Usage:
 * <ImageMask
 *   src="/img/sauna-hero.jpg"
 *   alt="Luxury sauna installation"
 *   width={800}
 *   height={600}
 * />
 */
export default function ImageMask({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  delay = 0,
  duration = 0.8,
}: ImageMaskProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ clipPath: "inset(50% 0 50% 0)" }}
        animate={isInView ? { clipPath: "inset(0% 0 0% 0)" } : {}}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Custom cubic bezier (smooth, luxurious)
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
          />
        )}
      </motion.div>
    </div>
  );
}
