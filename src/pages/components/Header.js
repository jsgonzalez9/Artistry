import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearch } from "@/context/SearchContext";
import { useRouter as useRouterDefault } from "next/router";
import { useRouter as useRouterNavigation } from "next/navigation";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import searchIcon from "@/pages/icons/Search.svg";
import cartIcon from "@/pages/icons/Shopping--cart.svg";
import userIcon from "@/pages/icons/User--avatar.svg";
import { deleteCookie } from "cookies-next";

export default function Header() {
  const router = useRouterDefault();
  const routerNavigation = useRouterNavigation();
  const { searchQuery, updateSearchQuery } = useSearch();
  const [accountModal, setAccountModal] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  const handleLogout = async () => {
    let { error } = await supabaseClient.auth.signOut();
    deleteCookie("userId");
    routerNavigation.refresh();
  };

  function handleInputQuery(e) {
    const query = e.target.value;
    updateSearchQuery(query);
  }

  useEffect(() => {
    const handleRouteChange = (url) => {
      setAccountModal(false);
      if (url && !url.includes("/products/")) {
        setSearchVisible(false);
        updateSearchQuery("");
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  const handleSearchIconClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleAllPageLinkClick = () => {
    updateSearchQuery("");
    setSearchVisible(false);
    router.push("/products/all");
  };

  const handleAccountModal = () => {
    setAccountModal(!accountModal);
  };

  const handleOutsideClick = (e) => {
    if (
      accountModal &&
      e.target.closest(".account-modal") === null &&
      e.target.closest(".account") === null
    ) {
      setAccountModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [accountModal]);

  return (
    <>
      {/* Brand Header */}
      <div className="name" style={{
        textAlign: "center",
        padding: "24px 0",
        borderBottom: "0.5px solid #E5E4E0"
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          fontWeight: 600,
          color: "#1A1A1A",
          letterSpacing: "-0.02em",
          margin: 0
        }}>
          <Link href={"/"} style={{ textDecoration: "none", color: "#1A1A1A" }}>
            LUX HAVEN
          </Link>
        </h1>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          color: "#726e8d",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginTop: "4px"
        }}>
          Infrastructure
        </p>
      </div>

      {/* Secondary Navigation */}
      <div className="top-right" style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        padding: "16px 0",
        borderBottom: "0.5px solid #E5E4E0",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.875rem"
      }}>
        <h2 className="about" style={{ margin: 0, fontWeight: 500 }}>
          <Link href={"/about"} style={{ color: "#1A1A1A", textDecoration: "none" }}>
            About
          </Link>
        </h2>
        <h2 className="contact" style={{ margin: 0, fontWeight: 500 }}>
          <Link href={"/contact"} style={{ color: "#1A1A1A", textDecoration: "none" }}>
            Contact
          </Link>
        </h2>
        <h2 className="products" style={{ margin: 0, fontWeight: 500 }}>
          <Link href={"/products/saunas"} style={{ color: "#1A1A1A", textDecoration: "none" }}>
            Saunas
          </Link>
        </h2>
        <h2 className="products" style={{ margin: 0, fontWeight: 500 }}>
          <Link href={"/products/infrared"} style={{ color: "#1A1A1A", textDecoration: "none" }}>
            Infrared
          </Link>
        </h2>
      </div>
    </>
  );
}
