import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/pages/img/hero.webp";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <Image
          className="hero-img"
          src={HeroImg}
          alt="Hero-image"
          width={1920}
          height={1080}
          placeholder="blur" 
          priority
        />
        <div className="block">
          <h1 id="hero-text">
            Sanctuary Awaits
            <br />
            Discover Thermo-Spruce Wellness
          </h1>
          <h2 id="hero-text-phone">
            Sanctuary Awaits. Discover Thermo-Spruce Wellness
          </h2>
          <p id="shop-text">
            Experience the pinnacle of outdoor living with SaunaLife's 
            Thermo-Spruce barrel saunas. Engineered for 25+ years of 
            timeless wellness.
          </p>
          <p id="shop-text-phone">
            Experience the pinnacle of outdoor living with our 
            Thermo-Spruce barrel saunas—engineered for 25+ years of 
            timeless wellness.
          </p>
          <Link href={"/products/all"}>
            <button id="viewButt">Explore Collection</button>
          </Link>
        </div>
      </div>
    </>
  );
}
