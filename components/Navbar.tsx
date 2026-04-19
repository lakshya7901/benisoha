"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About",       href: "/#about" },
  { label: "Services",    href: "/#services" },
  { label: "Apps",        href: "/applications" },
  { label: "Projects",    href: "/#projects" },
  { label: "Contact",     href: "/#contact" },
];

const searchableApps = [
  { title: "Clone Master - Multi Dual Space",      category: "ANDROID APPLICATIONS",   href: "/applications#clone-master---multi-dual-space" },
  { title: "Clone Master - Multi Dual Space Pro",       category: "ANDROID APPLICATIONS",   href: "/applications#clone-master---multi-dual-space-pro" },
  { title: "Full-Stack Web Development",    category: "WEB PLATFORMS",  href: "/applications#full-stack-web-development" },
  { title: "Intelligent Backend Systems",category: "WEB PLATFORMS",  href: "/applications#intelligent-backend-systems" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navRef   = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const filtered = searchableApps.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dark = scrolled || !isHome;

  const logoColor    = dark ? "#f5d60c" : "#1A1A1A";
  const textColor    = dark ? "text-white" : "text-charcoal";
  const subTextColor = dark ? "text-gold-400" : "text-charcoal/60";
  const linkClass    = dark
    ? "nav-link !text-white after:!bg-white"
    : "nav-link text-charcoal";
  const btnClass     = dark
    ? "bg-gold-500 text-charcoal hover:bg-gold-400"
    : "bg-charcoal text-white hover:bg-charcoal-soft";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        dark
          ? "bg-charcoal shadow-[0_2px_24px_rgba(0,0,0,0.45)] py-2.5"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-9 h-9 flex-shrink-0">
            <svg viewBox="0 0 36 36" fill="none">
              <polygon points="18,2 34,10 34,26 18,34 2,26 2,10"
                stroke={logoColor} strokeWidth="1.8" fill="none" />
              <polygon points="18,8 28,13 28,23 18,28 8,23 8,13"
                fill={logoColor} opacity="0.15" />
              <text x="18" y="22" textAnchor="middle" fill={logoColor}
                fontSize="10" fontFamily="var(--font-cormorant)" fontWeight="700">BF</text>
            </svg>
          </div>
          <div className="leading-snug">
            <div
              className={`transition-colors font-extrabold tracking-normal ${textColor}`}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.4rem, 3.5vw, 1.7rem)",
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "0.01em",
              }}
            >
              Benisoha Fusion
            </div>
            <div
              className={`text-[10px] tracking-[0.28em] uppercase font-black mt-0.5 ${subTextColor}`}
              style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.6rem" }}
            >
              Software &amp; Electrical
            </div>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className={`${linkClass} text-[11px]`}>
              {l.label}
            </Link>
          ))}

          {/* Search */}
          <div className="relative">
            <button
              onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
              className={`p-1.5 transition-colors hover:text-gold-500 ${dark ? "text-white" : "text-charcoal"}`}
              aria-label="Search"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {searchOpen && (
              <div className="absolute top-full right-0 mt-4 w-72 bg-charcoal shadow-2xl border-t-2 border-gold-500 z-50">
                <div className="p-3 border-b border-white/10">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search apps & platforms…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-white text-sm outline-none placeholder:text-white/40"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {filtered.length > 0 ? filtered.map((r) => (
                    <Link key={r.title} href={r.href}
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      className="block p-3 hover:bg-white/05 border-b border-white/05 last:border-0 transition-colors">
                      <div className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{r.title}</div>
                      <div className="text-[10px] uppercase tracking-widest text-gold-500 mt-0.5" style={{ fontFamily: "var(--font-dm-sans)" }}>{r.category}</div>
                    </Link>
                  )) : (
                    <div className="p-4 text-xs text-white/40 text-center">No matches found</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link href="/#contact"
            className={`px-4 lg:px-5 py-2 text-xs tracking-widest uppercase font-bold transition-all duration-300 ${btnClass}`}
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            Get a Quote
          </Link>
        </div>

        {/* ── Mobile right cluster ── */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); setSearchQuery(""); }}
            className={`p-1.5 ${dark ? "text-white" : "text-charcoal"}`}
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button
            className="flex flex-col gap-[5px] p-2 -mr-1"
            onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className={`block h-[2px] transition-all duration-300 ${dark ? "bg-white" : "bg-charcoal"} ${
                i === 0 ? `w-6 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}` :
                i === 1 ? `w-4 ${menuOpen ? "opacity-0" : ""}` :
                          `w-6 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`
              }`} />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile search panel ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        searchOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      } bg-charcoal border-t border-gold-500`}>
        <div className="p-4 border-b border-white/10">
          <input
            type="text"
            placeholder="Search apps & platforms…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white text-sm outline-none placeholder:text-white/40 border border-white/20 p-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          />
        </div>
        <div className="max-h-56 overflow-y-auto">
          {filtered.length > 0 ? filtered.map((r) => (
            <Link key={r.title} href={r.href}
              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
              className="block p-4 hover:bg-white/05 border-b border-white/05 last:border-0 transition-colors">
              <div className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{r.title}</div>
              <div className="text-[10px] uppercase tracking-widest text-gold-500 mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{r.category}</div>
            </Link>
          )) : (
            <div className="p-4 text-xs text-white/40 text-center">No matches found</div>
          )}
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      } bg-charcoal border-t border-white/10`}>
        <div className="px-4 py-4 flex flex-col">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href}
              className="text-white text-sm font-bold tracking-widest uppercase hover:text-gold-400 transition-colors py-3.5 border-b border-white/08 last:border-0"
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contact"
            className="mt-4 px-5 py-3.5 bg-gold-500 text-charcoal text-xs tracking-widest uppercase font-bold text-center hover:bg-gold-400 transition-all"
            onClick={() => setMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
