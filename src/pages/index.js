import Head from "next/head";

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

// Homepage Component
export default function Home() {
  return (
    <>
      <Head>
        <title>Lux Haven Infrastructure</title>
        <meta name="description" content="Architectural-grade wellness infrastructure" />
      </Head>

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />

        {/* Hero Section */}
        <section style={{
          background: "linear-gradient(180deg, #F9F8F4 0%, #E5E4E0 100%)",
          padding: "120px 20px",
          textAlign: "center"
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: "#1A1A1A",
            marginBottom: "24px",
            lineHeight: 1.2
          }}>
            Architectural-Grade<br />Wellness Infrastructure
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
            letterSpacing: "-0.02em"
          }}>
            Curated thermal and cold immersion assets for residential sanctuaries and luxury hospitality.
            White-glove precision delivery and expert installation.
          </p>
          <a
            href="/products/infrared"
            style={{
              display: "inline-block",
              padding: "16px 40px",
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
          </a>
        </section>

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
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Image Placeholder */}
                <div style={{
                  height: "320px",
                  background: "linear-gradient(180deg, #F9F8F4 0%, #E5E4E0 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #AF944F",
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
                    Product Photography<br />In Progress
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
