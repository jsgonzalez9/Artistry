import "../styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";

// Minimal Layout with Context providers
function MinimalLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <CartProvider>
        <MinimalLayout>
          <Component {...pageProps} />
        </MinimalLayout>
      </CartProvider>
    </SearchProvider>
  );
}
