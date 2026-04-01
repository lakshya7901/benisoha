"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    category: "Software",
    title: "Enterprise Resource Management System",
    desc: "A full-stack ERP platform for a manufacturing firm — covering inventory, HR, and financial reporting with real-time dashboards.",
    tags: ["React", "Node.js", "PostgreSQL"],
    accent: "border-gold-400",
  },
  {
    category: "Automation",
    title: "Automated Invoice Processing Pipeline",
    desc: "OCR-powered document automation reducing manual invoicing effort by 80% with built-in validation and ERP integration.",
    tags: ["Python", "RPA", "API Integration"],
    accent: "border-gold-400",
  },
  {
    category: "Infrastructure",
    title: "Urban Power Line Network — Phase 1",
    desc: "City-wide HT power line installation project for the Electricity Department covering 15km of urban distribution network.",
    tags: ["HT Lines", "Pole Erection", "Govt. Project"],
    accent: "border-gold-400",
  },
  {
    category: "Software",
    title: "Customer Support Digital Portal",
    desc: "A multi-channel support portal with ticketing, live chat integration, and analytics for a regional service provider.",
    tags: ["Next.js", "TypeScript", "REST API"],
    accent: "border-gold-400",
  },
  {
    category: "Infrastructure",
    title: "Pole Installation — Industrial Zone",
    desc: "Large-scale concrete pole installation for an industrial zone, including site survey, foundation work, and commissioning.",
    tags: ["LT Lines", "Foundation Work", "Safety Audit"],
    accent: "border-gold-400",
  },
  {
    category: "Automation",
    title: "Fleet Monitoring & Alert System",
    desc: "IoT-connected fleet tracking system with geofencing, driver behavior analytics, and real-time alert dashboards.",
    tags: ["IoT", "React", "Node.js"],
    accent: "border-gold-400",
  },
];

const categoryColors: Record<string, string> = {
  Software: "bg-gold-100 text-gold-700",
  Automation: "bg-amber-50 text-amber-700",
  Infrastructure: "bg-stone-100 text-stone-600",
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Software", "Automation", "Infrastructure"];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

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
    <section id="projects" ref={sectionRef} className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-gold-400" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold-600 font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Our Work
              </span>
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
              }}
            >
              Featured <span className="italic text-gold-gradient">Projects</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="reveal flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                  filter === cat
                    ? "bg-gold-gradient text-white"
                    : "border border-gray-200 text-gray-500 hover:border-gold-300 hover:text-gold-700"
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
              key={project.title}
              className="reveal group border border-gray-100 hover:border-gold-200 hover:shadow-[0_12px_40px_rgba(201,168,76,0.10)] transition-all duration-400 bg-white"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {/* Top accent bar */}
              <div className="h-[3px] bg-gradient-to-r from-gold-300 via-gold-500 to-transparent" />

              <div className="p-6">
                {/* Category badge */}
                <span
                  className={`inline-block px-3 py-1 text-[10px] tracking-widest uppercase rounded-sm mb-4 ${categoryColors[project.category]}`}
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.category}
                </span>

                <h3
                  className="text-lg mb-3 text-charcoal group-hover:text-gold-800 transition-colors leading-snug"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 500 }}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-6" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wider border border-gold-200 text-gold-600 px-2 py-0.5"
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
    </section>
  );
}
