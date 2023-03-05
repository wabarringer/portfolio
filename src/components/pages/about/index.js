// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

import React from "react";
import Image from "./img/profile-2022.jpg";
import "./style.css";

export default function About() {
  return (
    <main>
      <div className="page-container-about">
        <div className="page-title">About Me</div>
        <img src={Image} alt="My face!" />

        <p>
          I'm a student developer, currently building a knowledge base in full
          stack development. Coding is completely new to me, but I'm gaining new
          skills every minute of every day.
        </p>
      </div>
    </main>
  );
}
