import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Footer = () => (
  <footer className="section">
    <div className="container">
      <div className="has-text-centered">
        Built by Michael Symmes using <a href="https://reactjs.org">React</a> and <a href="https://bulma.io">Bulma</a>.
      </div>
      <div className="columns">
        <div className="router-links column">
          <p>
            <Link className="router-link " to="/projects">
              Projects
            </Link>
          </p>
          <p>
            <Link className="router-link " to="/skills">
              Skills
            </Link>
          </p>
          <p>
            <Link className="router-link " to="/contact">
              Contact
            </Link>
          </p>
          <p>
            <Link className="router-link " to="/">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
