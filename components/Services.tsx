"use client";

import { useEffect, useRef } from "react";

const softwareServices = [
  { title: "Application Development", desc: "Custom web, mobile, and enterprise applications built with modern stacks. From concept to deployment." },
  { title: "Automation Solutions", desc: "Business process automation, workflow orchestration, RPA, and intelligent automation pipelines." },
  { title: "Digital Support", desc: "Ongoing technical support, system maintenance, performance monitoring, and rapid issue resolution." },
  { title: "Cloud & DevOps", desc: "Cloud architecture, CI/CD pipelines, infrastructure management and scalable deployment strategies." },
];

const infraServices = [
  { title: "Power Line Installation", desc: "Professional HT/LT power line laying and erection for city-wide electrical distribution networks." },
  { title: "Pole Erection Projects", desc: "Concrete and steel pole installation with precise foundation work for the Electricity Department." },
  { title: "Electrical Infrastructure", desc: "End-to-end city electrical infrastructure projects with adherence to safety codes and regulations." },
  { title: "Site Safety & Compliance", desc: "Rigorous safety planning, equipment checks, and compliance with statutory electrical standards." },
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
        <div className="bg-gold-500 dot-pattern py-24 px-8 lg:px-16">
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-charcoal" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal font-bold"
              style={{ fontFamily: "var(--font-dm-sans)" }}>Technology Services</span>
          </div>
          <h3 className="reveal text-charcoal mb-8 leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600 }}>
            Software &amp;{" "}
            <span className="italic font-light text-white" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>
              Digital
            </span>
          </h3>
          <div className="grid gap-4">
            {softwareServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={0.08 + i * 0.07} />
            ))}
          </div>
        </div>

        {/* Infrastructure — dark background */}
        <div className="bg-charcoal line-pattern py-24 px-8 lg:px-16">
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-gold-500" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-bold"
              style={{ fontFamily: "var(--font-dm-sans)" }}>City-Scale Projects</span>
          </div>
          <h3 className="reveal text-white mb-8 leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600 }}>
            Electrical{" "}
            <span className="italic font-light text-gold-400">Infrastructure</span>
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
            <path d="M16 2L18 10H26L20 15L22 23L16 18L10 23L12 15L6 10H14L16 2Z" fill="#ffb900" />
          </svg>
        </div>
      </div>
    </section>
  );
}
