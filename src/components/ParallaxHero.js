import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export const ParallaxHero = ({ src, alt, children, overlay = true }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax movement - image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Subtle opacity fade as user scrolls away
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  
  // Scale effect - subtle zoom out
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[85vh] w-full overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Parallax Image Layer */}
      <motion.div
        style={{ 
          y, 
          opacity, 
          scale,
          position: 'absolute',
          inset: 0,
          height: '120%',
          width: '100%'
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          style={{ 
            objectFit: 'cover',
            filter: 'brightness(0.85) contrast(1.05) saturate(0.9)',
          }}
        />
      </motion.div>

      {/* Vignette Overlay */}
      {overlay && (
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.9) 100%)',
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Content Layer */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

// Simpler variant for product pages
export const ParallaxSection = ({ children, className, speed = 0.2 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div 
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxHero;
