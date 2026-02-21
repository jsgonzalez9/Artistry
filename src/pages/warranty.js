import Head from "next/head";
import Link from "next/link";
import Navbar from "@/pages/components/Navbar";

export default function WarrantyPage() {
  const warranties = [
    {
      component: "Structural Components",
      coverage: "25+ Years",
      details: "Walls, roof, floor, benches, doors, and windows against defects in materials and workmanship under normal use. Nordic Thermo-Spruce construction guaranteed.",
      icon: "🏗️"
    },
    {
      component: "Electric Heater",
      coverage: "5 Years",
      details: "Harvia electric heaters covered against manufacturing defects. Includes thermostat, heating elements, and control boards. Excludes stones.",
      icon: "🔥"
    },
    {
      component: "Infrared Panels",
      coverage: "5 Years",
      details: "Carbon/Ceramic infrared heating panels against defects. Includes wiring harnesses and controllers. Tested for 10,000+ hour lifespan.",
      icon: "⚡"
    },
    {
      component: "LED & Electronics",
      coverage: "3 Years",
      details: "X-Mood LED systems, Wi-Fi controllers, and sauna lighting. Waterproof IP65 rated components guaranteed against water ingress.",
      icon: "💡"
    }
  ];

  return (
    <>
      <Head>
        <title>Warranty & Protection | Lux Haven Infrastructure</title>
        <meta name="description" content="25+ year structural warranty on sauna infrastructure. 5-year coverage on Harvia heaters and infrared panels. White-glove service guaranteed." />
      </Head>

      <div style={{ backgroundColor: '#F9F8F4', minHeight: '100vh' }}>
        <Navbar />

        {/* Hero */}
        <section style={{ padding: '80px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Our Commitment
            </span>
            <h1 style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              color: '#1A1A1A', 
              margin: '16px 0 24px' 
            }}>
              25+ Year Structural Warranty
            </h1>
            <p style={{ 
              fontFamily: 'Inter', 
              fontSize: '1.1rem', 
              color: '#555', 
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              Every Lux Haven sauna is built using Nordic Thermo-Spruce and precision engineering 
              designed to last for decades. Our warranty reflects the quality we deliver.
            </p>
          </div>
        </section>

        {/* Warranty Grid */}
        <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {warranties.map((item) => (
              <div 
                key={item.component}
                style={{ 
                  padding: '40px', 
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E4E0',
                  borderRadius: '4px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                  <span style={{ 
                    fontFamily: 'Playfair Display', 
                    fontSize: '1.75rem', 
                    color: '#AF944F',
                    fontWeight: '600'
                  }}>
                    {item.coverage}
                  </span>
                </div>
                
                <h3 style={{ 
                  fontFamily: 'Playfair Display', 
                  fontSize: '1.25rem', 
                  color: '#1A1A1A',
                  marginBottom: '12px'
                }}>
                  {item.component}
                </h3>
                
                <p style={{ 
                  fontFamily: 'Inter', 
                  fontSize: '0.9rem', 
                  color: '#555',
                  lineHeight: '1.7'
                }}>
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Shipping Protection */}
        <section style={{ padding: '80px 20px', backgroundColor: '#1A1A1A' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#FFFFFF', marginBottom: '40px' }}>
              Shipping Protection
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              <div style={{ padding: '24px' }}>
                <h4 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', color: '#FFFFFF', marginBottom: '8px' }}>
                  Full Insurance
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#A0A0A0' }}>
                  Every shipment covered up to full retail value
                </p>
              </div>
              
              <div style={{ padding: '24px' }}>
                <h4 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', color: '#FFFFFF', marginBottom: '8px' }}>
                  Damage Resolution
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#A0A0A0' }}>
                  48-hour replacement part dispatch
                </p>
              </div>
              
              <div style={{ padding: '24px' }}>
                <h4 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', color: '#FFFFFF', marginBottom: '8px' }}>
                  Concealed Damage
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#A0A0A0' }}>
                  5-day window for hidden damage claims
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusions */}
        <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem', color: '#1A1A1A', marginBottom: '24px', textAlign: 'center' }}>
            What's Not Covered
          </h2>
          
          <div style={{ backgroundColor: '#FFFFFF', padding: '32px', border: '1px solid #E5E4E0', borderRadius: '4px' }}>
            <ul style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: '#555', lineHeight: '2' }}>
              <li>Normal wear and tear from regular use</li>
              <li>Damage from improper maintenance or cleaning chemicals</li>
              <li>Modifications not approved by Lux Haven</li>
              <li>Commercial or rental usage without commercial warranty upgrade</li>
              <li>Force majeure events (fire, flood, lightning, etc.)</li>
              <li>Heater stones (consumable item)</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '60px 20px', textAlign: 'center' }}>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '18px 48px',
              backgroundColor: '#1A1A1A',
              color: '#FFFFFF',
              border: '1px solid #AF944F',
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              cursor: 'pointer'
            }}>
              File a Warranty Claim
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}
