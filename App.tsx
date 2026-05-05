import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const openLeadForm = () => {
    const el = document.getElementById("lead-form");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen selection:bg-yellow-500/30">
      
      <Navbar onSimulateClick={openLeadForm} />

      <main>

        {/* HERO */}
        <Hero onStart={openLeadForm} />

        {/* LEAD FORM (NÚCLEO DO FUNIL) */}
        <div id="lead-form">
          <LeadForm />
        </div>

        {/* BENEFITS */}
        <div id="beneficios">
          <Benefits />
        </div>

        {/* PRODUCTS (APÓS QUALIFICAÇÃO) */}
        <div id="produtos">
          <Products onStart={openLeadForm} />
        </div>

        {/* TESTIMONIALS */}
        <div id="depoimentos">
          <Testimonials />
        </div>

        {/* FINAL CTA */}
        <FinalCTA />

      </main>

      <Footer />

    </div>
  );
};

export default App;