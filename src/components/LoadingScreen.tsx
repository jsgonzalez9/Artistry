import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoad?: () => void;
  timeout?: number;
}

/**
 * LoadingScreen - Minimalist splash screen for initial page load
 * 
 * Features:
 * - Displays while content buffers
 * - Brand Capital LLC logo (minimalist text)
 * - Auto-dismiss when ready
 * - Smooth fade-out transition
 * 
 * Design:
 * - Background: #F9F8F4 (Champagne Beige)
 * - Logo: #1A1A1A (Jet Black)
 * - Accent: #AF944F (Muted Gold)
 */
export default function LoadingScreen({ onLoad, timeout = 2500 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after timeout
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoad) {
        setTimeout(onLoad, 800); // Wait for fade-out
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [onLoad, timeout]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F9F8F4",
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: "center" }}
          >
            {/* Logo Text */}
            <motion.div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 600,
                color: "#1A1A1A",
                marginBottom: "8px",
                letterSpacing: "-0.02em",
              }}
            >
              LUX HAVEN
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                color: "#726e8d",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Infrastructure
            </motion.div>

            {/* Loading Indicator */}
            <motion.div
              style={{
                width: "40px",
                height: "2px",
                background: "#E5E4E0",
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  width: "50%",
                  height: "100%",
                  background: "#AF944F",
                }}
              />
            </motion.div>

            {/* Brand Capital LLC */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6875rem",
                color: "#a0a0a0",
                marginTop: "24px",
                letterSpacing: "0.05em",
              }}
            >
              A Division of Brand Capital LLC
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
