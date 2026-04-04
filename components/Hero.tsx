"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.remove("opacity-0"), 100);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gold-500 dot-pattern">

      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large circle rings — dark on gold */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full border border-black/10" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-black/08" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border border-black/08" />
        {/* Dark blob accents */}
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-black/05 blur-3xl animate-float" />
        {/* Diagonal lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <line x1="0" y1="100%" x2="25%" y2="0" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
          <line x1="75%" y1="0" x2="100%" y2="100%" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 opacity-0 transition-opacity duration-1000">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-10 h-[2px] bg-charcoal" />
              <span className="text-xs tracking-[0.3em] uppercase text-charcoal font-bold"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Premium Tech &amp; Infrastructure
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 400, color: "#1A1A1A" }}>
              Building the{" "}
              <span className="italic font-light text-white" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}>Digital</span>
              <br />&amp; Physical{" "}
              <span className="italic font-light text-white" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}>Future</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-charcoal/80 mb-10 max-w-lg font-medium"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              From enterprise software and intelligent automation to city-scale electrical
              infrastructure — we deliver precision, quality, and reliability at every scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#services"
                className="px-8 py-3.5 bg-charcoal text-white text-xs tracking-widest uppercase font-bold hover:bg-charcoal-soft hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Our Services
              </a>
              <a href="#contact"
                className="px-8 py-3.5 border-2 border-charcoal text-charcoal text-xs tracking-widest uppercase font-bold hover:bg-charcoal hover:text-white transition-all duration-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Work With Us
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 flex flex-wrap gap-8">
              {["Quality Assured", "Safety First", "On-Time Delivery"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-charcoal inline-block" />
                  <span className="text-xs tracking-wider text-charcoal font-bold uppercase"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Orbital visual */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-96 h-96">
              {/* Rings — dark on gold */}
              <div className="absolute inset-0 rounded-full border border-black/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-dashed border-black/15 animate-spin-rev" />
              <div className="absolute inset-10 rounded-full border border-black/10" />
              {/* Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <div className="w-20 h-20 bg-charcoal rounded-full flex items-center justify-center mb-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                    <polygon points="20,4 24,16 20,16 24,36 16,20 20,20" fill="#ffb900" />
                  </svg>
                </div>
                <p className="text-xs tracking-[0.25em] uppercase text-charcoal font-bold"
                  style={{ fontFamily: "var(--font-dm-sans)" }}>Power &amp; Code</p>
                <p className="text-[11px] text-charcoal/60 mt-1 tracking-wider font-medium"
                  style={{ fontFamily: "var(--font-dm-sans)" }}>Where Tech Meets Infrastructure</p>
              </div>
              {/* Orbital dots */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div key={deg} className="absolute w-3 h-3 rounded-full bg-charcoal"
                  style={{ top: "50%", left: "50%",
                    transform: `rotate(${deg}deg) translateX(188px) translateY(-50%)`,
                    opacity: deg % 120 === 0 ? 0.8 : 0.3 }} />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal font-bold"
            style={{ fontFamily: "var(--font-dm-sans)" }}>Scroll</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-charcoal to-transparent" />
        </div>
      </div>
    </section>
  );
}
