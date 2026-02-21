import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import { IconClock, IconTruck, IconBlueprint, IconShield, IconThermometer, IconUsers, IconDrop, IconCheck } from '@/components/icons/LuxIcons';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/MotionLayout';

const refinedEase = [0.22, 1, 0.36, 1];

// FAQ Data organized by category
const faqCategories = [
  {
    id: 'timeline',
    name: 'Timeline & Delivery',
    icon: IconClock,
    questions: [
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery is 14-21 days from order confirmation. G4 units currently in stock can ship within 48 hours of site readiness. Q2 production slots for G11 are limited to 2 units per region.'
      },
      {
        q: 'What is the 30-Day Ready Promise?',
        a: 'For the G4 Garden Series, we guarantee white-glove installation within 30 days of your site being prepared. This includes foundation completion, electrical rough-in, and delivery coordination. If we miss this window, we credit $500 toward your purchase.'
      },
      {
        q: 'Do you ship nationwide?',
        a: 'Yes. We deliver to all 48 contiguous states via dedicated air-ride carriers to prevent vibration damage. Alaska and Hawaii available with extended lead times. International shipping available to Canada and select EU countries.'
      },
      {
        q: 'How will the sauna arrive at my property?',
        a: 'Your unit arrives in 2-3 crated sections via flatbed truck with liftgate service. For properties with limited access (narrow driveways, steep slopes, gated communities), we coordinate specialized equipment including cranes or manual carries. A pre-delivery site survey is included with every order.'
      }
    ]
  },
  {
    id: 'installation',
    name: 'Installation & Site Prep',
    icon: IconBlueprint,
    questions: [
      {
        q: 'Is professional installation included?',
        a: 'Yes. White-glove installation is included in your purchase price. Our certified team handles unloading, placement, assembly, electrical connection, and testing. You receive a fully commissioned unit ready to use—no contractor coordination required.'
      },
      {
        q: 'What foundation do I need?',
        a: 'G-Series saunas require a level, load-bearing surface capable of supporting 1,650-3,196 lbs (depending on model). Acceptable foundations include: concrete pad (4" minimum), compacted gravel with pavers, or reinforced deck (consult structural engineer for elevated installations). We provide a detailed foundation guide after purchase.'
      },
      {
        q: 'What electrical requirements are needed?',
        a: 'G-Series (Outdoor): 240V, 50-60 amp dedicated circuit with GFCI disconnect. X-Series (Indoor Infrared): Standard 120V, 15-20 amp outlet. Our team coordinates with your electrician during the site assessment phase. Permit requirements vary by municipality—we provide documentation for your HOA or building department.'
      },
      {
        q: 'Can the sauna be moved after installation?',
        a: 'Yes, but it requires professional disassembly and reassembly. G-Series units can be relocated within your property or to a new address. We offer relocation services at cost for existing customers. Note: Frequent moving may void the structural warranty.'
      },
      {
        q: 'Do you handle permits?',
        a: 'We provide all documentation needed for permit approval, including electrical schematics, structural specs, and manufacturer certifications. Permit requirements vary by location. Some municipalities classify saunas as "temporary structures" (no permit required); others require electrical permits only. Your installation team will advise during site assessment.'
      }
    ]
  },
  {
    id: 'financing',
    name: 'Financing & Payment',
    icon: IconUsers,
    questions: [
      {
        q: 'What financing options are available?',
        a: 'We partner with Affirm to offer 0% APR for 36 months on approved credit. G11 from $481/mo, G4 from $305/mo. Prequalification takes 60 seconds and does not impact your credit score. Alternative: Progressive Leasing for no-credit-check options (higher rates apply).'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'Wire transfer, ACH, certified check, and all major credit cards. For payments over $10,000, we recommend wire transfer to avoid card processing limits. A 50% deposit secures your production slot; balance is due upon delivery.'
      },
      {
        q: 'Is there a cancellation policy?',
        a: 'Orders can be cancelled within 14 days of placement for a full refund of deposit. After production begins (typically day 15), a 15% restocking fee applies. Once delivered, all sales are final unless covered under warranty.'
      },
      {
        q: 'Do you offer price matching?',
        a: 'We do not price match. Our pricing includes white-glove delivery, professional installation, electrical commissioning, and 25-year warranty—services typically billed separately by competitors. We compete on total value, not sticker price.'
      }
    ]
  },
  {
    id: 'warranty',
    name: 'Warranty & Maintenance',
    icon: IconShield,
    questions: [
      {
        q: 'What does the warranty cover?',
        a: '25-Year Structural Warranty: Covers wood degradation, joinery failure, and roof integrity. 5-Year Component Warranty: Covers heater, controls, lighting, and electrical components. 1-Year Cosmetic Warranty: Covers finish variations and surface imperfections. Full warranty terms provided at delivery.'
      },
      {
        q: 'What maintenance is required?',
        a: 'Outdoor saunas benefit from annual treatment with wood oil or sealant (included: 1-year supply). Interior requires wiping down after use to remove sweat residue. Heater stones should be rearranged annually and replaced every 2-3 years with heavy use. Detailed maintenance guide included with your unit.'
      },
      {
        q: 'How long will the sauna last?',
        a: 'With proper maintenance, G-Series saunas are engineered for 25+ years of service. Thermo-Modified Spruce resists rot, insects, and decay without chemical treatment. Many units serve multiple generations of families. We have installation records from 2001 still in active use.'
      },
      {
        q: 'What if something breaks?',
        a: 'Contact our support team within the warranty period. We ship replacement parts within 48 hours via expedited delivery. For electrical or structural issues, we dispatch a certified technician within 7 business days. Emergency support available for complete system failures.'
      },
      {
        q: 'Can I use the sauna in winter?',
        a: 'Yes. G-Series saunas operate in temperatures from -40°F to 120°F. Cold weather actually enhances the sauna experience (contrast therapy). The 4" insulation maintains heat efficiency even in extreme cold. Allow 15-20 minutes additional heat-up time in sub-zero conditions.'
      }
    ]
  },
  {
    id: 'product',
    name: 'Product & Usage',
    icon: IconThermometer,
    questions: [
      {
        q: 'How hot does the sauna get?',
        a: 'G-Series (Traditional): 170°F-190°F typical operating range. Harvia 9kW heater reaches target temperature in 45-60 minutes. X-Series (Infrared): 120°F-140°F (lower temperatures penetrate deeper into tissue). Both provide therapeutic heat benefits at their respective ranges.'
      },
      {
        q: 'How many people fit?',
        a: 'G11: 8 people comfortably (6 seated, 2 lounging). G4: 6 people (4 seated, 2 lounging). X2: 2 people. X4: 4 people. X6: 6 people. Seating capacity assumes average adult size; larger individuals may prefer fewer occupants.'
      },
      {
        q: 'Can I use essential oils?',
        a: 'Yes. Add 3-5 drops of sauna-safe essential oils (eucalyptus, cedar, birch) to water before ladling onto heater stones. Never apply oils directly to hot stones—they can ignite. Avoid synthetic fragrances which can produce harmful fumes when heated.'
      },
      {
        q: 'Is Wi-Fi required?',
        a: 'No. Wi-Fi enables app-based control (G4 includes Wi-Fi LED system), but all saunas operate fully via manual controls. App features include: pre-heating schedules, lighting scenes, and temperature monitoring. Connection is to your home 2.4GHz network.'
      },
      {
        q: 'What is the difference between G-Series and X-Series?',
        a: 'G-Series (Garden): Outdoor traditional Finnish saunas with wood-fired or electric heaters, 170-190°F, high humidity (löyly). X-Series (Xperience): Indoor infrared saunas, 120-140°F, zero humidity, carbon-nano heating panels. G-Series = social, ritual, authentic. X-Series = convenient, therapeutic, low-maintenance.'
      }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('timeline');
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (categoryId, index) => {
    setOpenQuestions(prev => ({
      ...prev,
      [`${categoryId}-${index}`]: !prev[`${categoryId}-${index}`]
    }));
  };

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory);

  return (
    <>
      <Head>
        <title>FAQ | Lux Haven Infrastructure</title>
        <meta name="description" content="Answers to common questions about delivery, installation, financing, and warranty for luxury sauna infrastructure." />
      </Head>

      <div style={{ backgroundColor: '#F9F8F4', minHeight: '100vh' }}>
        <Navbar />
        
        {/* Hero */}
        <section style={{ 
          padding: '120px 20px 80px', 
          backgroundColor: '#0A0A0A',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontSize: '3rem', 
            color: '#F5F5F5',
            marginBottom: '16px'
          }}>
            Frequently Asked Questions
          </h1>
          <p style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '1.1rem', 
            color: '#A0A0A0',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Everything you need to know about your wellness infrastructure investment
          </p>
        </section>

        {/* Category Navigation */}
        <section style={{ 
          padding: '60px 20px', 
          backgroundColor: '#F9F8F4',
          borderBottom: '1px solid #E5E4E0'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center'
          }}>
            {faqCategories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    backgroundColor: activeCategory === category.id ? '#0A0A0A' : 'white',
                    color: activeCategory === category.id ? '#F5F5F5' : '#1A1A1A',
                    border: '1px solid #E5E4E0',
                    borderRadius: '4px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Icon className="icon-sm" style={{ width: '20px', height: '20px' }} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* FAQ Content */}
        <section style={{ padding: '80px 20px', backgroundColor: '#F9F8F4' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <AnimatedSection>
              <h2 style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '1.75rem', 
                color: '#1A1A1A',
                marginBottom: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                {(() => {
                  const Icon = currentCategory.icon;
                  return <Icon className="icon-md gold" />;
                })()}
                {currentCategory.name}
              </h2>
            </AnimatedSection>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {currentCategory.questions.map((faq, index) => {
                const isOpen = openQuestions[`${currentCategory.id}-${index}`];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: refinedEase, delay: index * 0.05 }}
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid #E5E4E0',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      onClick={() => toggleQuestion(currentCategory.id, index)}
                      style={{
                        width: '100%',
                        padding: '24px',
                        textAlign: 'left',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '16px'
                      }}
                    >
                      <span style={{ 
                        fontFamily: 'Inter, sans-serif', 
                        fontSize: '1rem', 
                        fontWeight: '500', 
                        color: '#1A1A1A',
                        lineHeight: '1.5'
                      }}>
                        {faq.q}
                      </span>
                      <span style={{ 
                        fontSize: '1.5rem', 
                        color: '#C5A059',
                        transition: 'transform 0.3s ease',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        lineHeight: 1
                      }}>
                        +
                      </span>
                    </button>
                    
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: refinedEase }}
                      >
                        <div style={{ 
                          padding: '0 24px 24px', 
                          color: '#555555',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.95rem',
                          lineHeight: '1.7',
                          borderTop: '1px solid rgba(0,0,0,0.05)',
                          paddingTop: '16px'
                        }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ 
          padding: '100px 20px', 
          backgroundColor: '#0A0A0A',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontSize: '2rem', 
              color: '#F5F5F5',
              marginBottom: '16px'
            }}>
              Still Have Questions?
            </h2>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '1rem', 
              color: '#A0A0A0',
              marginBottom: '32px'
            }}>
              Our wellness infrastructure specialists are available for personalized consultations.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/contact"
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  backgroundColor: '#C5A059',
                  color: '#0A0A0A',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Contact Us →
              </a>
              <a
                href="/products/g11"
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  backgroundColor: 'transparent',
                  color: '#F5F5F5',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                View Products
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
