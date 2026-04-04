export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gold-500 dot-pattern relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-charcoal" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
                <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" fill="#1A1A1A" opacity="0.12"/>
                <text x="18" y="22" textAnchor="middle" fill="#1A1A1A"
                  fontSize="10" fontFamily="Cormorant Garamond, serif" fontWeight="700">BF</text>
              </svg>
              <div>
                <div className="font-semibold tracking-widest text-charcoal"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>
                  Benisoha Fusion
                </div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-charcoal/60 font-bold">
                  Software &amp; Infrastructure
                </div>
              </div>
            </div>
            <p className="text-sm text-charcoal/80 leading-relaxed max-w-sm font-medium"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              A premier software and technical services company delivering application
              development, automation, and city electrical infrastructure projects with
              quality, safety, and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-charcoal font-bold mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}>Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}
                    className="text-sm text-charcoal/80 hover:text-charcoal font-semibold transition-colors hover:underline underline-offset-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-charcoal font-bold mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}>Services</h4>
            <ul className="space-y-3">
              {["App Development", "Automation", "Digital Support", "Power Line Install", "Pole Erection"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-charcoal flex-shrink-0" />
                  <span className="text-sm text-charcoal/80 font-semibold"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-2 border-charcoal/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal/70 font-semibold" style={{ fontFamily: "var(--font-dm-sans)" }}>
            © {year} Benisoha Fusion. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="w-4 h-[2px] bg-charcoal/40" />
            <span className="text-xs text-charcoal/70 font-bold tracking-wider uppercase"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              Quality · Safety · Timely Execution
            </span>
            <span className="w-4 h-[2px] bg-charcoal/40" />
          </div>
        </div>
      </div>

      {/* Large watermark */}
      <div className="absolute bottom-0 left-0 right-0 text-center opacity-[0.04] pointer-events-none overflow-hidden"
        style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(4rem, 12vw, 9rem)", fontWeight: 700, lineHeight: 1, color: "#1A1A1A" }}>
        BENISOHA
      </div>
    </footer>
  );
}
