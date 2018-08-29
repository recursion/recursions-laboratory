import React from 'react';
// import { Link } from 'react-router-dom';
import beakerImg from './images/beaker.png';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <figure className="image">
          <img className="is-rounded" src={beakerImg} alt="Mad Scientist Muppet." />
        </figure>
        <div className="has-text-centered">
          <h1 className="title is-size-5-mobile">Recursion&apos;s Laboratory</h1>
          <h6 className="subtitle is-size-7-mobile">Profile of a mad scientist.</h6>
        </div>
        {/*
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/about">
            About Me
          </Link>
          <Link className="router-link" to="/projects">
            Projects
          </Link>
        </div>
        */}
      </div>
    );
  }
}

export default Header;
