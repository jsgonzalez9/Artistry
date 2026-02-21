import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Minimal Header Component
function Header() {
  return (
    <header style={{
      textAlign: "center",
      padding: "24px 20px",
      borderBottom: "0.5px solid #E5E4E0"
    }}>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "clamp(1.5rem, 3vw, 2rem)",
        fontWeight: 600,
        color: "#1A1A1A",
        letterSpacing: "-0.02em",
        margin: "0 0 4px 0"
      }}>
        LUX HAVEN
      </h1>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.75rem",
        color: "#726e8d",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        margin: 0
      }}>
        Infrastructure
      </p>
      
      {/* Navigation */}
      <nav style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        marginTop: "20px",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.875rem"
      }}>
        <a href="/products/saunas" style={{ color: "#1A1A1A", textDecoration: "none", fontWeight: 500 }}>Saunas</a>
        <a href="/products/infrared" style={{ color: "#1A1A1A", textDecoration: "none", fontWeight: 500 }}>Infrared</a>
        <a href="/contact" style={{ color: "#1A1A1A", textDecoration: "none", fontWeight: 500 }}>Contact</a>
      </nav>
    </header>
  );
}

// Minimal Footer Component
function Footer() {
  return (
    <footer style={{
      background: "#1A1A1A",
      color: "#ffffff",
      padding: "48px 20px",
      marginTop: "80px",
      textAlign: "center"
    }}>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.875rem",
        color: "#726e8d",
        margin: 0
      }}>
        © {new Date().getFullYear()} Lux Haven Infrastructure. A Division of Brand Capital LLC.
      </p>
    </footer>
  );
}

// Hero Component with Real Architectural Image
function Hero() {
  return (
    <section style={{
      position: "relative",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* The Actual Image - Optimized for LCP */}
      <Image
        src="/artnest.jpg"
        alt="Architectural Sauna Installation - Luxury Wellness Infrastructure"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center"
        }}
      />
      {/* The Luxury Overlay - Makes text readable */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
        zIndex: 1
      }} />
      {/* Hero Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        color: "#ffffff",
        textAlign: "center",
        padding: "0 20px",
        maxWidth: "900px"
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "24px"
        }}>
          Architectural-Grade<br />Wellness Infrastructure
        </h1>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          lineHeight: 1.7,
          marginBottom: "40px",
          opacity: 0.9
        }}>
          Curated thermal and cold immersion assets for residential sanctuaries and luxury hospitality.
          White-glove precision delivery and expert installation.
        </p>
        <Link
          href="/products/infrared"
          style={{
            display: "inline-block",
            padding: "18px 48px",
            background: "#1A1A1A",
            color: "#ffffff",
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            fontWeight: 500,
            borderRadius: "2px",
            border: "0.5px solid #AF944F",
            transition: "all 0.25s ease"
          }}
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
}

// Homepage Component
export default function Home() {
  return (
    <>
      <Head>
        <title>Lux Haven Infrastructure | Architectural-Grade Wellness</title>
        <meta name="description" content="Premium sauna and cold plunge infrastructure. White-glove delivery and expert installation." />
      </Head>

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <Hero />

        {/* Products Teaser */}
        <section style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            color: "#1A1A1A",
            textAlign: "center",
            marginBottom: "48px"
          }}>
            Finnmark X-Series Infrared
          </h3>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px"
          }}>
            {[
              { name: "X1 - 1 Person", price: "$3,495" },
              { name: "X2 - 2 Person", price: "$4,295" },
              { name: "X3 - 3 Person", price: "$5,495" },
              { name: "X4 - 4 Person", price: "$6,295" }
            ].map((product) => (
              <div
                key={product.name}
                style={{
                  border: "0.5px solid #E5E4E0",
                  borderRadius: "4px",
                  overflow: "hidden",
                  transition: "box-shadow 0.2s ease"
                }}
              >
                {/* Real Product Image - Replace with actual product images */}
                <div style={{
                  height: "320px",
                  background: "#F9F8F4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  margin: "12px",
                  borderRadius: "2px"
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#726e8d",
                    textAlign: "center",
                    padding: "16px"
                  }}>
                    Finnmark Product Photography
                  </span>
                </div>
                
                {/* Product Info */}
                <div style={{ padding: "20px" }}>
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.25rem",
                    color: "#1A1A1A",
                    margin: "0 0 8px 0"
                  }}>
                    Finnmark {product.name}
                  </h4>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    margin: "0 0 16px 0"
                  }}>
                    {product.price}
                  </p>
                  <a
                    href="/products/infrared"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "12px",
                      background: "#1A1A1A",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      borderRadius: "2px"
                    }}
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
