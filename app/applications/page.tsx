import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications | Benisoha Fusion",
  description: "Explore Benisoha Fusion's mobile apps and web platforms. Download our Android apps or visit our live web solutions.",
};

const androidApps = [
  {
    title: "Clone Master - Multi Dual Space",
    desc: "Run multiple accounts of your apps on one Android device. Separate work and personal apps, or use dual accounts for games, social media, and more.",
    tags: ["Android", "Tools", "Multi-Space"],
    link: "https://play.google.com/store/apps/details?id=com.cmaster.cloner",
  },
];

const proApps = [
  {
    title: "Clone Master - Multi Dual Space Pro",
    desc: "Unlock advanced multi-account control with enhanced performance and pro-level features.",
    tags: ["Android", "Tools", "Multi-Space"],
    link: "https://clone-master.en.uptodown.com/android",
  },
];


const websites = [
  {
    title: "Full-Stack Web Development",
    desc: "Custom freelance web applications built with modern architectures. We prioritize high-performance UI/UX by leveraging the latest versions of modern frontend frameworks.",
    tags: ["Next.js", "Tailwind CSS", "MERN"],
    link: "",
  },
  {
    title: "Intelligent Backend Systems",
    desc: "Exploring the intersection of full-stack web development and Generative AI, engineering robust backend solutions capable of handling complex automation and data pipelines.",
    tags: ["Python", "Django", "FastAPI"],
    link: "",
  },
];

const generateId = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current">
    <path d="M3.18 1.14C2.76 1.38 2.5 1.83 2.5 2.37v19.26c0 .54.26.99.68 1.23l.1.06L13.19 12 2.28 1.08l-.1.06z"/>
    <path d="M16.84 15.66l-3.3-3.3-10.36 10.36c.37.2.84.22 1.27-.02l12.39-7.04z" opacity="0.8"/>
    <path d="M21.5 10.56l-3.44-1.96-3.66 3.66 3.67 3.67 3.43-1.95c.98-.56.98-2.86 0-3.42z" opacity="0.9"/>
    <path d="M3.18 1.14L13.54 11.5l3.52-3.52-12.61-7.18a1.38 1.38 0 00-1.27.34z" opacity="0.7"/>
  </svg>
);

const WebIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

export default function ApplicationsPage() {
  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />

      {/* Hero banner */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-14 bg-gold-500 relative dot-pattern px-4">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-charcoal" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-charcoal" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-charcoal"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              BENISOHA FUSION LLP
            </span>
            <span className="w-8 h-[2px] bg-charcoal" />
          </div>
          <h1
            className="text-charcoal mb-3 sm:mb-4 leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.4rem, 8vw, 4rem)", fontWeight: 600 }}
          >
            Benisoha{" "}
            <span className="italic font-light text-white" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.15)" }}>
              Applications
            </span>
          </h1>
          <p className="text-charcoal/80 max-w-xl mx-auto text-sm sm:text-base font-medium"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            Select your Android utility and choose between an official Google Play Store installation or a direct APK download.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-12 sm:py-20 flex-grow bg-charcoal line-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Android Apps */}
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-10">
              <span className="w-6 sm:w-8 h-[2px] bg-gold-500 flex-shrink-0" />
              <h2 className="text-base sm:text-xl font-bold text-white uppercase tracking-widest"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                ANDROID APPS
              </h2>
              <div className="flex-1 h-[1px] bg-white/08" />
              {/* Android icon badge */}
              <div className="w-8 h-8 bg-gold-500 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-charcoal">
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C14.15 1.23 13.1 1 12 1c-1.1 0-2.15.23-3.09.63L7.43.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.1 3.26 5 5.01 5 7h14c0-1.99-1.1-3.74-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                </svg>
              </div>
            </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {androidApps.map((app) => (
                <div
                  key={app.title}
                  id={generateId(app.title)}
                  className="border-2 border-white/10 p-5 sm:p-6 hover:border-gold-500 hover:bg-white/[0.03] transition-all duration-300 flex flex-col group scroll-mt-28"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors leading-snug"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {app.title}
                    </h3>
                    <div className="w-8 h-8 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 ml-2">
                      <PlayIcon />
                    </div>
                  </div>

                  <p className="text-sm text-white/65 mb-5 flex-grow font-medium leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {app.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {app.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wider text-charcoal bg-gold-500 px-2.5 py-0.5 font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target mt-auto flex items-center justify-center gap-2.5 bg-gold-500 text-charcoal py-3 px-4 hover:bg-white transition-all duration-300 text-xs tracking-widest uppercase font-bold"
                  >
                    <PlayIcon />
                    Download on Play Store
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Android Apps */}
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-10">
              <span className="w-6 sm:w-8 h-[2px] bg-gold-500 flex-shrink-0" />
              <h2 className="text-base sm:text-xl font-bold text-white uppercase tracking-widest"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                PRO ANDROID APPS
              </h2>
              <div className="flex-1 h-[1px] bg-white/08" />
              {/* Android icon badge */}
              <div className="w-8 h-8 bg-gold-500 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-charcoal">
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C14.15 1.23 13.1 1 12 1c-1.1 0-2.15.23-3.09.63L7.43.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.1 3.26 5 5.01 5 7h14c0-1.99-1.1-3.74-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                </svg>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {proApps.map((app) => (
                <div
                  key={app.title}
                  id={generateId(app.title)}
                  className="border-2 border-white/10 p-5 sm:p-6 hover:border-gold-500 hover:bg-white/[0.03] transition-all duration-300 flex flex-col group scroll-mt-28"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors leading-snug"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {app.title}
                    </h3>
                    <div className="w-8 h-8 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 ml-2">
                      <PlayIcon />
                    </div>
                  </div>

                  <p className="text-sm text-white/65 mb-5 flex-grow font-medium leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {app.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {app.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wider text-charcoal bg-gold-500 px-2.5 py-0.5 font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target mt-auto flex items-center justify-center gap-2.5 bg-gold-500 text-charcoal py-3 px-4 hover:bg-white transition-all duration-300 text-xs tracking-widest uppercase font-bold"
                  >
                    <PlayIcon />
                    Direct Download
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Web Platforms */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-10">
              <span className="w-6 sm:w-8 h-[2px] bg-gold-500 flex-shrink-0" />
              <h2 className="text-base sm:text-xl font-bold text-white uppercase tracking-widest"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                WEB PLATFORMS
              </h2>
              <div className="flex-1 h-[1px] bg-white/08" />
              <div className="w-8 h-8 bg-white/05 border border-white/20 flex items-center justify-center flex-shrink-0">
                <WebIcon />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {websites.map((web) => (
                <div
                  key={web.title}
                  id={generateId(web.title)}
                  className="border border-white/10 bg-charcoal-soft p-5 sm:p-6 hover:border-gold-500/50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col group scroll-mt-28"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors leading-snug"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {web.title}
                    </h3>
                    <div className="w-8 h-8 bg-white/05 border border-white/15 flex items-center justify-center flex-shrink-0 ml-2 text-white/50">
                      <WebIcon />
                    </div>
                  </div>

                  <p className="text-sm text-white/65 mb-5 flex-grow font-medium leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {web.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {web.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wider border border-white/20 text-white/80 px-2.5 py-0.5 font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={web.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target mt-auto flex items-center justify-center gap-2.5 border-2 border-white/20 text-white py-3 px-4 hover:border-gold-500 hover:text-gold-400 transition-all duration-300 text-xs tracking-widest uppercase font-bold"
                  >
                    <WebIcon />
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
