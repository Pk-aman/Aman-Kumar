"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { HiSun, HiMoon, HiBars3, HiXMark } from "react-icons/hi2";

const navLinks = [
  { label: "About", href: "#about", isAnchor: true },
  { label: "Experience", href: "#experience", isAnchor: true },
  { label: "Skills", href: "#skills", isAnchor: true },
  { label: "Projects", href: "#projects", isAnchor: true },
  { label: "Education", href: "#education", isAnchor: true },
  { label: "Contact", href: "#contact", isAnchor: true },
  { label: "Explore ✦", href: "/pages/explore", isAnchor: false },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const isHome = pathname === "/";
    if (isHome) {
      // Already on home — smooth scroll to section
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // On another page (e.g. /pages/explore) — navigate to home with hash
      router.push("/" + href);
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "var(--navbar-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="#hero"
          onClick={() => handleNavClick("#hero")}
          style={{
            fontWeight: 800,
            fontSize: "1.25rem",
            letterSpacing: "-0.02em",
            background: "var(--gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
          }}
        >
          AK.
        </Link>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) =>
            link.isAnchor ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px 0",
                }}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  padding: "6px 12px",
                  borderRadius: "50px",
                  background: "var(--accent-glow)",
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  position: "relative",
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Theme Toggle + Mobile Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1.5px solid var(--border)",
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                transition: "all 0.2s ease",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <HiSun /> : <HiMoon />}
            </button>
          )}

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              border: "1.5px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
            }}
            className="show-mobile"
            aria-label="Menu"
          >
            {mobileOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "var(--navbar-bg)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--border)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) =>
            link.isAnchor ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "12px 0",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  color: "var(--accent)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
