import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
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
        <title>Luxury Barrel Saunas | Lux Haven Infrastructure</title>
        <meta name="description" content="Architectural-grade Thermo-Spruce barrel saunas by SaunaLife. 25+ year lifespan, white-glove delivery, professional installation coordination." />
      </Head>

      <div className="sauna-collection" style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '60px 20px' 
      }}>
        {/* Page Header */}
        <header style={{ 
          textAlign: 'center', 
          marginBottom: '80px',
          paddingBottom: '60px',
          borderBottom: '0.5px solid var(--lux-gold)'
        }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
            SaunaLife Thermo-Spruce Barrel Saunas
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--paragraph)', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Architectural-grade wellness infrastructure engineered for extreme weather resistance 
            and 25+ year lifespan. Unlike traditional cedar, Thermo-Spruce doesn't rot, warp, or 
            require constant maintenance.
          </p>
        </header>

        {/* Product Grid */}
        <div className="product-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '60px',
          marginBottom: '80px'
        }}>
          {saunaProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--lux-white)',
                border: '0.5px solid var(--lux-border)',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
              }}
            >
              {/* Product Image Placeholder */}
              <div style={{
                height: '400px',
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <span style={{ color: 'var(--lux-gray)', fontSize: '1rem' }}>
                  {product.name} - Product Image
                </span>
                {product.blueprint_url && (
                  <span style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    fontSize: '0.75rem',
                    color: 'var(--lux-gold)',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '8px 12px',
                    borderRadius: '2px'
                  }}>
                    📐 Blueprint Available
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div style={{ padding: '40px' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>
                  {product.name}
                </h2>
                
                <p style={{ 
                  fontSize: '1.0625rem', 
                  color: 'var(--paragraph)',
                  marginBottom: '24px'
                }}>
                  {product.short_description}
                </p>

                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600',
                  marginBottom: '32px',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  {product.price_formatted}
                </div>

                {/* Key Specs */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '32px',
                  padding: '24px',
                  background: 'var(--lux-bg)',
                  borderRadius: '4px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--lux-gray)', marginBottom: '4px' }}>Capacity</div>
                    <div style={{ fontSize: '1rem', fontWeight: '500' }}>{product.capacity}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--lux-gray)', marginBottom: '4px' }}>Weight</div>
                    <div style={{ fontSize: '1rem', fontWeight: '500' }}>{product.weight_lbs.toLocaleString()} lbs</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--lux-gray)', marginBottom: '4px' }}>Dimensions</div>
                    <div style={{ fontSize: '1rem', fontWeight: '500' }}>{product.dimensions}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--lux-gray)', marginBottom: '4px' }}>Electrical</div>
                    <div style={{ fontSize: '1rem', fontWeight: '500' }}>{product.electrical}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--lux-gray)', marginBottom: '4px' }}>Lead Time</div>
                    <div style={{ fontSize: '1rem', fontWeight: '500' }}>{product.lead_time}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--lux-gray)', marginBottom: '4px' }}>Warranty</div>
                    <div style={{ fontSize: '1rem', fontWeight: '500' }}>{product.warranty}</div>
                  </div>
                </div>

                {/* Installation Requirements Callout */}
                <div style={{
                  padding: '20px',
                  border: '0.5px solid var(--lux-gold)',
                  borderRadius: '4px',
                  marginBottom: '32px',
                  background: 'rgba(175, 148, 79, 0.03)'
                }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '12px', color: 'var(--lux-gold)' }}>
                    📐 Installation Requirements
                  </div>
                  <ul style={{ 
                    fontSize: '0.875rem', 
                    lineHeight: '1.8', 
                    paddingLeft: '20px',
                    margin: 0,
                    color: 'var(--paragraph)'
                  }}>
                    <li><strong>Pad:</strong> {product.installation_requirements.pad_size}</li>
                    <li><strong>Clearance:</strong> {product.installation_requirements.clearance_height}</li>
                    <li><strong>Access:</strong> {product.installation_requirements.access_width}</li>
                  </ul>
                </div>

                {/* Features List */}
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '12px' }}>
                    Key Features
                  </div>
                  <ul style={{ 
                    fontSize: '0.9375rem', 
                    lineHeight: '1.8', 
                    paddingLeft: '20px',
                    margin: 0,
                    color: 'var(--paragraph)'
                  }}>
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleRequestQuote(product)}
                  style={{
                    width: '100%',
                    padding: '18px 32px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    background: 'var(--lux-text)',
                    color: 'var(--lux-white)',
                    border: 'none',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  Request a Quote
                </button>

                <div style={{
                  marginTop: '16px',
                  fontSize: '0.8125rem',
                  color: 'var(--lux-gray)',
                  textAlign: 'center'
                }}>
                  ✦ White-glove delivery & installation coordination included
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Thermo-Spruce Section */}
        <section style={{
          padding: '80px 40px',
          background: 'var(--lux-white)',
          border: '0.5px solid var(--lux-gold)',
          borderRadius: '4px',
          marginBottom: '80px'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '32px', textAlign: 'center' }}>
              Why Thermo-Spruce?
            </h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '24px' }}>
              Thermo-treated wood isn't a coating or sealant—it's a fundamental transformation of the wood itself. 
              Heated to 212°C in an oxygen-free environment, the wood's cellular structure permanently changes, 
              becoming denser, more stable, and naturally resistant to decay.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              marginTop: '40px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Traditional Cedar</h3>
                <ul style={{ fontSize: '1rem', lineHeight: '2', paddingLeft: '20px' }}>
                  <li>5-10 year lifespan</li>
                  <li>Annual sealing required</li>
                  <li>Prone to warping & rot</li>
                  <li>15-20% moisture absorption</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Thermo-Spruce</h3>
                <ul style={{ fontSize: '1rem', lineHeight: '2', paddingLeft: '20px' }}>
                  <li>25+ year lifespan</li>
                  <li>Virtually maintenance-free</li>
                  <li>Exceptional weather resistance</li>
                  <li>Below 4% moisture absorption</li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/content/why-thermal-wood" style={{
                color: 'var(--lux-gold)',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'underline'
              }}>
                Read the full science behind thermal wood →
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section style={{
          textAlign: 'center',
          padding: '80px 40px',
          background: 'var(--lux-bg)',
          borderRadius: '4px'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Not Sure Which Model Is Right for Your Space?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: 'var(--paragraph)',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Our wellness specialists provide consultative guidance to help you select the right size, 
            features, and placement for your property.
          </p>
          <Link href="/contact">
            <button style={{
              padding: '18px 48px',
              fontSize: '1rem',
              fontWeight: '500'
            }}>
              Schedule a Consultation
            </button>
          </Link>
        </section>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct?.name || "SaunaLife Thermo-Spruce Barrel Sauna"}
      />
    </>
  );
}
