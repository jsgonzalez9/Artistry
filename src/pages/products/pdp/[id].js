import Head from "next/head";
import Brand from "@/pages/components/Brand";
import OurProducts from "@/pages/components/OurProducts";
import Esign from "@/pages/components/Esignup";
import QuoteModal from "@/pages/components/QuoteModal";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import styled from "styled-components";

const RequestQuoteButton = styled(motion.button)`
  font-family: satoshi, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 32px;
  background: #22202e;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 56px;
  width: 200px;

  &:hover {
    background: #2a254b;
    transform: scale(1.02);
    border-color: #d4af37;
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }

  @media screen and (max-width: 512px) {
    width: 100%;
  }
`;

const Counter = styled.div`
  display: flex;
  height: 28px;
  align-items: center;
`;

const CounterButton = styled.button`
  background-color: #dcdbe0;
  border: none;
  width: 28px;
  margin: 0;
  height: 28px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c9c8d0;
  }

  &:active {
    border: solid 1px #2a254b;
  }
`;

const CounterValue = styled.p`
  background-color: #e8e7eb;
  margin: 0;
  line-height: 28px;
  text-align: center;
  width: 40px;
  height: 28px;
`;

const CounterLabel = styled.a`
  width: 100px;
  margin-right: 12px;
`;

// Lux Haven product name mappings
const getProductLuxName = (productName, description = "") => {
  const nameLower = (productName || "").toLowerCase();
  const descLower = (description || "").toLowerCase();

  if (nameLower.includes("barrel") || nameLower.includes("sauna") || descLower.includes("sauna")) {
    return "SaunaLife Thermo-Spruce Barrel Sauna";
  }
  if (nameLower.includes("cold") || nameLower.includes("plunge") || descLower.includes("cold plunge")) {
    return "SaunaLife Cold Plunge Barrel";
  }
  if (nameLower.includes("outdoor") || descLower.includes("outdoor wellness")) {
    return "Lux Haven Outdoor Wellness Suite";
  }
  if (nameLower.includes("premium") || nameLower.includes("deluxe")) {
    return "SaunaLife Premium Thermo-Spruce Sauna";
  }
  
  return "SaunaLife Thermo-Spruce Barrel Sauna";
};

// Generate luxury description
const getLuxuryDescription = (productName, description) => {
  return `Experience the pinnacle of outdoor wellness with our handcrafted Thermo-Spruce barrel sauna. Engineered with Finnish precision and thermo-treated for exceptional durability, this sanctuary delivers authentic löyly and timeless elegance for your private retreat. Backed by a 25+ year lifespan—because true luxury endures.`;
};

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [luxProductName, setLuxProductName] = useState("");
  const [luxDescription, setLuxDescription] = useState("");
  const router = useRouter();
  const { id } = router.query;

  function goBack() {
    router.back();
  }

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    fetch(`/api/productid?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const productDetails = data.data[0];
        setProduct(productDetails);
        
        // Set luxury product name and description
        const luxName = getProductLuxName(productDetails.product_name, productDetails.description);
        setLuxProductName(luxName);
        setLuxDescription(getLuxuryDescription(productDetails.product_name, productDetails.description));
        
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      goBack();
    }
  };

  const handleQuoteRequest = () => {
    // Track interest level
    console.log("Quote request initiated for:", luxProductName);
    console.log("Interest count:", count);
    setIsQuoteModalOpen(true);
  };

  function resetCount() {
    setCount(1);
  }

  const openModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>{`${luxProductName || 'Luxury Wellness Sanctuary'} | Lux Haven Infrastructure`}</title>
      </Head>
      
      {loading ? (
        <>
          <div className="pdp">
            <div className="pd-image">
              <Skeleton height={"30em"} />
            </div>
            <div className="product-details">
              <h1 className="title">{<Skeleton width={'100%'} />}</h1>
              <h2>{<Skeleton width={100} />}</h2>
              <a className="title">Product description</a>
              <p className="details">{<Skeleton count={3} />}</p>
              <a className="title">Dimensions</a>
              <br />
              <br />
              <div className="dimensions">
                <div>
                  <a className="title">Height</a>
                  <br />
                  <a className="details">{<Skeleton width={50} />}</a>
                </div>
                <div>
                  <a className="title">Width</a>
                  <br />
                  <a className="details">{<Skeleton width={50} />}</a>
                </div>
              </div>
              <div className="addToCart-section">
                <div className="counter">
                  <a>Amount:</a>
                  <button onClick={decrement}>-</button>
                  <p>{count}</p>
                  <button onClick={increment}>+</button>
                </div>
                <RequestQuoteButton
                  onClick={openModal}
                  whileTap={{ scale: 0.98 }}
                  id="requestQuoteBtn"
                >
                  Request a Quote
                </RequestQuoteButton>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="pdp">
          <div className="pd-image">
            {product.image && (
              <Image
                src={product.image}
                alt={luxProductName}
                width={1200}
                height={1200}
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8+R8AAvcB+vBGZskAAAAASUVORK5CYII="
                placeholder="blur"
              />
            )}
          </div>
          <div className="product-details">
            <h1 className="title">{luxProductName}</h1>
            <h2>£{product.price}</h2>
            <a className="title">Product description</a>
            <p className="details">{luxDescription}</p>
            <a className="title">Dimensions</a>
            <br />
            <br />
            <div className="dimensions">
              <div>
                <a className="title">Height</a>
                <br />
                <a className="details">{product.height}cm</a>
              </div>
              <div>
                <a className="title">Width</a>
                <br />
                <a className="details">{product.width}cm</a>
              </div>
            </div>
            <div className="addToCart-section">
              <Counter>
                <CounterLabel>Amount:</CounterLabel>
                <CounterButton onClick={decrement}>-</CounterButton>
                <CounterValue>{count}</CounterValue>
                <CounterButton onClick={increment}>+</CounterButton>
              </Counter>
              <RequestQuoteButton
                onClick={handleQuoteRequest}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02, borderColor: "#d4af37" }}
                transition={{ duration: 0.2 }}
                id="requestQuoteBtn"
              >
                Request a Quote
              </RequestQuoteButton>
            </div>
          </div>
        </div>
      )}

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeModal}
        productName={luxProductName}
      />

      <Brand />
      <OurProducts resetCount={resetCount} />
      <Esign />
    </>
  );
}
