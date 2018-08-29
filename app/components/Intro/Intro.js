import React from 'react';
import BioPic from './images/selfie.png';
import './style.scss';

const Intro = () => (
  <div className="container">
    <div className="about-me is-clearfix">
      <figure className="image is-128x128 is-pulled-right">
        <img className="is-rounded" src={BioPic} alt="Grinning Me" />
      </figure>
      <h5 className="title is-size-6-mobile">Michael Symmes</h5>
      <h6 className="subtitle is-size-7-mobile">Explorer. Tinker. Builder of things.</h6>
      <p>
        A lifelong problem solver who loves building, learning and exploring technology of all types.
      </p>
    </div>
  </div>
);
export default Intro;
