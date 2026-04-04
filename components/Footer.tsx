export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Gold top border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" stroke="#ffb900" strokeWidth="1.5" fill="none"/>
                <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" fill="#ffb900" opacity="0.15"/>
                <text x="18" y="22" textAnchor="middle" fill="#ffb900" fontSize="11" fontFamily="Cormorant Garamond, serif" fontWeight="600">BF</text>
              </svg>
              <div>
                <div className="text-base font-normal tracking-widest" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>
                  Benisoha Fusion
                </div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-gold-500">
                  Software & Infrastructure
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
              A premier software and technical services company delivering application
              development, automation, and city electrical infrastructure projects with
              quality, safety, and precision.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-300 hover:text-gold-400 transition-colors gold-border-animated"
                    style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "App Development",
                "Automation",
                "Digital Support",
                "Power Line Install",
                "Pole Erection",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-300 flex items-center gap-2" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                    <span className="text-gold-700 text-xs">✦</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-300" style={{ fontFamily: "var(--font-dm-sans)" }}>
            © {year} Benisoha Fusion. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gold-800 text-xs">✦</span>
            <span className="text-xs text-gray-300" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Quality · Safety · Timely Execution
            </span>
            <span className="text-gold-800 text-xs">✦</span>
          </div>
        </div>
      </div>

      {/* Large decorative text */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center opacity-[0.02] pointer-events-none overflow-hidden"
        style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(4rem, 12vw, 10rem)", fontWeight: 700, lineHeight: 1 }}
      >
        BENISOHA FUSION
      </div>
    </footer>
  );
}
