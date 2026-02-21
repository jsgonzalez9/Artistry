import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ON9Product() {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    {
      url: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&auto=format&fit=crop",
      alt: "OxyNova 9 - Professional Lounge"
    },
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop",
      alt: "OxyNova 9 - Panoramic Windows"
    },
    {
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop",
      alt: "OxyNova 9 - Interior Capacity"
    }
  ];

  const productSpecs = {
    name: "OxyNova 9",
    subtitle: "The Professional Lounge",
    tagline: "A social healing environment where time—and aging—decelerates.",
    pressure: "1.4 ATA (5.8 PSI)",
    oxygenConcentration: "95%+",
    capacity: 2,
    price: "$18,995",
    monthlyPayment: "$549/mo",
    warranty: "Lifetime on seams",
    weight: "55 lbs",
    dimensions: '96" × 40" (exterior)',
    windows: "10 panoramic windows",
    compressor: "Dual oil-free medical grade",
    noiseLevel: "<50 dB",
    certifications: ["FDA Class II", "ISO 13485", "CE Marked", "Health Canada"]
  };

  const sensoryExperience = {
    title: "The Social Oxygen Experience",
    description: "Share the cellular renewal with a partner, parent, or child. The OxyNova 9's 10 panoramic windows eliminate the claustrophobia of traditional chambers, flooding the space with natural light while maintaining pressure integrity. Dual-zone climate control ensures both occupants enjoy their ideal temperature. This is healing as a shared experience—a sanctuary where relationships deepen as oxygen saturates."
  };

  const engineeringStory = {
    title: "The Engineering Excellence",
    description: "The ON-9 represents the pinnacle of portable hyperbaric technology. Ten individually sealed windows provide 270° visibility while maintaining 5.8 PSI pressure. The dual oil-free compressors work in harmony to maintain pressure with less than 50 dB of sound—quieter than a library. Antimicrobial TPU coating prevents bacterial growth, while the marine-grade aluminum frame ensures decades of structural integrity. This is Canadian engineering meeting medical precision."
  };

  const outcome = {
    title: "The Family Longevity Outcome",
    description: "Imagine a wellness ritual that strengthens both body and bond. After 60 minutes at 1.4 ATA, you and your partner emerge with synchronized vitality—inflammation reduced, cognition sharpened, and connection deepened. For parents, this becomes a legacy gift: teaching children the value of preventative health through shared experience. For couples, it's a biological date night that compounds its benefits with every session."
  };

  const clinicalBenefits = [
    "3-5x faster wound healing",
    "Reduced inflammation & oxidative stress",
    "Enhanced mitochondrial ATP production",
    "Stem cell mobilization",
    "Collagen synthesis for skin rejuvenation",
    "Post-surgical recovery acceleration",
    "Athletic performance optimization",
    "Cognitive clarity enhancement"
  ];

  const useCases = [
    {
      title: "For Couples",
      description: "Shared wellness rituals strengthen both bodies and relationships"
    },
    {
      title: "For Families",
      description: "Parents and children healing together, building healthy habits"
    },
    {
      title: "For Professionals",
      description: "Performance centers, sports facilities, and longevity clinics"
    }
  ];

  return (
    <>
      <Head>
        <title>OxyNova 9 | Professional Hyperbaric Lounge | Lux Haven Infrastructure</title>
        <meta name="description" content="OxyNova 9 professional hyperbaric lounge. 2-person capacity, 10 panoramic windows, dual-zone climate. FDA Class II medical device. Lifetime warranty." />
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
            <span style={{ color: '#F5F5F5' }}>OxyNova 9</span>
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
                  <span style={{ fontSize: '0.75rem', color: '#726E8D' }}>• White-Glove Setup Included</span>
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
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Windows</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontWeight: 500 }}>{productSpecs.windows}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Capacity</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontWeight: 500 }}>{productSpecs.capacity} Person</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Noise Level</div>
                  <div style={{ fontSize: '1rem', color: '#F5F5F5', fontWeight: 500 }}>{productSpecs.noiseLevel}</div>
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

              {/* Use Cases */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ 
                  fontSize: '0.8125rem', 
                  color: '#C5A059', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  marginBottom: '16px'
                }}>
                  Perfect For
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {useCases.map((use, idx) => (
                    <div key={idx} style={{
                      padding: '16px',
                      backgroundColor: 'rgba(245,245,245,0.03)',
                      borderRadius: '4px',
                      borderLeft: '2px solid #C5A059'
                    }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F5F5F5', marginBottom: '4px' }}>
                        {use.title}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#A0A0A0' }}>
                        {use.description}
                      </div>
                    </div>
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
                  <div style={{ fontSize: '1.25rem', marginBottom: '4px' }}>14-21</div>
                  <div style={{ fontSize: '0.625rem', color: '#726E8D', textTransform: 'uppercase' }}>Day Delivery</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', marginBottom: '4px' }}>✓</div>
                  <div style={{ fontSize: '0.625rem', color: '#726E8D', textTransform: 'uppercase' }}>Dual Zone Climate</div>
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
