import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <Navbar />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main id="main-content" tabIndex={-1}>

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Experience */}
        <Experience />

        {/* Certifications */}
        <Certifications />

        {/* Contact */}
        <Contact />

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </div>
  );
}

export default Home;