import Head from 'next/head';
import Navbar from './components/Navbar';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      icon: '🏛️',
      title: 'Infrastructure-First Mindset',
      description: 'We view every sauna, cold plunge, and wellness installation as permanent architectural infrastructure—not disposable consumer goods.'
    },
    {
      icon: '🤝',
      title: 'Consultative Partnership',
      description: 'No high-pressure sales. Our process begins with understanding your vision, space constraints, and wellness objectives.'
    },
    {
      icon: '⚡',
      title: 'Engineering Rigor',
      description: 'Every recommendation includes electrical load calculations, structural requirements, and thermal performance specifications.'
    },
    {
      icon: '✨',
      title: 'White-Glove Execution',
      description: 'From site survey to final commissioning, we manage every detail of delivery, installation, and activation.'
    }
  ];

  const audienceSegments = [
    {
      icon: '🏡',
      title: 'Private Estate Owners',
      description: 'Residential sanctuaries requiring architectural-grade thermal systems integrated into custom construction.'
    },
    {
      icon: '🏨',
      title: 'Luxury Hospitality',
      description: 'Boutique hotels and resorts seeking wellness amenities that differentiate guest experiences.'
    },
    {
      icon: '💼',
      title: 'Corporate Wellness',
      description: 'Executive facilities and wellness centers requiring reliable, high-frequency infrastructure.'
    },
    {
      icon: '🎭',
      title: 'Athletic Performance',
      description: 'Professional trainers and athletes demanding precise cold plunges and thermal systems for recovery.'
    }
  ];

  const consultativeSteps = [
    { icon: '📞', title: 'Discovery Call', desc: 'Understand your vision and space requirements' },
    { icon: '📐', title: 'Site Assessment', desc: 'Measure, photograph, and evaluate infrastructure' },
    { icon: '📋', title: 'Proposal Design', desc: 'Curated product selection with detailed specifications' },
    { icon: '👔', title: 'Executive Review', desc: 'Present options with pricing, timeline, and warranty details' },
    { icon: '🚛', title: 'Logistics Coordination', desc: 'Schedule delivery and installation' },
    { icon: '🔧', title: 'Installation & Commissioning', desc: 'Professional assembly and electrical certification' }
  ];

  return (
    <>
      <Head>
        <title>About Lux Haven | Architectural Wellness Infrastructure</title>
        <meta name="description" content="Lux Haven Infrastructure creates permanent wellness sanctuaries through white-glove delivery, expert installation, and consultative sales for discerning residential clients." />
        <meta name="keywords" content="luxury wellness, architectural wellness, home spa infrastructure, premium sauna installation, wellness consulting, residential sanctuary design" />
        <meta property="og:title" content="About Lux Haven | Architectural Wellness Infrastructure" />
        <meta property="og:description" content="Infrastructure-first approach to residential wellness. Consultative sales, white-glove delivery, and architectural-grade thermal systems." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://luxhaveninfrastructure.com/about" />
      </Head>

      <div style={{ backgroundColor: '#F9F8F4', minHeight: '100vh' }}>
        <Navbar />

        <main>
          {/* Hero Story Section */}
          <section style={{ padding: '100px 20px 80px', backgroundColor: '#1A1A1A' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
                <div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px', display: 'block' }}>
                    Our Story
                  </span>
                  <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', marginBottom: '24px', lineHeight: '1.2' }}>
                    Infrastructure First.
                    <br />
                    Luxury Second.
                  </h1>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#A0A0A0', lineHeight: '1.8', marginBottom: '20px' }}>
                    Lux Haven Infrastructure was founded on a simple observation: the wellness industry treats saunas and cold plunges like furniture—items to be boxed, shipped, and forgotten.
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#A0A0A0', lineHeight: '1.8' }}>
                    But a $15,000 sauna installed without structural assessment, electrical planning, or professional commissioning is not a purchase—it's a liability. We decided to treat these assets as what they are: permanent home infrastructure.
                  </p>
                </div>
                
                <div style={{ backgroundColor: '#222', padding: '60px 40px', borderRadius: '4px', textAlign: 'center', border: '1px solid #333' }}>
                  <blockquote style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#FFFFFF', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '24px' }}>
                    "A wellness sanctuary is not bought. It is built—with rigorous planning, precise execution, and infrastructure-grade commitment."
                  </blockquote>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    — Founding Principle
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Lux Haven Positioning */}
          <section style={{ padding: '100px 20px', backgroundColor: '#F9F8F4' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px', display: 'block' }}>
                Our Position
              </span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#1A1A1A', marginBottom: '20px' }}>
                Why "Lux Haven"?
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.8' }}>
                The name reflects our dual commitment: delivering <strong>luxury</strong> experiences through <strong>haven</strong>-grade stability and permanence.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '60px' }}>
                <div style={{ padding: '32px', backgroundColor: '#FFFFFF', border: '1px solid #E5E4E0', borderRadius: '4px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✨</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '12px' }}>
                    Luxury
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#726E8D', lineHeight: '1.6' }}>
                    Not surface-level aesthetics. True luxury is seamless function, zero-compromise materials, and effortless operation day after day.
                  </p>
                </div>
                
                <div style={{ padding: '32px', backgroundColor: '#FFFFFF', border: '1px solid #E5E4E0', borderRadius: '4px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🛡️</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '12px' }}>
                    Haven
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#726E8D', lineHeight: '1.6' }}>
                    A sanctuary built on structural integrity. Your wellness space should be as permanent and reliable as your home's foundation.
                  </p>
                </div>
                
                <div style={{ padding: '32px', backgroundColor: '#FFFFFF', border: '1px solid #E5E4E0', borderRadius: '4px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🏗️</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '12px' }}>
                    Infrastructure
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#726E8D', lineHeight: '1.6' }}>
                    We are not a retailer. We are infrastructure partners—managing site planning, electrical commissioning, and lifecycle support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section style={{ padding: '100px 20px', backgroundColor: '#FFFFFF' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#1A1A1A', marginBottom: '16px' }}>
                  Our Values
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#726E8D', maxWidth: '600px', margin: '0 auto' }}>
                  The principles that guide every client interaction and installation.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                {values.map((value, index) => (
                  <div key={index} style={{ padding: '40px', backgroundColor: '#F9F8F4', borderRadius: '4px' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '20px' }}>{value.icon}</div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '12px' }}>
                      {value.title}
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#555', lineHeight: '1.7' }}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Target Customer Profile */}
          <section style={{ padding: '100px 20px', backgroundColor: '#1A1A1A' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px', display: 'block' }}>
                  Who We Serve
                </span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#FFFFFF', marginBottom: '16px' }}>
                  The Residential Sanctuary Builder
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#A0A0A0', maxWidth: '700px', margin: '0 auto' }}>
                  Our clients view their wellness space as integral to their home architecture—not an afterthought.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                {audienceSegments.map((segment, index) => (
                  <div key={index} style={{ padding: '36px 28px', backgroundColor: '#222', borderRadius: '4px', border: '1px solid #333', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{segment.icon}</div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '12px' }}>
                      {segment.title}
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#A0A0A0', lineHeight: '1.6' }}>
                      {segment.description}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '60px', padding: '40px', backgroundColor: '#222', borderRadius: '4px', border: '1px solid #333' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '24px', textAlign: 'center' }}>
                  Client Profile: The Discerning Homeowner
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                  <div>
                    <h4 style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                      Values
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'Inter', fontSize: '0.9rem', color: '#A0A0A0', lineHeight: '2' }}>
                      <li>Quality over convenience</li>
                      <li>Long-term investment mindset</li>
                      <li>Discretion and professionalism</li>
                      <li>Architectural coherence</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                      Expectations
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'Inter', fontSize: '0.9rem', color: '#A0A0A0', lineHeight: '2' }}>
                      <li>Expert guidance, not sales pressure</li>
                      <li>White-glove installation</li>
                      <li>Multi-decade durability</li>
                      <li>Responsive post-installation support</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                      Typical Projects
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'Inter', fontSize: '0.9rem', color: '#A0A0A0', lineHeight: '2' }}>
                      <li>Primary residence wellness wings</li>
                      <li>Weekend retreat sanctuaries</li>
                      <li>Pool house thermal suites</li>
                      <li>Basement transformation projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Consultative Philosophy */}
          <section style={{ padding: '100px 20px', backgroundColor: '#F9F8F4' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px', display: 'block' }}>
                Our Method
              </span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#1A1A1A', marginBottom: '20px' }}>
                Consultative Philosophy
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto 60px', lineHeight: '1.8' }}>
                We don't sell products. We design solutions. Our six-phase consultative process ensures the right infrastructure for your specific sanctuary.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                {consultativeSteps.map((step, index) => (
                  <div key={index} style={{ textAlign: 'center', padding: '28px' }}>
                    <div style={{ 
                      width: '56px', 
                      height: '56px', 
                      backgroundColor: '#1A1A1A', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      border: '1px solid #AF944F'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>{step.icon}</span>
                    </div>
                    <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                      Step {index + 1}
                    </span>
                    <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#1A1A1A', margin: '12px 0 8px' }}>
                      {step.title}
                    </h4>
                    <p style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#726E8D' }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ padding: '100px 20px', backgroundColor: '#1A1A1A', textAlign: 'center' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#FFFFFF', marginBottom: '20px' }}>
                Begin Your Consultation
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#A0A0A0', marginBottom: '40px', lineHeight: '1.8' }}>
                Schedule a discovery call with our infrastructure specialists. We'll understand your vision and determine if Lux Haven is the right partner for your project.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{ padding: '16px 40px', backgroundColor: '#AF944F', color: '#FFFFFF', border: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', cursor: 'pointer', transition: '0.3s', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Schedule Call
                  </button>
                </Link>
                
                <Link href="/products/saunas" style={{ textDecoration: 'none' }}>
                  <button style={{ padding: '16px 40px', backgroundColor: 'transparent', color: '#FFFFFF', border: '1px solid #AF944F', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', cursor: 'pointer', transition: '0.3s', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    View Collection
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
