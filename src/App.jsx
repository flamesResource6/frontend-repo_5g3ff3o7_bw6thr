import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-[#FAF7F0] text-zinc-800 selection:bg-teal-200/60">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Your Name — Crafted with love and motion.</footer>
    </div>
  );
}

export default App;
