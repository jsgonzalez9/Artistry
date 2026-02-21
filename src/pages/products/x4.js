import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/pages/components/Navbar";
import QuoteModal from "@/pages/components/QuoteModal";

export default function X4Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productImages = [
    {
      url: "https://placehold.co/800x800/1A1A1A/FFFFFF?text=X4+Front+View",
      alt: "SaunaLife X4 - Front View"
    },
    {
      url: "https://placehold.co/800x800/2A2A2A/FFFFFF?text=X4+Side+View",
      alt: "SaunaLife X4 - Side View"
    },
    {
      url: "https://placehold.co/800x800/3A3A3A/FFFFFF?text=X4+Interior",
      alt: "SaunaLife X4 - Interior Aspen Benches"
    },
    {
      url: "https://placehold.co/800x800/4A4A4A/FFFFFF?text=X4+LED+Lighting",
      alt: "SaunaLife X4 - X-Mood Lighting"
    },
    {
      url: "https://placehold.co/800x800/5A5A5A/FFFFFF?text=X4+Detail",
      alt: "SaunaLife X4 - Detail View"
    }
  ];

  const productSpecs = {
    name: "X4 Indoor Xperience",
    tagline: "Infrared / Hybrid Ready with X-Mood Lighting",
    price: "$6,500.00",
    capacity: "4-Person",
    weight: "1,180 lbs",
    dimensions: '78.7" W × 59.1" D × 80.75" H',
    material: "1.5\" Nordic Spruce (Wall/Ceiling) & Aspen (Benches)",
    electrical: "Standard 120V Plug-and-Play",
    warranty: "25+ Year Structural"
  };

  return (
    <>
      <Head>
        <title>X4 Indoor Xperience | Lux Haven Infrastructure</title>
        <meta name="description" content="SaunaLife X4 Indoor Xperience - Infrared/Hybrid sauna with X-Mood lighting. Full-glass front, knot-free aspen benches, Wi-Fi controlled, DIY assembly in 4-6 hours." />
      </Head>

      <div style={{ backgroundColor: '#F9F8F4', minHeight: '100vh' }}>
        <Navbar />

        <main style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: '24px', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
            <Link href="/" style={{ color: '#726E8D', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#726E8D' }}>/</span>
            <Link href="/products/infrared" style={{ color: '#726E8D', textDecoration: 'none' }}>Infrared</Link>
            <span style={{ margin: '0 8px', color: '#726E8D' }}>/</span>
            <span style={{ color: '#1A1A1A' }}>X4 Indoor Xperience</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div style={{ 
                position: 'relative', 
                height: '600px', 
                backgroundColor: '#F5F5F3', 
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
                      backgroundColor: '#F5F5F3',
                      border: selectedImage === idx ? '2px solid #AF944F' : '1px solid #E5E4E0',
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
                color: '#AF944F', 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em' 
              }}>
                Infrared / Hybrid Ready
              </span>
              
              <h1 style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '2.5rem', 
                color: '#1A1A1A', 
                margin: '12px 0 8px' 
              }}>
                {productSpecs.name}
              </h1>
              
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '1.1rem', 
                color: '#555', 
                marginBottom: '24px' 
              }}>
                {productSpecs.tagline}
              </p>

              <div style={{ 
                fontFamily: 'Playfair Display', 
                fontSize: '2rem', 
                color: '#1A1A1A', 
                marginBottom: '32px' 
              }}>
                {productSpecs.price}
              </div>

              {/* Key Specs */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '20px', 
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E4E0',
                borderRadius: '4px'
              }}>
                
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#726E8D', marginBottom: '4px' }}>Capacity</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1A1A1A' }}>{productSpecs.capacity}</div>
                </div>
                
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#726E8D', marginBottom: '4px' }}>Weight</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1A1A1A' }}>{productSpecs.weight}</div>
                </div>
                
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#726E8D', marginBottom: '4px' }}>Electrical</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1A1A1A' }}>120V Standard</div>
                </div>
                
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#726E8D', marginBottom: '4px' }}>Assembly</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1A1A1A' }}>DIY 4-6 Hours</div>
                </div>
              </div>

              {/* Material */}
              <div style={{ 
                padding: '16px', 
                backgroundColor: '#F5F5F3', 
                borderRadius: '4px', 
                marginBottom: '24px' 
              }}>
                <div style={{ fontSize: '0.8125rem', color: '#726E8D', marginBottom: '4px' }}>Material</div>
                <div style={{ fontSize: '0.95rem', color: '#1A1A1A' }}>{productSpecs.material}</div>
              </div>

              {/* CTA Buttons */}
              <button
                onClick={() => setIsModalOpen(true)}
                style={{
                  width: '100%',
                  padding: '18px 32px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Request a Quote
              </button>

              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    width: '100%',
                    padding: '16px 32px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    backgroundColor: 'transparent',
                    color: '#1A1A1A',
                    border: '1px solid #E5E4E0',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Schedule Consultation
                </button>
              </Link>

              <p style={{ 
                marginTop: '16px', 
                fontSize: '0.8125rem', 
                color: '#726E8D', 
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
            backgroundColor: '#FFFFFF',
            borderRadius: '4px',
            border: '1px solid #E5E4E0'
          }}>
            <h2 style={{ 
              fontFamily: 'Playfair Display', 
              fontSize: '2rem', 
              marginBottom: '24px',
              color: '#1A1A1A'
            }}>
              Architectural Infrared Design
            </h2>
            
            <p style={{ 
              fontFamily: 'Inter', 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: '#555',
              maxWidth: '800px'
            }}>
              The X4 expands on the revolutionary X-Series design, offering twice the capacity while maintaining 
              the signature architectural aesthetic. Featuring the same stunning full-glass front and dotless "X-Mood" 
              LED lighting as its smaller sibling, the X4 accommodates up to four people comfortably. Hybrid-ready 
              construction means you can upgrade to a traditional Finnish experience anytime by adding a Harvia Virta 
              electric heater. Perfect for families or those who enjoy sauna sessions with friends.
            </p>

            <div style={{ 
              marginTop: '40px', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '32px' 
            }}>
              
              <div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', marginBottom: '8px' }}>
                  X-Mood Lighting
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#726E8D', lineHeight: '1.6' }}>
                  Dimmable, dotless LED system behind backrests creates ambient glow without harsh points. 
                  Wi-Fi app controlled for seamless integration with your smart home.
                </p>
              </div>
              
              <div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', marginBottom: '8px' }}>
                  Architectural Glass
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#726E8D', lineHeight: '1.6' }}>
                  Full 8mm tempered glass front opens the space visually while maintaining thermal efficiency. 
                  The frameless design creates a modern, floating aesthetic unlike any residential sauna on the market.
                </p>
              </div>
              
              <div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', marginBottom: '8px' }}>
                  DIY Simplicity
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#726E8D', lineHeight: '1.6' }}>
                  Prefabricated wall and ceiling panels allow two people to complete assembly in 4-6 hours 
                  with standard household tools. Standard 120V plug-and-play electrical means no electrician required.
                </p>
              </div>
            </div>
          </div>

          {/* Hybrid Upgrade CTA */}
          <div style={{ 
            marginTop: '60px', 
            padding: '48px', 
            backgroundColor: '#1A1A1A',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontFamily: 'Playfair Display', 
              fontSize: '1.75rem', 
              color: '#FFFFFF',
              marginBottom: '16px'
            }}>
              Hybrid Upgrade Available
            </h3>
            <p style={{ 
              fontFamily: 'Inter', 
              fontSize: '1rem', 
              color: '#A0A0A0',
              maxWidth: '600px',
              margin: '0 auto 24px',
              lineHeight: '1.6'
            }}>
              Add a Harvia Virta electric heater to transform your X4 into a Traditional + Infrared hybrid. 
              Experience the best of both worlds: deep cellular infrared sessions when you need them, 
              and traditional löyly steam therapy when you want it.
            </p>
            <span style={{ 
              fontFamily: 'Inter', 
              fontSize: '0.9rem', 
              color: '#AF944F'
            }}>
              Starting at $1,400 with professional electrician coordination
            </span>
          </div>
        </main>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="SaunaLife X4 Indoor Xperience"
      />
    </>
  );
}
