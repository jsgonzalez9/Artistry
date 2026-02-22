import Head from "next/head";
import Link from "next/link";
import Navbar from "@/pages/components/Navbar";

export default function WhiteGloveService() {
  const services = [
    {
      icon: "📐",
      title: "Site Consultation",
      description: "Comprehensive architectural assessment of your space. We evaluate electrical requirements, foundation specifications, and optimal placement for thermal efficiency and aesthetic integration.",
      duration: "60-90 minutes",
      deliverable: "Site feasibility report & installation plan"
    },
    {
      icon: "🚛",
      title: "Precision Delivery",
      description: "White-glove transport with specialized freight partners. Threshold delivery to your prepared foundation or designated area. Full tracking and scheduled appointment windows.",
      duration: "2-4 weeks lead time",
      deliverable: "Scheduled delivery with lift-gate service"
    },
    {
      icon: "⚡",
      title: "Electrical Commissioning",
      description: "Coordinate licensed electricians for 240V heater installation if required. We manage permits, inspections, and ensure code compliance for your jurisdiction.",
      duration: "Half-day installation",
      deliverable: "Code-compliant electrical infrastructure"
    },
    {
      icon: "🔧",
      title: "Assembly & Testing",
      description: "Professional assembly teams handle final construction, heater installation, and Wi-Fi configuration. Full thermal testing and operational walkthrough before handoff.",
      duration: "Full day with testing",
      deliverable: "Fully operational sauna with owner training"
    }
  ];

  return (
    <>
      <Head>
        <title>White-Glove Service | Lux Haven Infrastructure</title>
        <meta name="description" content="Comprehensive delivery and installation services for architectural-grade sauna infrastructure. From consultation to commissioning." />
      </Head>

      <div style={{ backgroundColor: '#F9F8F4', minHeight: '100vh' }}>
        <Navbar />

        {/* Hero */}
        <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#1A1A1A' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Our Difference
            </span>
            <h1 style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              color: '#FFFFFF', 
              margin: '16px 0 24px' 
            }}>
              White-Glove Infrastructure Integration
            </h1>
            <p style={{ 
              fontFamily: 'Inter', 
              fontSize: '1.1rem', 
              color: '#A0A0A0', 
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              From initial architectural consultation to final electrical commissioning, 
              our team manages the complex logistics of heavy-asset placement for seamless 
              residential integration.
            </p>
          </div>
        </section>

        {/* Service Process */}
        <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#1A1A1A' }}>
              The Four-Phase Process
            </h2>
            <p style={{ fontFamily: 'Inter', color: '#726E8D', marginTop: '12px' }}>
              Every installation follows our proven white-glove methodology
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {services.map((service, idx) => (
              <div 
                key={service.title}
                style={{ 
                  padding: '40px', 
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E4E0',
                  borderRadius: '4px',
                  position: 'relative'
                }}
              >
                <div style={{ 
                  position: 'absolute', 
                  top: '-16px', 
                  left: '40px',
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Inter',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {idx + 1}
                </div>
                
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>
                  {service.icon}
                </span>
                
                <h3 style={{ 
                  fontFamily: 'Playfair Display', 
                  fontSize: '1.5rem', 
                  color: '#1A1A1A',
                  marginBottom: '12px'
                }}>
                  {service.title}
                </h3>
                
                <p style={{ 
                  fontFamily: 'Inter', 
                  fontSize: '0.95rem', 
                  color: '#555',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  {service.description}
                </p>
                
                <div style={{ 
                  padding: '16px', 
                  backgroundColor: '#F5F5F3',
                  borderRadius: '4px'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#726E8D', marginBottom: '4px' }}>
                    Timeline: {service.duration}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: '500' }}>
                    {service.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage Areas */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#1A1A1A', marginBottom: '40px' }}>
              Delivery Coverage
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              <div style={{ padding: '24px' }}>
                <h4 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', marginBottom: '8px' }}>
                  Continental US
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#726E8D' }}>
                  7-14 business days
                </p>
              </div>
              
              <div style={{ padding: '24px' }}>
                <h4 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', marginBottom: '8px' }}>
                  Alaska & Hawaii
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#726E8D' }}>
                  21-28 business days
                </p>
              </div>
              
              <div style={{ padding: '24px' }}>
                <h4 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', marginBottom: '8px' }}>
                  White-Glove Upgrade
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#726E8D' }}>
                  Room-of-choice delivery
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem', color: '#1A1A1A', marginBottom: '16px' }}>
              Ready to Transform Your Space?
            </h2>
            <p style={{ fontFamily: 'Inter', color: '#726E8D', marginBottom: '32px' }}>
              Schedule a complimentary site consultation to assess feasibility and receive a detailed installation proposal.
            </p>
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
                Schedule Consultation
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
