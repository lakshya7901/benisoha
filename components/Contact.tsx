"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // ← Replace with your Web3Forms key
          subject: `New Inquiry from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-cream relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-300 to-transparent opacity-60" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full border border-gold-200 opacity-20" />
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full border border-gold-100 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left info panel */}
          <div className="lg:col-span-2">
            <div className="reveal flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-gold-400" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold-600 font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Get In Touch
              </span>
            </div>

            <h2
              className="reveal mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
              }}
            >
              Let&apos;s Build{" "}
              <span className="italic text-gold-gradient">
                Something
              </span>
              <br />
              Great Together
            </h2>

            <p className="reveal text-sm text-gray-700 leading-relaxed mb-10" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500, transitionDelay: "0.15s" }}>
              Whether you need a software solution, automation pipeline, or
              infrastructure support — our team is ready to scope your project
              and deliver with precision.
            </p>

            {/* Contact details */}
            <div className="reveal space-y-6" style={{ transitionDelay: "0.2s" }}>
              {[
                {
                  label: "Email",
                  value: "benisoharj@gmail.com",
                  icon: (
                    <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                      <path d="M2 5L10 11L18 5M2 5H18V15H2V5Z" stroke="#ffb900" strokeWidth="1.2"/>
                    </svg>
                  ),
                },
                {
                  label: "Telegram",
                  value: "@cmasterpvt",
                  icon: (
                    <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                      <path d="M3 3h4l2 5-2.5 1.5A11 11 0 0011.5 13.5L13 11l5 2v4a1 1 0 01-1 1C7 18 2 13 2 4a1 1 0 011-1z" stroke="#ffb900" strokeWidth="1.2"/>
                    </svg>
                  ),
                },
                {
                  label: "Location",
                  value: "India",
                  icon: (
                    <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                      <circle cx="10" cy="8" r="3" stroke="#ffb900" strokeWidth="1.2"/>
                      <path d="M10 2C6.7 2 4 4.7 4 8c0 5 6 10 6 10s6-5 6-10c0-3.3-2.7-6-6-6z" stroke="#ffb900" strokeWidth="1.2"/>
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-gold-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-gold-500 mb-0.5" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {item.label}
                    </div>
                    <div className="text-sm text-charcoal" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="reveal bg-white border border-gray-100 p-8 md:p-10 shadow-[0_4px_60px_rgba(255,185,0,0.06)]" style={{ transitionDelay: "0.1s" }}>
              {/* Gold top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient" style={{ position: "absolute" }} />

              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 border-2 border-gold-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="#ffb900" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem" }} className="text-charcoal mb-3">
                    Message Received
                  </h3>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs tracking-widest uppercase text-gold-600 border-b border-gold-300 hover:border-gold-600 transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-800 mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-b border-gray-200 focus:border-gold-400 outline-none bg-transparent py-2.5 text-sm text-charcoal transition-colors placeholder:text-gray-300"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-800 mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b border-gray-200 focus:border-gold-400 outline-none bg-transparent py-2.5 text-sm text-charcoal transition-colors placeholder:text-gray-300"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-800 mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-gray-200 focus:border-gold-400 outline-none bg-transparent py-2.5 text-sm text-charcoal transition-colors placeholder:text-gray-300"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-800 mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border-b border-gray-200 focus:border-gold-400 outline-none bg-transparent py-2.5 text-sm text-charcoal transition-colors appearance-none cursor-pointer"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <option value="">Select a service...</option>
                        <option value="App Development">Application Development</option>
                        <option value="Automation">Automation Solutions</option>
                        <option value="Digital Support">Digital Support</option>
                        <option value="Electrical Infrastructure">Electrical Infrastructure</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-800 mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 focus:border-gold-400 outline-none bg-transparent py-2.5 text-sm text-charcoal transition-colors resize-none placeholder:text-gray-300"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-xs text-red-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-charcoal text-white text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold-gradient hover:shadow-[0_8px_30px_rgba(255,185,0,0.3)] transition-all duration-400 disabled:opacity-60"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {status === "loading" ? "Sending..." : "Send Message ✦"}
                  </button>

                  <p className="text-[10px] text-gray-800 text-center" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    We typically respond within 24 hours on business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
