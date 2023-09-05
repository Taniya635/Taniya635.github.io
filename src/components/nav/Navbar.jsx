import React, { useState } from 'react';
import './navbar.css';
import { HiHome } from 'react-icons/hi';
import { MdContactPage } from 'react-icons/md';
import { SiBookstack } from 'react-icons/si';
import { BsStack } from 'react-icons/bs';
import { RiMessage2Fill } from 'react-icons/ri';
import { DiGithubBadge } from 'react-icons/di';

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  };

  return (
    <div className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="menu" id="menu">
        <li>
          <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? "active" : ""}>
            <HiHome /> Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? "active" : ""}>
            <MdContactPage /> About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === '#skills' ? "active" : ""}>
            <SiBookstack /> Skills
          </a>
        </li>
        <li>
          <a href="#project" onClick={() => setActiveNav("#project")} className={activeNav === '#project' ? "active" : ""}>
            <BsStack /> Projects
          </a>
        </li>
        <li>
          <a href='#github' onClick={() => setActiveNav("#github")} className={activeNav === '#github' ? "active" : ""}>
            <DiGithubBadge /> GitHub
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? "active" : ""}>
            <RiMessage2Fill /> Contact
          </a>
        </li>
      </ul>
      {/* <h3 className='name'>Taniya maurya</h3> */}
    </div>
  );
};
