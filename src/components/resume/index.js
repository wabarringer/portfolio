import React from 'react';
import myResume from './img/AndyB_Resume_2023.pdf';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

const Devicons = [
  {
    id: uuidv4(),
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    id: uuidv4(),
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    id: uuidv4(),
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    id: uuidv4(),
    name: 'jQuery',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  },
  {
    id: uuidv4(),
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    id: uuidv4(),
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    id: uuidv4(),
    name: 'BootStrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    id: uuidv4(),
    name: 'Bulma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg',
  },
  {
    id: uuidv4(),
    name: 'Handlebars',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg',
  },
  {
    id: uuidv4(),
    name: 'Sequelize',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
  },
  {
    id: uuidv4(),
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    id: uuidv4(),
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    id: uuidv4(),
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    id: uuidv4(),
    name: 'SocketIO',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  },
];

function Resume() {
  return (
    <section id='resume'>
      <div className='container-resume'>
        <div className='title-resume'>Skillset</div>
        <div className='skills'>
          {Devicons.map((element) => {
            return (
              <div className='dev-icons' key={element.id}>
                <img src={element.icon} alt='Dev icon' />
              </div>
            );
          })}
        </div>

        <a href={myResume} download={myResume}>
          <button className='button-download'>View My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Resume;
