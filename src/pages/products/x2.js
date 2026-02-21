import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/pages/components/Navbar";
import QuoteModal from "@/pages/components/QuoteModal";

export default function X2Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Verified from Nordica Sauna (Authorized Dealer) - X2 Twilight
  const productImages = [
    {
      url: "https://nordicasauna.com/cdn/shop/files/SaunaLife-X2-Front_2048x.jpg?v=1755196338",
      alt: "SaunaLife X2 - Architectural Front View",
      mood: "Twilight"
    },
    {
      url: "https://nordicasauna.com/cdn/shop/files/2-X2-500x500_2048x.jpg?v=1755196338",
      alt: "SaunaLife X2 - Side Angle",
      mood: "Twilight"
    },
    {
      url: "https://nordicasauna.com/cdn/shop/files/SaunaLifeX2Interior_2048x.jpg?v=1734450768",
      alt: "SaunaLife X2 - X-Mood LED System",
      mood: "Twilight"
    },
    {
      url: "https://nordicasauna.com/cdn/shop/files/SaunaLife-X2-Floor-Plan_2048x.jpg?v=1734450769",
      alt: "SaunaLife X2 - Floor Plan",
      mood: "Twilight"
    }
  ];

  // Twilight specifications per policy
  const productSpecs = {
    name: "SaunaLife X2",
    series: "X-Series",
    model: "Model X2 Xperience", 
    tagline: "Architectural Infrared. 2-Person sanctuary for any room.",
    price: "$4,295.00",
    capacity: "2-3 Person",
    thermalMass: "840 lbs",
    weight: "840 lbs",
    dimensions: '55" W × 48" D × 81" H',
    cladding: "Thermo-Spruce",
    interior: "Knot-Free Aspen",
    glazing: "Full-Front Panoramic Glass",
    electrical: "Standard 120V Plug-and-Play",
    heater: "Carbon-Nano Infrared Panels",
    lighting: "X-Mood LED System",
    warranty: "25+ Year Structural",
    origin: "Architectural Indoor/Outdoor",
    assemblyTime: "4-6 hours DIY",
    reliability: {
      status: "Verified",
      lastAudit: "2026-02-21"
    }
  };

  // Twilight mood filters per policy
  const twilightStyle = {
    filter: 'saturate(1.1) contrast(1.2) brightness(0.95)',
    overlay: 'linear-gradient(225deg, rgba(20,20,30,0.2) 0%, rgba(0,0,0,0.7) 100%)',
    colorTemp: 'Warm'
  };

  return (
    <>
      <Head>
        <title>X2 Indoor Xperience | Lux Haven Infrastructure</title>
        <meta name="description" content="SaunaLife X2 Indoor Xperience - 2-3 Person architectural infrared sauna. Knot-Free Aspen, Full-Front Panoramic Glass, X-Mood lighting. 25+ year structural warranty." />
      </Head>

      <div style={{ backgroundColor: '#141418', minHeight: '100vh' }}>
        <Navbar />

        <main style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: '24px', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
            <Link href="/" style={{ color: '#726E8D', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#726E8D' }}>/</span>
            <Link href="/products/infrared" style={{ color: '#726E8D', textDecoration: 'none' }}>Infrared</Link>
            <span style={{ margin: '0 8px', color: '#726E8D' }}>/</span>
            <span style={{ color: '#F5F5F7' }}>X2 Indoor Xperience</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Image Gallery */}
            <div>
              {/* Main Image with Twilight Overlay */}
              <div style={{ 
                position: 'relative', 
                height: '600px', 
                backgroundColor: '#0A0A0A', 
                borderRadius: '2px',
                overflow: 'hidden',
                marginBottom: '16px',
                boxShadow: '0 0 80px rgba(197, 160, 89, 0.15)'
              }}>
                <Image
                  src={productImages[selectedImage].url}
                  alt={productImages[selectedImage].alt}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    filter: twilightStyle.filter,
                    transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                  priority
                />
                {/* Twilight Mood Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: twilightStyle.overlay,
                  pointerEvents: 'none'
                }} />
                {/* Twilight Mood Indicator */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(197, 160, 89, 0.15)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  color: '#C5A059',
                  padding: '8px 16px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '2px'
                }}>
                  ✓ Verified • Twilight
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    style={{
                      position: 'relative',
                      height: '120px',
                      backgroundColor: '#0A0A0A',
                      border: selectedImage === idx ? '2px solid #C5A059' : '1px solid rgba(197, 160, 89, 0.1)',
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
                        filter: twilightStyle.filter
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(225deg, rgba(20,20,30,0.2) 0%, rgba(0,0,0,0.7) 100%)'
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
                X-Series • {productSpecs.origin}
              </div>

              <h1 style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '2.5rem', 
                color: '#F5F5F7',
                marginBottom: '8px',
                fontWeight: 400
              }}>
                {productSpecs.name}
              </h1>

              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '1.125rem', 
                color: '#A0A0A0',
                marginBottom: '24px',
                lineHeight: 1.6
              }}>
                {productSpecs.tagline}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '32px' }}>
                <span style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '2rem', 
                  color: '#C5A059'
                }}>
                  {productSpecs.price}
                </span>
              </div>

              {/* Hybird Badge */}
              <div style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: 'rgba(197, 160, 89, 0.1)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                borderRadius: '2px',
                marginBottom: '24px'
              }}>
                <span style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '0.875rem', 
                  color: '#C5A059',
                  fontWeight: 500
                }}>
                  🔥 Hybrid Upgrade Available
                </span>
              </div>

              {/* Specs Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '20px',
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(10, 10, 10, 0.5)',
                borderRadius: '2px',
                border: '1px solid rgba(197, 160, 89, 0.1)',
                backdropFilter: 'blur(20px)'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Capacity</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F7', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.capacity}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Thermal Mass</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F7', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.thermalMass}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Interior</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F7', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.interior}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Glazing</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F7', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.glazing}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Heating</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F7', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.heater}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Lighting</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F7', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.lighting}</div>
                </div>
              </div>

              {/* Features */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: '#726E8D',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}>Key Features</div>
                <ul style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.95rem',
                  color: '#A0A0A0',
                  lineHeight: 1.8,
                  paddingLeft: '20px',
                  margin: 0
                }}>
                  <li>Full-glass architectural front</li>
                  <li>Carbon-Nano Infrared + Aspen</li>
                  <li>X-Mood LED lighting system</li>
                  <li>Wi-Fi controlled</li>
                  <li>120V plug-and-play</li>
                  <li>DIY assembly {productSpecs.assemblyTime}</li>
                </ul>
              </div>

              {/* Reliability Status */}
              <div style={{
                padding: '16px 20px',
                backgroundColor: 'rgba(197, 160, 89, 0.08)',
                borderLeft: '3px solid #C5A059',
                marginBottom: '32px',
                borderRadius: '0 2px 2px 0'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>
                  Asset Reliability
                </div>
                <div style={{ fontSize: '0.9rem', color: '#F5F5F7', fontFamily: 'Inter, sans-serif' }}>
                  {productSpecs.reliability.status} • Last Audit: {productSpecs.reliability.lastAudit} • Origin: {productSpecs.origin}
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    flex: 1,
                    padding: '18px 32px',
                    backgroundColor: '#C5A059',
                    color: '#0A0A0A',
                    border: 'none',
                    borderRadius: '2px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    letterSpacing: '0.05em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(197, 160, 89, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Request Consultation
                </button>
                
                <Link href="/white-glove" style={{ flex: 1 }}>
                  <button style={{
                    width: '100%',
                    padding: '18px 32px',
                    backgroundColor: 'transparent',
                    color: '#F5F5F7',
                    border: '1px solid rgba(197, 160, 89, 0.4)',
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
                Financing available. Starting at $196/mo for 24 months.
              </p>
            </div>
          </div>
        </main>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product="X2 Indoor Xperience" />
    </>
  );
}
