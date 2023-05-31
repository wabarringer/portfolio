// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <header>
      <li className='nav-item'>
        <Link activeClass='active' smooth spy to='about'>
          About
        </Link>
      </li>
      <li className='nav-item'>
        <Link activeClass='active' smooth spy to='portfolio'>
          Projects
        </Link>
      </li>
      <li className='nav-item'>
        <Link activeClass='active' smooth spy to='resume'>
          Resume
        </Link>
      </li>
    </header>
  );
}

export default Navbar;
