import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-muted text-sm">
        <p>© {new Date().getFullYear()} Vikki Gupta. Built with precision.</p>
      </footer>
    </div>
  );
}
