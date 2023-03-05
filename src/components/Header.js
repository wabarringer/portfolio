// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="header-name">Andy Barringer</div>

      <ul className="nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("about")}
            className={currentPage === "about" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("portfolio")}
            className={
              currentPage === "portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("contact")}
            className={
              currentPage === "contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("resume")}
            className={
              currentPage === "resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
