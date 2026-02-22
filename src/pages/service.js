import Head from "next/head";
import Link from "next/link";
import Navbar from "@/pages/components/Navbar";

export default function Service() {
  const services = [
    {
      step: "01",
      title: "Consultation",
      description: "Comprehensive architectural assessment of your space. We evaluate electrical requirements, foundation specifications, and optimal placement for thermal efficiency and aesthetic integration.",
      features: ["Site feasibility analysis", "Electrical requirements review", "Placement optimization"]
    },
    {
      step: "02",
      title: "White-Glove Delivery",
      description: "Premium transport with specialized freight partners. Threshold delivery to your prepared foundation with full tracking and scheduled appointment windows.",
      features: ["Specialized freight partners", "Real-time tracking", "Threshold delivery"]
    },
    {
      step: "03",
      title: "Integration",
      description: "Coordinate licensed electricians for installation. We manage permits, inspections, and ensure code compliance for your jurisdiction.",
      features: ["Licensed electrician coordination", "Permit management", "Code compliance assurance"]
    },
    {
      step: "04",
      title: "Execution",
      description: "Professional assembly teams handle final construction, heater installation, and configuration. Full testing and operational walkthrough before handoff.",
      features: ["Professional assembly", "System configuration", "Owner training session"]
    }
  ];

  const highlights = [
    { stat: "200+", label: "Installations Completed" },
    { stat: "0%", label: "Callback Rate" },
    { stat: "25yr", label: "Warranty Coverage" },
    { stat: "30", label: "Day Average Completion" }
  ];

  return (
    <>
      <Head>
        <title>White-Glove Service | Lux Haven Infrastructure</title>
        <meta name="description" content="Premium delivery and installation services for architectural-grade sauna infrastructure. From consultation to commissioning." />
      </Head>

      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        <Navbar />

        {/* Hero Section */}
        <section style={{ 
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
          borderBottom: '1px solid rgba(201, 169, 110, 0.1)'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(201,169,110,0.03) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />

          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <span style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '0.75rem', 
              color: '#c9a96e', 
              textTransform: 'uppercase', 
              letterSpacing: '0.35em',
              display: 'block',
              marginBottom: '24px'
            }}>
              White-Glove Service
            </span>
            
            <h1 style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              color: '#ffffff', 
              margin: '0 0 24px',
              lineHeight: '1.1',
              fontWeight: 400
            }}>
              Premium sauna infrastructure delivered, installed, and commissioned with white-glove precision.
            </h1>
            
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '1.1rem', 
              color: 'rgba(255,255,255,0.6)', 
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.8',
              fontWeight: 300
            }}>
              From initial architectural consultation to final electrical commissioning, 
              our team manages the complex logistics of heavy-asset placement.
            </p>

            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '18px 48px',
                backgroundColor: 'transparent',
                color: '#c9a96e',
                border: '1px solid #c9a96e',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Schedule Consultation
              </button>
            </Link>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{
          padding: '60px 24px',
          backgroundColor: '#111111',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            {highlights.map((item, idx) => (
              <div key={idx}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2.5rem',
                  color: '#c9a96e',
                  marginBottom: '8px'
                }}>
                  {item.stat}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section style={{ padding: '120px 24px', backgroundColor: '#0a0a0a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '80px' 
            }}>
              <span style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '0.75rem', 
                color: '#c9a96e', 
                textTransform: 'uppercase', 
                letterSpacing: '0.3em',
                display: 'block',
                marginBottom: '16px'
              }}>
                Our Process
              </span>
              <h2 style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                color: '#ffffff',
                fontWeight: 400
              }}>
                Four-Phase Methodology
              </h2>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '24px' 
            }}>
              {services.map((service, idx) => (
                <div 
                  key={service.title}
                  style={{ 
                    padding: '48px 32px', 
                    backgroundColor: '#111111',
                    border: '1px solid rgba(255,255,255,0.05)',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Step number */}
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '0.875rem',
                    color: 'rgba(201, 169, 110, 0.3)',
                    letterSpacing: '0.1em'
                  }}>
                    {service.step}
                  </div>
                  
                  <h3 style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: '1.5rem', 
                    color: '#ffffff',
                    marginBottom: '16px',
                    fontWeight: 400
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '0.95rem', 
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: '1.7',
                    marginBottom: '24px'
                  }}>
                    {service.description}
                  </p>

                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span style={{ color: '#c9a96e' }}>—</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ 
          padding: '120px 24px', 
          backgroundColor: '#111111',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '80px',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '0.75rem', 
                  color: '#c9a96e', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.3em',
                  display: 'block',
                  marginBottom: '16px'
                }}>
                  Premium Delivery
                </span>
                <h2 style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', 
                  color: '#ffffff',
                  marginBottom: '24px',
                  fontWeight: 400,
                  lineHeight: '1.2'
                }}>
                  White-Glove Logistics
                </h2>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '1rem', 
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: '1.8',
                  marginBottom: '32px'
                }}>
                  We partner with specialized freight carriers experienced in handling architectural-grade wellness equipment. Every delivery includes threshold service to your prepared foundation.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <h4 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#ffffff',
                      marginBottom: '8px'
                    }}>
                      Continental US
                    </h4>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.4)'
                    }}>
                      7-14 business days
                    </p>
                  </div>
                  <div>
                    <h4 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#ffffff',
                      marginBottom: '8px'
                    }}>
                      Alaska & Hawaii
                    </h4>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.4)'
                    }}>
                      21-28 business days
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px'
              }}>
                {[
                  { title: "Site Assessment", desc: "Complete evaluation" },
                  { title: "Freight Coordination", desc: "Specialized carriers" },
                  { title: "Installation", desc: "Licensed electricians" },
                  { title: "Commissioning", desc: "Testing & training" }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    padding: '32px 24px',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid rgba(201, 169, 110, 0.1)',
                    textAlign: 'center'
                  }}>
                    <h4 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#c9a96e',
                      marginBottom: '4px',
                      fontWeight: 500
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.4)'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ 
          padding: '120px 24px', 
          textAlign: 'center',
          backgroundColor: '#0a0a0a',
          position: 'relative'
        }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <span style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '0.75rem', 
              color: '#c9a96e', 
              textTransform: 'uppercase', 
              letterSpacing: '0.3em',
              display: 'block',
              marginBottom: '16px'
            }}>
              Get Started
            </span>
            <h2 style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', 
              color: '#ffffff',
              marginBottom: '16px',
              fontWeight: 400
            }}>
              Ready to Transform Your Space?
            </h2>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '1rem', 
              color: 'rgba(255,255,255,0.5)',
              lineHeight: '1.8',
              marginBottom: '40px'
            }}>
              Schedule a complimentary site consultation to assess feasibility and receive a detailed installation proposal.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '20px 56px',
                backgroundColor: '#c9a96e',
                color: '#0a0a0a',
                border: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Schedule Consultation
              </button>
            </Link>
          </div>
        </section>

        {/* Footer spacer matching your site pattern */}
        <div style={{ height: '60px', backgroundColor: '#0a0a0a' }} />
      </div>
    </>
  );
}
