import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Logos from './Logos';
import Features from './Features';
import Stats from './Stats';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-[#37C6E5] selection:text-black">
      <Nav />
      <main className="pt-[65px] md:pt-[73px]">
        <Hero />
        <Logos />
        <Features />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
