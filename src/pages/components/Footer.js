import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "#1A1A1A",
      color: "#ffffff",
      padding: "60px 20px 32px",
      marginTop: "80px"
    }}>
      {/* Main Footer Grid - 4 columns */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "48px"
      }}>
        {/* Brand & Address */}
        <div className="address">
          <h1 className="foot-name" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: "16px"
          }}>
            LUX HAVEN
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            color: "#a0a0a0",
            lineHeight: 1.8,
            marginBottom: "8px"
          }}>
            Architectural-Grade Wellness Infrastructure
          </p>
          <address style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8125rem",
            color: "#726e8d",
            lineHeight: 1.8,
            fontStyle: "normal"
          }}>
            45 Mason Street<br />
            Greenwich, CT 06830<br />
            United States
          </address>
        </div>

        {/* Product Categories */}
        <div className="categories">
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "20px",
            letterSpacing: "-0.01em"
          }}>
            Collection
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link 
              href={"/products/saunas"} 
              style={{
                color: "#a0a0a0",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffffff"}
              onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
            >
              Traditional Saunas
            </Link>
            <Link 
              href={"/products/infrared"} 
              style={{
                color: "#a0a0a0",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffffff"}
              onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
            >
              Infrared Saunas
            </Link>
            <Link 
              href={"/products/cold-plunges"} 
              style={{
                color: "#a0a0a0",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffffff"}
              onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
            >
              Cold Plunges
            </Link>
            <Link 
              href={"/contact"} 
              style={{
                color: "#a0a0a0",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffffff"}
              onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
            >
              Commercial Installations
            </Link>
          </div>
        </div>

        {/* Company */}
        <div className="company">
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "20px",
            letterSpacing: "-0.01em"
          }}>
            Company
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link 
              href={"/contact"} 
              style={{
                color: "#a0a0a0",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffffff"}
              onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
            >
              Contact
            </Link>
            <Link 
              href={"/white-glove"} 
              style={{
                color: "#a0a0a0",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffffff"}
              onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
            >
              White-Glove Service
            </Link>
            <Link 
              href={"/faq"} 
              style={{
                color: "#a0a0a0",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffffff"}
              onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
            >
              FAQ
            </Link>
            <Link 
              href={"/warranty"} 
              style={{
                color: "#a0a0a0",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffffff"}
              onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
            >
              Warranty & Protection
            </Link>
            <Link 
              href={"/case-studies"} 
              style={{
                color: "#a0a0a0",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffffff"}
              onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
            >
              Case Studies
            </Link>
            <Link 
              href={"/about"} 
              style={{
                color: "#a0a0a0",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffffff"}
              onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Contact Column */}
        <div className="contact">
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "20px",
            letterSpacing: "-0.01em"
          }}>
            Contact
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "#a0a0a0",
              lineHeight: 1.6,
              margin: 0
            }}>
              <a 
                href="mailto:sales@luxhaveninfra.com" 
                style={{ color: "#a0a0a0", textDecoration: "none" }}
                onMouseEnter={(e) => e.target.style.color = "#ffffff"}
                onMouseLeave={(e) => e.target.style.color = "#a0a0a0"}
              >
                sales@luxhaveninfra.com
              </a>
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "#726e8d",
              lineHeight: 1.6,
              margin: 0,
              marginTop: "8px"
            }}>
              Mon–Fri: 9am–6pm EST
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar - Full Width */}
      <div style={{
        maxWidth: "1200px",
        margin: "48px auto 0",
        paddingTop: "24px",
        borderTop: "0.5px solid #333",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          color: "#726e8d",
          margin: 0
        }}>
          A Division of Brand Capital LLC · All rights reserved © {new Date().getFullYear()}
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          color: "#726e8d",
          margin: 0
        }}>
          White-glove delivery & installation available nationwide
        </p>
      </div>
    </footer>
  );
}
