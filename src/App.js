import React from 'react';
import Navbar from './components/Navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;
