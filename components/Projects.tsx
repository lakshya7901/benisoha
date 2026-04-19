"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    category: "APPLICATION",
    title: "Clone Master - Multi Dual Space",
    desc: "Architected to securely isolate app instances, enabling users to seamlessly run multiple accounts for work, gaming, and social media on a single Android device.",
    tags: ["Virtualization", "Multi-Account", "Productivity"],
  },
  {
    category: "APPLICATION",
    title: "Tool & Utility Applications",
    desc: "Engineering a robust suite of Android utilities designed for maximum device efficiency. Future releases will be deployed via Google Play and direct APK access.",
    tags: ["System Tools", "Android Dev", "Optimization"],
  },
  {
    category: "AUTOMATION",
    title: "Automation Apps",
    desc: "Developing intelligent, script-driven automation applications designed to streamline repetitive mobile tasks, optimize workflows, and enhance overall productivity.",
    tags: ["Task Automation", "Scripting", "Workflow Efficiency"],
  },
    {
    category: "POWER SETUP",
    title: "LT / HT Line Work",
    desc: "Executing precision wiring and installation of Low Tension (LT) and High Tension (HT) lines, ensuring robust power distribution and strict adherence to safety protocols.",
    tags: ["Power Distribution", "Wiring Protocols", "Safety Compliance"],
  },
    {
    category: "POWER SETUP",
    title: "Pole Installation Work",
    desc: "Delivering structurally sound foundation and erection services for electrical poles, engineered to support resilient and high-capacity transmission networks.",
    tags: ["Infrastructure", "Foundation Work", "Grid Support"],
  },
    {
    category: "POWER SETUP",
    title: "Transformer & DTR Work",
    desc: "Expert installation and commissioning of Distribution Transformers (DTR), ensuring optimal voltage regulation and secure, high-capacity electrical setups.",
    tags: ["Voltage Regulation", "Heavy Load", "Commissioning"],
  },
];

const categories = ["ALL", "APPLICATION", "AUTOMATION", "POWER SETUP"];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState("ALL");
  const [sectionVisible, setSectionVisible] = useState(false);
  const [cardKey, setCardKey] = useState(0);

  const filtered = filter === "ALL" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleFilter = (cat: string) => {
    setFilter(cat);
    setCardKey((k) => k + 1);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-28 bg-gold-500 dot-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 sm:mb-16">
          <div>
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="w-8 h-[2px] bg-charcoal" />
              <span className="text-xs tracking-[0.3em] uppercase text-charcoal font-bold"
                style={{ fontFamily: "var(--font-dm-sans)" }}>BENISOHA PORTFOLIO</span>
            </div>
            <h2 className={`transition-all duration-700 delay-100 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, color: "#1A1A1A" }}>
              Application &{" "}
              <span className="italic font-light text-white" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.15)" }}>Installations</span>
            </h2>
          </div>

          {/* Filter */}
          <div className={`flex flex-wrap gap-2 transition-all duration-700 delay-200 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => handleFilter(cat)}
                className={`px-4 py-2 text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
                  filter === cat
                    ? "bg-charcoal text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                    : "border-2 border-charcoal/40 text-charcoal hover:border-charcoal hover:bg-charcoal/10"
                }`}
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards — white on gold */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((project, i) => (
            <div key={`${cardKey}-${project.title}`}
              className="group bg-white hover:shadow-[0_16px_50px_rgba(0,0,0,0.18)] transition-all duration-400"
              style={{ animation: "cardFadeUp 0.5s ease forwards", animationDelay: `${i * 0.07}s`, opacity: 0 }}>

              {/* Top bar color by category */}
              <div className={`h-1 ${
                project.category === "APPLICATION" ? "bg-charcoal" :
                project.category === "AUTOMATION" ? "bg-gold-600" : "bg-charcoal-soft"
              }`} />

              <div className="p-6">
                <span className={`inline-block px-3 py-1 text-[10px] tracking-widest uppercase rounded-sm mb-4 font-bold ${
                  project.category === "APPLICATION" ? "bg-charcoal text-white" :
                  project.category === "AUTOMATION" ? "bg-gold-500 text-charcoal" :
                  "bg-gray-100 text-gray-700"
                }`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {project.category}
                </span>

                <h3 className="mb-3 text-charcoal group-hover:text-gold-700 transition-colors leading-snug font-bold"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem" }}>
                  {project.title}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed mb-6 font-medium"
                  style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag}
                      className="text-[10px] tracking-wider border-2 border-charcoal/20 text-charcoal px-2 py-0.5 font-semibold"
                      style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
