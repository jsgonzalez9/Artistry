import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FORMSPREE_ENDPOINT, FORM_CONFIG, VALIDATION_PATTERNS } from "../config/forms";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
  productInterest: string;
  installationLocation: string;
  message: string;
  timeline: string;
  howDidYouHear: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  zipCode?: string;
}

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 40px;
  width: 90%;
  max-width: 540px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #505977;
  padding: 4px;
  line-height: 1;

  &:hover {
    color: #22202e;
  }
`;

const ModalHeader = styled.h2`
  font-family: clashDisplay, sans-serif;
  font-size: 28px;
  color: #22202e;
  margin: 0 0 8px 0;
  text-align: center;
`;

const ModalSubheader = styled.p`
  font-family: satoshi, sans-serif;
  font-size: 14px;
  color: #505977;
  margin: 0 0 24px 0;
  text-align: center;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-family: satoshi, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #22202e;
`;

const Input = styled.input`
  font-family: satoshi, sans-serif;
  font-size: 15px;
  padding: 12px 16px;
  border: 1px solid #dcdbe0;
  border-radius: 6px;
  background: #ffffff;
  color: #22202e;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #2a254b;
    box-shadow: 0 0 0 3px rgba(42, 37, 75, 0.1);
  }

  &:disabled {
    background: #f9f9f9;
    color: #726e8d;
  }

  &::placeholder {
    color: #726e8d;
  }
`;

const Textarea = styled.textarea`
  font-family: satoshi, sans-serif;
  font-size: 15px;
  padding: 12px 16px;
  border: 1px solid #dcdbe0;
  border-radius: 6px;
  background: #ffffff;
  color: #22202e;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #2a254b;
    box-shadow: 0 0 0 3px rgba(42, 37, 75, 0.1);
  }

  &::placeholder {
    color: #726e8d;
  }
`;

const Select = styled.select`
  font-family: satoshi, sans-serif;
  font-size: 15px;
  padding: 12px 16px;
  border: 1px solid #dcdbe0;
  border-radius: 6px;
  background: #ffffff;
  color: #22202e;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23505977' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;

  &:focus {
    outline: none;
    border-color: #2a254b;
    box-shadow: 0 0 0 3px rgba(42, 37, 75, 0.1);
  }
`;

const SubmitButton = styled.button<{ $loading?: boolean }>`
  font-family: satoshi, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 32px;
  background: #22202e;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background: #2a254b;
    transform: scale(1.02);
    border-color: #d4af37;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessContainer = styled(motion.div)`
  text-align: center;
  padding: 40px 20px;
`;

const SuccessIcon = styled(motion.div)`
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  background: #4e4d93;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 32px;
`;

const SuccessTitle = styled.h3`
  font-family: clashDisplay, sans-serif;
  font-size: 24px;
  color: #22202e;
  margin: 0 0 12px 0;
`;

const SuccessMessage = styled.p`
  font-family: satoshi, sans-serif;
  font-size: 15px;
  color: #505977;
  margin: 0;
  line-height: 1.6;
`;

const ErrorMessage = styled.p`
  font-family: satoshi, sans-serif;
  font-size: 14px;
  color: #c41e3a;
  margin: 12px 0 0 0;
  line-height: 1.5;
`;

const ContactLink = styled.a`
  color: #2a254b;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
  
  &:hover {
    color: #4e4d93;
  }
`;

const ErrorText = styled.span`
  font-family: satoshi, sans-serif;
  font-size: 12px;
  color: #c41e3a;
`;

const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  productName = "SaunaLife Thermo-Spruce Barrel Sauna",
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    productInterest: productName,
    installationLocation: "",
    message: "",
    timeline: "",
    howDidYouHear: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Update product interest when productName changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, productInterest: productName }));
  }, [productName]);

  // Focus trap and escape key handling
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleTab = (e: KeyboardEvent) => {
      if (!isOpen || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTab);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name - required
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Email - required, format validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!VALIDATION_PATTERNS.email.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone - optional but encouraged, format validation if provided
    if (formData.phone.trim() && !VALIDATION_PATTERNS.phone.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10+ digits)";
    }

    // Zip Code - required for freight calculation
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Zip code is required for freight calculation";
    } else if (!VALIDATION_PATTERNS.zip.test(formData.zipCode)) {
      newErrors.zipCode = "Please enter a valid 5-digit zip code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsError(false);

    try {
      // Submit to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: window.location.href,
        }),
      });

      if (response.ok) {
        // Success: Show confirmation
        console.log("=== QUOTE REQUEST SUBMITTED ===");
        console.log("Lead Data:", JSON.stringify(formData, null, 2));
        console.log("Timestamp:", new Date().toISOString());
        console.log("================================");

        setIsSubmitting(false);
        setIsSuccess(true);

        // Auto-close success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            zipCode: "",
            productInterest: productName,
            installationLocation: "",
            message: "",
            timeline: "",
            howDidYouHear: "",
          });
          onClose();
        }, FORM_CONFIG.successAutoCloseDelay);
      } else {
        // Formspree returned error
        throw new Error(`Formspree error: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setIsError(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors when user starts typing
    if (name === "fullName" || name === "email") {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setIsError(false);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
          role="presentation"
        >
          <ModalContainer
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <CloseButton
              onClick={handleClose}
              type="button"
              aria-label="Close modal"
            >
              ×
            </CloseButton>

            {isSuccess ? (
              <SuccessContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <SuccessIcon
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  ✓
                </SuccessIcon>
                <SuccessTitle>Inquiry Received</SuccessTitle>
                <SuccessMessage>
                  A Lux Haven logistics specialist will contact you with a bespoke quote within 2 hours.
                </SuccessMessage>
              </SuccessContainer>
            ) : isError ? (
              <SuccessContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <SuccessIcon
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  style={{ background: "#c41e3a" }}
                >
                  !
                </SuccessIcon>
                <SuccessTitle>Technical Difficulty</SuccessTitle>
                <ErrorMessage>
                  We encountered an issue submitting your request. Please email us directly at{" "}
                  <ContactLink href="mailto:sales@luxhaveninfra.com">sales@luxhaveninfra.com</ContactLink>
                  {" "}or try again.
                </ErrorMessage>
                <div style={{ display: "flex", gap: "12px", marginTop: "24px", justifyContent: "center" }}>
                  <button
                    onClick={handleSubmit}
                    style={{
                      padding: "12px 24px",
                      background: "#22202e",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontFamily: "satoshi, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Try Again
                  </button>
                  <button
                    onClick={handleClose}
                    style={{
                      padding: "12px 24px",
                      background: "transparent",
                      color: "#505977",
                      border: "1px solid #dcdbe0",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontFamily: "satoshi, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Close
                  </button>
                </div>
              </SuccessContainer>
            ) : (
              <>
                <ModalHeader id="modal-title">
                  Request Your Bespoke Logistics Plan
                </ModalHeader>
                <ModalSubheader>
                  Our team manually calculates freight and white-glove assembly for every project to ensure brand-standard delivery.
                </ModalSubheader>

                <Form onSubmit={handleSubmit} noValidate>
                  <FormGroup>
                    <Label htmlFor="fullName">
                      Full Name <span aria-hidden="true">*</span>
                    </Label>
                    <Input
                      ref={firstInputRef}
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    />
                    {errors.fullName && (
                      <ErrorText id="fullName-error" role="alert">
                        {errors.fullName}
                      </ErrorText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">
                      Email Address <span aria-hidden="true">*</span>
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <ErrorText id="email-error" role="alert">
                        {errors.email}
                      </ErrorText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="phone">
                      Phone Number{" "}
                      <span style={{ color: "#726e8d", fontWeight: "normal" }}>
                        (optional but encouraged)
                      </span>
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <ErrorText id="phone-error" role="alert">
                        {errors.phone}
                      </ErrorText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="zipCode">
                      Zip Code <span aria-hidden="true">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="10001"
                      aria-required="true"
                      aria-invalid={!!errors.zipCode}
                      aria-describedby={errors.zipCode ? "zipCode-error" : undefined}
                      maxLength={10}
                    />
                    {errors.zipCode && (
                      <ErrorText id="zipCode-error" role="alert">
                        {errors.zipCode}
                      </ErrorText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="productInterest">Product Interest</Label>
                    <Select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                    >
                      <option value="">Select a product</option>
                      <option value="SaunaLife Thermo-Spruce Barrel Sauna">SaunaLife Thermo-Spruce Barrel Sauna</option>
                      <option value="Finnmark Designs Sauna">Finnmark Designs Sauna</option>
                      <option value="Cold Plunge">Cold Plunge</option>
                      <option value="Marine Tech / Lithium Power Systems">Marine Tech / Lithium Power Systems</option>
                      <option value="Custom Package">Custom Package</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="installationLocation">Installation Location</Label>
                    <Select
                      id="installationLocation"
                      name="installationLocation"
                      value={formData.installationLocation}
                      onChange={handleChange}
                    >
                      <option value="">Select location</option>
                      <option value="Residential Backyard">Residential Backyard</option>
                      <option value="Indoor Space">Indoor Space</option>
                      <option value="Commercial/Hotel">Commercial/Hotel</option>
                      <option value="Yacht/Marine">Yacht/Marine</option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="timeline">
                      When are you looking to purchase?
                    </Label>
                    <Select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select a timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Just researching">Just researching</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="message">
                      Message or Questions{" "}
                      <span style={{ color: "#726e8d", fontWeight: "normal" }}>
                        (optional)
                      </span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your space, preferences, or any questions..."
                      rows={4}
                    />
                  </FormGroup>

                  <SubmitButton type="submit" $loading={isSubmitting} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Request..." : "Submit Request"}
                  </SubmitButton>
                </Form>
              </>
            )}
          </ModalContainer>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
