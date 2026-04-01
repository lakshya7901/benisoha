"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    title: "Quality Work",
    desc: "Every project is executed with meticulous attention to detail, meeting the highest industry standards.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L23.5 14.5H34.5L26 21.5L29.5 32L20 25L10.5 32L14 21.5L5.5 14.5H16.5L20 4Z" stroke="#C9A84C" strokeWidth="1.2" fill="rgba(201,168,76,0.1)"/>
      </svg>
    ),
  },
  {
    title: "Safety First",
    desc: "We adhere to strict safety protocols across all operations — from coding practices to on-site electrical work.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L34 10V22C34 29 27 35 20 37C13 35 6 29 6 22V10L20 4Z" stroke="#C9A84C" strokeWidth="1.2" fill="rgba(201,168,76,0.1)"/>
        <path d="M14 20L18 24L26 16" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Timely Execution",
    desc: "We respect deadlines. Project timelines are planned carefully and monitored throughout delivery.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" stroke="#C9A84C" strokeWidth="1.2" fill="rgba(201,168,76,0.1)"/>
        <path d="M20 11V20L26 24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
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
    <section id="about" ref={sectionRef} className="py-28 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-cream opacity-50" />
      <div className="absolute right-1/3 top-0 bottom-0 w-[1px] bg-gold-100" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-16">
          <span className="w-8 h-[1px] bg-gold-500" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold-600 font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Who We Are
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Main text */}
          <div>
            <h2
              className="reveal mb-8 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                color: "#1A1A1A",
              }}
            >
              A Dual-Force Company — <br />
              <span className="italic text-gold-gradient">Software & Infrastructure</span>
            </h2>

            <p className="reveal text-gray-600 leading-relaxed mb-6 text-base" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, transitionDelay: "0.1s" }}>
              We are a software and technical services company delivering cutting-edge
              application development, intelligent automation solutions, and comprehensive
              digital support. Our engineering team brings together deep technology expertise
              with a passion for elegant, scalable solutions.
            </p>

            <p className="reveal text-gray-600 leading-relaxed mb-10 text-base" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, transitionDelay: "0.2s" }}>
              Beyond digital, we are also trusted by the Electricity Department for city
              electrical infrastructure — including power line installation and pole erection
              projects. We bring the same precision and rigor from software engineering to
              physical infrastructure delivery.
            </p>

            {/* Gold divider line */}
            <div className="reveal flex items-center gap-4 mb-8" style={{ transitionDelay: "0.25s" }}>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-gold-400 to-transparent" />
              <span className="text-gold-400 text-xs">✦</span>
            </div>

            <blockquote
              className="reveal border-l-2 border-gold-400 pl-6 text-lg italic text-gray-700"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, transitionDelay: "0.3s" }}
            >
              "We don't just build systems — we build the infrastructure that powers communities."
            </blockquote>
          </div>

          {/* Right: Pillars */}
          <div className="flex flex-col gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="reveal flex gap-6 group"
                style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
              >
                <div className="flex-shrink-0 w-14 h-14 border border-gold-200 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-50 transition-all duration-300">
                  {pillar.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-medium mb-2 text-charcoal group-hover:text-gold-700 transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
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
