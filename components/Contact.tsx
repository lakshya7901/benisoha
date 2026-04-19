"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.querySelectorAll(".reveal").forEach((el, i) =>
              setTimeout(() => el.classList.add("visible"), i * 100)
            );
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: `New Inquiry from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); setFormData({ name: "", email: "", phone: "", service: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-28 bg-charcoal relative overflow-hidden">
      {/* Gold top stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" />
      {/* Subtle pattern */}
      <div className="absolute inset-0 line-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 sm:gap-16">

          {/* Left */}
          <div className="lg:col-span-2">
            <div className="reveal flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold-400 font-bold"
                style={{ fontFamily: "var(--font-dm-sans)" }}>CONTACT & SUPPORT</span>
            </div>

            <h2 className="reveal mb-6 leading-tight text-white"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>
              Connect with{" "}
              <span className="italic font-light text-gold-400"><br />Benisoha Fusion </span>
              LLP
            </h2>

            <p className="reveal text-white/70 leading-relaxed mb-10 text-sm font-medium"
              style={{ fontFamily: "var(--font-dm-sans)", transitionDelay: "0.15s" }}>
                For app support, please provide your device model, Android version, and a short explanation of the issue. For 11 kW high-power work, share your basic location and load requirements. We reply to all genuine messages as soon as possible.
            </p>

            <div className="reveal space-y-6" style={{ transitionDelay: "0.2s" }}>
              {[
                { label: "Email", value: "benisoharj@gmail.com",
                  icon: <path d="M2 5L10 11L18 5M2 5H18V15H2V5Z" stroke="#f5d60c" strokeWidth="1.5"/> },
                { label: "Phone", value: "+91 8209888989",
                  icon: <path d="M3 3h4l2 5-2.5 1.5A11 11 0 0011.5 13.5L13 11l5 2v4a1 1 0 01-1 1C7 18 2 13 2 4a1 1 0 011-1z" stroke="#f5d60c" strokeWidth="1.5"/> },
                { label: "Location", value: "Churu, Rajasthan, India",
                  icon: <><circle cx="10" cy="8" r="3" stroke="#f5d60c" strokeWidth="1.5"/><path d="M10 2C6.7 2 4 4.7 4 8c0 5 6 10 6 10s6-5 6-10c0-3.3-2.7-6-6-6z" stroke="#f5d60c" strokeWidth="1.5"/></> },
                { label: "TELEGRAM", value: "@benisoha",
                  icon: <><circle cx="10" cy="8" r="3" stroke="#f5d60c" strokeWidth="1.5"/><path d="M10 2C6.7 2 4 4.7 4 8c0 5 6 10 6 10s6-5 6-10c0-3.3-2.7-6-6-6z" stroke="#f5d60c" strokeWidth="1.5"/></> },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 border-2 border-gold-500 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">{item.icon}</svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-gold-500 mb-0.5 font-bold"
                      style={{ fontFamily: "var(--font-dm-sans)" }}>{item.label}</div>
                    <div className="text-sm text-white font-medium"
                      style={{ fontFamily: "var(--font-dm-sans)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="reveal bg-gold-500 p-5 sm:p-8 md:p-10" style={{ transitionDelay: "0.1s" }}>
              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="#f5d60c" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-charcoal mb-3 font-semibold"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem" }}>
                    Message Received
                  </h3>
                  <p className="text-charcoal/80 text-sm font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setStatus("idle")}
                    className="mt-6 text-xs tracking-widest uppercase text-charcoal border-b-2 border-charcoal hover:opacity-70 transition-opacity font-bold"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { name: "name", label: "Full Name", type: "text", placeholder: "Your Name", required: true },
                      { name: "email", label: "Email Address", type: "email", placeholder: "Your Email Address", required: true },
                      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Your Phone Number", required: false },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-charcoal/70 mb-2 font-bold"
                          style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {field.label} {field.required && "*"}
                        </label>
                        <input type={field.type} name={field.name} required={field.required}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full border-b-2 border-charcoal/30 focus:border-charcoal outline-none bg-transparent py-2.5 text-sm text-charcoal font-medium transition-colors placeholder:text-charcoal/40"
                          style={{ fontFamily: "var(--font-dm-sans)" }} />
                      </div>
                    ))}
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-charcoal/70 mb-2 font-bold"
                        style={{ fontFamily: "var(--font-dm-sans)" }}>Service Needed</label>
                      <select name="service" value={formData.service} onChange={handleChange}
                        className="w-full border-b-2 border-charcoal/30 focus:border-charcoal outline-none bg-transparent py-2.5 text-sm text-charcoal font-medium transition-colors appearance-none cursor-pointer"
                        style={{ fontFamily: "var(--font-dm-sans)" }}>
                        <option value="">App Support or Power Installation...</option>
                        <option>Application Development</option>
                        <option>Automation Solutions</option>
                        <option>Digital Support</option>
                        <option>Electrical Infrastructure</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-charcoal/70 mb-2 font-bold"
                      style={{ fontFamily: "var(--font-dm-sans)" }}>Project Details *</label>
                    <textarea name="message" required rows={4} value={formData.message}
                      onChange={handleChange}
                      placeholder="Please explain your app issue (include screenshots if emailing directly) or describe your preferred timing and location for high-power installation work..."
                      className="w-full border-b-2 border-charcoal/30 focus:border-charcoal outline-none bg-transparent py-2.5 text-sm text-charcoal font-medium transition-colors resize-none placeholder:text-charcoal/40"
                      style={{ fontFamily: "var(--font-dm-sans)" }} />
                  </div>

                  {status === "error" && (
                    <p className="text-red-800 text-xs font-bold" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button type="submit" disabled={status === "loading"}
                    className="w-full py-4 bg-charcoal text-white text-xs tracking-[0.3em] uppercase font-bold hover:bg-charcoal-soft hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 disabled:opacity-60"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {status === "loading" ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Google Map ── */}
        <div className="mt-16 sm:mt-20 reveal">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gold-500" />
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-bold"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              OUR LOCATION
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Map embed */}
            <div className="lg:col-span-2 relative overflow-hidden border-2 border-white/10 hover:border-gold-500/50 transition-colors duration-300">
              {/* Gold top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-500 z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28104.138022455423!2d74.94619817854282!3d28.297801504321637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39136200b18a66a3%3A0x3e487bf6934c8306!2sChuru%2C%20Rajasthan%20331001!5e0!3m2!1sen!2sin!4v1776182170229!5m2!1sen!2sin"
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Benisoha Fusion Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Animated "Visit Us" & Floating Arrow */}
            <div className="hidden lg:flex flex-col justify-center items-start h-[360px] pl-4 xl:pl-8 relative">
              <div className="flex items-center gap-6">
                {/* Floating Arrow Pointing Left */}
                <div className="animate-[floatLeft_2s_ease-in-out_infinite]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f5d60c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="20" y1="12" x2="4" y2="12"></line>
                    <polyline points="10 19 3 12 10 5"></polyline>
                  </svg>
                </div>
                
                {/* Text Block */}
                <div className="flex flex-col">
                  <h3 className="text-white leading-none mt-2" 
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 3vw, 3.5rem)", fontWeight: 500 }}>
                    Based in <br/><span className="italic font-light text-gold-400">Churu</span>
                  </h3>
                </div>
              </div>
              
              {/* Inline Styles for Animation */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes floatLeft {
                  0%, 100% { transform: translateX(0); }
                  50% { transform: translateX(-20px); }
                }
              `}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}