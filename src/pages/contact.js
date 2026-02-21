import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "../config/forms";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    productInterest: "",
    timeline: "",
    budgetRange: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "Lux Haven - Quote Request",
          timestamp: new Date().toISOString(),
          source: "Contact Page",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          zipCode: "",
          productInterest: "",
          timeline: "",
          budgetRange: "",
          message: "",
        });
      } else {
        throw new Error(`Formspree error: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setIsError(true);
    }
  };

  return (
    <>
      <Head>
        <title>Request a Quote | Lux Haven Infrastructure</title>
        <meta name="description" content="Request a custom quote for high-end saunas, cold plunges, and wellness infrastructure. White-glove delivery and installation." />
      </Head>

      <div style={{ backgroundColor: "#F9F8F4", minHeight: "100vh" }}>
        <Navbar />

        <main style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "2.5rem",
                color: "#1A1A1A",
                marginBottom: "16px",
              }}
            >
              Request Your Bespoke Quote
            </h1>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.1rem",
                color: "#726E8D",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Our logistics specialists manually calculate freight and white-glove
              assembly for every project. Expect a quote within 2 business hours.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{
                  textAlign: "center",
                  padding: "60px 40px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  border: "1px solid #E5E4E0",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 24px",
                    background: "#4e4d93",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "32px",
                  }}
                >
                  ✓
                </div>
                <h2
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.75rem",
                    color: "#1A1A1A",
                    marginBottom: "12px",
                  }}
                >
                  Inquiry Received
                </h2>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    color: "#726E8D",
                    marginBottom: "24px",
                  }}
                >
                  A Lux Haven logistics specialist will contact you with a bespoke
                  quote within 2 hours.
                </p>
                <Link
                  href="/products/saunas"
                  style={{
                    color: "#AF944F",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Explore more products →
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "48px",
                  borderRadius: "8px",
                  border: "1px solid #E5E4E0",
                }}
              >
                {isError && (
                  <div
                    style={{
                      padding: "16px",
                      backgroundColor: "#FEF2F2",
                      border: "1px solid #FCA5A5",
                      borderRadius: "6px",
                      marginBottom: "24px",
                      color: "#991B1B",
                      fontSize: "0.9rem",
                    }}
                  >
                    We encountered an issue. Please email us directly at{" "}
                    <a
                      href="mailto:sales@luxhaveninfra.com"
                      style={{ color: "#991B1B", textDecoration: "underline" }}
                    >
                      sales@luxhaveninfra.com
                    </a>
                  </div>
                )}

                {/* Name & Email Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      Full Name <span style={{ color: "#C41E3A" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "1px solid #E5E4E0",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      Email Address <span style={{ color: "#C41E3A" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "1px solid #E5E4E0",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Phone & ZIP Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      Phone Number{" "}
                      <span style={{ color: "#726E8D", fontWeight: "normal" }}>
                        (optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "1px solid #E5E4E0",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      Delivery ZIP Code{" "}
                      <span style={{ color: "#C41E3A" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      placeholder="10001"
                      maxLength={10}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "1px solid #E5E4E0",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Product Interest */}
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#1A1A1A",
                      marginBottom: "6px",
                    }}
                  >
                    Product Interest
                  </label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #E5E4E0",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      fontFamily: "Inter, sans-serif",
                      backgroundColor: "#fff",
                      boxSizing: "border-box",
                      cursor: "pointer",
                    }}
                  >
                    <option value="">Select a product</option>
                    <option value="G11 Garden Series - $14,990">
                      G11 Garden Series - $14,990
                    </option>
                    <option value="G4 Garden Series - $9,490">
                      G4 Garden Series - $9,490
                    </option>
                    <option value="X-Series Indoor (X2/X3/X6) - $4,295+">
                      X-Series Indoor (X2/X3/X6) - $4,295+
                    </option>
                    <option value="Cold Plunge - $5,995">
                      Cold Plunge - $5,995
                    </option>
                    <option value="Multiple Products / Custom Package">
                      Multiple Products / Custom Package
                    </option>
                  </select>
                </div>

                {/* Budget Range & Timeline Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      Budget Range <span style={{ color: "#C41E3A" }}>*</span>
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "1px solid #E5E4E0",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        backgroundColor: "#fff",
                        boxSizing: "border-box",
                        cursor: "pointer",
                      }}
                    >
                      <option value="">Select budget</option>
                      <option value="$5,000 - $7,500">$5,000 - $7,500</option>
                      <option value="$7,500 - $10,000">$7,500 - $10,000</option>
                      <option value="$10,000 - $15,000">$10,000 - $15,000</option>
                      <option value="$15,000+">$15,000+</option>
                    </select>
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "1px solid #E5E4E0",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        backgroundColor: "#fff",
                        boxSizing: "border-box",
                        cursor: "pointer",
                      }}
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Just researching">Just researching</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#1A1A1A",
                      marginBottom: "6px",
                    }}
                  >
                    Additional Details{" "}
                    <span style={{ color: "#726E8D", fontWeight: "normal" }}>
                      (optional)
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your space, delivery access, or any special requirements..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #E5E4E0",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      fontFamily: "Inter, sans-serif",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    backgroundColor: isSubmitting ? "#9CA3AF" : "#1A1A1A",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "6px",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    fontFamily: "Inter, sans-serif",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Request Quote"}
                </button>

                <p
                  style={{
                    marginTop: "16px",
                    fontSize: "0.8rem",
                    color: "#726E8D",
                    textAlign: "center",
                  }}
                >
                  ✦ White-glove delivery & installation coordination included
                </p>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Contact Info Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              marginTop: "48px",
            }}
          >
            <div
              style={{
                padding: "24px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                border: "1px solid #E5E4E0",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "12px" }}>📧</div>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#1A1A1A",
                  marginBottom: "8px",
                }}
              >
                Email Us
              </h3>
              <a
                href="mailto:sales@luxhaveninfra.com"
                style={{
                  fontSize: "0.875rem",
                  color: "#726E8D",
                  textDecoration: "none",
                }}
              >
                sales@luxhaveninfra.com
              </a>
            </div>
            <div
              style={{
                padding: "24px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                border: "1px solid #E5E4E0",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "12px" }}>📞</div>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#1A1A1A",
                  marginBottom: "8px",
                }}
              >
                Call Us
              </h3>
              <a
                href="tel:+17187249873"
                style={{
                  fontSize: "0.875rem",
                  color: "#726E8D",
                  textDecoration: "none",
                }}
              >
                (718) 724-9873
              </a>
            </div>
            <div
              style={{
                padding: "24px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                border: "1px solid #E5E4E0",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "12px" }}>⏰</div>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#1A1A1A",
                  marginBottom: "8px",
                }}
              >
                Response Time
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#726E8D" }}>
                Within 2 hours
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
