"use client";

import { useEffect, useRef } from "react";

const softwareServices = [
  { title: "Android App Development", desc: "Custom, scalable Android solutions engineered for peak performance and seamless user experiences." },
  { title: "Tool & Utility Apps", desc: "Lightweight, high-utility applications designed to optimize daily workflows and solve specific problems." },
  { title: "Automation Apps", desc: "Smart, script-driven automation solutions built to eliminate repetitive tasks and enhance efficiency." },
  { title: "Play Store Publishing", desc: "End-to-end deployment services ensuring strict compliance and successful app store launches." },
  { title: "App Updates & Maintenance", desc: "Continuous system monitoring, feature upgrades, and legacy code maintenance to keep your app future-ready." },
  { title: "Clone & Dual Space Apps", desc: "Secure, optimized dual-space architectures engineered for running multiple account instances simultaneously." },
  { title: "App Optimization & Support", desc: "Advanced performance tuning, memory management, and dedicated support to maximize application efficiency." },
  { title: "App Testing & Bug Fixing", desc: "Rigorous QA testing and rapid vulnerability resolution to guarantee a flawless, crash-free product." },
];

const infraServices = [
  { title: "HT & LT Line Installatio", desc: "End-to-end deployment of High and Low Tension lines, optimized for secure and compliant power distribution." },
  { title: "11kV Line Work", desc: "Precision execution and safety-first wiring protocols for robust 11kV electrical networks." },
  { title: "33kV Line Work", desc: "Custom-engineered planning and structured installation to meet high-capacity 33kV load requirements." },
  { title: "220 Line Work", desc: "Advanced physical infrastructure setup designed for reliable high-voltage transmission and grid stability." },
  { title: "DTR & Transformer Installation", desc: "Strategic placement and commissioning of Distribution Transformers for optimal, site-specific voltage regulation" },
  { title: "Pole Erection", desc: "Structurally secure foundation and erection services built to support resilient electrical transmission grids." },
  { title: "Transport & Site Execution", desc: "Streamlined logistics and precision on-ground project management for heavy electrical infrastructure." },
  { title: "GSS Installation Work", desc: "Comprehensive Grid Substation (GSS) deployment to ensure seamless, uninterrupted power transmission." },
];

function ServiceCard({ title, desc, dark, delay }: { title: string; desc: string; dark?: boolean; delay: number }) {
  return (
    <div className={`reveal group p-5 border-2 transition-all duration-300 cursor-default ${
      dark
        ? "border-white/20 hover:border-gold-400 hover:bg-white/05"
        : "border-charcoal/15 bg-white hover:border-charcoal hover:shadow-[0_6px_30px_rgba(0,0,0,0.12)]"
    }`}
      style={{ transitionDelay: `${delay}s` }}>
      <div className={`w-1.5 h-1.5 rounded-full mb-3 ${dark ? "bg-gold-400" : "bg-charcoal"}`} />
      <h4 className={`font-bold mb-2 ${dark ? "text-white" : "text-charcoal"}`}
        style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>
        {title}
      </h4>
      <p className={`text-sm leading-relaxed font-medium ${dark ? "text-white/70" : "text-gray-700"}`}
        style={{ fontFamily: "var(--font-dm-sans)" }}>
        {desc}
      </p>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 70);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative">
      {/* Two-column layout: left gold, right dark */}
      <div className="grid lg:grid-cols-2 min-h-[700px]">

        {/* Software — gold background */}
        <div className="bg-gold-500 dot-pattern py-14 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-charcoal" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal font-bold"
              style={{ fontFamily: "var(--font-dm-sans)" }}>SOFTWARE SERVICES</span>
          </div>
          <h3 className="reveal text-charcoal mb-8 leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600 }}>
            Software & Application{" "}
            <span className="italic font-light text-white" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>
              Development
            </span>
          </h3>
          <div className="grid gap-4">
            {softwareServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={0.08 + i * 0.07} />
            ))}
          </div>
        </div>

        {/* Infrastructure — dark background */}
        <div className="bg-charcoal line-pattern py-14 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-gold-500" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-bold"
              style={{ fontFamily: "var(--font-dm-sans)" }}>LOCAL INSTALLATION PROJECTS</span>
          </div>
          <h3 className="reveal text-white mb-8 leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600 }}>
            GSS & Electrical{" "}
            <span className="italic font-light text-gold-400">Infrastructure  </span>
          </h3>
          <div className="grid gap-4">
            {infraServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} dark delay={0.1 + i * 0.07} />
            ))}
          </div>
        </div>
      </div>

      {/* Center label badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
          <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
            <path d="M16 2L18 10H26L20 15L22 23L16 18L10 23L12 15L6 10H14L16 2Z" fill="#f5d60c" />
          </svg>
        </div>
      </div>
    </section>
  );
}
