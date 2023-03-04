// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

import React from "react";
import myResume from "./img/resume.JPG";

function Resume() {
  return (
    <main>
      <div>
        <h1>Resume</h1>
      </div>

      <h2>Proficiencies</h2>
      <section>
        <p>Languages:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SQL</li>
        </ul>
      </section>

      <section>
        <p>Skills:</p>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>React</li>
          <li>Handlebars</li>
        </ul>
      </section>

      <a href={myResume} download>
        <button id="button-download">Download My Resume</button>
      </a>
    </main>
  );
}

export default Resume;
