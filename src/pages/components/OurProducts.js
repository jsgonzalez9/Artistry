import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { StaggerGrid, FadeIn } from "@/components/animations";
import saunaProducts from "@/data/saunas.json";
import finnmarkProducts from "@/data/finnmark.json";

export default function OurProducts({ resetCount }) {
  const [loading, setLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Combine SaunaLife and Finnmark products for homepage showcase
    const saunaLifeModels = saunaProducts.models.map(p => ({
      id: p.id,
      name: p.name,
      price: p.price_msrp,
      category: "Thermo-Spruce Barrel Sauna",
      page: "/products/saunas",
      images: { hero: p.image_url }
    }));

    const finnmarkModels = finnmarkProducts.products.map(p => ({
      id: p.model,
      name: p.name,
      price: parseInt(p.pricing.msrp.replace(/[^0-9]/g, '')),
      category: "Infrared Sauna",
      page: "/products/infrared",
      images: { hero: p.images?.hero }
    }));

    const allProducts = [...saunaLifeModels, ...finnmarkModels];

    // Feature 4 products (Finnmark only for now - has external images)
    // Skip SaunaLife products (need local images)
    const [saunaLife1, saunaLife2, ...finnmarkProducts] = allProducts;
    
    const featured = [
      finmarkProducts[0], // Finnmark X1
      finmarkProducts[1], // Finnmark X2
      finmarkProducts[2], // Finnmark X3
      finmarkProducts[3], // Finnmark X4
    ];

    // Simulate loading for smooth animation
    setTimeout(() => {
      setFeaturedProducts(featured);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      <div className="new-ceramics">
        <a>Curated Wellness Infrastructure</a>
        {loading ? (
          <div className="new-products">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="product">
                <Skeleton className="mobile-skeleton" height={"50vmin"} />
                <Skeleton className="mobile-skeleton" width={292} />
                <Skeleton className="mobile-skeleton" width={60} />
              </div>
            ))}
          </div>
        ) : (
          <div className="new-products">
            {featuredProducts.map((product) => (
              <div key={product.id || product.model} className="product">
                <Link
                  onClick={resetCount}
                  href={product.page}
                  style={{ textDecoration: "none" }}
                >
                  <div style={{
                    width: "100%",
                    height: "475px",
                    background: "linear-gradient(180deg, #F9F8F4 0%, #E5E4E0 100%)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "12px",
                    color: "#726e8d",
                    fontSize: "0.875rem",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    {/* Product silhouette placeholder */}
                    <div style={{
                      width: "200px",
                      height: "280px",
                      border: "2px solid #AF944F",
                      borderRadius: "4px",
                      opacity: 0.3
                    }} />
                    <span style={{
                      background: "#ffffff",
                      padding: "8px 16px",
                      borderRadius: "2px",
                      border: "0.5px solid #AF944F",
                      color: "#1A1A1A",
                      fontWeight: 500,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem"
                    }}>
                      Product Photography In Progress
                    </span>
                    <span style={{
                      color: "#a0a0a0",
                      fontSize: "0.75rem"
                    }}>
                      Expected: Q1 2026
                    </span>
                  </div>
                  <br />
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#1A1A1A",
                    letterSpacing: "-0.02em"
                  }}>
                    {product.name}
                  </span>
                  <br />
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#726e8d",
                    marginTop: "4px",
                    display: "block"
                  }}>
                    {product.category}
                  </span>
                </Link>
                <br />
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  letterSpacing: "-0.02em"
                }}>
                  ${product.price.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="view-col">
        <Link href={"/products/saunas"}>
          <button id="viewCol" style={{
            background: "#1A1A1A",
            color: "#ffffff",
            border: "0.5px solid #AF944F",
            padding: "14px 32px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9375rem",
            fontWeight: 500,
            borderRadius: "2px",
            cursor: "pointer",
            transition: "all 0.25s ease"
          }}>
            View Full Collection
          </button>
        </Link>
      </div>
    </>
  );
}
