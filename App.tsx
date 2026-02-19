
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import About from './components/about';
import Hero from './components/Hero';
import Simulator from './components/Simulator';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const simulatorRef = useRef<HTMLDivElement>(null);

  const scrollToSimulator = () => {
    simulatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-yellow-500/30">
      <Navbar onSimulateClick={scrollToSimulator} />
      
      <main>
		<About onSimulateClick={scrollToSimulator} />
	  
        <Hero onSimulateClick={scrollToSimulator} />
        
		<div id="about">
          <About />
        </div>
		
        <div id="beneficios">
          <Benefits />
        </div>

        <div ref={simulatorRef} id="simulador" className="py-20 bg-black">
          <Simulator />
        </div>

        <div id="produtos">
          <Products onSimulateClick={scrollToSimulator} />
        </div>

        <div id="depoimentos">
          <Testimonials />
        </div>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
