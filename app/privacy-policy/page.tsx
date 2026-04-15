import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-zinc-950 text-zinc-300 py-16 px-6 sm:px-12 lg:px-24 font-sans selection:bg-blue-500/30">
                <div className="max-w-4xl mx-auto bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-zinc-800 shadow-2xl backdrop-blur-sm">

                    <div className="mb-10 border-b border-zinc-800 pb-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-zinc-500">Effective Date: April 15, 2026</p>
                    </div>

                    <div className="space-y-8 text-base leading-relaxed">

                        <section>
                            <p>
                                Benisoha Fusion LLP ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website (<a href="https://benisoha.vercel.app" className="text-blue-400 hover:text-blue-300 transition-colors">benisoha.vercel.app</a>), use our Android applications (such as Clone Master - Multi Dual Space), or engage our 11 kW high-power installation services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-zinc-100 mb-3 tracking-wide">1. Information We Collect</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-1">A. Digital Applications (Software)</h3>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-400">
                                        <li><strong className="text-zinc-200">Device Information:</strong> Device model, OS version, and unique device identifiers to optimize app performance and bug fixing.</li>
                                        <li><strong className="text-zinc-200">Usage Data:</strong> App interaction metrics, crash logs, and analytics required for App Store Optimization (ASO) and continuous tuning.</li>
                                        <li><strong className="text-zinc-200">App Permissions:</strong> Storage, network access, or other system permissions strictly necessary for the dual-space utility to function. We do not harvest personal files.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-1">B. Infrastructure & Services (Physical)</h3>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-400">
                                        <li><strong className="text-zinc-200">Contact Information:</strong> Name, phone number, and email address provided during project inquiries.</li>
                                        <li><strong className="text-zinc-200">Location Data:</strong> Physical addresses within the Churu, Rajasthan region required for on-ground site inspections and equipment wiring.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-zinc-100 mb-3 tracking-wide">2. How We Use Your Data</h2>
                            <p className="mb-3">We deploy the collected data strictly for operational execution and service improvement:</p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                                <li>To provide, maintain, and secure our Android utilities and infrastructure deployments.</li>
                                <li>To deploy necessary bug fixes and deliver seamless software updates.</li>
                                <li>To coordinate project-wise planning for electrical setups.</li>
                                <li>To respond to customer support inquiries and provide technical assistance.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-zinc-100 mb-3 tracking-wide">3. Data Sharing and Disclosure</h2>
                            <p className="mb-3">
                                We do not sell your personal data. We may share information only under the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                                <li><strong className="text-zinc-200">Service Providers:</strong> With trusted third-party analytics and cloud infrastructure providers (e.g., Google Play Console, Vercel) necessary to operate our digital ecosystem.</li>
                                <li><strong className="text-zinc-200">Legal Compliance:</strong> If required by law, regulation, or formal legal request to protect the rights, property, or safety of Benisoha Fusion LLP, our users, or the public.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-zinc-100 mb-3 tracking-wide">4. Data Security</h2>
                            <p>
                                We implement industry-standard security protocols to protect your data across our backend systems. However, no digital transmission over the Internet or electronic storage method is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-zinc-100 mb-3 tracking-wide">5. Third-Party Links & Cloned Apps</h2>
                            <p>
                                Our Site may contain links to external platforms, and our utility apps allow the cloning of third-party software. We are not responsible for the privacy practices, data collection, or content of those external applications or websites. Please review their respective privacy policies.
                            </p>
                        </section>

                        <section className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 mt-10">
                            <h2 className="text-xl font-semibold text-white mb-4">6. Contact for Privacy Concerns</h2>
                            <p className="text-sm mb-4">
                                If you have questions about this Privacy Policy or wish to request data deletion, please contact our administrative team:
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