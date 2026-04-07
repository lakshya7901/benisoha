import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const androidApps = [
  {
    title: "EcoTrack Mobile",
    desc: "Track your daily carbon footprint and discover eco-friendly alternatives. Real-time analytics right in your pocket.",
    tags: ["Android", "Kotlin", "Utility"],
    link: "https://play.google.com/store", 
  },
  {
    title: "TaskMaster Pro",
    desc: "Advanced task management for professionals. Syncs seamlessly with our enterprise backend.",
    tags: ["Android", "React Native", "Productivity"],
    link: "https://play.google.com/store",
  },
];

const websites = [
  {
    title: "Client Portal CRM",
    desc: "A fully responsive web platform for businesses to manage client interactions, invoices, and support tickets.",
    tags: ["Next.js", "Web", "B2B"],
    link: "https://your-website.com", 
  },
  {
    title: "E-Commerce Storefront",
    desc: "A modern, high-performance digital storefront optimized for speed and conversion rates.",
    tags: ["React", "Stripe", "E-Commerce"],
    link: "https://your-website.com",
  },
];

// Helper to create URL-friendly IDs
const generateId = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

export default function ApplicationsPage() {
  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gold-500 relative dot-pattern px-4">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-charcoal" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-charcoal mb-3 sm:mb-4 leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 8vw, 4rem)", fontWeight: 600 }}>
            Our <span className="italic font-light text-white" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>Applications</span>
          </h1>
          <p className="text-charcoal/80 max-w-2xl mx-auto text-sm sm:text-base font-medium px-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            Explore our suite of mobile applications and digital web platforms. 
            Download directly to your device or visit our live web solutions.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24 flex-grow bg-charcoal line-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Android Apps Section */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-6 sm:w-8 h-[2px] bg-gold-500 flex-shrink-0" />
              <h2 className="text-lg sm:text-2xl font-bold text-white uppercase tracking-widest"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Android Apps
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {androidApps.map((app, i) => (
                <div key={i} id={generateId(app.title)} className="border-2 border-white/10 p-5 sm:p-6 hover:border-gold-500 hover:bg-white/5 transition-all duration-300 flex flex-col group scroll-mt-28">
                  <h3 className="text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gold-400 transition-colors" style={{ fontFamily: "var(--font-cormorant)" }}>{app.title}</h3>
                  <p className="text-sm text-white/70 mb-5 sm:mb-6 flex-grow font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>{app.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wider text-charcoal bg-gold-500 px-2 py-0.5 font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={app.link} target="_blank" rel="noopener noreferrer" 
                     className="touch-target mt-auto flex items-center justify-center gap-2 bg-gold-500 text-charcoal py-3 sm:py-3.5 px-4 hover:bg-white transition-all duration-300 text-[11px] sm:text-xs tracking-widest uppercase font-bold text-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.18 1.14C2.76 1.38 2.5 1.83 2.5 2.37v19.26c0 .54.26.99.68 1.23l.1.06L13.19 12 2.28 1.08l-.1.06z"/>
                      <path d="M16.84 15.66l-3.3-3.3-10.36 10.36c.37.2.84.22 1.27-.02l12.39-7.04z" opacity="0.8"/>
                      <path d="M21.5 10.56l-3.44-1.96-3.66 3.66 3.67 3.67 3.43-1.95c.98-.56.98-2.86 0-3.42z" opacity="0.9"/>
                      <path d="M3.18 1.14L13.54 11.5l3.52-3.52-12.61-7.18a1.38 1.38 0 00-1.27.34z" opacity="0.7"/>
                    </svg>
                    Download App
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Websites Section */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-6 sm:w-8 h-[2px] bg-gold-500 flex-shrink-0" />
              <h2 className="text-lg sm:text-2xl font-bold text-white uppercase tracking-widest"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Web Platforms
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {websites.map((web, i) => (
                <div key={i} id={generateId(web.title)} className="border border-white/10 bg-charcoal-soft p-5 sm:p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col group scroll-mt-28">
                  <h3 className="text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gold-400 transition-colors" style={{ fontFamily: "var(--font-cormorant)" }}>{web.title}</h3>
                  <p className="text-sm text-white/70 mb-5 sm:mb-6 flex-grow font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>{web.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {web.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wider border border-white/20 text-white/90 px-2 py-0.5 font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={web.link} target="_blank" rel="noopener noreferrer" 
                     className="touch-target mt-auto flex items-center justify-center gap-2 border-2 border-white/20 text-white py-3 sm:py-3.5 px-4 hover:border-gold-500 hover:text-gold-500 transition-all duration-300 text-[11px] sm:text-xs tracking-widest uppercase font-bold text-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    Visit Website
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}