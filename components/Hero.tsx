"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const alreadyLoaded = sessionStorage.getItem("bf_loaded_before");
    sessionStorage.setItem("bf_loaded_before", "1");
    const delay = alreadyLoaded ? 100 : 2600;
    setTimeout(() => el.classList.remove("opacity-0"), delay);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern"
      style={{ background: "#f5d60c" }}
    >
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-black/10" />
        <div className="absolute -top-20 -right-20 w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full border border-black/08" />
        <div className="absolute -bottom-32 -left-32 w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full border border-black/08" />
        <div className="absolute top-1/3 right-1/3 w-60 h-60 rounded-full bg-black/04 blur-3xl animate-float" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <line x1="0" y1="100%" x2="25%" y2="0" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
          <line x1="75%" y1="0" x2="100%" y2="100%" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 opacity-0 transition-opacity duration-1000"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-charcoal flex-shrink-0" />
              <span
                className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-charcoal font-bold"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                OFFICIAL SITE OF BENISOHA FUSION LLP
              </span>
            </div>

            {/* Heading */}
            <h1
              className="mb-5 sm:mb-6 leading-[1.05]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
                fontWeight: 400,
                color: "#1A1A1A",
              }}
            >
              Android{" "}
              <span className="italic font-light" style={{ color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.18)" }}>
                Apps
              </span>
              <br />&amp; Electrical{" "}
              <span className="italic font-light" style={{ color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.18)" }}>
                Infrastructure
              </span>
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg leading-relaxed text-charcoal/80 mb-8 sm:mb-10 max-w-lg font-medium"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              We provide Android app development and Electrical Infrastructure work including LT line, 11kV, 33kV, 220 line, DTR, Transformer, Pole Installation, and GSS Installation.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-5 sm:mb-6">
              <a
                href="#services"
                className="touch-target flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-charcoal text-white text-[11px] sm:text-xs tracking-widest uppercase font-bold hover:bg-charcoal-soft hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                OUR SERVICES
              </a>
              <a
                href="#contact"
                className="touch-target flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-charcoal text-charcoal text-[11px] sm:text-xs tracking-widest uppercase font-bold hover:bg-charcoal hover:text-white transition-all duration-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                CONTACT US
              </a>
            </div>

            {/* Play Store Button */}
            <div className="mb-8 sm:mb-10">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-charcoal/50 font-bold mb-3"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                DOWNLOAD FLAGSHIP APPLICATIONS
              </p>
              <a
                href="/applications"
                target="_blank"
                rel="noopener noreferrer"
                className="playstore-btn w-fit"
              >
                {/* Google Play SVG icon */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.18 1.14C2.76 1.38 2.5 1.83 2.5 2.37v19.26c0 .54.26.99.68 1.23l.1.06L13.19 12 2.28 1.08l-.1.06z" fill="#f5d60c"/>
                  <path d="M16.84 15.66l-3.3-3.3-10.36 10.36c.37.2.84.22 1.27-.02l12.39-7.04z" fill="#f5d60c" opacity="0.8"/>
                  <path d="M21.5 10.56l-3.44-1.96-3.66 3.66 3.67 3.67 3.43-1.95c.98-.56.98-2.86 0-3.42z" fill="#f5d60c" opacity="0.9"/>
                  <path d="M3.18 1.14L13.54 11.5l3.52-3.52-12.61-7.18a1.38 1.38 0 00-1.27.34z" fill="#f5d60c" opacity="0.7"/>
                </svg>
                <div>
                  <div
                    className="text-[9px] tracking-widest uppercase text-white/60"
                    style={{ fontFamily: "var(--font-dm-sans)", lineHeight: 1 }}
                  >
                    Explore
                  </div>
                  <div
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-dm-sans)", lineHeight: 1.2 }}
                  >
                    All Applications
                  </div>
                </div>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 sm:gap-8">
              {["GLOBAL APP USERS", "CHURU, RAJASTHAN", "HIGH-POWER WIRING"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-charcoal inline-block flex-shrink-0" />
                  <span
                    className="text-[10px] sm:text-xs tracking-wider text-charcoal font-bold uppercase"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Orbital visual (hidden on mobile) ── */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-80 xl:w-96 h-80 xl:h-96">
              <div className="absolute inset-0 rounded-full border border-black/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-dashed border-black/15 animate-spin-rev" />
              <div className="absolute inset-10 rounded-full border border-black/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <div className="w-20 h-20 bg-charcoal rounded-full flex items-center justify-center mb-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                    <polygon points="20,4 24,16 20,16 24,36 16,20 20,20" fill="#f5d60c" />
                  </svg>
                </div>
                <p className="text-xs tracking-[0.25em] uppercase text-charcoal font-bold"
                  style={{ fontFamily: "var(--font-dm-sans)" }}>Software &amp; Electrical</p>
                <p className="text-[11px] text-charcoal/60 mt-1 tracking-wider font-medium"
                  style={{ fontFamily: "var(--font-dm-sans)" }}>Benisoha Fusion LLP</p>
              </div>
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-3 h-3 rounded-full bg-charcoal"
                  style={{
                    top: "50%", left: "50%",
                    transform: `rotate(${deg}deg) translateX(158px) translateY(-50%)`,
                    opacity: deg % 120 === 0 ? 0.8 : 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator — hidden on small screens */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal font-bold"
            style={{ fontFamily: "var(--font-dm-sans)" }}>Scroll</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-charcoal to-transparent" />
        </div>
      </div>
    </section>
  );
}
