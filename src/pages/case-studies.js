import Head from 'next/head';
import Navbar from './components/Navbar';
import Link from 'next/link';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'beverly-hills-estate',
      title: 'Beverly Hills Residential Sanctuary',
      location: 'Beverly Hills, California',
      type: 'Private Estate',
      products: ['G11 Garden Series', 'C6 Cold Plunge'],
      timeline: '8 Weeks',
      summary: 'Complete thermal wellness wing featuring traditional Finnish sauna and cold plunge recovery system.',
      features: [
        'Integrated into 3,500 sq ft wellness pavilion',
        'Custom cedar paneling matching home architecture',
        'Smart home integration with Savant control',
        'Underfloor heating extension'
      ],
      stats: [
        { label: 'Square Feet', value: '3,500' },
        { label: 'Install Time', value: '8 wks' },
        { label: 'HVAC Zones', value: '6' }
      ],
      testimonial: {
        quote: "Lux Haven treated this installation with the same precision as our main house construction. The commissioning process was flawless.",
        author: "Architectural Client",
        role: "Estate Owner"
      }
    },
    {
      id: 'aspen-mountain-retreat',
      title: 'Aspen Mountain Retreat',
      location: 'Aspen, Colorado',
      type: 'Weekend Residence',
      products: ['G4 Series', 'X2 Infrared'],
      timeline: '6 Weeks',
      summary: 'Dual thermal system installation at 8,200ft elevation with extreme weather considerations.',
      features: [
        'Snow load rated sauna enclosure',
        'Dual-zone infrared for guest rooms',
        'Automated snow melt entry system',
        'Off-grid electrical system integration'
      ],
      stats: [
        { label: 'Elevation', value: '8,200ft' },
        { label: 'Snow Load', value: '150lb' },
        { label: 'Temp Range', value: '-20°F to 200°F' }
      ],
      testimonial: {
        quote: "The engineering for high-altitude, extreme cold was exactly what we needed. These systems operate flawlessly.",
        author: "Mountain Property Owner",
        role: "Private Client"
      }
    },
    {
      id: 'miami-beach-boutique',
      title: 'Miami Beach Boutique Hotel',
      location: 'Miami Beach, Florida',
      type: 'Luxury Hospitality',
      products: ['G4 Series (×4)', 'C8 Cold Plunge (×2)'],
      timeline: '12 Weeks',
      summary: 'Multi-suite wellness installations for exclusive beachfront property featuring guest-accessible thermal therapy.',
      features: [
        'Coastal-grade salt-resistant finishes',
        'UV protection coating for tropical sun',
        'Commercial-grade cycle durability',
        'Unified guest booking system integration'
      ],
      stats: [
        { label: 'Suites', value: '4' },
        { label: 'Daily Users', value: '150+' },
        { label: 'Humidity Rating', value: 'Coastal' }
      ],
      testimonial: {
        quote: "Guest satisfaction scores for the wellness center are outperforming every amenity. The equipment maintenance has been exceptionally reliable.",
        author: "Hotel Management",
        role: "Operations Director"
      }
    },
    {
      id: 'athletes-compound',
      title: 'Pro Athlete Recovery Compound',
      location: 'Scottsdale, Arizona',
      type: 'Performance Training',
      products: ['C12 Cold Plunge', 'G11 Series'],
      timeline: '4 Weeks',
      summary: 'Elite athlete recovery facility with rapid thermal contrast therapy protocols.',
      features: [
        'Contrast therapy circuit design',
        'Heart rate monitor integration',
        'Recovery data tracking system',
        'Private access with guest suite'
      ],
      stats: [
        { label: 'Daily Sessions', value: '20+' },
        { label: 'Temp Precision', value: '±0.5°F' },
        { label: 'Recovery Time', value: '-40%' }
      ],
      testimonial: {
        quote: "The precision of the cold plunge temperature control is critical for our protocols. Lux Haven delivered exactly what we specified.",
        author: "Performance Coach",
        role: "Training Facility"
      }
    },
    {
      id: 'hamptons-pool-house',
      title: 'Hamptons Pool House Transformation',
      location: 'East Hampton, New York',
      type: 'Residential Renovation',
      products: ['X2 Indoor Xperience', 'Custom Bench'],
      timeline: '5 Weeks',
      summary: 'Basement pool house conversion into comprehensive wellness sanctuary with infrared sauna suite.',
      features: [
        'Damp-proof installation in sub-grade space',
        'Custom benching for entertaining',
        'Integrated sound system',
        'Mood lighting with app control'
      ],
      stats: [
        { label: 'Space', value: '600 sq ft' },
        { label: 'Heating Time', value: '20 min' },
        { label: 'Capacity', value: '6 person' }
      ],
      testimonial: {
        quote: "They transformed a damp, unused space into our family's favorite part of the house. The planning phase prevented every potential issue.",
        author: "Homeowner",
        role: "Residential Client"
      }
    },
    {
      id: 'tech-executive-estate',
      title: 'Silicon Valley Executive Estate',
      location: 'Palo Alto, California',
      type: 'New Construction',
      products: ['G11 Series', 'G4 Series', 'C8 Cold Plunge'],
      timeline: '16 Weeks',
      summary: 'Integrated wellness wing designed in collaboration with architects during new construction phase.',
      features: [
        'Pre-construction electrical planning',
        'Home automation integration',
        'Ventilation engineering for indoor air quality',
        'Dedicated utility room with tankless hot water'
      ],
      stats: [
        { label: 'Total Sq Ft', value: '1,200' },
        { label: 'Systems', value: '3' },
        { label: 'Design Time', value: '6 mo' }
      ],
      testimonial: {
        quote: "Involving Lux Haven during the architectural phase saved us significant time and cost. They're infrastructure partners, not vendors.",
        author: "Estate Manager",
        role: "Construction Liaison"
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies | Lux Haven Infrastructure</title>
        <meta name="description" content="Luxury wellness installation case studies featuring estates, boutique hotels, and professional training facilities. See our white-glove delivery and commissioning work." />
        <meta name="keywords" content="wellness case studies, luxury sauna installation, home spa projects, residential wellness installation, boutique hotel spa examples" />
        <meta property="og:title" content="Case Studies | Lux Haven Infrastructure" />
        <meta property="og:description" content="Review our portfolio of residential sanctuary and hospitality wellness installations." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://luxhaveninfrastructure.com/case-studies" />
      </Head>

      <div style={{ backgroundColor: '#F9F8F4', minHeight: '100vh' }}>
        <Navbar />

        <main>
          {/* Hero Section */}
          <section style={{ padding: '100px 20px 80px', backgroundColor: '#1A1A1A', textAlign: 'center' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px', display: 'block' }}>
                Portfolio
              </span>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFFFFF', marginBottom: '24px', lineHeight: '1.2' }}>
                Case Studies
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#A0A0A0', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                A selection of residential sanctuary and hospitality wellness installations demonstrating our infrastructure-first approach.
              </p>
            </div>
          </section>

          {/* Stats Overview */}
          <section style={{ padding: '60px 20px', backgroundColor: '#222' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', textAlign: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'Playfair Display', fontSize: '3rem', color: '#AF944F' }}>50+</div>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#726E8D' }}>Installations</p>
                </div>
                <div>
                  <div style={{ fontFamily: 'Playfair Display', fontSize: '3rem', color: '#AF944F' }}>25+</div>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#726E8D' }}>States Served</p>
                </div>
                <div>
                  <div style={{ fontFamily: 'Playfair Display', fontSize: '3rem', color: '#AF944F' }}>100%</div>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#726E8D' }}>Commission Success</p>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study Cards */}
          <section style={{ padding: '100px 20px', backgroundColor: '#F9F8F4' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                {caseStudies.map((study, index) => (
                  <article key={study.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '4px', border: '1px solid #E5E4E0', overflow: 'hidden' }}>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      alignItems: 'stretch'
                    }}>
                      {/* Left Content */}
                      <div style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginBottom: '24px' }}>
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                            {study.type}
                          </span>
                          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1A1A1A', margin: '12px 0 8px' }}>
                            {study.title}
                          </h2>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#726E8D', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            📍 {study.location}
                          </p>
                        </div>

                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#555', lineHeight: '1.7', marginBottom: '24px' }}>
                          {study.summary}
                        </p>

                        <div style={{ marginBottom: '24px' }}>
                          <h4 style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontWeight: 600 }}>
                            Products Installed
                          </h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {study.products.map((product, i) => (
                              <span key={i} style={{ 
                                fontFamily: 'Inter', 
                                fontSize: '0.8rem', 
                                color: '#555', 
                                backgroundColor: '#F9F8F4', 
                                padding: '6px 12px', 
                                borderRadius: '4px',
                                border: '1px solid #E5E4E0'
                              }}>
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#AF944F', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontWeight: 600 }}>
                            Installation Features
                          </h4>
                          <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'Inter', fontSize: '0.9rem', color: '#555', lineHeight: '1.8' }}>
                            {study.features.map((feature, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ color: '#AF944F' }}>•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Stats + Quote */}
                      <div style={{ 
                        padding: '48px', 
                        backgroundColor: '#1A1A1A', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between' 
                      }}>
                        <div>
                          <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', flexWrap: 'wrap' }}>
                            {study.stats.map((stat, i) => (
                              <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', color: '#AF944F', marginBottom: '4px' }}>
                                  {stat.value}
                                </div>
                                <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#726E8D', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                  {stat.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div style={{ borderTop: '1px solid #333', paddingTop: '32px' }}>
                          <blockquote style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#FFFFFF', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px' }}>
                            "{study.testimonial.quote}"
                          </blockquote>
                          <div>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#AF944F', margin: 0 }}>
                              {study.testimonial.author}
                            </p>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#726E8D', margin: '4px 0 0 0' }}>
                              {study.testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Project Types Section */}
          <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#1A1A1A', marginBottom: '40px' }}>
                Project Types We Serve
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                {[
                  { emoji: '🏡', title: 'Private Estates', desc: 'Primary and secondary residences' },
                  { emoji: '🏨', title: 'Boutique Hotels', desc: 'Under 100 key properties' },
                  { emoji: '🏢', title: 'Corporate Wellness', desc: 'Executive facilities' },
                  { emoji: '🏋️', title: 'Athletic Training', desc: 'Recovery centers' },
                  { emoji: '🎭', title: 'Entertainment', desc: 'Production facilities' },
                  { emoji: '✈️', title: 'Private Aviation', desc: 'FBO facilities' }
                ].map((type, i) => (
                  <div key={i} style={{ padding: '28px', border: '1px solid #E5E4E0', borderRadius: '4px', backgroundColor: '#F9F8F4' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{type.emoji}</div>
                    <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#1A1A1A', marginBottom: '8px' }}>{type.title}</h4>
                    <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#726E8D', margin: 0 }}>{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ padding: '100px 20px', backgroundColor: '#1A1A1A', textAlign: 'center' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#FFFFFF', marginBottom: '20px' }}>
                Your Project Deserves Documentation
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#A0A0A0', marginBottom: '32px', lineHeight: '1.7' }}>
                We'd like to feature your installation in our case study portfolio. Every project receives documented photography and detailed project summaries.
              </p>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '16px 40px', backgroundColor: '#AF944F', color: '#FFFFFF', border: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', cursor: 'pointer', transition: '0.3s', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Discuss Your Project
                </button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
