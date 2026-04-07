"use client";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "About",    href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Application",  href: "/applications" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact",  href: "/#contact" },
];

const searchableApps = [
  { title: "EcoTrack Mobile", category: "Android App", href: "/applications#ecotrack-mobile" },
  { title: "TaskMaster Pro", category: "Android App", href: "/applications#taskmaster-pro" },
  { title: "Client Portal CRM", category: "Web Platform", href: "/applications#client-portal-crm" },
  { title: "E-Commerce Storefront", category: "Web Platform", href: "/applications#e-commerce-storefront" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const filteredApps = searchableApps.filter(app => 
    app.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    app.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-charcoal shadow-[0_2px_30px_rgba(0,0,0,0.4)] py-2.5 sm:py-3" : "bg-transparent py-4 sm:py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        <a href="/" className="flex items-center gap-2 sm:gap-3 group">
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

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className={`nav-link text-[11px] ${scrolled ? "!text-white after:!bg-white" : ""}`}>
              {link.label}
            </a>
          ))}

          <div className="relative flex items-center">
            <button 
              onClick={() => {setSearchOpen(!searchOpen); setSearchQuery("");}}
              className={`p-1 transition-colors hover:text-gold-500 ${scrolled ? "text-white" : "text-charcoal"}`}
              aria-label="Search Applications"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {searchOpen && (
              <div className="absolute top-full right-0 mt-6 w-72 bg-charcoal shadow-[0_15px_40px_rgba(0,0,0,0.5)] border-t-2 border-gold-500 rounded-b overflow-hidden z-50">
                <div className="p-3 border-b border-white/10">
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search apps & platforms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-white text-sm outline-none placeholder:text-white/40"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {filteredApps.length > 0 ? (
                    filteredApps.map((res) => (
                      <a
                        key={res.title}
                        href={res.href}
                        onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                        className="block p-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      >
                        <div className="text-sm font-bold text-white transition-colors" style={{ fontFamily: "var(--font-cormorant)" }}>{res.title}</div>
                        <div className="text-[10px] uppercase tracking-widest text-gold-500 mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{res.category}</div>
                      </a>
                    ))
                  ) : (
                    <div className="p-4 text-xs text-white/50 text-center" style={{ fontFamily: "var(--font-dm-sans)" }}>No matches found</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <a href="/#contact"
            className={`ml-2 px-4 lg:px-5 py-2 text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
              scrolled ? "bg-gold-500 text-charcoal hover:bg-gold-400" : "bg-charcoal text-white hover:bg-charcoal-soft"
            }`}
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            Get a Quote
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => {setSearchOpen(!searchOpen); setMenuOpen(false); setSearchQuery("");}}
            className={`p-1 transition-colors ${scrolled ? "text-white" : "text-charcoal"}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button className="flex flex-col gap-[5px] p-2 -mr-2 touch-target"
            onClick={() => {setMenuOpen(!menuOpen); setSearchOpen(false);}} aria-label="Toggle menu">
            {[0, 1, 2].map((i) => (
              <span key={i} className={`block h-[2px] transition-all duration-300 ${scrolled ? "bg-white" : "bg-charcoal"} ${
                i === 0 ? `w-6 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}` :
                i === 1 ? `w-4 ${menuOpen ? "opacity-0" : ""}` :
                          `w-6 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`
              }`} />
            ))}
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        searchOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      } bg-charcoal border-t border-gold-500`}>
        <div className="p-4 border-b border-white/10">
          <input
            type="text"
            placeholder="Search apps & platforms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white text-sm outline-none placeholder:text-white/40 border border-white/20 p-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          />
        </div>
        <div className="max-h-60 overflow-y-auto">
          {filteredApps.length > 0 ? (
            filteredApps.map((res) => (
              <a
                key={res.title}
                href={res.href}
                onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                className="block p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
              >
                <div className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{res.title}</div>
                <div className="text-[10px] uppercase tracking-widest text-gold-500 mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{res.category}</div>
              </a>
            ))
          ) : (
            <div className="p-4 text-xs text-white/50 text-center" style={{ fontFamily: "var(--font-dm-sans)" }}>No matches found</div>
          )}
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      } bg-charcoal border-t border-white/10`}>
        <div className="px-4 sm:px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="text-white text-sm font-bold tracking-widest uppercase hover:text-gold-400 transition-colors py-3 border-b border-white/05"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setMenuOpen(false)}
            className="mt-4 inline-block px-5 py-3 bg-gold-500 text-charcoal text-xs tracking-widest uppercase font-bold text-center hover:bg-gold-400 transition-all">
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}