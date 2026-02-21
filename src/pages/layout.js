import Head from "next/head";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lux Haven Infrastructure | Architectural-Grade Wellness</title>
        <meta name="description" content="Premium sauna and cold plunge infrastructure. White-glove delivery and expert installation for High-HHI residential and commercial projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1A1A1A" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lux Haven Infrastructure" />
        <meta property="og:description" content="Architectural-grade wellness infrastructure for luxury homes and hospitality." />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <SearchProvider>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <SpeedInsights />
          <Analytics />
        </CartProvider>
      </SearchProvider>
      <Footer />
    </>
  );
}
