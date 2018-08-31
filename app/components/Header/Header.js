import React from 'react';
import { Link } from 'react-router-dom';
import beakerImg from './images/beaker.png';
import './style.scss';

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { menuIsActive: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState((state) => ({ menuIsActive: !state.menuIsActive }));
  }

  closeMenu() {
    this.setState(() => ({ menuIsActive: false }));
  }

  render() {
    const setMenuState = (this.state.menuIsActive) ? 'is-active' : '';

    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <figure className="nav-bar-item image">
            <Link className="router-link column" to="/">
              <img className="is-rounded" src={beakerImg} alt="Mad Scientist Muppet." />
            </Link>
          </figure>
          <div className="navbar-item">
            <h5 className="title">Recursion&apos;s Laboratory</h5>
          </div>
          <a
            role="button"
            tabIndex="-1"
            className={`navbar-burger ${setMenuState}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleMenu}
            onKeyPress={() => ''}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${setMenuState}`}>
          <div className="navbar-start">
          </div>
          <div className="navbar-end">
            <Link className="navbar-item router-link" onClick={this.closeMenu} to="/projects">
              Projects
            </Link>
            <Link className="navbar-item router-link" onClick={this.closeMenu} to="/skills">
              Skills
            </Link>
            <Link className="navbar-item router-link" onClick={this.closeMenu} to="/contact">
              Contact
            </Link>
            <Link className="navbar-item router-link" onClick={this.closeMenu} to="/">
              Home
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
