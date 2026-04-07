"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1. Check if the page was hard-refreshed using the Performance API
    const navEntries = window.performance.getEntriesByType("navigation");
    const isReload = navEntries.length > 0 && (navEntries[0] as PerformanceNavigationTiming).type === "reload";

    // 2. If they already saw it AND it's NOT a refresh, instantly remove it
    if (!isReload && sessionStorage.getItem("hasSeenLoader")) {
      setIsVisible(false);
      return;
    }

    // 3. Otherwise (it's a first visit OR a refresh), mark as seen and play animation
    sessionStorage.setItem("hasSeenLoader", "true");
    
    // Start the CSS fade out transition at 2.4 seconds
    const fadeTimer = setTimeout(() => setIsFadingOut(true), 2400);
    
    // Completely unmount at 3.0 seconds to prevent lag
    const removeTimer = setTimeout(() => setIsVisible(false), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div id="page-loader" className={isFadingOut ? "hidden" : ""}>
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