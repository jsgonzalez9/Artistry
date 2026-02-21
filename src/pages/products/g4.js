import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/pages/components/Navbar";
import QuoteModal from "@/pages/components/QuoteModal";

export default function G4Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productImages = [
    {
      url: "/img/g4/Saunalife-Garden-G4-Yard.jpg",
      alt: "SaunaLife G4 - Garden Setting"
    },
    {
      url: "/img/g4/SaunaLife-Garden-G4-Back.jpg",
      alt: "SaunaLife G4 - Back View"
    },
    {
      url: "/img/g4/Saunalife-Garden-G4-L-Side.jpg",
      alt: "SaunaLife G4 - Left Side"
    },
    {
      url: "/img/g4/Saunalife-Garden-G4-R-Side.jpg",
      alt: "SaunaLife G4 - Right Side"
    },
    {
      url: "/img/g4/SaunaLife-Garden-G4-Interior.jpg",
      alt: "SaunaLife G4 - Interior View"
    },
    {
      url: "/img/g4/SaunaLife-Garden-G4-LED-Bench.jpg",
      alt: "SaunaLife G4 - LED Bench Detail"
    }
  ];

  const productSpecs = {
    name: "G4 Garden Series",
    tagline: "Your Fastest Win\n30-day turnaround from order to first steam. Modern cube design with panoramic glass and Wi-Fi LED control.",
    price: "$9,490.00",
    financing: "$305/mo via Affirm",
    capacity: "Up to 6 People",
    weight: "1,650 lbs",
    foundationDimensions: '81.5" W × 97" D',
    height: "97\" (front) / 85\" (back)",
    material: "1.75\" Thermally-Modified Nordic Spruce",
    warranty: "25+ Year Structural",
    urgency: {
      inStock: 3,
      leadTime: "Immediate dispatch"
    }
  };

  return (
    <>
      <Head>
        <title>G4 Garden Series | Lux Haven Infrastructure</title>
        <meta name="description" content="SaunaLife G4 Garden Series - Modern cube sauna with panoramic glass. Thermo-Spruce construction, 6-person capacity, slanted weatherproof roof, white-glove delivery." />
      </Head>

      <div style={{ backgroundColor: '#0A0A0A', color: '#E5E5E5', minHeight: '100vh' }}>
        <Navbar />

        <main style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Urgency Banner */}
          <div style={{
            marginBottom: '24px',
            padding: '16px 24px',
            backgroundColor: 'rgba(76, 175, 80, 0.15)',
            border: '1px solid rgba(76, 175, 80, 0.3)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ fontSize: '1.25rem' }}>✓</span>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              color: '#F5F5F5',
              fontWeight: 500
            }}>
              <strong>Current Inventory:</strong> {productSpecs.urgency.inStock} units ready for {productSpecs.urgency.leadTime} • <strong>30-Day Ready Promise</strong> — White-glove installation in 48 hours on prepared site
            </span>
          </div>

          {/* Breadcrumb */}
          <div style={{ marginBottom: '24px', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
            <Link href="/" style={{ color: '#A0A0A0', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#A0A0A0' }}>/</span>
            <Link href="/products/saunas" style={{ color: '#A0A0A0', textDecoration: 'none' }}>Saunas</Link>
            <span style={{ margin: '0 8px', color: '#A0A0A0' }}>/</span>
            <span style={{ color: '#F5F5F5' }}>G4 Garden Series</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div style={{ 
                position: 'relative', 
                height: '600px', 
                backgroundColor: '#1A1A1A', 
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '16px'
              }}>
                <Image
                  src={productImages[selectedImage].url}
                  alt={productImages[selectedImage].alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>

              {/* Thumbnail Gallery */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    style={{
                      position: 'relative',
                      height: '80px',
                      backgroundColor: '#1A1A1A',
                      border: selectedImage === idx ? '2px solid #C5A059' : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      padding: 0
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

            {/* Product Info */}
            <div>
              <span style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '0.75rem', 
                color: '#C5A059', 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em' 
              }}>
                Modern Cube Design
              </span>
              
              <h1 style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '2.5rem', 
                color: '#F5F5F5', 
                margin: '12px 0 8px' 
              }}>
                {productSpecs.name}
              </h1>
              
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '1.1rem', 
                color: '#C5C5C5', 
                marginBottom: '24px' 
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
                    $305<span style={{ fontSize: '1.5rem' }}>/mo</span>
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
                    or $9,490 one-time
                  </span>
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

              {/* Key Specs */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '20px', 
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px'
              }}>
                
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#A0A0A0', marginBottom: '4px' }}>Capacity</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#F5F5F5' }}>{productSpecs.capacity}</div>
                </div>
                
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#A0A0A0', marginBottom: '4px' }}>Weight</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#F5F5F5' }}>{productSpecs.weight}</div>
                </div>
                
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#A0A0A0', marginBottom: '4px' }}>Foundation</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#F5F5F5' }}>{productSpecs.foundationDimensions}</div>
                </div>
                
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#A0A0A0', marginBottom: '4px' }}>Height</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#F5F5F5' }}>{productSpecs.height}</div>
                </div>
              </div>

              {/* Material */}
              <div style={{ 
                padding: '16px', 
                backgroundColor: '#1A1A1A', 
                borderRadius: '4px', 
                marginBottom: '24px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ fontSize: '0.8125rem', color: '#A0A0A0', marginBottom: '4px' }}>Material</div>
                <div style={{ fontSize: '0.95rem', color: '#F5F5F5' }}>{productSpecs.material}</div>
              </div>

              {/* CTA Buttons */}
              <button
                onClick={() => setIsModalOpen(true)}
                style={{
                  width: '100%',
                  padding: '18px 32px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  backgroundColor: '#0A0A0A',
                  color: '#F5F5F5',
                  border: '1px solid #C5A059',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
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

              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    width: '100%',
                    padding: '16px 32px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    backgroundColor: 'transparent',
                    color: '#F5F5F5',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C5A059';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                >
                  Schedule Consultation
                </button>
              </Link>

              <p style={{ 
                marginTop: '16px', 
                fontSize: '0.8125rem', 
                color: '#A0A0A0', 
                textAlign: 'center' 
              }}>
                ✦ White-glove delivery & installation coordination included
              </p>
            </div>
          </div>

          {/* Product Description */}
          <div style={{ 
            marginTop: '80px', 
            padding: '60px', 
            backgroundColor: '#1A1A1A',
            borderRadius: '4px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h2 style={{ 
              fontFamily: 'Playfair Display', 
              fontSize: '2rem', 
              marginBottom: '24px',
              color: '#F5F5F5'
            }}>
              Contemporary Cube Architecture
            </h2>
            
            <p style={{ 
              fontFamily: 'Inter', 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: '#E0E0E0',
              maxWidth: '800px'
            }}>
              The G4 Garden Series redefines the modern sauna experience with its striking cube architecture. 
              Unlike traditional barrel designs, the G4's geometric form creates a bold architectural statement 
              that complements contemporary residential landscapes. The slanted roof design with self-adhesive 
              waterproofing ensures superior weather resistance while the full-glass front wall maximizes natural 
              light and panoramic views of your surroundings.
            </p>

            <div style={{ 
              marginTop: '40px', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '32px' 
            }}>
              
              <div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', marginBottom: '8px', color: '#F5F5F5' }}>
                  Reversible Design
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#C5C5C5', lineHeight: '1.6' }}>
                  Reversible door and window layout allows flexible installation based on your property's orientation and view.
                </p>
              </div>
              
              <div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', marginBottom: '8px', color: '#F5F5F5' }}>
                  Wi-Fi LED System
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#C5C5C5', lineHeight: '1.6' }}>
                  App-controlled ambient lighting system included. Adjust temperature, lighting, and scheduling from your phone.
                </p>
              </div>
              
              <div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', marginBottom: '8px', color: '#F5F5F5' }}>
                  Slanted Weatherproof Roof
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#C5C5C5', lineHeight: '1.6' }}>
                  Self-adhesive waterproofing and sloped design shed snow and rain, extending the 25+ year structural warranty.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="SaunaLife G4 Garden Series"
      />
    </>
  );
}
