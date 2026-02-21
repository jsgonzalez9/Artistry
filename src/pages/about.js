import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Brand from "@/pages/components/Brand";
import Esign from "@/pages/components/Esignup";
import AboutUsImg1 from "@/pages/img/about-us-img-1.webp";
import AboutUsImg2 from "@/pages/img/about-us-img-2.webp";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Lux Haven Infrastructure</title>
        <meta name="description" content="Lux Haven Infrastructure is a premier division of Brand Capital LLC, specializing in high-end home wellness and maritime assets." />
      </Head>
      <div className="about-us" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        <div className="about-title" style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
            Asset-Grade Wellness & Maritime Longevity
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--lux-gray)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
            Lux Haven Infrastructure is not a retailer. We are a curated infrastructure partner for discerning clients who view wellness equipment as permanent home assets.
          </p>
        </div>
        
        <div className="about-1st" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
          <div className="about-idea">
            <h2 style={{ fontSize: '2.25rem', marginBottom: '24px' }}>Our Story</h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '20px' }}>
              Lux Haven Infrastructure emerged from Brand Capital LLC—an established entity with a clear vision: elevate the home wellness and maritime equipment market beyond transactional e-commerce.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '20px' }}>
              We recognized a gap. High-net-worth individuals weren't looking for another online store. They needed a partner who understands that a $15,000 sauna or marine power system isn't a purchase—it's infrastructure. It's a permanent upgrade to their sanctuary.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>
              That's why we built Lux Haven: to provide consultative expertise, white-glove logistics, and brand-standard delivery for complex installations that typical dropshippers can't handle.
            </p>
          </div>
          <div className="about-img">
            <Image
              src={AboutUsImg1}
              alt="Lux Haven Infrastructure wellness sanctuary"
              placeholder="blur"
              priority
              style={{ borderRadius: '4px', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
            />
          </div>
        </div>
        
        <div className="about-2nd" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
          <div className="about-img">
            <Image
              src={AboutUsImg2}
              alt="White-glove delivery and installation"
              placeholder="blur"
              priority
              style={{ borderRadius: '4px', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
            />
          </div>
          <div className="about-brand">
            <h2 style={{ fontSize: '2.25rem', marginBottom: '24px' }}>The Lux Haven Difference</h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '20px' }}>
              We manually calculate freight and white-glove assembly for every project. Why? Because brand-standard delivery isn't optional—it's foundational to the luxury experience.
            </p>
            <ul style={{ fontSize: '1.0625rem', lineHeight: '2', paddingLeft: '20px', color: 'var(--lux-text)' }}>
              <li><strong>Curated Selection:</strong> We only partner with manufacturers who meet our standards for quality, durability, and innovation</li>
              <li><strong>White-Glove Logistics:</strong> LTL freight with liftgate, threshold or room-of-choice delivery, professional assembly coordination</li>
              <li><strong>Consultative Sales:</strong> No pressure, no hype—expert guidance to match your space, needs, and vision</li>
              <li><strong>Long-Term Partnership:</strong> We're here for warranty support, maintenance guidance, and any questions that arise</li>
            </ul>
          </div>
        </div>
        
        <div className="about-cta" style={{ textAlign: 'center', padding: '60px 40px', background: 'var(--lux-white)', borderRadius: '4px', border: '0.5px solid var(--lux-gold)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Ready to Transform Your Sanctuary?</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--lux-gray)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Schedule a consultation with our wellness specialists. We'll discuss your space, preferences, and craft a personalized proposal.
          </p>
          <Link href="/contact">
            <button id="about-consultationBtn" style={{ fontSize: '1rem', padding: '16px 40px' }}>
              Schedule a Consultation
            </button>
          </Link>
        </div>
        
        <Brand />
        <Esign />
      </div>
    </>
  );
}
