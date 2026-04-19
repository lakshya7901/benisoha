"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Loader() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const key = "bf_loaded";
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      setShow(true);
      const t = setTimeout(() => setShow(false), 2400);
      return () => clearTimeout(t);
    }
  }, []); 
  if (!show) return null;

  return (
    <div
      id="page-loader"
      style={{
        position: "fixed", inset: 0, background: "#1A1A1A",
        zIndex: 9999, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 28,
        animation: "loaderFadeOut 0.5s ease 2s forwards",
      }}
    >
      {/* Orbit + bolt */}
      <div style={{ position: "relative", width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="loader-orbit" />
        <div className="loader-bolt">
          <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="36,4 22,38 32,38 24,76 48,30 34,30" fill="#f5d60c" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Brand */}
      <div style={{ textAlign: "center" }}>
        <div style={{
          color: "#fff", letterSpacing: "0.3em", textTransform: "uppercase",
          fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 600,
        }}>
          Benisoha
        </div>
        <div style={{
          fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase",
          fontWeight: 700, color: "#f5d60c", fontFamily: "var(--font-dm-sans)", marginTop: 4,
        }}>
          Fusion
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ width: 192, height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 9999, overflow: "hidden" }}>
        <div className="loader-bar-fill" style={{ height: "100%", background: "#f5d60c", borderRadius: 9999 }} />
      </div>

      <p style={{
        color: "rgba(255,255,255,0.35)", fontSize: "0.65rem",
        letterSpacing: "0.25em", textTransform: "uppercase",
        fontFamily: "var(--font-dm-sans)",
      }}>
        Software & Electrical
      </p>

      <style>{`
        @keyframes loaderFadeOut {
          to { opacity: 0; visibility: hidden; pointer-events: none; }
        }
      `}</style>
    </div>
  );
}
