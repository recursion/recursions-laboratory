import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Footer = () => (
  <footer>
    <div>Built by Michael Symmes using <a href="https://reactjs.org">React</a> and <a href="https://bulma.io">Bulma</a>.</div>
    <div className="router-links columns">
      <Link className="router-link column" to="/projects">
        Projects
      </Link>
      <Link className="router-link column" to="/skills">
        Skills
      </Link>
      <Link className="router-link column" to="/contact">
        Contact
      </Link>
      <Link className="router-link column" to="/">
        Home
      </Link>
    </div>
  </footer>
);

export default Footer;
