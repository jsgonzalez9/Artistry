import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import QuoteModal from "@/pages/components/QuoteModal";

export default function X3Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productImages = [
    {
      url: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&auto=format&fit=crop",
      alt: "Finnmark X3 - 3 Person Infrared Sauna"
    },
    {
      url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop",
      alt: "X3 Interior - Chromotherapy Lighting"
    },
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop",
      alt: "X3 Side View - Canadian Hemlock"
    }
  ];

  const productSpecs = {
    name: "Finnmark X3",
    subtitle: "The Family Trilogy",
    tagline: "Three-person infrared sanctuary for family wellness rituals.",
    series: "X-Series",
    price: "$5,495.00",
    monthlyPayment: "$168/mo",
    capacity: "3 Person",
    dimensions: '58" × 48" × 78"',
    weight: "980 lbs",
    heaters: "10 Carbon-Nano Panels",
    emfRating: "<3 mG at 6 inches",
    maxTemp: "150°F",
    wood: "Canadian Hemlock",
    electrical: "240V / 30A",
    warranty: "7-Year Structural"
  };

  return (
    <>
      <Head>
        <title>Finnmark X3 | 3-Person Infrared Sauna | Lux Haven Infrastructure</title>
        <meta name="description" content="Finnmark X3 three-person infrared sauna. Carbon-Nano heating, ultra-low EMF, chromotherapy LED. Perfect for family wellness. 7-year warranty." />
      </Head>

      <div style={{ backgroundColor: '#F9F8F4', minHeight: '100vh' }}>
        <Navbar />

        <main style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: '32px', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
            <Link href="/" style={{ color: '#726E8D', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#A0A0A0' }}>/</span>
            <Link href="/products/infrared" style={{ color: '#726E8D', textDecoration: 'none' }}>Infrared</Link>
            <span style={{ margin: '0 8px', color: '#A0A0A0' }}>/</span>
            <span style={{ color: '#1A1A1A' }}>Finnmark X3</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Image Gallery */}
            <div>
              <div style={{ 
                position: 'relative', 
                height: '500px', 
                backgroundColor: '#F5F5F3', 
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '16px'
              }}>
                <Image
                  src={productImages[selectedImage].url}
                  alt={productImages[selectedImage].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    style={{
                      position: 'relative',
                      height: '100px',
                      backgroundColor: '#F5F5F3',
                      border: selectedImage === idx ? '2px solid #C5A059' : '1px solid #E5E4E0',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      overflow: 'hidden'
                    }}
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#C5A059'
              }}>
                {productSpecs.series}
              </span>
              
              <h1 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.5rem',
                color: '#1A1A1A',
                marginTop: '8px',
                marginBottom: '8px'
              }}>
                {productSpecs.name}
              </h1>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                color: '#C5A059',
                fontStyle: 'italic',
                marginBottom: '24px'
              }}>
                "{productSpecs.tagline}"
              </p>

              {/* Price */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: '2.5rem', 
                    color: '#1A1A1A'
                  }}>
                    {productSpecs.price}
                  </span>
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(197, 160, 89, 0.1)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  borderRadius: '4px'
                }}>
                  <span style={{ fontSize: '0.875rem', color: '#C5A059', fontWeight: 600 }}>
                    {productSpecs.monthlyPayment} via Affirm
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#726E8D' }}>• 0% APR for 36 months</span>
                </div>
              </div>

              {/* Specs Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '16px',
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '4px',
                border: '1px solid #E5E4E0'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Capacity</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontWeight: 500 }}>{productSpecs.capacity}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Heaters</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontWeight: 500 }}>{productSpecs.heaters}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>EMF Rating</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontWeight: 500 }}>{productSpecs.emfRating}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Max Temperature</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontWeight: 500 }}>{productSpecs.maxTemp}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Wood</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontWeight: 500 }}>{productSpecs.wood}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Warranty</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontWeight: 500 }}>{productSpecs.warranty}</div>
                </div>
              </div>

              {/* Features */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '16px' }}>Key Features</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[
                    '✓ Carbon-Nano Infrared',
                    '✓ Ultra-Low EMF',
                    '✓ Chromotherapy LED',
                    '✓ Bluetooth Audio',
                    '✓ Oxygen Ionizer',
                    '✓ 0% APR Available'
                  ].map((feature, idx) => (
                    <span key={idx} style={{ fontSize: '0.85rem', color: '#555555' }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <button
                onClick={() => setIsModalOpen(true)}
                style={{
                  width: '100%',
                  padding: '18px 32px',
                  backgroundColor: '#C5A059',
                  color: '#0A0A0A',
                  border: 'none',
                  borderRadius: '4px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginBottom: '12px'
                }}
              >
                Schedule Site Assessment →
              </button>

              <Link href="/products/x2" style={{ textDecoration: 'none' }}>
                <button style={{
                  width: '100%',
                  padding: '14px 24px',
                  backgroundColor: 'transparent',
                  color: '#1A1A1A',
                  border: '1px solid #1A1A1A',
                  borderRadius: '4px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9375rem',
                  cursor: 'pointer'
                }}>
                  Compare with X2
                </button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product="Finnmark X3" />
    </>
  );
}
