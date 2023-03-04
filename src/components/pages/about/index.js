// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

import React from "react";
import Image from "./img/profile-2022.jpg";

export default function About() {
  return (
    <main>
      <div>
        <h1>About Me</h1>
      </div>

      <div className="profileImg">
        <img src={Image} />
      </div>

      <div>
        <p>
          I'm a student developer, currently building a knowledge base in full
          stack web and software development. Coding is completely new to me,
          but I'm gaining new skills every minute of every day.
        </p>
      </div>
    </main>
  );
}
