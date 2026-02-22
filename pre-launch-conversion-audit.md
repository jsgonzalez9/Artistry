# Pre-Launch Website Conversion Audit

**Goal:** Website ready to convert $10k+ visitors before spending on traffic  
**Timeline:** 2-4 weeks of work  
**Impact:** Can 2x-3x conversion rate vs. launching with basic site

---

## 1. VIDEO CONTENT STRATEGY

### Why Video Matters for High-Ticket

| Content Type | Trust Impact | Conversion Lift |
|--------------|--------------|-----------------|
| Product demo video | See it working | +25-40% |
| Customer testimonial | Social proof | +30-50% |
| Installation/process | Reduces anxiety | +20-30% |
| Founder/team story | Human connection | +15-25% |

**Your Competitors Aren't Doing This.** Most sauna sites have static images and specs. Video = instant differentiation.

---

### Video Content Checklist

#### A. Product Demo Videos (Shoot First)

**5-10 Minutes Per Product:**

```
SAUNA DEMO VIDEO STRUCTURE:
├── [0:00-0:30] Opening hook: "This is the G11 - our best-selling 4-person cedar sauna"
├── [0:30-1:30] Exterior walkaround (handrails, door, windows, craftsmanship)
├── [1:30-3:00] Interior: bench depth, heater positioning, lighting, aroma shelf
├── [3:00-4:00] Controls demo: How to use the digital panel, temperature settings
├── [4:00-5:00] Special features: Bluetooth, chromotherapy, ventilation
├── [5:00-6:00] Materials closeup: Cedar grain, construction quality
├── [6:00-7:00] Size/person capacity: "Comfortably fits 4 adults"
├── [7:00-8:00] Heat up time demonstration
├── [8:00-9:00] Maintenance/safety features
└── [9:00-10:00] CTA: "Schedule your free site assessment"

STYLE NOTES:
- Shot during golden hour or nice lighting
- Slow, deliberate camera movements (not shaky)
- Professional voiceover or clear natural audio
- Show scale with person in frame
- No music that drowns out voice
```

**Equipment Needed (Borrow/Rent/Buy):**
- iPhone 14+ or decent DSLR
- $30 tripod with smooth pan head
- $50 lapel mic or $100 wireless mic
- Natural light (outdoor) or 2x $60 LED panels
- Total cost: ~$250 or use your phone + $50 mic

---

#### B. Customer Testimonial Videos

**Even 2-3 testimonials = huge trust**

**Questions to Ask Customers:**
1. "What problem were you trying to solve?"
2. "Why did you choose Lux Haven vs. competitors?"
3. "Walk us through the installation day"
4. "How has the sauna changed your daily routine?"
5. "What's your favorite feature?"
6. "Would you recommend it? To whom?"

**Format Options:**
- **Full interview** (3-5 min) for product pages
- **Soundbites** (15-30 sec) for social ads
- **Before/after** photos of their space

**Who to Ask First:**
- First 5 customers get $500 Amazon gift card for 30-min testimonial
- Include footage of their installed sauna

---

#### C. Process/Installation Video

**Document ONE real installation start-to-finish:**

```
"From Delivery to Your First Session"
├── Truck arriving, unloading (not scary)
├── Moving into position (team carrying)
├── Electrical connections (sped up)
├── Assembly timelapse
├── Final cleaning/walkthrough
└── Customer reaction/First session

LENGTH: 3-5 minutes
PURPOSE: Removes "Will this be a nightmare?" objection
```

---

#### D. Founder Story Video

**2-3 minutes, you on camera:**

```
STRUCTURE:
├── [0:00-0:30] Who you are, why you started this
├── [0:30-1:00] The problem (contractor delays, shoddy products)
├── [1:00-1:45] Your solution (white-glove, 30 days, warranty)
├── [1:45-2:15] What makes you different
└── [2:15-3:00] Personal commitment to customers

GOES ON:
- About page (prime real estate)
- Linked as "Meet Our Founder" on homepage
- YouTube channel intro
- Retargeting ads (high trust, low CPM)
```

---

### Video Hosting

| Platform | Use Case | Cost |
|----------|----------|------|
| **YouTube** | Free hosting, SEO benefits, pre-roll ads | Free |
| **Wistia** | Premium embed, analytics, no ads | $99/mo |
| **Vimeo Pro** | Clean player, good for embeds | $20/mo |

**Recommendation:** Start with YouTube (free), upgrade to Wistia when you have 10,000+ monthly visitors.

---

## 2. WEBSITE TRUST SIGNALS CHECKLIST

### Critical Elements (Do First)

| Element | Location | Implementation |
|---------|----------|----------------|
| **Video above fold** | Homepage hero | Autoplay muted, CTA overlay |
| **Trust bar** | Below hero | Icons: 25yr warranty, 30-day setup, 200+ installs |
| **Instagram feed** | Product pages | Show real customer installs |
| **Live chat** | Every page | Intercom, Crisp, or Tidio ($25-50/mo) |
| **Phone number** | Header + Footer | Click-to-call, mobile-optimized |
| **Reviews widget** | Product pages | 4.9/5 stars with at least 10 reviews |
| **Security badges** | Checkout | SSL, Shopify secure (already have) |
| **Clear return policy** | Footer | "30-day satisfaction guarantee" |

---

### Trust Bar Design

Add this below your hero section:

```
┌─────────────────────────────────────────────────────┐
│  ★ 25-Year Warranty  │  ⚡ 30-Day Setup  │  🏠 200+ Installs  │  🚚 White-Glove   │
└─────────────────────────────────────────────────────┘
```

**Code for Next.js:**
```jsx
const TrustBar = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-around',
    padding: '24px',
    backgroundColor: '#0a0a0a',
    borderTop: '1px solid rgba(201, 169, 110, 0.2)',
    borderBottom: '1px solid rgba(201, 169, 110, 0.2)'
  }}>
    {[
      { icon: '★', text: '25-Year Warranty' },
      { icon: '⚡', text: '30-Day Setup' },
      { icon: '🏠', text: '200+ Installs' },
      { icon: '🚚', text: 'White-Glove Delivery' }
    ].map((item, i) => (
      <div key={i} style={{ textAlign: 'center', color: '#c9a96e' }}>
        <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
        <p style={{ 
          fontFamily: 'Inter', 
          fontSize: '0.8rem', 
          color: 'rgba(255,255,255,0.6)',
          marginTop: '4px'
        }}>
          {item.text}
        </p>
      </div>
    ))}
  </div>
);
```

---

## 3. CHATBOT/AI INTEGRATION

### Why Chatbots for High-Ticket

| Use Case | Value |
|----------|-------|
| **24/7 lead capture** | Answer questions at 2am |
| **Qualification** | Ask budget, timeline, location before human follow-up |
| **Objection handling** | Address "too expensive" instantly with financing options |
| **Immediate response** | Under 1 minute vs. email (hours) or form wait |

**Expected impact:** 15-30% more leads from same traffic

---

### Recommended Chatbots (Ranked)

| Tool | Price | Best For | Why |
|------|-------|----------|-----|
| **Intercom** | $74/mo | Premium brands | Best UI, integrations, quality |
| **Crisp** | $25/mo | Budget-conscious | Unlimited agents, good features |
| **Tidio** | $29/mo | E-commerce focus | AI chatbot included |
| **HubSpot Free** | $0 | Existing HubSpot users | Free tier is decent |

**My recommendation:** Start with **Crisp** ($25/mo). Scale to Intercom when you're doing 50+ chats/month.

---

### Chat Flow for Saunas

```
[Visitor opens chat]
    ↓
BOT: "Hi there! Looking for a sauna or cold plunge for your home?"
    ↓
[Yes / Just browsing / Specific question]
    ↓
[If Yes] "Great! A few quick questions to point you to the right model:"
    ↓
Q1: "How many people will use it at once?"
   - 1-2 (Compact models)
   - 3-4 (Standard models)
   - 5+ (Large/custom)
    ↓
Q2: "What's your target budget range?"
   - $4k-7k (Entry)
   - $7k-12k (Premium)
   - $12k+ (Luxury custom)
    ↓
Q3: "Do you have space prepared (foundation/electrical)?"
   - Yes → Schedule consultation
   - No → "That's fine! We help with that too"
   - Not sure → Download prep guide
    ↓
[Based on answers] BOT recommends specific product
    ↓
CTA: "Want to see it in action?"
   - [Book 15-min video demo]
   - [Schedule site visit]
   - [Chat with specialist]
    ↓
[Lead captured in CRM with all qualifier data]
```

---

### AI Sales Assistant Integration

**For phone call automation:**

| Tool | Use Case | Cost |
|------|----------|------|
| **Retell.ai** | AI phone agent | $0.05/min |
| **Synthflow** | AI receptionist | $49/mo |
| **Bland.ai** | Outbound calls | $0.09/min |
| **Vapi** | Voice AI | Pay-per-use |

**Workflow:**
1. Lead fills out form or books via chatbot
2. AI calls within 5 minutes: "Hi [Name], I saw you were interested in an outdoor sauna..."
3. AI qualifies (budget, timeline, space ready)
4. If qualified → Books calendar slot with you
5. If not qualified → Sends FAQ/nurture email

**Impact:** 30-50% of leads never get called back (sad reality). AI calls every lead instantly.

---

### Install Crisp Chat (Quick Setup)

**Step 1: Sign up** (crisp.chat)

**Step 2: Add to Next.js**
```jsx
// In _app.js or layout.js
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://client.crisp.chat/l.js"
        strategy="afterInteractive"
      />
      <Script id="crisp-config" strategy="afterInteractive">
        {`
          window.$crisp = [];
          window.CRISP_WEBSITE_ID = "YOUR_WEBSITE_ID";
          (function(){
            d = document;
            s = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
```

**Step 3: Configure bot flow in Crisp dashboard**

---

## 4. PRODUCT PAGE ENHANCEMENTS

### Current Gaps to Fix

| Issue | Current State | Target State |
|-------|---------------|--------------|
| **Images** | 3-4 static shots | 10+ angles + lifestyle + video |
| **Specs** | Text list | Visual comparison chart |
| **Trust** | Generic warranty | Video of product being built |
| **Social proof** | Maybe some reviews | 10+ reviews with photos |
| **Urgency** | None | "Only 3 left in stock" or "Booked 2 weeks out" |

---

### Product Page Template

```
[Hero: Big lifestyle image + CTA + Price]
[Trust bar: Icons with guarantees]
[Video: 5-min product demo]
[Problem: "Tired of waiting 6 months for a sauna?"]
[Solution: "We install in 30 days" - 4-phase process]
[Specs: Visual chart comparing models]
[Gallery: 10+ product images]
[Reviews: 5 star + customer photos]
[FAQ: 5 common questions]
[CTA: "Schedule Free Consultation" - big button]
[Financing: "From $X/month" - Affirm/Klarna]
[Final CTA: Form or calendar embed]
```

---

## 5. HOMEPAGE OVERHAUL

### Current Homepage Audit

You mentioned the service page update - now **homepage needs work.**

**Hero Section Must-Have:**
- **Video background:** 10-second slow-motion of steam from sauna
- **Bold headline:** "Your Wellness Sanctuary, Ready in 30 Days"
- **Subhead:** "We handle delivery, installation, and everything in between"
- **CTA:** "See How It Works" (scrolls to process video)

**Below Fold:**
```
[Process video: 3-min install demo]
[Trust bar: 4 guarantees]
[Products: 3 clickable cards - Sauna / Cold Plunge / Marine]
[Reviews: 2-3 testimonials with photos]
[Service area map: "Serving Continental US"]
[Final CTA: Newsletter or consult booking]
```

---

## 6. IMPLEMENTATION TIMELINE

### Week 1: Infrastructure
- [ ] Add Crisp chatbot to site ($25/mo)
- [ ] Create Trust component, add to all pages
- [ ] Update /service page with video placeholders
- [ ] Create review collection form ($0, email customers)

### Week 2: Content Creation
- [ ] Shoot ONE product demo video (G11 or G4)
- [ ] Write/rehearse script
- [ ] Record with phone + mic
- [ ] Basic edit (iMovie or CapCut)

### Week 3: Video Integration
- [ ] Upload to YouTube
- [ ] Embed on product page
- [ ] Add schema markup for video SEO
- [ ] Create video thumbnails

### Week 4: Test & Optimize
- [ ] Set up chatbot conversation flow
- [ ] Test on mobile devices
- [ ] Add heatmap (Hotjar free tier)
- [ ] First 3 customer testimonial requests

### Total Cost: ~$300-500
- Mic: $50
- Lights (if needed): $120
- Crisp: $25/mo
- Hotjar: $0
- Your time: 20-30 hours

---

## 7. PRE-LAUNCH GO/NO-GO CHECKLIST

**Don't launch Google Ads until:**

- [ ] Homepage has video and trust bar
- [ ] At least one product has demo video
- [ ] Chatbot is live and converting
- [ ] 3+ customer reviews visible
- [ ] Contact page has calendar embed (Calendly)
- [ ] Mobile site loads in <3 seconds
- [ ] All forms tested and working
- [ ] Conversion tracking installed

**When these are done → Launch ads**

---

## SUMMARY

**Right now:**
- You have a functional website
- Missing: Trust, video, engagement

**After this work:**
- Site converts 2-3x better
- Chatbot captures leads 24/7
- Video differentiates from competitors
- Ready for paid traffic

**Expected impact:**
- Without these: 0.5-1% conversion = $150-300 CPA
- With these: 2-3% conversion = $75-150 CPA

**Worth it?** Yes. Spending $5k/mo on ads to a site that doesn't convert is burning money.

---

**Priority order:**
1. Chatbot (1 hour to live)
2. Trust bar (2 hours)
3. Video script (4 hours)
4. First video shoot (1 day)
5. Reviews collection (ongoing)

Want me to write the chatbot conversation script for Crisp? Or help with the video script outline?
