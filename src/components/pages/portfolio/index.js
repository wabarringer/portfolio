// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

import React from "react";
import { v4 as uuidv4 } from "uuid";
import gitHubLogo from "./img/github-mark.png";
import Check from "./img/friends-in-check.JPG";
import Llama from "./img/anoma-drama-llama.JPG";
import Stream from "./img/streamosaurus.JPG";
import Chess from "./img/logo.png";
import Blog from "./img/tech-blog.JPG";
import Weather from "./img/weather.JPG";
import Quiz from "./img/quiz.JPG";
import "./style.css";

const projects = [
  {
    // generate an id
    id: uuidv4(),

    // image of the deployed application (either a short animated GIF or screenshot)
    image: Check,

    // title of the project
    title: "Friends in Check",

    // link to the deployed application
    link: "https://friends-in-check.netlify.app/",

    // link to the corresponding GitHub repository
    githubLink: "https://github.com/wabarringer/project-3-FRONT",
  },
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
  {
    id: uuidv4(),

    image: Chess,

    title: "Friends In Check (unfinished)",

    link: "https://wabarringer.github.io/project-3-FRONT/",

    githubLink: "https://github.com/wabarringer/project-3-FRONT",
  },
  {
    id: uuidv4(),

    image: Blog,

    title: "Tech Blog",

    link: "https://tech-blog-wabarringer.herokuapp.com/home",

    githubLink: "https://github.com/wabarringer/tech-blog",
  },
  {
    id: uuidv4(),

    image: Weather,

    title: "Weather Dashboard",

    link: "https://wabarringer.github.io/weather-dashboard/",

    githubLink: "https://github.com/wabarringer/weather-dashboard",
  },
  {
    id: uuidv4(),

    image: Quiz,

    title: "WA Quiz",

    link: "https://wabarringer.github.io/quiz/",

    githubLink: "https://github.com/wabarringer/quiz",
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
                    <img
                      className="gitHub-logo"
                      src={gitHubLogo}
                      alt="The GitHub logo"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={element.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="project-img"
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
