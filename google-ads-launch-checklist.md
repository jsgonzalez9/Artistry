# Google Ads Launch Checklist - Lux Haven Infrastructure

**Status:** Starting from scratch  
**Goal:** First campaign live within 14 days  
**Initial Budget:** $3,000-5,000/month (Phase 1)

---

## PHASE 1: ACCOUNT SETUP (Week 1)

### Step 1: Create Google Ads Account

**Do this:**
- [ ] Go to ads.google.com
- [ ] Sign in with **cliffgone@gmail.com**
- [ ] Select "Switch to Expert Mode" (skip Smart campaigns)
- [ ] Enter billing info: Credit card + business address
- [ ] Set currency: USD
- [ ] Set time zone: America/Chicago

**Important:**
- DO NOT use Smart Campaigns (limited control)
- DO use Expert Mode from the start
- Billing threshold starts at $50, increases to $500 over time

---

### Step 2: Set Up Conversion Tracking

**This is CRITICAL for high-ticket products.** Without it, you're flying blind.

**Conversion Actions to Create:**

| Priority | Conversion | Value | Count | Why |
|----------|-----------|-------|-------|-----|
| **High** | Purchase | $7,500 | One | Actual sales (most important) |
| **High** | Lead Form Submit | $150 | One | Consultation request |
| **Medium** | Phone Call (30+ sec) | $75 | One | Phone inquiries |
| **Medium** | Schedule Call | $200 | One | Calendly/similar bookings |
| **Low** | Page View - Pricing | $10 | Every | Interest indicator |

**How to Set Up:**

1. **Tools → Conversions → New Conversion Action**
2. **Website** (not app or phone)
3. **Enter your domain:** luxhaveninfrastructure.com
4. **Install via Google Tag** (easiest method)

**For Next.js:**
```javascript
// Add to pages/_app.js or layout.js
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-XXXXXXXXX');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
```

5. **Add conversion events via gtag:**

```javascript
// When lead form is submitted
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXX/YYYYYY-XXXXX',
  'value': 150.0,
  'currency': 'USD'
});

// When purchase is completed
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXX/ZZZZZZ-XXXXX',
  'transaction_id': orderId,  // unique order ID
  'value': orderValue,
  'currency': 'USD'
});
```

**Test conversions:** Use Google Tag Assistant Chrome extension

---

### Step 3: Link Google Analytics 4

1. **GA4 Setup:**
   - Go to analytics.google.com
   - Create property: "Lux Haven Infrastructure"
   - Data stream: Web → https://luxhaveninfrastructure.com
   - Copy Measurement ID (G-XXXXXXXXXX)

2. **Link to Google Ads:**
   - Google Ads → Tools → Linked Accounts → Google Analytics
   - Select your GA4 property
   - Enable auto-tagging

3. **Add to Next.js:**
```javascript
// In your layout or _app.js
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="ga4" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
</Script>
```

---

## PHASE 2: CAMPAIGN STRUCTURE (Week 2)

### Recommended First Campaigns

**Campaign Budget Allocation: $4,000/mo**

```
TOTAL: $4,000/mo
├── Campaign 1: Brand Protection ($500/mo - 12.5%)
├── Campaign 2: High-Intent Search ($2,500/mo - 62.5%)
├── Campaign 3: Competitor Terms ($700/mo - 17.5%)
└── Campaign 4: Remarketing ($300/mo - 7.5%)
```

---

### Campaign 1: Brand Protection (Always On)

**Goal:** Capture branded searches, protect from competitors

**Keywords:**
```
[Lux Haven Infrastructure] - exact match
"Lux Haven Infrastructure" - phrase match
"lux haven sauna"
"lux haven cold plunge"
"lux haven marine"
```

**Settings:**
- Bid strategy: Target impression share (95%)
- Budget: $500/mo ($16/day)
- Location: US only
- Network: Search Network only (uncheck Partners)
- Device: All devices

**Ad Copy Template:**
```
Headline 1: Lux Haven Infrastructure
Headline 2: Premium Sauna & Cold Plunge
Headline 3: White-Glove Installation
Description 1: 25-year warranty on architectural-grade wellness. 30-day installation guarantee.
Description 2: Schedule complimentary site consultation. Continental US delivery.
```

**Why:** Competitors will bid on your brand name. This is cheap insurance.

---

### Campaign 2: High-Intent Search (Primary Revenue Driver)

**Goal:** Capture buyers actively researching sauna/cold plunge

**Ad Groups by Product:**

#### Ad Group: Saunas ($1,200/mo)
Keywords (phrase match + broad match modified):
```
"outdoor sauna for home" ($8-12 CPC)
"premium home sauna" ($10-15 CPC)
"cedar sauna outdoor" ($6-10 CPC)
"luxury infrared sauna" ($12-18 CPC)
"custom sauna installation" ($15-25 CPC)
"architectural sauna" ($8-12 CPC)
"high end sauna" ($10-14 CPC)
```

**Negative Keywords (Add to all campaigns):**
```
-free
-cheap
diy
used
craigslist
amazon
ebay
discount
groupon
portable
kit
tent
canvas
under $500
under $1000
costco
home depot
lowes
```

#### Ad Group: Cold Plunge ($800/mo)
Keywords:
```
"cold plunge tub"
"cold plunge for home"
"home cold therapy"
"ice bath at home"
"portable cold plunge" (negative in this campaign, add to another)
"premium cold plunge"
"stainless steel cold plunge"
```

#### Ad Group: Marine Tech ($500/mo)
Keywords:
```
"hyperbaric chamber home"
"hyperbaric therapy equipment"
"mild hyperbaric chamber"
"hard shell hyperbaric chamber"
```

**Settings:**
- Bid strategy: Maximize Conversions (start) → Target CPA later ($150)
- Budget: $2,500/mo
- Location: Continental US (exclude AK, HI, PR initially)
- Network: Search only
- Device: +20% mobile bid adjustment (people research on phone, buy on desktop)

**Ad Copy:**
```
Headline 1: Premium Saunas Delivered
Headline 2: White-Glove Installation
Headline 3: 25-Year Warranty Included
Headline 4: 30-Day Setup Guarantee

Description 1: Skip contractor delays. We deliver, install & commission premium home wellness in 30 days.
Description 2: Schedule free site consultation. Architectural-grade materials. Continental US.

Sitelinks:
- View Sauna Collection → /products/saunas
- Cold Plunge Systems → /products/cold-plunge
- Our Installation Process → /service
- Schedule Consultation → /contact

Callouts:
- 25-Year Warranty
- White-Glove Delivery
- Licensed Installation
- 30-Day Guarantee
- Premium Materials
- Continental US
```

---

### Campaign 3: Competitor Terms (Test Campaign)

**Goal:** Steal market share from established brands

**Competitors to Target:**
```
"sunlighten sauna"
"clearlight sauna"
"finnleo"
"almost heaven sauna"
"saunaplace"
"plunge.com"
"coldture"
```

**Strategy:**
- Bid aggressively (top 2 positions)
- Ad copy emphasizes differentiation
- Budget: $700/mo
- Watch for trademark disputes (Google usually allows if ad text doesn't use trademark in headline)

**Ad Copy:**
```
Headline 1: Better Than [Competitor]
Headline 2: Full-Service Installation
Headline 3: 25-Year Warranty

Description 1: Don't DIY. We handle delivery, electrical, assembly & testing. 30-day completion guarantee.
```

---

### Campaign 4: Remarketing (R LSAs)

**Goal:** Re-engage website visitors who didn't convert

**Audiences to Create:**
1. All website visitors (30 days)
2. Pricing page viewers (14 days) - HIGH INTENT
3. Product page viewers (14 days)
4. Cart abandoners (7 days) - HIGHEST INTENT (if you have cart)
5. Service page viewers (14 days)

**Settings:**
- Campaign type: Display
- Budget: $300/mo
- Bid strategy: Target CPA $75
- Frequency cap: 5 impressions/day

**Creative:**
Use responsive display ads. Upload:
- Logo (square + landscape)
- 3-5 product images
- Headlines: "Still Considering?", "Get Pricing", "Book Consultation"
- Descriptions: "Premium sauna installation in 30 days. Schedule free site assessment."

---

## PHASE 3: LANDING PAGE OPTIMIZATION

### Must-Have Elements for Paid Traffic

Every ad clicks to a page with:

| Element | Purpose | Priority |
|---------|---------|----------|
| **Clear headline** | Match search intent | CRITICAL |
| **Trust signals** | 25yr warranty, 200+ installs | CRITICAL |
| **CTA above fold** | "Schedule Free Consultation" | CRITICAL |
| **Phone number** | Click-to-call on mobile | HIGH |
| **Product imagery** | High-res, lifestyle shots | HIGH |
| **Social proof** | Testimonials, case studies | HIGH |
| **FAQ accordion** | Address objections | MEDIUM |
| **Live chat** | Capture hesitant visitors | MEDIUM |

**Landing Page Template:**
```
[Hero: Product image + Headline + CTA button]
[Trust bar: 25yr warranty | 30-day setup | 200+ installs]
[Problem agitation: "Skip the contractor headache..."]
[Solution: Your 4-phase process]
[Product showcase: 3 tiers with pricing]
[Social proof: 2-3 testimonials]
[FAQ: 4-5 common questions]
[Final CTA: Schedule consultation form]
```

**Current Pages to Review:**
- `/service` - Good for service-focused ads ✅
- `/products/saunas` - Need landing page optimization
- `/contact` - Consider adding Calendly embed

---

## PHASE 4: BUDGET PROGRESSION

### Month-by-Month Budget Plan

| Month | Budget | Expected Leads | Expected Sales | Revenue Target |
|-------|--------|----------------|----------------|----------------|
| 1 | $3,000 | 15 | 0-1 | $0-7,500 |
| 2 | $4,000 | 25 | 1 | $7,500 |
| 3 | $6,000 | 40 | 2 | $15,000 |
| 4 | $8,000 | 60 | 3 | $22,500 |
| 5 | $10,000 | 80 | 4 | $30,000 |
| 6 | $12,000 | 100 | 6 | $45,000 |

**Rules:**
- Scale budget only when CAC < $2,000
- If CAC > $3,000 for 14 days → pause and reassess
- If zero sales after $5k spend → review offer/landing page

---

## PHASE 5: DAILY/WEEKLY OPTIMIZATION

### Daily Checks (5 minutes)
- [ ] Budget pacing (on track?)
- [ ] Any disapproved ads?
- [ ] Cost spike? (any keyword >$50 with no conversion)

### Weekly Optimization (30 minutes)
- [ ] Search terms report → add negatives
- [ ] Pause ads with CTR < 1% for 7 days
- [ ] Increase bids on converters
- [ ] Check Quality Score < 5 → pause or improve

### Bi-Weekly Deep Dive (1 hour)
- [ ] Keyword performance review
- [ ] Landing page heatmap analysis
- [ ] New ad copy tests
- [ ] Competitor auction insights

---

## QUICK START CHECKLIST

**Before You Start Spending:**

- [ ] Google Ads account created (Expert Mode)
- [ ] Billing info added
- [ ] GA4 account created
- [ ] Google Analytics linked to Google Ads
- [ ] Google Tag installed on website
- [ ] Conversion tracking configured (at least Lead Form Submit)
- [ ] First campaign created (Brand Protection)
- [ ] Negative keyword list added
- [ ] Landing page optimized for conversions
- [ ] Daily budget cap set ($100/day for Phase 1)
- [ ] Email alerts configured (paused campaigns, billing issues)

**Estimated Time to Go Live:**
- Account setup: 2 hours
- Conversion tracking: 4 hours (need dev work)
- First campaigns: 3 hours
- **Total: 2-3 days**

---

## SUPPORTING FILES NEEDED

1. **High-res product images** (min 1200x800)
2. **Logo files** (square + landscape)
3. **Customer testimonials** (if any yet)
4. **Case study PDFs** (for post-consultation followup)
5. **Standard proposal template**

---

**Next Step:** Which campaign do you want to set up first? I'd recommend starting with **Brand Protection** ($500/mo) while you set up conversion tracking, then launching **High-Intent Search** ($2,500/mo) once tracking is working.

Want me to help with any specific step (conversion code, keyword research, ad copy)?
