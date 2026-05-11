"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes, FaCode, FaBuilding, FaCity } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled ? "py-4 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b dark:border-slate-800 shadow-sm" : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-blue-600 rounded-lg text-white group-hover:rotate-12 transition-transform">
            <FaCity size={22} />
          </div>
          <span className="font-bold text-xl dark:text-white">Hamim<span className="text-blue-600">.</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-medium hover:text-blue-600 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="dark:text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;