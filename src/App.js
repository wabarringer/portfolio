import React from 'react';
import Navbar from './components/Navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Portfolio />
      <Resume />
    </main>
  );
}

export default App;
