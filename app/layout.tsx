import type { Metadata, Viewport } from "next";
import "./globals.css";
import Loader from "@/components/Loader";
import FloatingTelegram from "@/components/FloatingTelegram";

export const metadata: Metadata = {
  title: "Benisoha Fusion | Software & Electrical Infrastructure",
  description:
    "Premium software development, automation solutions, and city electrical infrastructure services. Quality work, safety, and timely execution.",
  keywords:
    "software development, automation, electrical infrastructure, power line installation, application development",
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect for faster font fetch */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load only needed weights — trimmed for speed */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Loader />
        {children}
        <FloatingTelegram />
      </body>
    </html>
  );
}
