// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

import React from "react";
import Image from "./img/profile-2022.jpg";
import "./style.css";

export default function About() {
  return (
    <section id="about">
      <div className="page-container-about">
        <div className="page-title">About Me</div>
        <img src={Image} alt="My face!" />

        <p>
          As a recent graduate of the University of Washington Full Stack
          Development Bootcamp, I am equipped with a strong foundation in full
          stack development. With expertise in HTML, CSS, JavaScript, Node.js,
          Sequelize and React, I am committed to building innovative,
          user-friendly applications. While coding was new to me when I began
          this journey, I am now a confident and passionate developer who is
          always eager to learn and grow.
        </p>
      </div>
    </section>
  );
}
