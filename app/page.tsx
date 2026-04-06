import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";

export default function Home() {
  return (
    <>
      <Loader />
      <main className="bg-gold-500 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Stats />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <FloatingTelegram />
    </>
  );
}
