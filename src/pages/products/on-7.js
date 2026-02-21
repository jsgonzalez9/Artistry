import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ON7Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTechSpecs, setShowTechSpecs] = useState(false);

  const productImages = [
    {
      url: "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?w=800&auto=format&fit=crop",
      alt: "OxyNova 7 - Personal Hyperbaric Chamber"
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
      alt: "OxyNova 7 - Interior View"
    },
    {
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop",
      alt: "OxyNova 7 - Control Panel"
    }
  ];

  const productSpecs = {
    name: "OxyNova 7",
    subtitle: "The Personal Restoration Suite",
    tagline: "Your personal atmospheric sanctuary for mitochondrial repair.",
    pressure: "1.4 ATA (5.8 PSI)",
    oxygenConcentration: "95%+",
    capacity: 1,
    price: "$12,995",
    monthlyPayment: "$389/mo",
    warranty: "Lifetime on seams",
    weight: "35 lbs (portable)",
    dimensions: '84" × 32" (exterior)',
    compressor: "Oil-free medical grade",
    noiseLevel: "<55 dB",
    certifications: ["FDA Class II", "ISO 13485", "CE Marked"]
  };

  const sensoryExperience = {
    title: "The Cellular Experience",
    description: "Lie back and breathe. As the chamber pressurizes to 1.4 ATA—equivalent to diving 12 feet below sea level—you'll feel a gentle compression, like a comforting embrace. Pure oxygen saturates your bloodstream, reaching tissues and cells that normally operate in oxygen deficit. The triple-layered windows allow natural light while maintaining pressure integrity. This isn't just therapy; it's cellular awakening."
  };

  const engineeringStory = {
    title: "The Engineering Story",
    description: "Every seam is RF-welded to aircraft tolerances, creating a pressure vessel that maintains 5.8 PSI indefinitely. The medical-grade TPU (Thermoplastic Polyurethane) construction is both flexible and incredibly strong—resistant to ozone, UV, and biological growth. The oil-free compressor delivers pure, medical-grade air with less than 55 dB of sound—quieter than a normal conversation. This is Canadian engineering at its finest."
  };

  const outcome = {
    title: "The Longevity Outcome",
    description: "After 40 minutes at pressure, your cells have absorbed 3x more oxygen than normal breathing allows. Stem cells mobilize. Inflammation decreases. Mitochondria produce ATP more efficiently. Regular sessions become a cornerstone of your anti-aging protocol—supporting everything from post-workout recovery to cognitive clarity. This is oxygen as infrastructure for sustained performance."
  };

  const clinicalBenefits = [
    "3-5x faster wound healing",
    "Reduced inflammation & oxidative stress",
    "Enhanced mitochondrial ATP production",
    "Stem cell mobilization",
    "Collagen synthesis for skin rejuvenation",
    "Post-surgical recovery acceleration"
  ];

  return (
    <>
      <Head>
        <title>OxyNova 7 | Personal Hyperbaric Chamber | Lux Haven Infrastructure</title>
        <meta name="description" content="OxyNova 7 personal hyperbaric chamber. 1.4 ATA pressure, 95%+ oxygen concentration. Portable, FDA Class II medical device. Lifetime warranty." />
      </Head>

      <div style={{ backgroundColor: '#0A0A0A', color: '#E5E5E5', minHeight: '100vh' }}>
        <Navbar />

        <main style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: '24px', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
            <Link href="/" style={{ color: '#A0A0A0', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#A0A0A0' }}>/</span>
            <Link href="/products/hyperbaric-chambers" style={{ color: '#A0A0A0', textDecoration: 'none' }}>Hyperbaric Chambers</Link>
            <span style={{ margin: '0 8px', color: '#A0A0A0' }}>/</span>
            <span style={{ color: '#F5F5F5' }}>OxyNova 7</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Image Gallery */}
            <div>
              <div style={{ 
                position: 'relative', 
                height: '500px', 
                backgroundColor: '#1A1A1A', 
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
                      backgroundColor: '#1A1A1A',
                      border: selectedImage === idx ? '2px solid #C5A059' : '1px solid rgba(255,255,255,0.1)',
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
                OxyNova Professional Series
              </span>
              
              <h1 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.5rem',
                color: '#F5F5F5',
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
                    color: '#F5F5F5'
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
                    {productSpecs.monthlyPayment}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#726E8D' }}>• Lifetime Warranty Included</span>
                </div>
              </div>

              {/* Specs */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '16px',
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: '#1A1A1A',
                borderRadius: '4px'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Pressure</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontWeight: 500 }}>{productSpecs.pressure}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>O₂ Concentration</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontWeight: 500 }}>{productSpecs.oxygenConcentration}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Capacity</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontWeight: 500 }}>{productSpecs.capacity} Person</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Weight</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontWeight: 500 }}>{productSpecs.weight}</div>
                </div>
              </div>

              {/* Clinical Benefits */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ 
                  fontSize: '0.8125rem', 
                  color: '#C5A059', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  marginBottom: '16px'
                }}>
                  Clinical Benefits
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {clinicalBenefits.map((benefit, idx) => (
                    <span key={idx} style={{
                      padding: '6px 12px',
                      backgroundColor: 'rgba(197, 160, 89, 0.1)',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      color: '#C5A059'
                    }}>
                      ✓ {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
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
                  marginBottom: '24px'
                }}>
                  Schedule Consultation →
                </button>
              </Link>

              {/* Trust Badges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '12px',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '1.25rem', marginBottom: '4px' }}>∞</div>
                  <div style={{ fontSize: '0.625rem', color: '#726E8D', textTransform: 'uppercase' }}>Lifetime Warranty</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', marginBottom: '4px' }}>14</div>
                  <div style={{ fontSize: '0.625rem', color: '#726E8D', textTransform: 'uppercase' }}>Day Delivery</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', marginBottom: '4px' }}>✓</div>
                  <div style={{ fontSize: '0.625rem', color: '#726E8D', textTransform: 'uppercase' }}>FDA Class II</div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
