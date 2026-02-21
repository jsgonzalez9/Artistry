# Lux Haven Infrastructure - Agent Style Guide

## Brand Identity

**Name:** Lux Haven Infrastructure  
**Tagline:** "Infrastructure for Your Sanctuary"  
**Positioning:** Architectural-grade wellness infrastructure for high-net-worth residential and hospitality clients.

## Design System

### Colors
- **Primary:** `#1A1A1A` (Charcoal Black)
- **Accent:** `#AF944F` (Gold) - CTAs, highlights, borders
- **Neutral:** `#F9F8F4` (Cream/Tan) - Background
- **Secondary:** `#726E8D` (Cool Gray) - Body text
- **Text on Dark:** `#A0A0A0` (Light Gray)

### Typography
- **Headings:** Playfair Display (serif) - Luxury, editorial
- **Body:** Inter (sans-serif) - Clean, readable
- **Size Scale:**
  - Hero: `clamp(2rem, 5vw, 3rem)`
  - H2: `2rem`
  - H3: `1.5rem`
  - Body: `1rem` / `0.9rem`

### Spacing
- **Section padding:** `80px 20px` (top/bottom, left/right)
- **Content max-width:** `1200px`
- **Card padding:** `24px` to `48px`
- **Grid gaps:** `32px`

### Components

#### Buttons
```javascript
{
  padding: '18px 48px',
  backgroundColor: '#1A1A1A',
  color: '#FFFFFF',
  border: '1px solid #AF944F',
  fontFamily: 'Inter, sans-serif',
  fontSize: '1rem',
  cursor: 'pointer'
}
```

#### Cards
```javascript
{
  padding: '40px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E5E4E0',
  borderRadius: '4px'
}
```

### Page Structure (Standard)
1. `<Head>` with title + meta description
2. `<Navbar />`
3. Hero section (80px padding, centered)
4. Content sections
5. CTA section
6. Footer (handled by layout)

## Writing Voice

### Tone
- **Confident, not arrogant:** "We deliver" not "We're the best"
- **Consultative, not salesy:** Focus on client outcomes
- **Architectural, not retail:** "Infrastructure" not "Products"
- **Permanent, not temporary:** "Decades" not "Years"

### Key Phrases
- "Infrastructure for Your Sanctuary"
- "White-glove delivery and commissioning"
- "Architectural-grade thermal wellness"
- "Nordic Thermo-Spruce construction"
- "25+ year structural warranty"

### Words to Avoid
- ❌ "Cheap", "Discount", "Sale"
- ❌ "Buy now", "Add to cart", "Checkout"
- ❌ "Package", "Kit", "Deal"
- ✅ Use: "Investment", "Commission", "Configure"

## File Conventions

### Naming
- Pages: `kebab-case.js` (e.g., `white-glove.js`, `case-studies.js`)
- Components: PascalCase (e.g., `QuoteModal.js`, `Navbar.js`)
- Config: `camelCase.ts` (e.g., `assets.config.ts`)

### Imports
```javascript
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/pages/components/Navbar";
import Image from "next/image";
```

### Images
- **Local:** `/img/{sku}/filename.jpg` - for owned/generated assets
- **External:** Full HTTPS URLs - for manufacturer/CDN assets
- **Placeholders:** Use `placehold.co` with brand colors

## Product Data Structure

```javascript
{
  sku: 'g11' | 'g4' | 'x2' | 'x4' | 'x6',
  name: 'G11 Garden Series',
  price: 14990,
  capacity: '8-Person',
  weight: '3,196 lbs',
  dimensions: '7\'1" × 7\'1" × 9\'5"',
  features: ['Thermo-Spruce', 'Thermo-Aspen', 'LED Lighting'],
  images: {
    main: '/img/g11/main.jpg',
    // ...
  }
}
```

## Navigation
Current structure:
- Saunas → `/products/saunas`
- Infrared → `/products/infrared`
- Service → `/white-glove`
- About → `/about`
- Contact → `/contact`

## SEO Meta Tags

```javascript
<Head>
  <title>{Page Title} | Lux Haven Infrastructure</title>
  <meta name="description" content="155 chars max describing page" />
</Head>
```

## Assets

All images must be referenced from `assets.config.ts`. Never hardcode image URLs in page files.

### Validating Assets
Run before every deploy:
```bash
python validate-assets.py
```

## Common Tasks

### Adding a New Product
1. Add images to `/public/img/{sku}/`
2. Update `assets.config.ts`
3. Create `/products/{sku}.js`
4. Update navigation if needed

### Creating a New Page
1. Use existing page as template (e.g., `/about.js`)
2. Include proper imports and `<Head>`
3. Follow color/spacing guidelines
4. Add to navigation if standalone page
5. Update this STYLE_GUIDE if introducing new patterns

## Deployment

Platform: Vercel
Command: `vercel --prod`
Pre-deploy checklist:
- [ ] All images load correctly
- [ ] QuoteModal integrated on product pages
- [ ] Build successful locally
- [ ] Run validate-assets.py
