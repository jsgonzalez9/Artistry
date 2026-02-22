import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import { saunaProducts } from "@/data/products";
import QuoteModal from "@/components/QuoteModal";

export default function Saunas() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestQuote = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <Head>
        <title>Thermo-Spruce Barrel Saunas | Lux Haven Infrastructure</title>
        <meta name="description" content="Architectural-grade SaunaLife barrel saunas. Thermo-Spruce construction, 25+ year lifespan, white-glove installation. Northern European engineering." />
      </Head>

      <div style={{ backgroundColor: '#F9F8F4', minHeight: '100vh' }}>
        <Navbar />

        {/* Hero Section */}
        <section style={{
          position: 'relative',
          height: '70vh',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          {/* Background with overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #2C1810 0%, #1A1A1A 50%, #0F0F1A 100%)'
          }} />
          
          {/* Wood grain texture effect */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(197,160,89,0.1) 2px, rgba(197,160,89,0.1) 4px)'
          }} />

          <div style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: '900px',
            padding: '0 20px'
          }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C5A059',
                display: 'block',
                marginBottom: '16px'
              }}
            >
              SaunaLife Garden Series
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#F5F5F5',
                marginBottom: '24px',
                lineHeight: 1.1
              }}
            >
              Thermo-Spruce Barrel Architecture
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.25rem',
                color: 'rgba(245,245,245,0.8)',
                lineHeight: 1.7,
                marginBottom: '40px'
              }}
            >
              Northern European barrel saunas engineered for extreme weather resistance
              and 25+ year lifespan. Unlike traditional cedar, Thermo-Spruce doesn't rot,
              warp, or require constant maintenance.
            </motion.p>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                flexWrap: 'wrap'
              }}
            >
              {[
                { icon: '25+', label: 'Year Lifespan' },
                { icon: '0%', label: 'Maintenance Required' },
                { icon: '✓', label: 'FSC Certified Wood' }
              ].map((item, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    color: '#C5A059',
                    marginBottom: '8px'
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: 'rgba(245,245,245,0.7)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <main style={{ padding: '100px 20px', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Product Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '60px',
            marginBottom: '80px'
          }}>
            {saunaProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'white',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
                  border: '1px solid #E5E4E0'
                }}
              >
                {/* Product Image */}
                <div style={{
                  height: '400px',
                  position: 'relative',
                  background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                  overflow: 'hidden'
                }}>
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  {product.blueprint_url && (
                    <span style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      fontSize: '0.75rem',
                      color: '#F5F5F5',
                      background: '#C5A059',
                      padding: '6px 12px',
                      borderRadius: '2px'
                    }}>
                      📐 Blueprint Available
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div style={{ padding: '40px' }}>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C5A059'
                  }}>
                    {product.series}
                  </span>
                  
                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '2rem',
                    color: '#1A1A1A',
                    marginTop: '8px',
                    marginBottom: '16px'
                  }}>
                    {product.name}
                  </h2>
                  
                  <p style={{
                    fontSize: '1rem',
                    color: '#555555',
                    lineHeight: 1.7,
                    marginBottom: '24px'
                  }}>
                    {product.short_description}
                  </p>

                  <div style={{ 
                    fontSize: '1.75rem',
                    fontFamily: 'Playfair Display, serif',
                    marginBottom: '24px',
                    color: '#1A1A1A'
                  }}>
                    {product.price_formatted}
                  </div>

                  {/* Key Specs */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    marginBottom: '24px',
                    padding: '20px',
                    backgroundColor: '#F9F8F4',
                    borderRadius: '4px'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Capacity</div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{product.capacity} Bathers</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Weight</div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{product.weight_lbs.toLocaleString()} lbs</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Wood</div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{product.materials}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Warranty</div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{product.warranty}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, marginBottom: '8px' }}>
                      Key Specifications
                    </div>
                    <ul style={{ 
                      fontSize: '0.875rem', 
                      lineHeight: '1.6', 
                      paddingLeft: '18px',
                      margin: 0,
                      color: '#555555'
                    }}>
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                    <Link
                      href={`/products/${product.id}`}
                      style={{
                        padding: '16px 24px',
                        backgroundColor: '#1A1A1A',
                        color: '#F5F5F5',
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        textAlign: 'center',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      View Details →
                    </Link>
                    
                    <button
                      onClick={() => handleRequestQuote(product)}
                      style={{
                        padding: '14px 24px',
                        backgroundColor: 'transparent',
                        color: '#1A1A1A',
                        border: '1px solid #1A1A1A',
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        borderRadius: '4px',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      Request a Quote
                    </button>
                  </div>

                  <div style={{
                    marginTop: '16px',
                    fontSize: '0.75rem',
                    color: '#726E8D',
                    textAlign: 'center'
                  }}>
                    ✦ White-glove delivery & installation included
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

        <Footer />
      </div>

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={selectedProduct?.name} 
      />
    </>
  );
}
