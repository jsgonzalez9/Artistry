'use client';

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll Component
 * A Lenis-based smooth scroll provider for a premium, weighted feel.
 * Wraps the entire app layout to provide smooth scrolling throughout.
 *
 * Features:
 * - Smoothness: 0.7 (balanced, not too floaty, not too stiff)
 * - Natural deceleration damping
 * - Touchpad and mouse wheel support
 * - Optimized for performance (no jank)
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to wrap with smooth scroll
 * @param {Object} props.options - Additional Lenis options (optional overrides)
 */
const SmoothScroll = forwardRef(({ children, options = {} }, ref) => {
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  // Expose Lenis instance via ref for external control if needed
  useImperativeHandle(ref, () => ({
    lenis: lenisRef.current,
  }));

  useEffect(() => {
    // Initialize Lenis with premium feel settings
    const lenis = new Lenis({
      // Core smoothing
      duration: 1.2, // Smoothness: 0.6-0.8 equivalent (higher = smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Natural deceleration
      smoothTouch: true, // Enable smooth on touch devices
      
      // Performance
      touchMultiplier: 1, // Normal touch sensitivity
      infinite: false, // Don't loop at end of page
      
      // Advanced
      wheelMultiplier: 1, // Normal wheel sensitivity
      smoothWheel: true, // Smooth mouse wheel
      dragSmooth: false, // Disable drag (default)
      autoRaf: false, // Manual RAF for better control
      syncTouch: false, // Don't sync native touch
      
      ...options, // Allow user overrides
    });

    lenisRef.current = lenis;

    // Animation frame loop for smooth updates
    function animate(time) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(animate);
    }

    rafIdRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenis.destroy();
    };
  }, [options]);

  return <div style={{ height: '100%' }}>{children}</div>;
});

SmoothScroll.displayName = 'SmoothScroll';

export default SmoothScroll;
