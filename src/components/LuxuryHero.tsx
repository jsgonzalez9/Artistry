import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface LuxuryHeroProps {
  videoSrc?: string;
  poster?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  parallaxIntensity?: number;
}

/**
 * LuxuryHero - Cinematic video background with parallax zoom effect
 * 
 * Features:
 * - Self-hosted muted video background
 * - Parallax zoom on scroll (useScroll)
 * - CSS placeholder for no layout shift (CLS = 0)
 * - Lazy loading for performance
 * 
 * Design Tokens:
 * - Background: #F9F8F4 (Champagne Beige)
 * - Text: #1A1A1A (Jet Black)
 * - Accent: #AF944F (Muted Gold)
 */
export default function LuxuryHero({
  videoSrc = "/videos/sauna-steam-loop.mp4",
  poster = "#F9F8F4",
  title,
  subtitle,
  ctaText = "Explore Collection",
  ctaLink = "/products/saunas",
  parallaxIntensity = 0.1,
}: LuxuryHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax zoom effect: scale from 1.0 to 1.1 as user scrolls
  const scale = useTransform(scrollY, [0, 1000], [1, 1 + parallaxIntensity]);
  
  // Subtle opacity fade
  const opacity = useTransform(scrollY, [0, 800], [1, 0.7]);

  return (
    <section
      ref={containerRef}
      className="luxury-hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Video Background with Parallax */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          scale,
          opacity,
          zIndex: 0,
        }}
      >
        {/* CSS Placeholder (prevents CLS) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: poster === "#F9F8F4" ? poster : undefined,
            backgroundImage: poster.startsWith("#") ? undefined : `url(${poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Video Element */}
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            opacity: 0.6,
          }}
        />

        {/* Overlay Gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "#1A1A1A",
          maxWidth: "900px",
          padding: "0 20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            marginBottom: "24px",
            lineHeight: 1.2,
            color: "#1A1A1A",
          }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 400,
            lineHeight: 1.7,
            marginBottom: "40px",
            color: "#3a3a3a",
            letterSpacing: "-0.02em",
          }}
        >
          {subtitle}
        </motion.p>

        {ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href={ctaLink}>
              <button
                style={{
                  padding: "18px 48px",
                  fontSize: "1rem",
                  fontWeight: 500,
                  background: "#1A1A1A",
                  color: "#ffffff",
                  border: "0.5px solid #AF944F",
                  borderRadius: "2px",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.02em",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#AF944F";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#1A1A1A";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {ctaText}
              </button>
            </Link>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "24px",
            height: "40px",
            border: "1px solid #1A1A1A",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              background: "#1A1A1A",
              borderRadius: "2px",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
