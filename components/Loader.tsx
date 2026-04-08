"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setHidden(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div id="page-loader" className={hidden ? "hidden" : ""}>
      {/* Center content */}
      <div className="flex flex-col items-center gap-6">

        {/* Animated bolt + orbit ring */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="loader-orbit" />
          <div className="loader-bolt">
            <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="36,4 22,38 32,38 24,76 48,30 34,30"
                fill="#f5d60c"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Brand name */}
        <div className="text-center">
          <div
            className="text-white tracking-[0.3em] uppercase font-semibold text-lg"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem" }}
          >
            Benisoha
          </div>
          <div
            className="text-[10px] tracking-[0.35em] uppercase font-bold mt-0.5"
            style={{ color: "#f5d60c", fontFamily: "var(--font-dm-sans)" }}
          >
            Fusion
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div className="loader-bar-fill h-full bg-gold-500 rounded-full" />
        </div>

        {/* Tagline */}
        <p
          className="text-white/40 text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Power · Code · Infrastructure
        </p>
      </div>
    </div>
  );
}
