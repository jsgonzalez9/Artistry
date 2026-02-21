import "../styles/globals.css";
import { useState } from "react";

// Minimal Layout - no Supabase, no cart context
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
    <MinimalLayout>
      <Component {...pageProps} />
    </MinimalLayout>
  );
}
