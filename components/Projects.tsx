"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    category: "Software",
    title: "Enterprise Resource Management System",
    desc: "A full-stack ERP platform for a manufacturing firm — covering inventory, HR, and financial reporting with real-time dashboards.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    category: "Automation",
    title: "Automated Invoice Processing Pipeline",
    desc: "OCR-powered document automation reducing manual invoicing effort by 80% with built-in validation and ERP integration.",
    tags: ["Python", "RPA", "API Integration"],
  },
  {
    category: "Infrastructure",
    title: "Urban Power Line Network — Phase 1",
    desc: "City-wide HT power line installation project for the Electricity Department covering 15km of urban distribution network.",
    tags: ["HT Lines", "Pole Erection", "Govt. Project"],
  },
  {
    category: "Software",
    title: "Customer Support Digital Portal",
    desc: "A multi-channel support portal with ticketing, live chat integration, and analytics for a regional service provider.",
    tags: ["Next.js", "TypeScript", "REST API"],
  },
  {
    category: "Infrastructure",
    title: "Pole Installation — Industrial Zone",
    desc: "Large-scale concrete pole installation for an industrial zone, including site survey, foundation work, and commissioning.",
    tags: ["LT Lines", "Foundation Work", "Safety Audit"],
  },
  {
    category: "Automation",
    title: "Fleet Monitoring & Alert System",
    desc: "IoT-connected fleet tracking system with geofencing, driver behavior analytics, and real-time alert dashboards.",
    tags: ["IoT", "React", "Node.js"],
  },
];

const categoryColors: Record<string, string> = {
  Software: "bg-amber-50 text-amber-800",
  Automation: "bg-yellow-50 text-yellow-800",
  Infrastructure: "bg-stone-100 text-stone-700",
};

const categories = ["All", "Software", "Automation", "Infrastructure"];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState("All");
  const [sectionVisible, setSectionVisible] = useState(false);
  const [cardKey, setCardKey] = useState(0);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  // Trigger section visibility once on mount via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // When filter changes, bump cardKey so cards remount and re-animate
  const handleFilter = (cat: string) => {
    setFilter(cat);
    setCardKey((k) => k + 1);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div
              className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="w-8 h-[1px] bg-gold-500" />
              <span
                className="text-xs tracking-[0.3em] uppercase text-gold-600 font-semibold"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Our Work
              </span>
            </div>
            <h2
              className={`transition-all duration-700 delay-100 ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 500,
              }}
            >
              Featured <span className="italic text-gold-gradient">Projects</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div
            className={`flex flex-wrap gap-2 transition-all duration-700 delay-200 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-2 text-xs tracking-widest uppercase font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-gold-500 text-white shadow-[0_4px_20px_rgba(255,185,0,0.4)]"
                    : "border border-gray-300 text-gray-600 hover:border-gold-400 hover:text-gold-700"
                }`}
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={`${cardKey}-${project.title}`}
              className="group border border-gray-200 hover:border-gold-300 hover:shadow-[0_12px_40px_rgba(255,185,0,0.12)] transition-all duration-500 bg-white"
              style={{
                animation: `cardFadeUp 0.5s ease forwards`,
                animationDelay: `${i * 0.07}s`,
                opacity: 0,
              }}
            >
              {/* Top accent bar */}
              <div className="h-[3px] bg-gradient-to-r from-gold-400 via-gold-500 to-transparent" />

              <div className="p-6">
                {/* Category badge */}
                <span
                  className={`inline-block px-3 py-1 text-[11px] tracking-widest uppercase rounded-sm mb-4 font-semibold ${categoryColors[project.category]}`}
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.category}
                </span>

                <h3
                  className="mb-3 text-charcoal group-hover:text-gold-700 transition-colors leading-snug"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm text-gray-700 leading-relaxed mb-6 font-medium"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] tracking-wider border border-gold-300 text-gold-700 px-2 py-0.5 font-medium"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe injected inline */}
      <style>{`
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
