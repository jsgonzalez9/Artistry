import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/pages/components/Navbar";
import QuoteModal from "@/pages/components/QuoteModal";

export default function ColdPlungeProduct() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productImages = [
    {
      url: "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?w=800&auto=format&fit=crop",
      alt: "Slate Immersion - Front View",
      fallback: "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?w=800",
    },
    {
      url: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&auto=format&fit=crop",
      alt: "Slate Immersion - Side Profile",
      fallback: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800",
    },
    {
      url: "https://images.unsplash.com/photo-1615469066660-f597f4e1991a?w=800&auto=format&fit=crop",
      alt: "Slate Immersion - Interior View",
      fallback: "https://images.unsplash.com/photo-1615469066660-f597f4e1991a?w=800",
    },
    {
      url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop",
      alt: "Slate Immersion - Complete Setup",
      fallback: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
    },
  ];

  const productSpecs = {
    name: "Professional Cold Plunge",
    tagline: "Therapeutic Cold Therapy with Advanced Filtration",
    price: "$5,995.00",
    capacity: "1 Person",
    weight: "350 lbs (empty) / 1,200 lbs (filled)",
    dimensions: '67" L × 33" W × 32" H',
    material: "Marine-Grade Stainless Steel",
    temperature: "37°F - 60°F (adjustable)",
    warranty: "3 Year Limited",
  };

  return (
    <>
      <Head>
        <title>Cold Plunge | Lux Haven Infrastructure</title>
        <meta
          name="description"
          content="Professional Cold Plunge with advanced chiller and filtration system. Therapeutic cold therapy at home. 37°F-60°F temperature range, UV sanitation, white-glove delivery."
        />
      </Head>

      <div style={{ backgroundColor: "#F9F8F4", minHeight: "100vh" }}>
        <Navbar />

        <main
          style={{
            padding: "40px 20px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              marginBottom: "24px",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
            }}
          >
            <Link
              href="/"
              style={{ color: "#726E8D", textDecoration: "none" }}
            >
              Home
            </Link>
            <span style={{ margin: "0 8px", color: "#726E8D" }}>/</span>
            <span style={{ color: "#1A1A1A" }}>Cold Plunge</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "start",
            }}
          >
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div
                style={{
                  position: "relative",
                  height: "600px",
                  backgroundColor: "#F5F5F3",
                  borderRadius: "4px",
                  overflow: "hidden",
                  marginBottom: "16px",
                }}
              >
                <Image
                  src={productImages[selectedImage].url}
                  alt={productImages[selectedImage].alt}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  onError={(e) => {
                    e.target.src = productImages[selectedImage].fallback;
                  }}
                />
              </div>

              {/* Thumbnail Gallery */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "12px",
                }}
              >
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    style={{
                      position: "relative",
                      height: "100px",
                      backgroundColor: "#F5F5F3",
                      border:
                        selectedImage === idx
                          ? "2px solid #AF944F"
                          : "1px solid #E5E4E0",
                      borderRadius: "4px",
                      cursor: "pointer",
                      overflow: "hidden",
                      padding: 0,
                    }}
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      onError={(e) => {
                        e.target.src = img.fallback;
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  color: "#AF944F",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                Cold Therapy System
              </span>

              <h1
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "2.5rem",
                  color: "#1A1A1A",
                  margin: "12px 0 8px",
                }}
              >
                {productSpecs.name}
              </h1>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.1rem",
                  color: "#555",
                  marginBottom: "24px",
                }}
              >
                {productSpecs.tagline}
              </p>

              <div
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: "2rem",
                  color: "#1A1A1A",
                  marginBottom: "32px",
                }}
              >
                {productSpecs.price}
              </div>

              {/* Key Specs */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginBottom: "32px",
                  padding: "24px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E4E0",
                  borderRadius: "4px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "#726E8D",
                      marginBottom: "4px",
                    }}
                  >
                    Temperature Range
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#1A1A1A",
                    }}
                  >
                    {productSpecs.temperature}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "#726E8D",
                      marginBottom: "4px",
                    }}
                  >
                    Weight (Filled)
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#1A1A1A",
                    }}
                  >
                    {productSpecs.weight}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "#726E8D",
                      marginBottom: "4px",
                    }}
                  >
                    Material
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#1A1A1A",
                    }}
                  >
                    {productSpecs.material}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "#726E8D",
                      marginBottom: "4px",
                    }}
                  >
                    Dimensions
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#1A1A1A",
                    }}
                  >
                    {productSpecs.dimensions}
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div
                style={{
                  padding: "16px",
                  backgroundColor: "#F5F5F3",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "#726E8D",
                    marginBottom: "4px",
                  }}
                >
                  Included Features
                </div>
                <ul
                  style={{
                    fontSize: "0.9rem",
                    color: "#1A1A1A",
                    marginTop: "12px",
                    paddingLeft: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>Advanced chiller system (1/4 HP)</li>
                  <li>UV-C sanitation system</li>
                  <li>20-micron filtration</li>
                  <li>Insulated cover included</li>
                  <li>Digital temperature control</li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <button
                onClick={() => setIsModalOpen(true)}
                style={{
                  width: "100%",
                  padding: "18px 32px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  backgroundColor: "#1A1A1A",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "2px",
                  cursor: "pointer",
                  marginBottom: "12px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Request a Quote
              </button>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    backgroundColor: "transparent",
                    color: "#1A1A1A",
                    border: "1px solid #E5E4E0",
                    borderRadius: "2px",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Schedule Consultation
                </button>
              </Link>

              <p
                style={{
                  marginTop: "16px",
                  fontSize: "0.8125rem",
                  color: "#726E8D",
                  textAlign: "center",
                }}
              >
                ✦ White-glove delivery & installation coordination included
              </p>
            </div>
          </div>

          {/* Product Description */}
          <div
            style={{
              marginTop: "80px",
              padding: "60px",
              backgroundColor: "#FFFFFF",
              borderRadius: "4px",
              border: "1px solid #E5E4E0",
            }}
          >
            <h2
              style={{
                fontFamily: "Playfair Display",
                fontSize: "2rem",
                marginBottom: "24px",
                color: "#1A1A1A",
              }}
            >
              Professional-Grade Cold Therapy
            </h2>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#555",
                maxWidth: "800px",
              }}
            >
              Experience the transformative benefits of cold water immersion with our
              Professional Cold Plunge system. Designed for both athletic recovery
              and wellness enthusiasts, this complete cold therapy solution delivers
              consistent 37°F-60°F temperatures with industrial-grade reliability.
              The marine-grade stainless steel construction ensures longevity,
              while the integrated UV-C sanitation and 20-micron filtration keep
              your water crystal clear.
            </p>

            <div
              style={{
                marginTop: "40px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "32px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "Inter",
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  Advanced Chiller System
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#726E8D",
                    lineHeight: "1.6",
                  }}
                >
                  Commercial-grade 1/4 HP chiller maintains your desired temperature
                  range consistently, even in warm climates. Energy-efficient
                  operation designed for 24/7 use.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "Inter",
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  UV-C Sanitation
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#726E8D",
                    lineHeight: "1.6",
                  }}
                >
                  Integrated UV-C system destroys bacteria, viruses, and algae
                  without harsh chemicals. Pair with 20-micron filtration for
                  crystal-clear water quality.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "Inter",
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  All-Weather Design
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#726E8D",
                    lineHeight: "1.6",
                  }}
                >
                  Marine-grade stainless steel construction with insulated panels
                  suitable for indoor or outdoor installation. Includes insulated
                  cover to maintain temperature and reduce energy costs.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specs */}
          <div
            style={{
              marginTop: "40px",
              padding: "40px 60px",
              backgroundColor: "#F5F5F3",
              borderRadius: "4px",
            }}
          >
            <h3
              style={{
                fontFamily: "Inter",
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "24px",
                color: "#1A1A1A",
              }}
            >
              Technical Specifications
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              {[
                { label: "Capacity", value: "85 gallons" },
                { label: "Cooling Power", value: "1/4 HP Commercial Chiller" },
                { label: "Temperature Range", value: "37°F - 60°F" },
                { label: "Electrical", value: "110V / 15A dedicated circuit" },
                { label: "Filtration", value: "20-micron cartridge filter" },
                { label: "Sanitation", value: "UV-C ultraviolet system" },
                { label: "Construction", value: "Marine-grade 304 stainless steel" },
                { label: "Insulation", value: "High-density spray foam" },
              ].map((spec) => (
                <div
                  key={spec.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderBottom: "1px solid #E5E4E0",
                  }}
                >
                  <span style={{ color: "#726E8D" }}>{spec.label}</span>
                  <span style={{ fontWeight: "500", color: "#1A1A1A" }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Quote Modal */}
        <QuoteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productName="Professional Cold Plunge"
        />
      </div>
    </>
  );
}
