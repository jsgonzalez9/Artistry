// Add to: src/pages/components/GoogleAdsConversion.js
// Then import in _app.js

import Script from 'next/script';
import { useEffect } from 'react';

const GOOGLE_ADS_ID = 'AW-XXXXXXXXX'; // Replace with your actual ID after setup

export default function GoogleAdsConversion() {
  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GOOGLE_ADS_ID);
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}

// Helper function to track conversions
export function trackConversion(conversionId, value = 0, transactionId = null) {
  if (typeof window !== 'undefined' && window.gtag) {
    const params = {
      'send_to': `${GOOGLE_ADS_ID}/${conversionId}`,
      'value': value,
      'currency': 'USD'
    };
    
    if (transactionId) {
      params['transaction_id'] = transactionId;
    }
    
    window.gtag('event', 'conversion', params);
    console.log('Conversion tracked:', params);
  }
}

// Usage examples:
// trackConversion('YYYYY-XXXXX', 150); // Lead form
// trackConversion('ZZZZZ-XXXXX', 7500, 'ORDER123'); // Purchase
