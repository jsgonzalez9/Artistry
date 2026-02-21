import Head from "next/head";
import LuxuryHero from "@/components/LuxuryHero";
import OurProducts from "@/pages/components/OurProducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lux Haven Infrastructure | Architectural-Grade Wellness</title>
        <meta name="description" content="Premium sauna and cold plunge infrastructure for High-HHI residential and commercial installations. White-glove delivery and expert installation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Cinematic Hero with Video Parallax */}
        <LuxuryHero
          title="Architectural-Grade Wellness Infrastructure"
          subtitle="Curated thermal and cold immersion assets for residential sanctuaries and luxury hospitality. White-glove precision delivery and expert installation."
          ctaText="Explore Collection"
          ctaLink="/products/saunas"
          parallaxIntensity={0.1}
        />

        {/* Featured Products Showcase */}
        <div style={{
          padding: "80px 20px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <OurProducts />
        </div>

        {/* Email Signup */}
        <div style={{
          padding: "60px 20px",
          background: "#F9F8F4",
          textAlign: "center"
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            color: "#1A1A1A",
            marginBottom: "16px"
          }}>
            Join the Wellness Infrastructure Revolution
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "#726e8d",
            maxWidth: "600px",
            margin: "0 auto 24px"
          }}>
            Receive exclusive insights on thermal wood technology, installation best practices, and early access to new arrivals.
          </p>
          <form style={{
            display: "flex",
            gap: "12px",
            maxWidth: "500px",
            margin: "0 auto",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: "250px",
                padding: "14px 20px",
                border: "1px solid #dcdbe0",
                borderRadius: "2px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem"
              }}
            />
            <button
              type="submit"
              style={{
                padding: "14px 32px",
                background: "#1A1A1A",
                color: "#ffffff",
                border: "0.5px solid #AF944F",
                borderRadius: "2px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#AF944F";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#1A1A1A";
                e.target.style.transform = "scale(1)";
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
