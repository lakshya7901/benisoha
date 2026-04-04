"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add("opacity-100");
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream circuit-bg"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gold circle - top right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-gold-200 opacity-40" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-gold-300 opacity-30" />

        {/* Bottom left accent */}
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full border border-gold-200 opacity-30" />

        {/* Gold gradient blob */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-100 opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 rounded-full bg-gold-200 opacity-15 blur-3xl" style={{ animationDelay: "3s" }} />

        {/* Diagonal line accents */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <line x1="0" y1="100%" x2="30%" y2="0" stroke="#ffb900" strokeWidth="0.5" opacity="0.15" />
          <line x1="70%" y1="0" x2="100%" y2="100%" stroke="#ffb900" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="inline-block w-10 h-[1px] bg-gold-500" />
              <span
                className="text-xs tracking-[0.3em] uppercase text-gold-600 font-medium"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Premium Tech & Infrastructure
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="mb-6 leading-[1.05]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 500,
                color: "#1A1A1A",
              }}
            >
              Building the{" "}
              <span className="italic text-gold-gradient font-normal">
                Digital
              </span>
              <br />& Physical{" "}
              <span className="italic text-gold-gradient font-normal">
                Future
              </span>
            </h1>

            {/* Sub-heading */}
            <p
              className="text-base md:text-lg leading-relaxed text-gray-800 mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
            >
              From enterprise software and intelligent automation to city-scale
              electrical infrastructure — we deliver precision, quality, and
              reliability at every scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-8 py-3.5 bg-gold-gradient text-white text-xs tracking-widest uppercase font-medium hover:shadow-[0_8px_30px_rgba(255,185,0,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-charcoal text-charcoal text-xs tracking-widest uppercase font-medium hover:border-gold-500 hover:text-gold-700 transition-all duration-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Work With Us
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 flex flex-wrap gap-8">
              {[
                { label: "Quality Assured", icon: "✦" },
                { label: "Safety First", icon: "✦" },
                { label: "On-Time Delivery", icon: "✦" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-gold-500 text-xs">{item.icon}</span>
                  <span
                    className="text-xs tracking-wider text-gray-700 uppercase"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Decorative visual */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-96 h-96">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-gold-200 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-4 rounded-full border border-dashed border-gold-300 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              <div className="absolute inset-10 rounded-full border border-gold-200" />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <svg viewBox="0 0 120 120" className="w-20 h-20 mb-4" xmlns="http://www.w3.org/2000/svg">
                  {/* Lightning bolt for electrical */}
                  <polygon points="65,10 45,65 60,65 55,110 75,55 60,55" fill="#ffb900" opacity="0.9"/>
                  {/* Circuit dots */}
                  <circle cx="25" cy="30" r="3" fill="#ffb900" opacity="0.5"/>
                  <circle cx="95" cy="30" r="3" fill="#ffb900" opacity="0.5"/>
                  <circle cx="25" cy="90" r="3" fill="#ffb900" opacity="0.5"/>
                  <circle cx="95" cy="90" r="3" fill="#ffb900" opacity="0.5"/>
                  <line x1="28" y1="30" x2="45" y2="30" stroke="#ffb900" strokeWidth="1" opacity="0.4"/>
                  <line x1="75" y1="30" x2="92" y2="30" stroke="#ffb900" strokeWidth="1" opacity="0.4"/>
                  <line x1="25" y1="33" x2="25" y2="87" stroke="#ffb900" strokeWidth="1" opacity="0.4"/>
                  <line x1="95" y1="33" x2="95" y2="87" stroke="#ffb900" strokeWidth="1" opacity="0.4"/>
                  <line x1="28" y1="90" x2="55" y2="90" stroke="#ffb900" strokeWidth="1" opacity="0.4"/>
                  <line x1="75" y1="90" x2="92" y2="90" stroke="#ffb900" strokeWidth="1" opacity="0.4"/>
                </svg>

                <p
                  className="text-xs tracking-[0.25em] uppercase text-gold-600"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Power & Code
                </p>
                <p
                  className="text-[11px] text-gray-800 mt-1 tracking-wider"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Where Tech Meets Infrastructure
                </p>
              </div>

              {/* Orbital dots */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-2 h-2 rounded-full bg-gold-400 opacity-60"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateX(188px) translateY(-50%)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
