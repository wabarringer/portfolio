// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

import React from "react";
import { v4 as uuidv4 } from "uuid";
import Llama from "./img/anoma-drama-llama.JPG";
import Stream from "./img/streamosaurus.JPG";
import "./style.css";

const projects = [
  {
    // generate an id
    id: uuidv4(),

    // image of the deployed application (either a short animated GIF or screenshot)
    image: Llama,

    // title of the project
    title: "Anoma Drama Llama",

    // link to the deployed application
    link: "https://wabarringer.github.io/Anoma_Drama_Llama/",

    // link to the corresponding GitHub repository
    githubLink: "https://github.com/wabarringer/Anoma_Drama_Llama",
  },
  {
    id: uuidv4(),

    image: Stream,

    title: "Streamosaurus",

    link: "https://wabarringer.github.io/project-1/",

    githubLink: "https://github.com/wabarringer/project-1",
  },
];

function Portfolio() {
  return (
    <main>
      <div className="page-container-portfolio">
        <div className="page-title-portfolio">Portfolio</div>

        <div className="project-container">
          {projects.map((element) => {
            return (
              <div className="project-card" key={element.id}>
                <div className="project-details">
                  <p>{element.title}</p>

                  <a
                    href={element.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
                <div>
                  <a
                    href={element.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={element.image}
                      alt="Screan capture of the project"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
