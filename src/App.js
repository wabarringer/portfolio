import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Footer from "./components/Footer";

function App() {
  return (
    <body>
      <Header />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </body>
  );
}

export default App;
