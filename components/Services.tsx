"use client";

import { useEffect, useRef } from "react";

const softwareServices = [
  {
    title: "Application Development",
    desc: "Custom web, mobile, and enterprise applications built with modern stacks. From concept to deployment.",
    icon: "⬡",
  },
  {
    title: "Automation Solutions",
    desc: "Business process automation, workflow orchestration, RPA, and intelligent automation pipelines.",
    icon: "⬡",
  },
  {
    title: "Digital Support",
    desc: "Ongoing technical support, system maintenance, performance monitoring, and rapid issue resolution.",
    icon: "⬡",
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud architecture, CI/CD pipelines, infrastructure management and scalable deployment strategies.",
    icon: "⬡",
  },
];

const infraServices = [
  {
    title: "Power Line Installation",
    desc: "Professional HT/LT power line laying and erection for city-wide electrical distribution networks.",
    icon: "◈",
  },
  {
    title: "Pole Erection Projects",
    desc: "Concrete and steel pole installation with precise foundation work for the Electricity Department.",
    icon: "◈",
  },
  {
    title: "Electrical Infrastructure",
    desc: "End-to-end city electrical infrastructure projects with adherence to safety codes and regulations.",
    icon: "◈",
  },
  {
    title: "Site Safety & Compliance",
    desc: "Rigorous safety planning, equipment checks, and compliance with statutory electrical standards.",
    icon: "◈",
  },
];

function ServiceCard({
  title,
  desc,
  icon,
  delay,
  variant,
}: {
  title: string;
  desc: string;
  icon: string;
  delay: number;
  variant: "software" | "infra";
}) {
  return (
    <div
      className="reveal group p-6 border border-gray-100 hover:border-gold-300 bg-white hover:shadow-[0_8px_40px_rgba(255,185,0,0.12)] transition-all duration-400 cursor-default"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-4">
        <span
          className={`text-2xl leading-none mt-0.5 transition-colors duration-300 ${
            variant === "software"
              ? "text-gold-400 group-hover:text-gold-600"
              : "text-gold-300 group-hover:text-gold-500"
          }`}
        >
          {icon}
        </span>
        <div>
          <h4
            className="text-base font-medium mb-2 text-charcoal group-hover:text-gold-800 transition-colors"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
          >
            {title}
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
            {desc}
          </p>
        </div>
      </div>
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
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-28 bg-cream circuit-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-gold-400" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold-600 font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
              What We Do
            </span>
            <span className="w-8 h-[1px] bg-gold-400" />
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 500,
              color: "#1A1A1A",
            }}
          >
            Our <span className="italic text-gold-gradient">Services</span>
          </h2>
        </div>

        {/* Two Verticals */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Software Services */}
          <div>
            <div className="reveal mb-8 flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gold-gradient flex items-center justify-center">
                  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
                    <path d="M4 7L10 13L16 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M10 13V3M3 17H17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 500 }}
                  className="text-charcoal"
                >
                  Software & Digital
                </h3>
                <p className="text-xs text-gold-600 tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Technology Services
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {softwareServices.map((s, i) => (
                <ServiceCard key={s.title} {...s} delay={0.1 + i * 0.08} variant="software" />
              ))}
            </div>
          </div>

          {/* Infrastructure Services */}
          <div>
            <div className="reveal mb-8 flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-charcoal flex items-center justify-center">
                  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
                    <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" stroke="#ffb900" strokeWidth="1.2" fill="rgba(255,185,0,0.2)"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 500 }}
                  className="text-charcoal"
                >
                  Electrical Infrastructure
                </h3>
                <p className="text-xs text-gold-600 tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  City-Scale Projects
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {infraServices.map((s, i) => (
                <ServiceCard key={s.title} {...s} delay={0.15 + i * 0.08} variant="infra" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
