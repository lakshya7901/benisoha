"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_30px_rgba(255,185,0,0.12)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 relative">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="18,2 34,10 34,26 18,34 2,26 2,10"
                stroke="#ffb900"
                strokeWidth="1.5"
                fill="none"
              />
              <polygon
                points="18,8 28,13 28,23 18,28 8,23 8,13"
                fill="#ffb900"
                opacity="0.15"
              />
              <text
                x="18"
                y="22"
                textAnchor="middle"
                fill="#ffb900"
                fontSize="11"
                fontFamily="Cormorant Garamond, serif"
                fontWeight="600"
              >
                TF
              </text>
            </svg>
          </div>
          <div className="leading-tight">
            <div
              className="text-sm font-semibold tracking-widest text-charcoal group-hover:text-gold-600 transition-colors"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
            >
              TechForge
            </div>
            <div className="text-[9px] tracking-[0.2em] uppercase text-gold-600 font-light">
              Solutions
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 border border-gold-500 text-gold-700 text-xs tracking-widest uppercase font-medium hover:bg-gold-500 hover:text-white transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-gold-600 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-4 h-[1.5px] bg-gold-600 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-gold-600 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gold-100`}
      >
        <div className="px-6 py-4 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-5 py-2 border border-gold-500 text-gold-700 text-xs tracking-widest uppercase text-center hover:bg-gold-500 hover:text-white transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
