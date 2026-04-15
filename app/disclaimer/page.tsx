import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Disclaimer() {
  return (
    <>
    <Navbar />
      <div className="min-h-screen bg-zinc-950 text-zinc-300 py-16 px-6 sm:px-12 lg:px-24 font-sans selection:bg-blue-500/30">
        <div className="max-w-4xl mx-auto bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-zinc-800 shadow-2xl backdrop-blur-sm">

          <div className="mb-10 border-b border-zinc-800 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              Disclaimer
            </h1>
            <p className="text-sm text-zinc-500">Last Updated: April 15, 2026</p>
          </div>

          <div className="space-y-8 text-base leading-relaxed">

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-3 tracking-wide">1. General Information</h2>
              <p>
                The information provided by Benisoha Fusion LLP ("we," "us," or "our") on <a href="https://benisoha.vercel.app" className="text-blue-400 hover:text-blue-300 transition-colors">benisoha.vercel.app</a> (the "Site") and our mobile applications is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on our digital platforms or physical service offerings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-3 tracking-wide">2. Android Applications & Software</h2>
              <p className="mb-3">
                Our Android applications, including "Clone Master - Multi Dual Space," are provided on an "AS IS" and "AS AVAILABLE" basis. While we prioritize continuous performance tuning and bug fixing, we do not warrant that the software will be completely error-free or fully compatible with every Android device or OS iteration.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li><strong className="text-zinc-200">Third-Party Compliance:</strong> Users are solely responsible for ensuring that running multiple accounts complies with the Terms of Service of the cloned third-party applications.</li>
                <li><strong className="text-zinc-200">Data & Security:</strong> We hold no liability for account bans, temporary blocks, data loss, or security breaches resulting from the misuse of our dual-space utility environments.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-3 tracking-wide">3. High-Power Equipment & Electrical Installations</h2>
              <p className="mb-3">
                Benisoha Fusion LLP executes 11 kW heavy load connections, electrical wiring, and physical infrastructure setups exclusively within our operational region (Churu, Rajasthan).
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li><strong className="text-zinc-200">Inherent Risks:</strong> Electrical deployments carry inherent risks. While we enforce rigorous safety audits and testing protocols during installation, ongoing safety requires proper client maintenance.</li>
                <li><strong className="text-zinc-200">Liability Limitation:</strong> Post-handover, we shall not be held liable for any property damage, electrical hazards, or personal injury resulting from unauthorized on-ground modifications, acts of nature, or overloading beyond the engineered capacity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-3 tracking-wide">4. External Links & Third-Party Assets</h2>
              <p>
                The Site and Applications may contain links to third-party content. These external links are not continuously monitored or verified for accuracy by Benisoha Fusion LLP. We do not warrant, endorse, or assume operational responsibility for the reliability of information offered by third-party websites linked through our ecosystem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-3 tracking-wide">5. Professional Advisory</h2>
              <p>
                Information regarding software architecture or electrical layouts provided via the Site should not substitute dedicated professional consulting. Before making operational decisions based on our physical layout models or software APIs, we recommend direct consultation tailored to your specific system infrastructure.
              </p>
            </section>

            <section className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 mt-10">
              <h2 className="text-xl font-semibold text-white mb-4">6. Contact Us</h2>
              <p className="text-sm mb-4">
                If you require clarification on any part of this disclaimer, please reach out to our technical team:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong className="text-zinc-300">Entity:</strong> Benisoha Fusion LLP</p>
                <p><strong className="text-zinc-300">Email:</strong> <a href="mailto:clonemaster.help@gmail.com" className="text-blue-400 hover:underline">clonemaster.help@gmail.com</a></p>
                <p><strong className="text-zinc-300">Location:</strong> Churu, Rajasthan, India</p>
                <p><strong className="text-zinc-300">Telegram:</strong> @cmasterpvt</p>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}