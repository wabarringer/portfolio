import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
import Resume from "./components/pages/resume";
import Footer from "./components/Footer";

function App() {
  return (
    <body>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </body>
  );
}

export default App;
