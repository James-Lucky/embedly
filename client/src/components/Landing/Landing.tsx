import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Logos from './Logos';
import Features from './Features';
import Stats from './Stats';

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#77D4B6] selection:text-[#45312C]">
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Stats />
      </main>
    </div>
  );
};

export default Landing;
