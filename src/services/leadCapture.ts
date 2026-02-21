/**
 * Lead Capture & Email Automation Service
 * Lux Haven Infrastructure
 * 
 * This module provides lead capture and email automation functionality.
 * Connect to email service provider (SendGrid, Mailchimp, etc.) to enable automation.
 */

import { FORMSPREE_ENDPOINT } from "../config/forms";

// ============================================================================
// LEAD CAPTURE SERVICE
// ============================================================================

/**
 * Lead data structure for capturing prospect information
 */
export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  zipCode: string;
  productInterest: string;
  budgetRange?: string;
  timeline?: string;
  installationLocation?: string;
  message?: string;
  source: string;
  pageUrl: string;
  timestamp: string;
  status: LeadStatus;
  tags: string[];
}

export type LeadStatus = 
  | "new" 
  | "contacted" 
  | "qualified" 
  | "proposal_sent" 
  | "negotiating" 
  | "closed_won" 
  | "closed_lost";

/**
 * Product catalog for reference
 */
export const PRODUCT_CATALOG = {
  G11: {
    name: "G11 Garden Series",
    price: 14990,
    category: "Outdoor Sauna",
    deliveryTime: "4-6 weeks",
    description: "Traditional Finnish cabin with panoramic glass - 8 person capacity",
  },
  G4: {
    name: "G4 Garden Series",
    price: 9490,
    category: "Outdoor Sauna",
    deliveryTime: "4-6 weeks",
    description: "Modern cube sauna with panoramic glass - 6 person capacity",
  },
  X2: {
    name: "X2 Indoor Xperience",
    price: 4295,
    category: "Indoor Sauna",
    deliveryTime: "2-3 weeks",
    description: "Infrared/Hybrid ready - 2 person capacity",
  },
  X3: {
    name: "X3 Indoor Xperience",
    price: 5395,
    category: "Indoor Sauna",
    deliveryTime: "2-3 weeks",
    description: "Infrared/Hybrid ready - 3 person capacity",
  },
  X6: {
    name: "X6 Indoor Xperience",
    price: 7295,
    category: "Indoor Sauna",
    deliveryTime: "2-3 weeks",
    description: "Infrared/Hybrid ready - 6 person capacity",
  },
  COLD_PLUNGE: {
    name: "Cold Plunge",
    price: 5995,
    category: "Cold Therapy",
    deliveryTime: "2-4 weeks",
    description: "Professional cold plunge with chiller and filtration",
  },
};

/**
 * Email sequence templates
 */
export const EMAIL_SEQUENCES = {
  /**
   * Immediate autoresponse when lead submits form
   */
  autoresponse: (lead: Lead) => ({
    subject: "Your Lux Haven Quote Request - Received",
    body: `
Dear ${lead.fullName},

Thank you for your interest in Lux Haven Infrastructure. We've received your quote request for ${lead.productInterest || "our wellness products"}.

WHAT HAPPENS NEXT:
✓ A logistics specialist is reviewing your requirements
✓ You will receive a custom quote within 2 business hours
✓ We'll coordinate a brief consultation call to discuss delivery and installation

YOUR REQUEST DETAILS:
• Product: ${lead.productInterest || "Not specified"}
• Budget Range: ${lead.budgetRange || "Not specified"}
• Timeline: ${lead.timeline || "Not specified"}
• Delivery ZIP: ${lead.zipCode}

If you have any immediate questions, reply to this email or call us at (718) 724-9873.

Warm regards,
The Lux Haven Team
sales@luxhaveninfra.com
    `.trim(),
  }),

  /**
   * Follow-up email 24 hours after initial request (if no response)
   */
  followUp24h: (lead: Lead) => ({
    subject: "Following up on your Lux Haven quote request",
    body: `
Dear ${lead.fullName},

I wanted to personally follow up on your quote request from yesterday for ${lead.productInterest || "our wellness products"}.

Our logistics team may already be preparing your custom quote, but I wanted to ensure we haven't missed anything.

QUICK QUESTIONS:
1. Do you have any questions about shipping or installation?
2. Would you like to schedule a 15-minute video consultation?
3. Is there a specific delivery timeframe you're working toward?

Simply reply to this email and I'll personally handle your request.

Best regards,
Lux Haven Sales Team
sales@luxhaveninfra.com
(718) 724-9873
    `.trim(),
  }),

  /**
   * Quote follow-up 48 hours after sending quote
   */
  quoteFollowUp: (lead: Lead) => ({
    subject: "Questions about your Lux Haven quote?",
    body: `
Dear ${lead.fullName},

I hope you had a chance to review the quote we sent for ${lead.productInterest || "your project"}.

COMMON QUESTIONS WE CAN HELP WITH:
• Delivery scheduling and white-glove setup
• Electrical requirements and coordination
• Foundation/installation site preparation
• Financing options for projects $10K+

Ready to move forward? Simply reply "LET'S DO IT" and we'll begin coordinating your delivery.

Best regards,
Lux Haven Sales Team
sales@luxhaveninfra.com
(718) 724-9873
    `.trim(),
  }),

  /**
   * Post-purchase onboarding
   */
  postPurchase: (lead: Lead, orderId: string) => ({
    subject: `Welcome to Lux Haven - Order #${orderId} Confirmed`,
    body: `
Dear ${lead.fullName},

Congratulations on your Lux Haven investment! We're thrilled to help bring wellness to your space.

ORDER CONFIRMATION:
Order #: ${orderId}
Product: ${lead.productInterest}
Estimated Delivery: ${PRODUCT_CATALOG[Object.keys(PRODUCT_CATALOG).find(k => lead.productInterest?.includes(k)) || "G11"].deliveryTime}

NEXT STEPS:
1. Logistics coordinator will call within 24 hours to confirm delivery window
2. Site preparation guide will be emailed separately
3. You'll receive tracking information 48 hours before delivery
4. White-glove installation team will handle final setup

QUESTIONS?
Email: sales@luxhaveninfra.com
Phone: (718) 724-9873

Welcome to the Lux Haven family!

The Lux Haven Team
    `.trim(),
  }),
};

// ============================================================================
// LEAD MANAGEMENT FUNCTIONS
// ============================================================================

/**
 * Capture a new lead from form submission
 */
export async function captureLead(
  formData: Partial<Lead>,
  source: string = "website"
): Promise<{ success: boolean; leadId?: string; error?: string }> {
  try {
    const lead: Lead = {
      id: generateLeadId(),
      fullName: formData.fullName || "",
      email: formData.email || "",
      phone: formData.phone,
      zipCode: formData.zipCode || "",
      productInterest: formData.productInterest || "",
      budgetRange: formData.budgetRange,
      timeline: formData.timeline,
      installationLocation: formData.installationLocation,
      message: formData.message,
      source,
      pageUrl: formData.pageUrl || "",
      timestamp: new Date().toISOString(),
      status: "new",
      tags: [],
    };

    // Add product-based tags for segmentation
    lead.tags = generateLeadTags(lead);

    // Save to storage/database (implement based on your backend)
    await saveLeadToStorage(lead);

    // Trigger automation sequence
    await triggerEmailAutomation(lead);

    return { success: true, leadId: lead.id };
  } catch (error) {
    console.error("Lead capture failed:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Generate unique lead ID
 */
function generateLeadId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `LH-${timestamp}-${random}`;
}

/**
 * Generate tags for lead segmentation
 */
function generateLeadTags(lead: Lead): string[] {
  const tags: string[] = [];

  // Product-based tags
  if (lead.productInterest?.includes("G11")) tags.push("g11", "outdoor", "high-ticket");
  if (lead.productInterest?.includes("G4")) tags.push("g4", "outdoor");
  if (lead.productInterest?.includes("X-")) tags.push("x-series", "indoor", "infrared");
  if (lead.productInterest?.includes("Cold")) tags.push("cold-plunge", "cold-therapy");

  // Budget-based tags
  if (lead.budgetRange) {
    if (lead.budgetRange.includes("15,000")) tags.push("luxury-buyer");
    if (lead.budgetRange.includes("10,000")) tags.push("high-ticket");
  }

  // Timeline-based tags
  if (lead.timeline === "ASAP") tags.push("hot-lead", "urgent");
  if (lead.timeline === "Just researching") tags.push("nurture");

  // Source tags
  if (lead.source.includes("contact")) tags.push("contact-page");
  if (lead.source.includes("modal")) tags.push("modal-popup");

  return tags;
}

/**
 * Placeholder for lead storage
 * Implement with your database (Supabase, Firebase, etc.)
 */
async function saveLeadToStorage(lead: Lead): Promise<void> {
  // TODO: Implement with your database
  // Example: await supabase.from('leads').insert(lead)
  
  // For now, log to console for debugging
  console.log("=== LEAD CAPTURED ===");
  console.log(`Lead ID: ${lead.id}`);
  console.log(`Name: ${lead.fullName}`);
  console.log(`Email: ${lead.email}`);
  console.log(`Product: ${lead.productInterest}`);
  console.log(`Budget: ${lead.budgetRange}`);
  console.log(`Tags: ${lead.tags.join(", ")}`);
  console.log("=====================");
}

/**
 * Placeholder for email automation trigger
 * Implement with your email service (SendGrid, Mailchimp, etc.)
 */
async function triggerEmailAutomation(lead: Lead): Promise<void> {
  // TODO: Connect to your email service provider
  // This would typically:
  // 1. Add lead to email list
  // 2. Trigger immediate autoresponse
  // 3. Schedule follow-up sequence
  
  const autoresponse = EMAIL_SEQUENCES.autoresponse(lead);
  
  console.log("=== EMAIL AUTOMATION TRIGGERED ===");
  console.log(`To: ${lead.email}`);
  console.log(`Subject: ${autoresponse.subject}`);
  console.log(`Status: Queued for sending`);
  console.log("==================================");
}

// ============================================================================
// FORM HANDLER HELPERS
// ============================================================================

/**
 * Enhanced form submission handler with lead capture
 */
export async function submitQuoteRequest(
  formData: Record<string, string>,
  options: {
    source: string;
    pageUrl: string;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
  }
): Promise<{ success: boolean; message: string }> {
  try {
    // First, submit to Formspree for immediate notification
    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        source: options.source,
        pageUrl: options.pageUrl,
      }),
    });

    if (!formspreeResponse.ok) {
      throw new Error("Formspree submission failed");
    }

    // Then, capture lead for automation
    const captureResult = await captureLead(formData, options.source);
    
    if (!captureResult.success) {
      console.warn("Lead capture warning:", captureResult.error);
      // Don't fail the user-facing submission if capture fails
    }

    options.onSuccess?.();
    
    return {
      success: true,
      message: "Quote request submitted successfully. Check your email for confirmation.",
    };
  } catch (error) {
    console.error("Form submission error:", error);
    options.onError?.(error);
    
    return {
      success: false,
      message: "There was an issue submitting your request. Please try again or contact us directly.",
    };
  }
}

// ============================================================================
// ANALYTICS & TRACKING
// ============================================================================

/**
 * Track form conversion events
 */
export function trackConversion(
  eventName: string,
  properties: Record<string, any>
): void {
  // TODO: Implement with your analytics (Google Analytics, Mixpanel, etc.)
  console.log(`[Analytics] ${eventName}:`, properties);
  
  // Google Analytics 4 example:
  // if (typeof window !== "undefined" && window.gtag) {
  //   window.gtag("event", eventName, properties);
  // }
}

/**
 * Lead scoring based on engagement
 */
export function calculateLeadScore(lead: Lead): number {
  let score = 0;

  // Budget scoring
  if (lead.budgetRange?.includes("15,000")) score += 25;
  else if (lead.budgetRange?.includes("10,000")) score += 20;
  else if (lead.budgetRange?.includes("7,500")) score += 15;
  else if (lead.budgetRange?.includes("5,000")) score += 10;

  // Timeline scoring
  if (lead.timeline === "ASAP") score += 25;
  else if (lead.timeline === "1-3 months") score += 15;
  else if (lead.timeline === "3-6 months") score += 10;

  // Product interest scoring
  if (lead.productInterest?.includes("G11")) score += 15;
  if (lead.productInterest?.includes("Multiple")) score += 10;

  // Contact info completeness
  if (lead.phone) score += 5;
  if (lead.message && lead.message.length > 50) score += 5;

  return Math.min(score, 100);
}

export default {
  captureLead,
  submitQuoteRequest,
  trackConversion,
  calculateLeadScore,
  EMAIL_SEQUENCES,
  PRODUCT_CATALOG,
};
