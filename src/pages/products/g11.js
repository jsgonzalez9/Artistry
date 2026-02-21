import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/pages/components/Navbar";
import QuoteModal from "@/pages/components/QuoteModal";

export default function G11Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // G11 Local Assets from /img/g11/
  const productImages = [
    {
      url: "/img/g11/Gemini_Generated_Image_bn6jflbn6jflbn6j.png",
      alt: "SaunaLife G11 - Architectural Exterior",
      mood: "Refined"
    },
    {
      url: "/img/g11/Gemini_Generated_Image_qhcnl3qhcnl3qhcn.png",
      alt: "SaunaLife G11 - Premium Home Installation",
      mood: "Refined"
    },
    {
      url: "/img/g11/Gemini_Generated_Image_xz2b1lxz2b1lxz2b.png",
      alt: "SaunaLife G11 - Garden Setting",
      mood: "Refined"
    },
    {
      url: "/img/g11/Model-G11-Sauna-Interior-1-scaled.jpg",
      alt: "SaunaLife G11 - Interior Sauna Room & Benches",
      mood: "Nordic"
    }
  ];

  // Refined specifications per policy
  const productSpecs = {
    name: "SaunaLife G11",
    series: "Garden-Series",
    tagline: "Seamless Infrastructure Project\nManaged installation—not DIY. Your 8-person wellness asset delivered, commissioned, and ready to steam.",
    price: "$14,990.00",
    msrp: "$15,600.00",
    financing: "$481/mo via Affirm",
    capacity: "8 Bathers",
    thermalMass: "3,196 lbs",
    weight: "3,196 lbs",
    shippingDimensions: '196" × 47" × 47"',
    cladding: "Thermally-Modified Spruce",
    interior: "Thermo-Aspen",
    glazing: "Tempered Bronze Safety Glass",
    heater: "Harvia Cilindro 9kW",
    heaterModel: "Harvia 8kW Electric",
    warranty: "25+ Year Structural",
    origin: "Northern Europe",
    reliability: {
      status: "Verified",
      lastAudit: "2026-02-21"
    },
    urgency: {
      slotsRemaining: 2,
      quarter: "Q2 2026",
      region: "Northeast"
    }
  };

  // Refined mood filters per policy
  const refinedStyle = {
    filter: 'saturate(0.9) contrast(1.15) brightness(0.98)',
    overlay: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)'
  };

  // The Three Pillars of SaunaLife - Copywriting for Emotional Connection
  const sensoryExperience = {
    title: "The Sensory Experience",
    description: "Step into a world where time slows and the senses awaken. The rich, honeyed aroma of Nordic Thermo-Spruce fills the air as golden light filters through the full-view glass door, casting warm patterns across the smooth Thermo-Aspen interior. With 22 inches of dense insulation, the silence is absolute—a sanctuary where only the crackle of cedar chips on hot stones and your own breath break the stillness. This isn't just a sauna; it's a daily meditation practice carved from Scandinavian wisdom."
  };

  const engineeringStory = {
    title: "The Engineering Story",
    description: "Every barrel curve, every joinery joint, every bolt is engineered for 25+ years of service in extreme weather. The G11 features precision-milled Nordic spruce thermally treated at 212°C—removing sugars and resins that attract rot, insects, and decay. Stainless steel hardware resists corrosion, while the 8-person capacity and 3,196 lbs of thermal mass retain heat efficiently, reducing energy consumption. This is architecture grade wellness: built to outlive trends, spanning generations of family wellness rituals."
  };

  const outcome = {
    title: "The Outcome",
    description: "Imagine stepping out, skin glowing, mind cleared, carrying that post-sauna glow into your evening. The G11 becomes your home's permanent wellness centerpiece—a sculptural presence in your garden that doubles as conversation starter and daily ritual. It's not just about the heat; it's about the transformation: deeper sleep, reduced stress, improved circulation, and the profound peace that comes from knowing you've built something enduring for your well-being and your family's. This is infrastructure for the soul."
  };

  return (
    <>
      <Head>
        <title>G11 Garden Series | Lux Haven Infrastructure</title>
        <meta name="description" content="SaunaLife G11 Garden Series - 8-Person Sanctuary. Nordic barrel architecture in Thermo-Spruce. Tempered Bronze Safety Glass. 25+ year structural warranty." />
      </Head>

      <div style={{ backgroundColor: '#0A0A0A', color: '#E5E5E5', minHeight: '100vh' }}>
        <Navbar />

        {/* Hero Banner Image */}
        <div style={{ 
          position: 'relative',
          width: '100%',
          height: '50vh',
          minHeight: '400px',
          maxHeight: '600px',
          overflow: 'hidden'
        }}>
          <Image
            src="/images/products/g11-main.jpg"
            alt="SaunaLife G11Garden Series - Premium Barrel Sauna"
            fill
            style={{ 
              objectFit: 'cover',
              filter: 'saturate(0.85) contrast(1.1) brightness(0.95)'
            }}
            priority
          />
          {/* Dark Gradient Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10,10,10,0.3)0%, rgba(10,10,10,0.7) 100%)'
          }} />
          {/* Hero Text Overlay */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            right: '40px'
          }}>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C5A059',
              marginBottom: '8px',
              display: 'block'
            }}>
              {productSpecs.series} • {productSpecs.origin}
            </span>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              color: '#F5F5F5',
              margin: 0,
              lineHeight: 1.1
            }}>
              {productSpecs.name}
            </h1>
          </div>
        </div>

        <main style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Urgency Banner */}
          <div style={{
            marginBottom: '24px',
            padding: '16px 24px',
            backgroundColor: 'rgba(197, 160, 89, 0.15)',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ fontSize: '1.25rem' }}>⚡</span>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              color: '#F5F5F5',
              fontWeight: 500
            }}>
              <strong>{productSpecs.urgency.quarter} Production:</strong> Only {productSpecs.urgency.slotsRemaining} slots remaining for {productSpecs.urgency.region} delivery • Lock in current pricing
            </span>
          </div>

          {/* Breadcrumb */}
          <div style={{ marginBottom: '24px', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
            <Link href="/" style={{ color: '#A0A0A0', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#A0A0A0' }}>/</span>
            <Link href="/products/saunas" style={{ color: '#A0A0A0', textDecoration: 'none' }}>Saunas</Link>
            <span style={{ margin: '0 8px', color: '#A0A0A0' }}>/</span>
            <span style={{ color: '#F5F5F5' }}>G11 Garden Series</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Image Gallery */}
            <div>
              {/* Main Image with Refined Overlay */}
              <div style={{ 
                position: 'relative', 
                height: '600px', 
                backgroundColor: '#F5F5F3', 
                borderRadius: '2px',
                overflow: 'hidden',
                marginBottom: '16px'
              }}>
                <Image
                  src={productImages[selectedImage].url}
                  alt={productImages[selectedImage].alt}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    filter: refinedStyle.filter,
                    transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                  priority
                />
                {/* Refined Mood Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: refinedStyle.overlay,
                  pointerEvents: 'none'
                }} />
                {/* Verified Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  color: '#C5A059',
                  padding: '8px 16px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(10px)'
                }}>
                  ✓ Verified Asset
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    style={{
                      position: 'relative',
                      height: '100px',
                      backgroundColor: '#F5F5F3',
                      border: selectedImage === idx ? '2px solid #C5A059' : '1px solid rgba(10, 10, 10, 0.04)',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      padding: 0,
                      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      style={{ 
                        objectFit: 'cover',
                        filter: refinedStyle.filter
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)'
                    }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              {/* Series Badge */}
              <div style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '0.75rem', 
                color: '#C5A059',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                Garden-Series • {productSpecs.origin}
              </div>

              <h1 style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '2.5rem', 
                color: '#F5F5F5',
                marginBottom: '8px',
                fontWeight: 400
              }}>
                {productSpecs.name}
              </h1>

              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '1.125rem', 
                color: '#C5C5C5',
                marginBottom: '24px',
                lineHeight: 1.6
              }}>
                {productSpecs.tagline}
              </p>

              {/* Price with Financing - Hero Callout */}
              <div style={{ marginBottom: '32px' }}>
                {/* Hero Financing Display */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'baseline', 
                  gap: '12px', 
                  marginBottom: '16px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: '3rem', 
                    color: '#F5F5F5',
                    lineHeight: 1
                  }}>
                    $481<span style={{ fontSize: '1.5rem' }}>/mo</span>
                  </span>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.25rem',
                    color: '#C5A059',
                    fontWeight: 600
                  }}>
                    via Affirm
                  </span>
                </div>
                
                {/* Price Comparison */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '16px' 
                }}>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    color: '#A0A0A0'
                  }}>
                    or $14,990 one-time
                  </span>
                  {productSpecs.msrp && (
                    <span style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.85rem',
                      color: '#726E8D',
                      textDecoration: 'line-through',
                    }}>
                      MSRP {productSpecs.msrp}
                    </span>
                  )}
                </div>
                
                {/* Value Comparison */}
                <div style={{
                  padding: '16px 20px',
                  backgroundColor: 'rgba(197, 160, 89, 0.1)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  borderRadius: '4px',
                  marginBottom: '20px'
                }}>
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem', 
                    color: '#F5F5F5',
                    margin: 0,
                    lineHeight: 1.6
                  }}>
                    <span style={{ color: '#C5A059', fontWeight: 600 }}>Pay less than your monthly gym membership.</span>
                    <span style={{ color: '#A0A0A0' }}> Use daily, own for decades, skip the waitlists.</span>
                  </p>
                </div>
                
                {/* Trust Indicators */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  flexWrap: 'wrap',
                  marginBottom: '24px'
                }}>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    color: '#C5A059',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    ✓ 0% APR for 36 months
                  </span>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    color: '#A0A0A0'
                  }}>
                    Prequalify in 60 seconds →
                  </span>
                </div>
              </div>

              {/* Specs Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '20px',
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: '#1A1A1A',
                borderRadius: '2px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#A0A0A0', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Capacity</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.capacity}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#A0A0A0', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Thermal Mass</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.thermalMass}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#A0A0A0', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Cladding</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.cladding}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#A0A0A0', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Glazing</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.glazing}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#A0A0A0', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Heater</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.heater}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#A0A0A0', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Warranty</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.warranty}</div>
                </div>
              </div>

              {/* The Sensory Experience */}
              <div style={{ 
                marginBottom: '40px', 
                padding: '40px', 
                backgroundColor: '#1A1A1A', 
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#F5F5F5', marginBottom: '16px' }}>
                  {sensoryExperience.title}
                </div>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '1.0625rem', 
                  color: '#E0E0E0',
                  lineHeight: 1.8,
                  marginBottom: 0
                }}>
                  {sensoryExperience.description}
                </p>
              </div>

              {/* The Engineering Story */}
              <div style={{ 
                marginBottom: '40px', 
                padding: '40px', 
                backgroundColor: '#1A1A1A', 
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTop: 'none',
                marginTop: '-1px'
              }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#F5F5F5', marginBottom: '16px' }}>
                  {engineeringStory.title}
                </div>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '1.0625rem', 
                  color: '#E0E0E0',
                  lineHeight: 1.8,
                  marginBottom: 0
                }}>
                  {engineeringStory.description}
                </p>
              </div>

              {/* The Outcome */}
              <div style={{ 
                marginBottom: '40px', 
                padding: '40px', 
                backgroundColor: '#1A1A1A', 
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTop: 'none',
                marginTop: '-1px'
              }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#F5F5F5', marginBottom: '16px' }}>
                  {outcome.title}
                </div>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '1.0625rem', 
                  color: '#E0E0E0',
                  lineHeight: 1.8,
                  marginBottom: 0
                }}>
                  {outcome.description}
                </p>
              </div>

              {/* Trust Indicators */}
              <div style={{
                padding: '20px',
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                marginBottom: '24px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F5F5F5' }}>
                    <span>✓</span>
                    <span><strong>Structural Integrity:</strong> {productSpecs.thermalMass} Thermal Mass</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F5F5F5' }}>
                    <span>✓</span>
                    <span><strong>Warranty:</strong> {productSpecs.warranty} Protection</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F5F5F5' }}>
                    <span>✓</span>
                    <span><strong>Verified:</strong> Nordic Origin • {productSpecs.reliability.lastAudit}</span>
                  </div>
                </div>
              </div>

              {/* Logistics Note */}
              <div style={{
                padding: '16px 20px',
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ fontSize: '1rem' }}>🚛</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#A0A0A0' }}>
                  <strong style={{ color: '#F5F5F5' }}>Logistics:</strong> Standard delivery 14-21 days • White-glove installation included • Foundation prep guide provided
                </span>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    flex: 1,
                    padding: '18px 32px',
                    backgroundColor: '#0A0A0A',
                    color: '#F5F5F7',
                    border: '1px solid #C5A059',
                    borderRadius: '2px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    letterSpacing: '0.05em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(197, 160, 89, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Schedule Site Assessment →
                </button>
                
                <Link href="/white-glove" style={{ flex: 1 }}>
                  <button style={{
                    width: '100%',
                    padding: '18px 32px',
                    backgroundColor: 'transparent',
                    color: '#0A0A0A',
                    border: '1px solid rgba(10, 10, 10, 0.2)',
                    borderRadius: '2px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    letterSpacing: '0.05em'
                  }}>
                    Delivery Process
                  </button>
                </Link>
              </div>

              {/* Financing Note */}
              <p style={{ 
                marginTop: '16px', 
                fontSize: '0.875rem', 
                color: '#726E8D',
                fontFamily: 'Inter, sans-serif'
              }}>
                Financing available. Starting at $481/mo for 36 months.
              </p>
            </div>
          </div>
        </main>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product="G11 Garden Series" />
    </>
  );
}
