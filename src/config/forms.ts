/**
 * Lux Haven - Form Configuration
 * 
 * Store third-party service endpoints and configuration.
 * Keep sensitive keys in environment variables when possible.
 */

// Formspree endpoint for quote requests
// Setup: Create form at https://formspree.io/
// Form name: "Lux Haven - Quote Request"
// Destination: sales@luxhaveninfra.com
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykddrpn";

// Form configuration
export const FORM_CONFIG = {
  submissionTimeout: 10000, // 10 second timeout
  retryAttempts: 2,
  successAutoCloseDelay: 5000, // Auto-close after 5 seconds
};

// Validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\d\s\-\(\)\+]{10,}$/, // Loose: 10+ digits
  zip: /^\d{5}(-\d{4})?$/, // 5 or 9 digit ZIP
};
