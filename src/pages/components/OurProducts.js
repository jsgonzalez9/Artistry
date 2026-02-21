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

    // Feature 4 products (mix of both lines)
    const featured = [
      allProducts[0], // SaunaLife G11 Panoramic
      allProducts[1], // SaunaLife G4 Cube
      allProducts[2], // Finnmark X1
      allProducts[3], // Finnmark X2
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
                  {product.images?.hero ? (
                    <Image
                      src={product.images.hero}
                      alt={`${product.name} - Luxury Sauna`}
                      width={405}
                      height={475}
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8+R8AAvcB+vBGZskAAAAASUVORK5CYII="
                      placeholder="blur"
                    />
                  ) : (
                    <div style={{
                      width: "100%",
                      height: "475px",
                      background: "#F9F8F4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#726e8d",
                      fontSize: "0.875rem"
                    }}>
                      Image Coming Soon
                    </div>
                  )}
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
