// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

import React from 'react';
import Profile from './img/profile-2022.jpg';
import GitHubIcon from './img/github-01.png';
import LinkedInIcon from './img/linkedin-01.png';
import TwitterIcon from './img/twitter-01.png';
import InstagramIcon from './img/instagram-01.png';
import './style.css';

export default function About() {
  return (
    <section id='about'>
      <div className='container-about'>
        <div id='about-card'>
          <p>
            I am a passionate full stack developer experienced in HTML, CSS,
            JavaScript, Node.js, Sequelize, and React. I specialize in creating
            innovative, user-friendly applications. With a commitment to
            continuous learning, I stay updated with the latest trends and
            techniques in full stack development. My collaborative approach
            fosters effective teamwork, communication, and attention to detail.
            I thrive on challenges and aim to exceed clients' expectations by
            delivering solutions that meet their needs. Let's connect and create
            extraordinary digital experiences together.
          </p>
          <div id='social-icons'>
            <a
              href='https://github.com/wabarringer'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={GitHubIcon} alt='GitHub icon' />
            </a>
            <a
              href='https://www.linkedin.com/in/andy-barringer/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={LinkedInIcon} alt='LinkedIn icon' />
            </a>
            <a
              href='https://twitter.com/WAndyBarringer'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={TwitterIcon} alt='Twitter icon' />
            </a>
            <a
              href='https://www.instagram.com/wabarringer/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={InstagramIcon} alt='Instagram icon' />
            </a>
          </div>
        </div>
        <img id='profile-img' src={Profile} alt='My face!' />
      </div>
    </section>
  );
}
