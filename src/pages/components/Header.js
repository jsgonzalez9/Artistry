import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Brand Header */}
      <div className="name" style={{
        textAlign: "center",
        padding: "24px 0",
        borderBottom: "0.5px solid #E5E4E0"
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          fontWeight: 600,
          color: "#1A1A1A",
          letterSpacing: "-0.02em",
          margin: 0
        }}>
          <Link href={"/"} style={{ textDecoration: "none", color: "#1A1A1A" }}>
            LUX HAVEN
          </Link>
        </h1>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          color: "#726e8d",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginTop: "4px"
        }}>
          Infrastructure
        </p>
      </div>

      {/* Secondary Navigation */}
      <div className="top-right" style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        padding: "16px 0",
        borderBottom: "0.5px solid #E5E4E0",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.875rem"
      }}>
        <h2 className="about" style={{ margin: 0, fontWeight: 500 }}>
          <Link href={"/about"} style={{ color: "#1A1A1A", textDecoration: "none" }}>
            About
          </Link>
        </h2>
        <h2 className="contact" style={{ margin: 0, fontWeight: 500 }}>
          <Link href={"/contact"} style={{ color: "#1A1A1A", textDecoration: "none" }}>
            Contact
          </Link>
        </h2>
        <h2 className="products" style={{ margin: 0, fontWeight: 500 }}>
          <Link href={"/products/saunas"} style={{ color: "#1A1A1A", textDecoration: "none" }}>
            Saunas
          </Link>
        </h2>
        <h2 className="products" style={{ margin: 0, fontWeight: 500 }}>
          <Link href={"/products/infrared"} style={{ color: "#1A1A1A", textDecoration: "none" }}>
            Infrared
          </Link>
        </h2>
      </div>
    </>
  );
}
