import Head from 'next/head';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { IconBlueprint, IconTruck, IconBolt, IconUsers, IconClock, IconShield, IconThermometer, IconHammer } from '@/components/icons/LuxIcons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lux Haven Infrastructure | Architectural-Grade Wellness</title>
        <meta name="description" content="Premium sauna and cold plunge infrastructure. White-glove delivery and expert installation." />
      </Head>

      <div style={{ backgroundColor: '#F9F8F4', minHeight: '100vh' }}>
        <Navbar />
        <main>
          {/* Hero Section */}
          <div style={{
            position: 'relative',
            height: '80vh',
            minHeight: '600px',
            backgroundImage: 'url(/pool.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll'
          }}>
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.4)'
            }} />
            {/* Content */}
            <div style={{ 
              position: 'relative',
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              textAlign: 'center', 
              padding: '0 20px'
            }}>
              <h1 style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: 'clamp(2rem, 6vw, 4rem)', 
                maxWidth: '900px', 
                marginBottom: '20px', 
                color: '#FFFFFF',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
              }}>
                Your Wellness Sanctuary Ready in 30 Days—We Handle Everything
              </h1>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '1.1rem', 
                maxWidth: '700px', 
                lineHeight: '1.6', 
                marginBottom: '32px', 
                color: '#FFFFFF',
                textShadow: '0 1px 10px rgba(0,0,0,0.3)'
              }}>
                Skip the 6-month contractor delays. We deliver, install, and commission premium sauna infrastructure in 30 days—backed by 25-year warranties and white-glove service.
              </p>
              
              {/* Trust Bar */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '32px', 
                marginBottom: '40px',
                flexWrap: 'wrap'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Inter', fontSize: '1.5rem', color: '#C5A059' }}>200+</span>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#C5C5C5', marginTop: '4px' }}>Installations</p>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Inter', fontSize: '1.5rem', color: '#C5A059' }}>25yr</span>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#C5C5C5', marginTop: '4px' }}>Warranty</p>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Inter', fontSize: '1.5rem', color: '#C5A059' }}>0%</span>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#C5C5C5', marginTop: '4px' }}>Callback Rate</p>
                </div>
              </div>
              
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{ 
                  padding: '18px 48px', 
                  backgroundColor: '#C5A059', 
                  color: '#0A0A0A', 
                  border: 'none', 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '1rem', 
                  fontWeight: 600,
                  cursor: 'pointer', 
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)', 
                  margin: '0 auto', 
                  display: 'block',
                  borderRadius: '4px'
                }}>
                  Schedule Site Assessment →
                </button>
              </Link>
              
              <p style={{ 
                marginTop: '20px', 
                fontSize: '0.875rem', 
                color: '#C5C5C5',
                fontFamily: 'Inter, sans-serif'
              }}>
                ✓ 15-min consultation • No commitment required
              </p>
            </div>
          </div>

          {/* Block A: Engineering - Beyond Aesthetics */}
          <section style={{ padding: '100px 20px', backgroundColor: '#1A1A1A', textAlign: 'center' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#FFFFFF', marginBottom: '24px', letterSpacing: '0.02em' }}>
                Beyond Aesthetics
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#A0A0A0', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
                Our infrastructure is defined by thermal integrity. Utilizing sustainable Nordic spruce and precision-engineered heaters, Lux Haven assets are built to sustain 200°F+ environments with zero structural compromise.
              </p>
              <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Playfair Display', fontSize: '2.5rem', color: '#AF944F' }}>200°F+</span>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#726E8D', marginTop: '8px' }}>Operating Temperature</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Playfair Display', fontSize: '2.5rem', color: '#AF944F' }}>25+</span>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#726E8D', marginTop: '8px' }}>Year Lifespan</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Playfair Display', fontSize: '2.5rem', color: '#AF944F' }}>Nordic</span>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#726E8D', marginTop: '8px' }}>Thermo-Spruce</p>
                </div>
              </div>
            </div>
          </section>

          {/* Block B: White-Glove Integration */}
          <section style={{ padding: '100px 20px', backgroundColor: '#F9F8F4', textAlign: 'center' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#1A1A1A', marginBottom: '24px', letterSpacing: '0.02em' }}>
                White-Glove Integration
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#555555', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
                From initial architectural consultation to final electrical commissioning, our team manages the logistics of heavy-asset placement for seamless residential integration.
              </p>
              <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', maxWidth: '800px', margin: '48px auto 0' }}>
                <div style={{ padding: '24px', border: '1px solid #E5E4E0', borderRadius: '4px' }}>
                  <div style={{ marginBottom: '12px' }}><IconBlueprint className="icon-md gold" /></div>
                  <h3 style={{ fontFamily: 'Inter', fontSize: '0.9rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '8px' }}>Site Consultation</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#726E8D' }}>Architectural planning & electrical requirements</p>
                </div>
                <div style={{ padding: '24px', border: '1px solid #E5E4E0', borderRadius: '4px' }}>
                  <div style={{ marginBottom: '12px' }}><IconTruck className="icon-md gold" /></div>
                  <h3 style={{ fontFamily: 'Inter', fontSize: '0.9rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '8px' }}>Precision Delivery</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#726E8D' }}>White-glove transport & placement</p>
                </div>
                <div style={{ padding: '24px', border: '1px solid #E5E4E0', borderRadius: '4px' }}>
                  <div style={{ marginBottom: '12px' }}><IconBolt className="icon-md gold" /></div>
                  <h3 style={{ fontFamily: 'Inter', fontSize: '0.9rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '8px' }}>Commissioning</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#726E8D' }}>Full electrical setup & testing</p>
                </div>
              </div>
            </div>
          </section>

          {/* Block C: Product Collection Grid */}
          <section style={{ padding: '100px 20px', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1A1A1A', marginBottom: '16px' }}>
                Curated Collection
              </h2>
              <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#726E8D', marginBottom: '48px' }}>
                Architectural-grade thermal systems for residential sanctuaries
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginTop: '48px' }}>
                {/* Product 1: G11 Series */}
                <div style={{ border: '1px solid #E5E4E0', borderRadius: '4px', overflow: 'hidden', textAlign: 'left' }}>
                  <div style={{ height: '240px', backgroundColor: '#F5F5F3', position: 'relative' }}>
                    <Image
                      src="/img/g11/Gemini_Generated_Image_bn6jflbn6jflbn6j.png"
                      alt="G11 Garden Series Sauna"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Traditional Finnish</span>
                      <span style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', color: '#1A1A1A' }}>$14,990</span>
                    </div>
                    <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#1A1A1A', margin: '0 0 12px' }}>The G11 Series</h3>
                    <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                      Traditional Finnish Cabin with Panoramic Glass. Nordic Spruce construction, Harvia Heaters, 8-person capacity.
                    </p>
                    <Link href="/products/g11" style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#1A1A1A', textDecoration: 'none', borderBottom: '1px solid #AF944F', paddingBottom: '2px' }}>
                      View Product Details →
                    </Link>
                  </div>
                </div>

                {/* Product 2: X2 Indoor Xperience */}
                <div style={{ border: '1px solid #E5E4E0', borderRadius: '4px', overflow: 'hidden', textAlign: 'left' }}>
                  <div style={{ height: '240px', backgroundColor: '#F5F5F3', position: 'relative' }}>
                    <Image
                      src="https://nordicasauna.com/cdn/shop/files/SaunaLife-X2-Front_2048x.jpg?v=1755196338"
                      alt="X2 Indoor Xperience Infrared Sauna"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Infrared / Hybrid</span>
                      <span style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', color: '#1A1A1A' }}>$4,295</span>
                    </div>
                    <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#1A1A1A', margin: '0 0 12px' }}>The X2 Xperience</h3>
                    <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                      Architectural infrared with X-Mood lighting. Full-glass front, knot-free aspen, Wi-Fi controlled, DIY 4-6 hour assembly.
                    </p>
                    <Link href="/products/x2" style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#1A1A1A', textDecoration: 'none', borderBottom: '1px solid #AF944F', paddingBottom: '2px' }}>
                      View Product Details →
                    </Link>
                  </div>
                </div>

                {/* Product 3: G4 Series */}
                <div style={{ border: '1px solid #E5E4E0', borderRadius: '4px', overflow: 'hidden', textAlign: 'left' }}>
                  <div style={{ height: '240px', backgroundColor: '#F5F5F3', position: 'relative' }}>
                    <Image
                      src="/img/g4/Saunalife-Garden-G4-Yard.jpg"
                      alt="G4 Garden Series Sauna"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Modern Cube</span>
                      <span style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', color: '#1A1A1A' }}>$9,490</span>
                    </div>
                    <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#1A1A1A', margin: '0 0 12px' }}>The G4 Series</h3>
                    <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                      Modern Cube Sauna with Panoramic Glass. Wi-Fi controlled LED, weatherproof roof, 6-person capacity.
                    </p>
                    <Link href="/products/g4" style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#1A1A1A', textDecoration: 'none', borderBottom: '1px solid #AF944F', paddingBottom: '2px' }}>
                      View Product Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Logistics Blueprint Section */}
          <section style={{ padding: '100px 20px', backgroundColor: '#1A1A1A', textAlign: 'center' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#FFFFFF', marginBottom: '16px' }}>
                The Lux Haven Logistics Blueprint
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#A0A0A0', marginBottom: '60px' }}>
                From Vision to First Steam in 30 Days
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                {/* Step 1 */}
                <div style={{ textAlign: 'center', padding: '40px 24px' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    margin: '0 auto 24px',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconBlueprint className="icon-lg gold" />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.25rem', color: '#F5F5F5', marginBottom: '12px' }}>
                    Step 1: Digital Site Assessment
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: '#A0A0A0', lineHeight: '1.7' }}>
                    Once you Secure Your Slot, our engineering team performs a remote site analysis via satellite and video consult. We verify your foundation requirements and electrical capacity.
                  </p>
                </div>
                
                {/* Step 2 */}
                <div style={{ textAlign: 'center', padding: '40px 24px' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    margin: '0 auto 24px',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconTruck className="icon-lg gold" />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.25rem', color: '#F5F5F5', marginBottom: '12px' }}>
                    Step 2: Precision Logistics
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: '#A0A0A0', lineHeight: '1.7' }}>
                    Your unit is dispatched via dedicated air-ride carrier to prevent vibration damage. We coordinate final mile delivery with specialized equipment if required by your terrain.
                  </p>
                </div>
                
                {/* Step 3 */}
                <div style={{ textAlign: 'center', padding: '40px 24px' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    margin: '0 auto 24px',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconBolt className="icon-lg gold" />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.25rem', color: '#F5F5F5', marginBottom: '12px' }}>
                    Step 3: White-Glove Commissioning
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: '#A0A0A0', lineHeight: '1.7' }}>
                    Our certified technicians handle assembly and heater calibration. We don't just drop it off—we stay until the first thermal cycle is complete and your warranty is activated.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section style={{ padding: '80px 20px', backgroundColor: '#F9F8F4', textAlign: 'center' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#1A1A1A', marginBottom: '48px' }}>
                Verified Installations
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div style={{ 
                  padding: '32px', 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  border: '1px solid #E5E4E0'
                }}>
                  <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#6B7280', marginBottom: '16px' }}>
                    Greenwich, CT
                  </p>
                  <div style={{ height: '160px', backgroundColor: '#F5F5F3', borderRadius: '4px' }}>
                    {/* Case study image placeholder */}
                  </div>
                </div>
                
                <div style={{ 
                  padding: '32px', 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  border: '1px solid #E5E4E0'
                }}>
                  <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#6B7280', marginBottom: '16px' }}>
                    Aspen, CO
                  </p>
                  <div style={{ height: '160px', backgroundColor: '#F5F5F3', borderRadius: '4px' }}>
                    {/* Case study image placeholder */}
                  </div>
                </div>
                
                <div style={{ 
                  padding: '32px', 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  border: '1px solid #E5E4E0'
                }}>
                  <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#6B7280', marginBottom: '16px' }}>
                    Hamptons, NY
                  </p>
                  <div style={{ height: '160px', backgroundColor: '#F5F5F3', borderRadius: '4px' }}>
                    {/* Case study image placeholder */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
