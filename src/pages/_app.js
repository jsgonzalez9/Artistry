import "../styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
import Footer from "@/pages/components/Footer";
import MotionLayout from "@/components/MotionLayout";

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
 <SearchProvider>
 <CartProvider>
 <MotionLayout>
 <AppLayout>
 <Component {...pageProps} />
 </AppLayout>
 </MotionLayout>
 </CartProvider>
 </SearchProvider>
 );
}
