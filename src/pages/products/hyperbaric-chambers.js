import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import oxynovaData from "@/data/oxynova.json";

export default function HyperbaricChambers() {
  const { products, positioning, clinicalBenefits } = oxynovaData;

  return (
    <>
      <Head>
        <title>Hyperbaric Oxygen Chambers | Lux Haven Infrastructure</title>
        <meta name="description" content="OxyNova professional hyperbaric chambers. 1.4 ATA medical-grade inflatable systems for cellular renewal, anti-aging, and recovery. Lifetime warranty." />
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
            background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 50%, #16213E 100%)'
          }} />
          
          {/* Atmospheric bubbles effect */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(197,160,89,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(197,160,89,0.2) 0%, transparent 40%)'
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
              OxyNova Professional Series
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: ' clamp(2.5rem, 5vw, 4rem)',
                color: '#F5F5F5',
                marginBottom: '24px',
                lineHeight: 1.1
              }}
            >
              {positioning.tagline}
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
              Canadian-engineered, medical-grade inflatable hyperbaric systems. 
              Experience 1.4 ATA pressure for mitochondrial repair, anti-aging, 
              and complete cellular restoration.
            </motion.p>

            <!-- Trust Bar -->
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
                { icon: '∞', label: 'Lifetime Warranty' },
                { icon: '14', label: 'Day White-Glove Setup' },
                { icon: '✓', label: 'FDA Class II Medical Device' }
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

        {/* Product Grid */}
        <section style={{ padding: '100px 20px', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '60px'
          }}>
            {products.map((product, index) => (
              <motion.div
                key={product.model}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{
                  background: 'white',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
                  border: '1px solid #E5E4E0'
                }}
              >
                {/* Product Hero */}
                <div style={{
                  position: 'relative',
                  height: '400px',
                  background: 'linear-gradient(135deg, #1A1A2E 0%, #0F0F1A 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
                >
                  <Image
                    src={product.images.hero}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover', opacity: 0.9 }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    backgroundColor: 'rgba(197, 160, 89, 0.9)',
                    color: '#0A0A0A',
                    padding: '8px 16px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    {product.capacity} Person
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px'
                  }}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#C5A059',
                      display: 'block',
                      marginBottom: '8px'
                    }}>
                      {product.subtitle}
                    </span>
                    
                    <h2 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '2.5rem',
                      color: '#F5F5F5',
                      margin: 0
                    }}>
                      {product.name}
                    </h2>
                  </div>
                </div>

                {/* Product Details */}
                <div style={{ padding: '40px' }}>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    color: '#555555',
                    lineHeight: 1.7,
                    marginBottom: '32px'
                  }}
                  >
                    <strong style={{ color: '#C5A059' }}>"{product.luxuryPositioning}"</strong><br />
                    {product.usp}
                  </p>

                  {/* Specs Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '16px',
                    marginBottom: '32px',
                    padding: '24px',
                    backgroundColor: '#F9F8F4',
                    borderRadius: '4px'
                  }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Pressure</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1A1A1A' }}>{product.pressure}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>O₂ Level</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1A1A1A' }}>{product.oxygenConcentration}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>Weight</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1A1A1A' }}>{product.weight.unit}</div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid #E5E4E0' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ 
                        fontFamily: 'Playfair Display, serif', 
                        fontSize: '2rem', 
                        color: '#1A1A1A'
                      }}>
                        {product.pricing.msrp}
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
                    }}
                    >
                      <span style={{ fontSize: '0.875rem', color: '#C5A059', fontWeight: 600 }}>
                        {product.pricing.monthlyPayment}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#726E8D' }}>• Lifetime Warranty Included</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/products/${product.model.toLowerCase()}`}
                    style={{
                      display: 'block',
                      padding: '16px 32px',
                      backgroundColor: '#1A1A1A',
                      color: '#F5F5F5',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Explore {product.name} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Clinical Benefits Section */}
        <section style={{
          backgroundColor: '#1A1A1A',
          color: '#F5F5F5',
          padding: '100px 20px'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              marginBottom: '24px'
            }}>
              The Cellular Experience
            </h2>
            
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              color: 'rgba(245,245,245,0.8)',
              marginBottom: '60px',
              lineHeight: 1.7
            }}>
              Hyperbaric oxygen therapy delivers 95%+ pure oxygen under pressure, 
              enabling your cells to absorb up to 3x more oxygen than normal breathing.
              This accelerates healing from the mitochondrial level upward.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              textAlign: 'left'
            }}>
              {clinicalBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  style={{
                    padding: '20px',
                    backgroundColor: 'rgba(245,245,245,0.05)',
                    borderLeft: '3px solid #C5A059',
                    borderRadius: '0 4px 4px 0'
                  }}
                >
                  <span style={{ color: '#C5A059', marginRight: '12px' }}>✓</span>
                  <span style={{ fontSize: '0.9375rem', color: 'rgba(245,245,245,0.9)' }}>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery Circuit Section */}
        <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              color: '#1A1A1A',
              marginBottom: '16px'
            }}>
              The Complete Recovery Circuit
            </h2>
            
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              color: '#555555',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Combine hyperbaric oxygen with sauna and cold plunge 
              for the ultimate cellular reset protocol.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px'
          }}>
            {[
              { 
                element: '🔥', 
                name: 'Fire', 
                product: 'SaunaLife G11',
                effect: 'Heat shock proteins. Cardiovascular conditioning.',
                link: '/products/g11'
              },
              { 
                element: '❄️', 
                name: 'Ice', 
                product: 'Slate Immersion',
                effect: 'Inflammation reduction. Metabolic boost.',
                link: '/products/cold-plunge'
              },
              { 
                element: '💨', 
                name: 'Air', 
                product: 'OxyNova 7/9',
                effect: 'Cellular oxygen saturation. Mitochondrial repair.',
                link: '/products/on-7'
              }
            ].map((item, idx) => (
              <Link 
                key={idx} 
                href={item.link}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  padding: '40px',
                  textAlign: 'center',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  border: '1px solid #E5E4E0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{item.element}</div>
                  <h3 style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: '1.5rem', 
                    color: '#1A1A1A',
                    marginBottom: '8px'
                  }}
                  >
                    {item.name}
                  </h3>
                  
                  <div style={{ 
                    fontSize: '0.875rem', 
                    color: '#C5A059',
                    fontWeight: 600,
                    marginBottom: '12px'
                  }}>
                    {item.product}
                  </div>
                  
                  <p style={{ fontSize: '0.875rem', color: '#555555' }}>
                    {item.effect}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}