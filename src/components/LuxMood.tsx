/**
 * LuxMood Component - Visual Aesthetic Orchestrator
 * Implements the 'Quiet Luxury' design system with glassmorphism
 * and slow-fade transitions as per Antigravity Policy.
 */

import React from 'react';
import Image from 'next/image';
import { globalConfig, getAestheticFilters, ProductInfrastructure } from '../config/infrastructure.config';

interface LuxImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sku?: string; // If provided, applies product-specific filters
}

export const LuxImage: React.FC<LuxImageProps> = ({ 
  src, 
  alt, 
  fill, 
  width, 
  height, 
  className,
  priority,
  sku 
}) => {
  const filters = sku ? getAestheticFilters(sku) : globalConfig.aesthetics.image.filters;
  const { slowFadeTransition } = globalConfig.aesthetics.image;
  
  const filterStyle = {
    filter: `saturate(${filters.saturate}%) contrast(${filters.contrast}%) brightness(${filters.brightness}%) sepia(${filters.sepia}%)`,
    transition: `filter ${slowFadeTransition.duration} ${slowFadeTransition.easing}`,
  };

  const imageProps = fill 
    ? { fill: true, style: { ...filterStyle, objectFit: 'cover' as const } }
    : { width, height, style: filterStyle };

  return (
    <div 
      className={className}
      style={{ 
        position: fill ? 'absolute' : 'relative',
        inset: fill ? 0 : undefined,
        overflow: 'hidden'
      }}
    >
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        priority={priority}
        className="lux-image"
      />
    </div>
  );
};

// Glassmorphism Card Component
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, hover = true }) => {
  const { default: glassmorphism } = globalConfig.aesthetics.glassmorphism;
  const { cards } = globalConfig.aesthetics.components;
  
  const baseStyles: React.CSSProperties = {
    backgroundColor: cards.backgroundColor,
    backdropFilter: glassmorphism.blur > 0 ? `blur(${glassmorphism.blur}px)` : undefined,
    WebkitBackdropFilter: glassmorphism.blur > 0 ? `blur(${glassmorphism.blur}px)` : undefined,
    border: cards.border,
    borderRadius: cards.borderRadius,
    padding: '24px',
    transition: hover ? 'all 0.3s ease' : undefined,
    cursor: hover ? 'pointer' : undefined,
  };

  return (
    <div 
      className={`glass-card ${className || ''}`}
      style={baseStyles}
    >
      {children}
    </div>
  );
};

// Glassmorphism Button
interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  type?: 'button' | 'submit';
}

export const GlassButton: React.FC<GlassButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  fullWidth,
  type = 'button'
}) => {
  const { primary } = globalConfig.aesthetics.components.buttons;
  
  const sizeStyles = {
    sm: { padding: '12px 24px', fontSize: '0.875rem' },
    md: { padding: '16px 32px', fontSize: '1rem' },
    lg: { padding: '18px 48px', fontSize: '1rem' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: primary.backgroundColor,
      color: primary.color,
      border: primary.border,
    },
    secondary: {
      backgroundColor: 'transparent',
      color: primary.backgroundColor,
      border: `1px solid ${primary.backgroundColor}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: primary.backgroundColor,
      border: '1px solid transparent',
    }
  };

  const baseStyles: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    cursor: 'pointer',
    transition: primary.transition,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    width: fullWidth ? '100%' : 'auto',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(-2px)';
    target.style.boxShadow = '0 4px 20px rgba(175, 148, 79, 0.2)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(0)';
    target.style.boxShadow = 'none';
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`glass-button glass-button--${variant} glass-button--${size}`}
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

// Mood wrapper for seasonal/location-based rendering
interface MoodWrapperProps {
  children: React.ReactNode;
  mood?: 'default' | 'winter' | 'summer' | 'evening';
}

export const MoodWrapper: React.FC<MoodWrapperProps> = ({ children, mood = 'default' }) => {
  const moodStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: globalConfig.brand.neutralColor,
    },
    winter: {
      backgroundColor: '#f0f4f8', // Frost White
    },
    summer: {
      backgroundColor: '#fefdf8', // Warm cream
    },
    evening: {
      backgroundColor: '#1a202c', // Deep Slate
    },
  };

  return (
    <div 
      className={`mood-wrapper mood-wrapper--${mood}`}
      style={{
        minHeight: '100vh',
        transition: 'background-color 0.8s ease-out',
        ...moodStyles[mood],
      }}
    >
      {children}
    </div>
  );
};

// Global CSS injection for Lux Mood
export const LuxStyles: React.FC = () => {
  return (
    <style global jsx>{`
      .lux-image {
        transition: filter 0.8s ease-out, transform 0.3s ease;
      }
      
      .lux-image:hover {
        transform: scale(1.02);
      }
      
      .glass-card {
        transition: all 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
      }
      
      .glass-card:hover {
        border-color: rgba(175, 148, 79, 0.15);
        box-shadow: 0 8px 32px rgba(26, 26, 26, 0.08);
      }
      
      .glass-button {
        position: relative;
        overflow: hidden;
      }
      
      .glass-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(175, 148, 79, 0.1),
          transparent
        );
        transition: left 0.5s ease;
      }
      
      .glass-button:hover::before {
        left: 100%;
      }
      
      .mood-wrapper {
        --lux-primary: ${globalConfig.brand.primaryColor};
        --lux-accent: ${globalConfig.brand.accentColor};
        --lux-neutral: ${globalConfig.brand.neutralColor};
      }
    `}</style>
  );
};

export default {
  LuxImage,
  GlassCard,
  GlassButton,
  MoodWrapper,
  LuxStyles,
};
