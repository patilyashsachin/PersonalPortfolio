import React from 'react';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-vh-100 pb-5">
      <Navigation />
      <main>
        <Hero />
        <div className="container my-5">
          <hr className="neo-inset border-0" style={{ height: '4px', opacity: 1 }} />
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
