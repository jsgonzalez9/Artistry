import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { infraredProducts } from "@/data/products";
import QuoteModal from "@/components/QuoteModal";

export default function InfraredSaunas() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestQuote = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <Head>
        <title>Medical-Grade Infrared Saunas | Lux Haven Infrastructure</title>
        <meta name="description" content="Finnmark X-Series infrared saunas with ultra-low EMF emissions. Carbon fiber heating, Canadian Hemlock construction, 5-year warranty." />
      </Head>

      <div className="infrared-collection" style={{ 
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
            Finnmark X-Series Infrared Saunas
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--paragraph)', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Medical-grade infrared therapy with ultra-low EMF emissions (&lt;3 mG). 
            Carbon fiber heating panels deliver consistent, therapeutic heat at lower 
            operating temperatures than traditional saunas.
          </p>
        </header>

        {/* EMF Safety Callout */}
        <div style={{
          padding: '32px 40px',
          background: 'rgba(175, 148, 79, 0.05)',
          border: '0.5px solid var(--lux-gold)',
          borderRadius: '4px',
          marginBottom: '60px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px', color: 'var(--lux-gold)' }}>
            🛡️ Ultra-Low EMF Safety Certified
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--paragraph)', maxWidth: '700px', margin: '0 auto' }}>
            All Finnmark X-Series saunas emit less than 3 milligauss at 6 inches—well below 
            the 4 mG safety threshold recommended by building biology experts. Safe for daily 
            use, including for those with EMF sensitivities.
          </p>
        </div>

        {/* Product Grid */}
        <div className="product-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '40px',
          marginBottom: '80px'
        }}>
          {infraredProducts.map((product, index) => (
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
              {/* Product Image */}
              <div style={{
                height: '350px',
                position: 'relative',
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                overflow: 'hidden'
              }}>
                <Image
                  src={product.image_url || '/images/placeholder-sauna.jpg'}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index < 2}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '0.75rem',
                  color: 'var(--lux-white)',
                  background: 'var(--lux-gold)',
                  padding: '6px 12px',
                  borderRadius: '2px'
                }}>
                  🛡️ EMF &lt;3 mG
                </div>
              </div>

              {/* Product Details */}
              <div style={{ padding: '32px' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
                  {product.name}
                </h2>
                
                <p style={{ 
                  fontSize: '1rem', 
                  color: 'var(--paragraph)',
                  marginBottom: '16px'
                }}>
                  {product.short_description}
                </p>

                <div style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: '600',
                  marginBottom: '24px',
                  fontFamily: 'Playfair Display, serif'
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
                  background: 'var(--lux-bg)',
                  borderRadius: '4px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--lux-gray)', marginBottom: '4px' }}>Capacity</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: '500' }}>{product.capacity} Person</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--lux-gray)', marginBottom: '4px' }}>Weight</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: '500' }}>{product.weight_lbs.toLocaleString()} lbs</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--lux-gray)', marginBottom: '4px' }}>Electrical</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: '500' }}>{product.electrical}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--lux-gray)', marginBottom: '4px' }}>Warranty</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: '500' }}>{product.warranty}</div>
                  </div>
                </div>

                {/* EMF + Heating Callout */}
                <div style={{
                  padding: '16px',
                  border: '0.5px solid var(--lux-border)',
                  borderRadius: '4px',
                  marginBottom: '24px',
                  background: 'var(--lux-white)'
                }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: '600', marginBottom: '8px' }}>
                    🔬 Medical-Grade Specifications
                  </div>
                  <ul style={{ 
                    fontSize: '0.8125rem', 
                    lineHeight: '1.6', 
                    paddingLeft: '18px',
                    margin: 0,
                    color: 'var(--paragraph)'
                  }}>
                    <li><strong>EMF Emissions:</strong> {product.emf_rating} at 6 inches</li>
                    <li><strong>Heating Type:</strong> {product.heating_type}</li>
                    <li><strong>Max Temperature:</strong> {product.max_temp}</li>
                    <li><strong>Warm-up Time:</strong> 10-15 minutes</li>
                  </ul>
                </div>

                {/* Features List */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: '600', marginBottom: '8px' }}>
                    Premium Features
                  </div>
                  <ul style={{ 
                    fontSize: '0.875rem', 
                    lineHeight: '1.6', 
                    paddingLeft: '18px',
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
                    padding: '16px 24px',
                    fontSize: '0.9375rem',
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
                  marginTop: '12px',
                  fontSize: '0.75rem',
                  color: 'var(--lux-gray)',
                  textAlign: 'center'
                }}>
                  ✦ White-glove delivery & installation coordination included
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Infrared Section */}
        <section style={{
          padding: '60px 40px',
          background: 'var(--lux-white)',
          border: '0.5px solid var(--lux-gold)',
          borderRadius: '4px',
          marginBottom: '60px'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '28px', textAlign: 'center' }}>
              Why Choose Infrared?
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px',
              marginTop: '32px'
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌡️</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Lower Operating Temperature</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: 'var(--paragraph)' }}>
                  Infrared saunas operate at 120-150°F vs. 180-220°F for traditional saunas, making them 
                  more comfortable for extended sessions and sensitive users.
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⏱️</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Longer, Deeper Sessions</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: 'var(--paragraph)' }}>
                  The gentler heat allows for 30-45 minute sessions, enabling deeper tissue penetration 
                  and more pronounced therapeutic benefits.
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💪</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Targeted Pain Relief</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: 'var(--paragraph)' }}>
                  Infrared penetrates up to 1.5 inches into tissue, providing relief for muscle soreness, 
                  joint pain, arthritis, and chronic conditions.
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🛡️</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Ultra-Low EMF</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: 'var(--paragraph)' }}>
                  Finnmark's carbon fiber panels emit &lt;3 mG at 6 inches—safe for daily use and suitable 
                  for those with EMF sensitivities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section style={{
          textAlign: 'center',
          padding: '60px 40px',
          background: 'var(--lux-bg)',
          borderRadius: '4px'
        }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '16px' }}>
            Need Help Choosing the Right Size?
          </h2>
          <p style={{ 
            fontSize: '1rem', 
            color: 'var(--paragraph)',
            maxWidth: '550px',
            margin: '0 auto 24px'
          }}>
            Our wellness specialists provide consultative guidance to match your space, 
            usage patterns, and therapeutic goals.
          </p>
          <Link href="/contact">
            <button style={{
              padding: '16px 40px',
              fontSize: '0.9375rem',
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
        productName={selectedProduct?.name || "Finnmark X-Series Infrared Sauna"}
      />
    </>
  );
}
