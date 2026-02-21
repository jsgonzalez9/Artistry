// Central asset configuration for Lux Haven Infrastructure
// Use this file for all image and media references across the site

export const assets = {
  // Brand assets
  brand: {
    logo: '/logo.svg',
    favicon: '/favicon.ico',
  },
  
  // Product images - organized by SKU
  products: {
    g11: {
      main: '/img/g11/Gemini_Generated_Image_bn6jflbn6jflbn6j.png',
      garden: '/img/g11/Gemini_Generated_Image_qhcnl3qhcnl3qhcn.png',
      alternate: '/img/g11/Gemini_Generated_Image_xz2b1lxz2b1lxz2b.png',
      interior: '/img/g11/Model-G11-Sauna-Interior-1-scaled.jpg',
    },
    g4: {
      // External CDN - Shopify
      main: 'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-gl4-6-person-outdoor-home-sauna-kit_1000x.jpg',
      detail: 'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-gl4-hero_1000x.jpg',
    },
    x2: {
      // External CDN - Shopify
      main: 'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-x2-hero_1000x.jpg',
      detail: 'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-x2-interior_1000x.jpg',
    },
    x4: {
      // Placeholder - need manufacturer assets
      main: 'https://placehold.co/800x600/1A1A1A/AF944F?text=X4+Indoor+Xperience',
      interior: 'https://placehold.co/800x600/1A1A1A/AF944F?text=X4+Interior',
    },
    x6: {
      // Placeholder - need manufacturer assets
      main: 'https://placehold.co/800x600/1A1A1A/AF944F?text=X6+Indoor+Xperience',
      interior: 'https://placehold.co/800x600/1A1A1A/AF944F?text=X6+Interior',
    },
    coldPlunge: {
      // Placeholder - Slate Immersion coming soon
      main: 'https://placehold.co/800x600/1A1A1A/AF944F?text=Slate+Immersion',
    },
  },
  
  // Marketing/Content images
  marketing: {
    heroSauna: '/images/sauna-hero.jpg',
    aboutPlaceholder: null, // Coming Q2 2026
    caseStudyPlaceholder: null, // Coming Q2 2026
  },
  
  // Icons
  icons: {
    consultation: '📐',
    delivery: '🚛', 
    electrical: '⚡',
    assembly: '🔧',
    warranty: '🏗️',
    heater: '🔥',
    infrared: '⚡',
    lighting: '💡',
  },
} as const;

// Helper to get product image with fallback
export function getProductImage(sku: string, variant: string = 'main'): string {
  const product = assets.products[sku as keyof typeof assets.products];
  if (!product) {
    console.warn(`Unknown product SKU: ${sku}`);
    return 'https://placehold.co/800x600/1A1A1A/AF944F?text=Product+Image';
  }
  return product[variant as keyof typeof product] || product.main;
}

// Check if image is external (requires next/image domains config)
export function isExternalImage(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

// Whitelisted domains for next.config.js
export const whitelistedDomains = [
  'myluxuryhomespa.com',
  'saunalife.com', 
  'images.unsplash.com',
  'placehold.co',
];

export default assets;
