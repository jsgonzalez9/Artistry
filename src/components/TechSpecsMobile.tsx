import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechSpecsMobileProps {
  specs: {
    label: string;
    value: string | number;
  }[];
  title?: string;
  collapsedCount?: number;
}

/**
 * TechSpecsMobile - Responsive accordion table for mobile devices
 * 
 * Features:
 * - Shows key specs by default (3-4 items)
 * - "View Full Specs" expandable section
 * - Smooth accordion animation
 * - Touch-friendly (44px+ tap targets)
 * - Perfect for 3000lb+ product data
 * 
 * Usage:
 * <TechSpecsMobile
 *   specs={[
 *     { label: "Weight", value: "3,196 lbs" },
 *     { label: "Dimensions", value: "196\" x 47\" x 47\"" },
 *     { label: "Electrical", value: "240V / 40-50A" },
 *     // ... more specs
 *   ]}
 * />
 */
export default function TechSpecsMobile({
  specs,
  title = "Technical Specifications",
  collapsedCount = 4,
}: TechSpecsMobileProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleSpecs = specs.slice(0, collapsedCount);
  const hiddenSpecs = specs.slice(collapsedCount);

  const hasHiddenSpecs = hiddenSpecs.length > 0;

  return (
    <div
      style={{
        background: "var(--lux-bg, #F9F8F4)",
        borderRadius: "4px",
        padding: "20px",
        marginBottom: "24px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "16px" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--lux-text, #1A1A1A)",
            marginBottom: "4px",
          }}
        >
          {title}
        </h3>
        {hasHiddenSpecs && (
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--lux-gray, #726e8d)",
              margin: 0,
            }}
          >
            {isExpanded
              ? `${specs.length} total specifications`
              : `${collapsedCount} of ${specs.length} specifications`}
          </p>
        )}
      </div>

      {/* Visible Specs */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {visibleSpecs.map((spec, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "10px 0",
              borderBottom: "0.5px solid var(--lux-border, #E5E4E0)",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--lux-gray, #726e8d)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                flex: "0 0 120px",
              }}
            >
              {spec.label}
            </span>
            <span
              style={{
                fontSize: "0.9375rem",
                color: "var(--lux-text, #1A1A1A)",
                fontWeight: 500,
                textAlign: "right",
                flex: 1,
              }}
            >
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* Expandable Section */}
      <AnimatePresence>
        {isExpanded && hasHiddenSpecs && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                paddingTop: "12px",
              }}
            >
              {hiddenSpecs.map((spec, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "10px 0",
                    borderBottom: "0.5px solid var(--lux-border, #E5E4E0)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--lux-gray, #726e8d)",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      flex: "0 0 120px",
                    }}
                  >
                    {spec.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--lux-text, #1A1A1A)",
                      fontWeight: 500,
                      textAlign: "right",
                      flex: 1,
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand/Collapse Button */}
      {hasHiddenSpecs && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "16px",
            background: "transparent",
            border: "0.5px solid var(--lux-gold, #AF944F)",
            borderRadius: "2px",
            color: "var(--lux-gold, #AF944F)",
            fontSize: "0.875rem",
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
            cursor: "pointer",
            transition: "all 0.2s ease",
            minHeight: "44px", // Touch-friendly
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--lux-gold, #AF944F)";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--lux-gold, #AF944F)";
          }}
        >
          {isExpanded ? "Hide Specifications" : "View Full Specifications"}
        </button>
      )}
    </div>
  );
}
