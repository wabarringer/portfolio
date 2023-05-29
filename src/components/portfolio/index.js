// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import gitHubLogo from './img/github-mark.png';
import Check from './img/friends-in-check.JPG';
import Llama from './img/anoma-drama-llama.JPG';
import Stream from './img/streamosaurus.JPG';
import Blog from './img/tech-blog.JPG';
import Weather from './img/weather.JPG';
import Quiz from './img/quiz.JPG';
import './style.css';

const projects1 = [
  {
    id: uuidv4(),
    image: Check,
    title: 'Friends in Check',
    link: 'https://friends-in-check.netlify.app/',
    githubLink: 'https://github.com/wabarringer/project-3-FRONT',
    description:
      "A React chess app where users can host and join games, with real-time chat functionality using Socket.io. The current development stage successfully supports multiplayer and text chat within game rooms, with plans to expand accessibility through a friend's list page and a separate messaging space. ",
  },
  {
    id: uuidv4(),
    image: Blog,
    title: 'Tech Blog',
    link: 'https://tech-blog-wabarringer.herokuapp.com/home',
    githubLink: 'https://github.com/wabarringer/tech-blog',
    description:
      'A search tool that utilizes data from the TMDB API in order to allow users to find where a specific movie or TV show is streaming. The UI is constructed using the Bruma CSS framework, and the jQuery library.',
  },
];

const projects2 = [
  {
    id: uuidv4(),
    image: Llama,
    title: 'Anoma Drama Llama',
    link: 'https://wabarringer.github.io/Anoma_Drama_Llama/',
    githubLink: 'https://github.com/wabarringer/Anoma_Drama_Llama',
    description:
      'A search tool that utilizes data from the TMDB API in order to allow users to find where a specific movie or TV show is streaming. The UI is constructed using the Bruma CSS framework, and the jQuery library.',
  },
  {
    id: uuidv4(),
    image: Weather,
    title: 'Weather Dashboard',
    link: 'https://wabarringer.github.io/weather-dashboard/',
    githubLink: 'https://github.com/wabarringer/weather-dashboard',
    description:
      'A search tool that utilizes data from the TMDB API in order to allow users to find where a specific movie or TV show is streaming. The UI is constructed using the Bruma CSS framework, and the jQuery library.',
  },
];

const projects3 = [
  {
    id: uuidv4(),
    image: Stream,
    title: 'Streamosaurus',
    link: 'https://wabarringer.github.io/project-1/',
    githubLink: 'https://github.com/wabarringer/project-1',
    description:
      'A search tool that utilizes data from the TMDB API in order to allow users to find where a specific movie or TV show is streaming. The UI is constructed using the Bulma CSS framework, and the jQuery library.',
  },
  {
    id: uuidv4(),
    image: Quiz,
    title: 'WA Quiz',
    link: 'https://wabarringer.github.io/quiz/',
    githubLink: 'https://github.com/wabarringer/quiz',
    description:
      'A search tool that utilizes data from the TMDB API in order to allow users to find where a specific movie or TV show is streaming. The UI is constructed using the Bruma CSS framework, and the jQuery library.',
  },
];

function Portfolio() {
  return (
    <section id='portfolio'>
      <div id='portfolio-title'>Projects</div>
      <div className='container-portfolio'>
        <div className='project-column'>
          {projects1.map((element) => {
            return (
              <div className='project-card' key={element.id}>
                <div className='project-title'>
                  <p>{element.title}</p>

                  <a
                    href={element.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      className='gitHub-logo'
                      src={gitHubLogo}
                      alt='The GitHub logo'
                    />
                  </a>
                </div>
                <div className='project-description'>
                  <p>{element.description}</p>
                </div>
                <div className='project-img'>
                  <img
                    src={element.image}
                    alt='Screan capture of the project'
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className='project-column'>
          {projects2.map((element) => {
            return (
              <div className='project-card' key={element.id}>
                <div className='project-title'>
                  <p>{element.title}</p>

                  <a
                    href={element.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      className='gitHub-logo'
                      src={gitHubLogo}
                      alt='The GitHub logo'
                    />
                  </a>
                </div>
                <div className='project-description'>
                  <p>{element.description}</p>
                </div>
                <div className='project-img'>
                  <img
                    src={element.image}
                    alt='Screan capture of the project'
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className='project-column'>
          {projects3.map((element) => {
            return (
              <div className='project-card' key={element.id}>
                <div className='project-title'>
                  <p>{element.title}</p>

                  <a
                    href={element.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      className='gitHub-logo'
                      src={gitHubLogo}
                      alt='The GitHub logo'
                    />
                  </a>
                </div>
                <div className='project-description'>
                  <p>{element.description}</p>
                </div>
                <div className='project-img'>
                  <img
                    src={element.image}
                    alt='Screan capture of the project'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
