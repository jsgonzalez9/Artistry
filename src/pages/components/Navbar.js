import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ width: '100%', backgroundColor: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingTop: '8px' }}>
      {/* Top Branding Bar */}
      <div style={{ padding: '16px 20px 12px', textAlign: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', letterSpacing: '0.2rem', color: '#F5F5F5', margin: '0 0 4px 0' }}>
            LUX HAVEN
          </h1>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.3rem', color: '#C5A059', display: 'inline-block' }}>
            INFRASTRUCTURE
          </span>
        </Link>
      </div>
      {/* Navigation Links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', paddingBottom: '16px', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>
        <Link href="/products/saunas" style={{ color: '#C5C5C5', textDecoration: 'none' }}>Saunas</Link>
        <Link href="/products/infrared" style={{ color: '#C5C5C5', textDecoration: 'none' }}>Infrared</Link>
        <Link href="/products/hyperbaric-chambers" style={{ color: '#C5A059', textDecoration: 'none' }}>Hyperbarics</Link>
        <Link href="/service" style={{ color: '#C5C5C5', textDecoration: 'none' }}>Service</Link>
        <Link href="/faq" style={{ color: '#C5C5C5', textDecoration: 'none' }}>FAQ</Link>
        <Link href="/about" style={{ color: '#C5C5C5', textDecoration: 'none' }}>About</Link>
        <Link href="/contact" style={{ color: '#C5C5C5', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
