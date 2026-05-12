"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaBars, FaTimes, FaCity } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!mounted) return null;

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 100,
    transition: "all 0.3s",
    padding: scrolled ? "16px 0" : "24px 0",
    backgroundColor: scrolled
      ? theme === "dark"
        ? "rgba(2,6,23,0.75)"
        : "rgba(255,255,255,0.75)"
      : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled
      ? theme === "dark"
        ? "1px solid rgba(30,41,59,0.8)"
        : "1px solid rgba(226,232,240,0.8)"
      : "none",
  };

  const backdropStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(4px)",
    zIndex: 110,
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? "auto" : "none",
    transition: "opacity 0.3s",
    display: isMobile ? "block" : "none",
  };

  const drawerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "260px",
    backgroundColor: "#0d1117",
    zIndex: 120,
    display: "flex",
    flexDirection: "column",
    boxShadow: "4px 0 24px rgba(0,0,0,0.5)",
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease-in-out",
    visibility: isMobile ? "visible" : "hidden",
  };

  return (
    <>
      {/* ─── Navbar ─── */}
      <nav style={navStyle}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <div style={{ padding: "8px", backgroundColor: "#2563eb", borderRadius: "8px", color: "white", display: "flex" }}>
              <FaCity size={22} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "20px", color: theme === "dark" ? "white" : "#0f172a" }}>
              Hamim<span style={{ color: "#2563eb" }}>.</span>
            </span>
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
              <ul style={{ display: "flex", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} style={{ fontSize: "14px", fontWeight: 500, color: theme === "dark" ? "#cbd5e1" : "#334155", textDecoration: "none" }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                style={{ padding: "8px", borderRadius: "50%", backgroundColor: theme === "dark" ? "#1e293b" : "#f1f5f9", color: theme === "dark" ? "white" : "#334155", border: "none", cursor: "pointer", display: "flex" }}
              >
                {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            </div>
          )}

          {/* Mobile controls */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                style={{ background: "none", border: "none", cursor: "pointer", color: theme === "dark" ? "white" : "#0f172a", display: "flex" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(true)}
                style={{ background: "none", border: "none", cursor: "pointer", color: theme === "dark" ? "white" : "#0f172a", display: "flex" }}
                aria-label="Open menu"
              >
                <FaBars size={24} />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ─── Backdrop ─── */}
      <div style={backdropStyle} onClick={() => setIsOpen(false)} />

      {/* ─── Left Drawer ─── */}
      <div style={drawerStyle}>
        {/* Close btn */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px 20px 8px" }}>
          <button
            onClick={() => setIsOpen(false)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", display: "flex", padding: "4px" }}
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Links */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px", gap: "4px" }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                fontSize: "24px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.8)",
                padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                textDecoration: "none",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.3s ${i * 60}ms, transform 0.3s ${i * 60}ms`,
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px", padding: "0 32px 32px" }}>
          Tap outside to close
        </p>
      </div>
    </>
  );
};

export default Navbar;