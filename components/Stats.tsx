"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50,  suffix: "+", label: "Projects Delivered" },
  { value: 99,  suffix: "%", label: "Client Satisfaction" },
  { value: 8,   suffix: "+", label: "Years of Experience" },
  { value: 30,  suffix: "+", label: "Infrastructure Sites" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = 16;
          const increment = (target / 1800) * step;
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    /* White band — strong contrast between gold sections */
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center py-8 px-4 group">
              <div className="text-5xl md:text-6xl font-light mb-3 text-charcoal white-shimmer"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  background: "linear-gradient(135deg, #1A1A1A, #FFFC00, #1A1A1A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animationDelay: `${i * 0.5}s`
                }}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-gray-600 font-bold"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
