import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";

function App() {
  return (
    <body>
      <Navbar />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </body>
  );
}

export default App;
