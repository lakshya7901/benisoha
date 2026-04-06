"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Application",  href: "#application" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-charcoal shadow-[0_2px_30px_rgba(0,0,0,0.4)] py-2.5 sm:py-3" : "bg-transparent py-4 sm:py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="18,2 34,10 34,26 18,34 2,26 2,10"
                stroke={scrolled ? "#f5d60c" : "#1A1A1A"} strokeWidth="1.5" fill="none" />
              <polygon points="18,8 28,13 28,23 18,28 8,23 8,13"
                fill={scrolled ? "#f5d60c" : "#1A1A1A"} opacity="0.15" />
              <text x="18" y="22" textAnchor="middle"
                fill={scrolled ? "#f5d60c" : "#1A1A1A"}
                fontSize="10" fontFamily="Cormorant Garamond, serif" fontWeight="700">BF</text>
            </svg>
          </div>
          <div className="leading-tight">
            <div className={`font-semibold tracking-widest transition-colors ${scrolled ? "text-white" : "text-charcoal"}`}
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}>
              Benisoha
            </div>
            <div className={`text-[9px] tracking-[0.2em] uppercase font-bold ${scrolled ? "text-gold-400" : "text-charcoal opacity-60"}`}>
              Fusion
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className={`nav-link text-[11px] ${scrolled ? "!text-white after:!bg-white" : ""}`}>
              {link.label}
            </a>
          ))}
          <a href="#contact"
            className={`ml-2 px-4 lg:px-5 py-2 text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
              scrolled ? "bg-gold-500 text-charcoal hover:bg-gold-400" : "bg-charcoal text-white hover:bg-charcoal-soft"
            }`}
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden flex flex-col gap-[5px] p-2 -mr-2 touch-target"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`block h-[2px] transition-all duration-300 ${scrolled ? "bg-white" : "bg-charcoal"} ${
              i === 0 ? `w-6 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}` :
              i === 1 ? `w-4 ${menuOpen ? "opacity-0" : ""}` :
                        `w-6 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`
            }`} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } bg-charcoal border-t border-white/10`}>
        <div className="px-4 sm:px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="text-white text-sm font-bold tracking-widest uppercase hover:text-gold-400 transition-colors py-3 border-b border-white/05"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="mt-4 inline-block px-5 py-3 bg-gold-500 text-charcoal text-xs tracking-widest uppercase font-bold text-center hover:bg-gold-400 transition-all">
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
