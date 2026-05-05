import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OwnerVideo from './components/OwnerVideo';   
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {

  const openLeadForm = () => {
    const el = document.getElementById("simulador");

    if (el) {
      const yOffset = -100; // altura aproximada do navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen selection:bg-yellow-500/30">

      <Navbar onSimulateClick={openLeadForm} />

      <main>

        <Hero onStart={openLeadForm} />

        <About />
        <OwnerVideo />  

        {/* SEÇÃO FINAL UNIFICADA */}
        <div id="simulador">
          <FinalCTA />
        </div>

      </main>

      <Footer />

    </div>
  );
};

export default App;