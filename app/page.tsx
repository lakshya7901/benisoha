import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
