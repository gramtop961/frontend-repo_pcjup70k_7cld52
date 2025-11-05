import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <Showcase />
      <footer className="bg-[#0A0A22] py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Jayanth Kumar — Crafted with Spring Boot, MERN, and lots of motion.
      </footer>
    </div>
  );
}
