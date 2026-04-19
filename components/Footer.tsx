export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      label: "Facebook",
      href: "https://facebook.com/benisohafusion",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/benisohafusion",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8 0-3.2 0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.1 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1 3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4A6.2 6.2 0 0012 5.8zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
        </svg>
      ),
    },
    {
      label: "Telegram",
      href: "https://t.me/benisoha",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M21.944 2.506a1.5 1.5 0 00-1.54-.22L2.56 9.348a1.5 1.5 0 00.08 2.79l4.03 1.35 1.56 4.9a1.5 1.5 0 002.46.6l2.23-2.13 4.28 3.18a1.5 1.5 0 002.36-1.01l2.44-14.5a1.5 1.5 0 00-.06-1.02zM9.5 16.5l-.9-3.3 7.4-6.8-6.5 7.8v2.3z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com/benisohafusion",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@benisohafusion",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zm-13.9 9.4V8.4l6.3 3.6-6.3 3.6z" />
        </svg>
      ),
    }
  ];
  
  const renderFollowUs = () => (
    <div>
      <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-charcoal/60 mb-3"
        style={{ fontFamily: "var(--font-dm-sans)" }}>Follow Us</p>
      <div className="flex items-center gap-2 flex-wrap">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-9 h-9 bg-charcoal text-white flex items-center justify-center hover:bg-charcoal-soft hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
            title={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <footer className="relative overflow-hidden dot-pattern" style={{ background: "#f5d60c" }}>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-charcoal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 sm:mb-14">

          {/* 1. Brand (Order 1 on all devices) */}
          <div className="sm:col-span-2 order-1 sm:order-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <svg viewBox="0 0 36 36" className="w-9 h-9 flex-shrink-0" fill="none">
                <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" stroke="#1A1A1A" strokeWidth="2" fill="none" />
                <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" fill="#1A1A1A" opacity="0.12" />
                <text x="18" y="22" textAnchor="middle" fill="#1A1A1A"
                  fontSize="10" fontFamily="Cormorant Garamond, serif" fontWeight="700">BF</text>
              </svg>
              <div>
                <div
                  className="text-charcoal font-extrabold leading-tight"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                  }}
                >
                  Benisoha Fusion LLP
                </div>
                <div
                  className="uppercase text-charcoal/70 font-black tracking-[0.25em] mt-0.5"
                  style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.62rem" }}
                >
                  Software & Electrical
                </div>
              </div>
            </div>

            <p className="text-sm text-charcoal/80 leading-relaxed max-w-sm font-medium mb-0 sm:mb-7"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
                Android apps and Electrical infrastructure company working in GSS, LT/HT line, Transformer and Automation apps.
            </p>

            {/* Hidden on mobile, visible on tablet/desktop */}
            <div className="hidden sm:block">
              {renderFollowUs()}
            </div>
          </div>

          {/* 2. Services (Order 2 on mobile, Order 3 on desktop) */}
          <div className="order-2 sm:order-3">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-charcoal font-bold mb-4 sm:mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}>Services</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {["Android App Development", "Google Play Publishing", "App Store Optimization", "11 kW Power Setups", "Heavy Load Connections"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-charcoal flex-shrink-0" />
                  <span className="text-sm text-charcoal/80 font-semibold"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div className="order-3 sm:order-2">
            <h4
              className="text-[10px] tracking-[0.3em] uppercase text-charcoal font-bold mb-3"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col">
              {[
                { label: "About",        href: "/#about" },
                { label: "Services",     href: "/#services" },
                { label: "Apps", href: "/applications" },
                { label: "Projects",     href: "/#projects" },
                // { label: "Contact",      href: "/#contact" },
                { label: "Disclaimer",      href: "/disclaimer" },
                { label: "Privacy Policy",      href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.label} className="border-b border-charcoal/10 last:border-0">
                  <a
                    href={link.href}
                    className="text-sm text-charcoal/80 hover:text-charcoal font-semibold transition-colors block py-2.5"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Mobile Follow Us (Order 4 on mobile, Hidden on desktop) */}
          <div className="order-4 sm:hidden">
            {renderFollowUs()}
          </div>
          
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t-2 border-charcoal/20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-charcoal/70 font-semibold text-center sm:text-left"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            © {year} Benisoha Fusion. All rights reserved.
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-4 h-[2px] bg-charcoal/30" />
            <span className="text-[10px] sm:text-xs text-charcoal/60 font-bold tracking-wider uppercase"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              GLOBALLY USED APPS · LOCAL POWER INFRASTRUCTURE
            </span>
            <span className="w-4 h-[2px] bg-charcoal/30" />
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-0 left-0 right-0 text-center opacity-[0.04] pointer-events-none overflow-hidden"
        style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3.5rem, 10vw, 9rem)", fontWeight: 700, lineHeight: 1, color: "#1A1A1A" }}>
        BENISOHA
      </div>
    </footer>
  );
}