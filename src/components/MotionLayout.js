import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

// Refined Luxury motion curve
const refinedEase = [0.22, 1, 0.36, 1];

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: refinedEase,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
};

// Hero image entrance variant (scales from 1.1 to 1.0 over 2s)
export const heroImageVariants = {
  initial: {
    scale: 1.1,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: refinedEase,
    },
  },
};

// Section scroll animation variant (opacity 0→1, y: 50→0, 1.2s, 20% viewport)
export const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: refinedEase,
    },
  },
};

// Fade transition for product navigation (0.5s fade-to-black)
export const productTransitionVariants = {
  initial: {
    opacity: 0,
    backgroundColor: "#000000",
  },
  animate: {
    opacity: 1,
    backgroundColor: "transparent",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    backgroundColor: "#000000",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export default function MotionLayout({ children }) {
  const router = useRouter();
  const isProductPage = router.pathname.startsWith('/products/');

  // Use fade-to-black for product pages, refined blur for others
  const variants = isProductPage ? productTransitionVariants : pageVariants;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        style={{
          minHeight: "100vh",
          backgroundColor: "#000000",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// AnimatedSection component for scroll-triggered animations
export function AnimatedSection({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.2,
            ease: refinedEase,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// AnimatedHero component for hero image entrance
export function AnimatedHero({ children, className }) {
  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      variants={heroImageVariants}
    >
      {children}
    </motion.div>
  );
}
