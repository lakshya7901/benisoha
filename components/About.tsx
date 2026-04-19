"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    title: "App Development & ASO",
    desc: "Designing, developing, and maintaining Android applications on Google Play with comprehensive listing management.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M20 4L23.5 14.5H34.5L26 21.5L29.5 32L20 25L10.5 32L14 21.5L5.5 14.5H16.5L20 4Z"
          stroke="#f5d60c" strokeWidth="1.8" fill="rgba(245,214,12,0.15)" />
      </svg>
    ),
  },
  {
    title: "Electrical Installations",
    desc: "Executing heavy load electrical connections and high-power equipment setups with targeted, project-wise planning.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M20 4L34 10V22C34 29 27 35 20 37C13 35 6 29 6 22V10L20 4Z"
          stroke="#f5d60c" strokeWidth="1.8" fill="rgba(245,214,12,0.15)" />
        <path d="M14 20L18 24L26 16" stroke="#f5d60c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Safety Checks & Testing",
    desc: "Implementing proper wiring protocols and conducting essential basic testing to ensure safety across all physical installations.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="20" r="15" stroke="#f5d60c" strokeWidth="1.8" fill="rgba(245,214,12,0.15)" />
        <path d="M20 11V20L26 24" stroke="#f5d60c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    /* White section — contrast against gold sections above/below */
    <section id="about" ref={sectionRef} className="py-16 sm:py-28 bg-white relative overflow-hidden">
      {/* Gold left stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-10 sm:mb-16">
          <span className="w-8 h-[2px] bg-gold-500" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold-600 font-bold"
            style={{ fontFamily: "var(--font-dm-sans)" }}>Who We Are</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="reveal mb-8 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 500, color: "#1A1A1A" }}>
              Two Dedicated Areas —{" "}
              <br /><span className="italic font-light text-brown-dark">Android Applications &amp; High-Power Setups</span>
            </h2>

            <p className="reveal text-gray-800 leading-relaxed mb-6 text-base font-medium"
              style={{ fontFamily: "var(--font-dm-sans)", transitionDelay: "0.1s" }}>
                Benisoha Fusion LLP is a dual-service company working in Android applications and Electrical Infrastructure. We develop apps like Clone Master – Multi Dual Space.
            </p>

            <p className="reveal text-gray-700 leading-relaxed mb-10 text-base font-medium"
              style={{ fontFamily: "var(--font-dm-sans)", transitionDelay: "0.2s" }}>
                We provide GSS work, LT line work, 11kV line work, 33kV line work, 220 line work, Transformer Installation, DTR work, and Pole Installation services.
            </p>

            {/* Divider */}
            <div className="reveal flex items-center gap-4 mb-8" style={{ transitionDelay: "0.25s" }}>
              <div className="h-[2px] w-20 bg-gold-500" />
              <div className="h-[1px] flex-1 bg-gray-200" />
            </div>

            <blockquote className="reveal border-l-4 border-gold-500 pl-6 text-xl italic text-charcoal"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, transitionDelay: "0.3s" }}>
              &ldquo;Delivering digital utility to users worldwide, while providing trusted high-power infrastructure to our local region.&rdquo;
            </blockquote>
          </div>

          {/* Right: Pillars */}
          <div className="flex flex-col gap-6">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="reveal flex gap-5 group"
                style={{ transitionDelay: `${0.2 + i * 0.15}s` }}>
                <div className="flex-shrink-0 w-14 h-14 bg-gold-500 flex items-center justify-center
                  group-hover:bg-charcoal transition-colors duration-300">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1.5 text-charcoal"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem" }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
