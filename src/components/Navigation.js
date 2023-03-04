// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer

// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default

// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

import React, { useState } from "react";
import Header from "./Header";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Resume from "./pages/resume";

function Navigation() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Return/render corresponding component from ./pages
  const renderPage = () => {
    if (currentPage === "about") {
      return <About />;
    }
    if (currentPage === "portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
    if (currentPage === "resume") {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default Navigation;
