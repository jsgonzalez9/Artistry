import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function X1() {
  const [selectedImage, setSelectedImage] = useState(0);

  // FinnmarkX1 Images
  const productImages = [
    {
      url: "/img/x1/Gemini_Generated_Image_isf9hjisf9hjisf9.png",
      alt: "Finnmark X1 - Premium Infrared Sauna",
      mood: "Modern"
    }
  ];

  // Product Specifications
  const productSpecs = {
    name: "Finnmark X1",
    series: "Xperience-Series",
    tagline: "Compact Infrared Sanctuary\nSingle-person infrared therapy designed for modern wellness routines.",
    price: "$3,995.00",
    financing: "$128/mo via Affirm",
    capacity: "1 Person",
    dimensions: '48" × 42" × 75"',
    weight: "450 lbs",
    heaters: "Carbon-Nano Infrared",
    heaterCount: "6 Panels",
    temperature: "120°F - 140°F",
    material: "Canadian Hemlock",
    interior: "Hemlock & Cedar",
    warranty: "7-Year Warranty",
    controls: "Digital Control Panel",
    lighting: "Chromotherapy LED",
    audio: "Bluetooth Speakers"
  };

  const refinedStyle = {
    filter: 'saturate(0.9) contrast(1.1) brightness(0.98)',
    overlay: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)'
  };

  return (
    <>
      <Head>
        <title>Finnmark X1 | Lux Haven Infrastructure</title>
        <meta name="description" content="Finnmark X1 -Single-Person Infrared Sauna. Compact design, carbon-nano heating, chromotherapy lighting. Perfect for personal wellness routines." />
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
            <span style={{ color: '#1A1A1A' }}>Finnmark X1</span>
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
                  style={{ 
                    objectFit: 'cover',
                    filter: refinedStyle.filter,
                    transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                  priority
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: refinedStyle.overlay,
                  pointerEvents: 'none'
                }} />
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
                marginBottom: '16px'
              }}>
                {productSpecs.name}
              </h1>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.1rem',
                color: '#555555',
                lineHeight: 1.7,
                marginBottom: '24px',
                whiteSpace: 'pre-line'
              }}>
                {productSpecs.tagline}
              </p>

              {/* Pricing */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: '2.5rem', 
                    color: '#1A1A1A'
                  }}>
                    $128<span style={{ fontSize: '1.25rem' }}>/mo</span>
                  </span>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    color: '#C5A059',
                    fontWeight: 600
                  }}>
                    via Affirm
                  </span>
                </div>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: '#726E8D'
                }}>
                  or {productSpecs.price} one-time
                </p>
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
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Capacity</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.capacity}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Dimensions</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.dimensions}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Heaters</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.heaterCount}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Temperature</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.temperature}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Material</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.material}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Warranty</div>
                  <div style={{ fontSize: '1rem', color: '#1A1A1A', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{productSpecs.warranty}</div>
                </div>
              </div>

              {/* Features */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '16px' }}>
                  Included Features
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[
                    '✓ Carbon-Nano Heating',
                    '✓ Chromotherapy LED',
                    '✓ Bluetooth Audio',
                    '✓ Digital Controls',
                    '✓ Canadian Hemlock',
                    '✓ 0% APR Available'
                  ].map((feature, idx) => (
                    <span key={idx} style={{ fontSize: '0.85rem', color: '#555555', fontFamily: 'Inter, sans-serif' }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-block',
                    padding: '16px 32px',
                    backgroundColor: '#C5A059',
                    color: '#0A0A0A',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  Schedule Site Assessment →
                </Link>
                <Link
                  href="/faq"
                  style={{
                    display: 'inline-block',
                    padding: '16px 32px',
                    backgroundColor: 'transparent',
                    color: '#1A1A1A',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    border: '1px solid #E5E4E0'
                  }}
                >
                  Questions?
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <section style={{ marginTop: '80px', padding: '48px', backgroundColor: 'white', borderRadius: '4px', border: '1px solid #E5E4E0' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1A1A1A', marginBottom: '24px' }}>
              Compact Personal Wellness
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#555555', lineHeight: 1.8, marginBottom: '24px' }}>
              The Finnmark X1 is designed for the individual seeking daily infrared therapy without the space requirements of larger units. Its compact footprint fits comfortably in spare rooms, home offices, or dedicated wellness spaces while delivering the full benefits of carbon-nano infrared technology.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#555555', lineHeight: 1.8 }}>
              Perfect for: Post-workout recovery, stress relief, improved circulation, and daily detoxification routines. Thesingle-person design allows for focused, meditative sessions without scheduling conflicts.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}