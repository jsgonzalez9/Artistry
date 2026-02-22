import "../styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
import Footer from "@/pages/components/Footer";
import MotionLayout from "@/components/MotionLayout";
import Script from "next/script";

// Layout with Context providers and Footer
function AppLayout({ children }) {
 return (
 <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
 <main style={{ flex: 1 }}>
 {children}
 </main>
 <Footer />
 </div>
 );
}

export default function MyApp({ Component, pageProps }) {
 return (
 <>
 {/* Crisp Live Chat */}
 <Script
 strategy="afterInteractive"
 dangerouslySetInnerHTML={{
 __html: `
 window.$crisp = [];
 window.CRISP_WEBSITE_ID = "YOUR_CRISP_ID";
 (function() {
 d = document;
 s = d.createElement("script");
 s.src = "https://client.crisp.chat/l.js";
 s.async = 1;
 d.getElementsByTagName("head")[0].appendChild(s);
 })();
 `, }}
 />
 <SearchProvider>
 <CartProvider>
 <MotionLayout>
 <AppLayout>
 <Component {...pageProps} />
 </AppLayout>
 </MotionLayout>
 </CartProvider>
 </SearchProvider>
 </>
 );
}
