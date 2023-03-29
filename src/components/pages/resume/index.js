// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

import React from "react";
import myResume from "./img/AndyB_Resume_2023.pdf";
import "./style.css";

function Resume() {
  return (
    <main>
      <div className="page-container-resume">
        <div className="page-title-resume">Resume</div>
        <div className="section-container">
          <section className="resume-section">
            <p>Languages:</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </section>

          <section className="resume-section">
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
        </div>

        <a href={myResume} download={myResume}>
          <button className="button-download">Download My Resume</button>
        </a>
      </div>
    </main>
  );
}

export default Resume;
