import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>About</NavLink>
    </li>
    <li>
      <NavLink to="/skills">Skills</NavLink>
    </li>
    <li>
      <NavLink to="/projects">Projects</NavLink>
    </li>
    <li>
      <NavLink to="/resume">Resume</NavLink>
    </li>
  </ul>
};

export default NavLinks;