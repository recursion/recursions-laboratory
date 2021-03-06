import React from 'react';
import { Link } from 'react-router-dom';
import BioPic from './images/selfie.png';
import './style.scss';

const Intro = () => (
  <div className="intro container">
    <div className="is-clearfix">
      <figure className="image is-pulled-right">
        <img className="is-rounded" src={BioPic} alt="Grinning Me" />
      </figure>
      <h5 className="title is-size-6-mobile">Michael Symmes</h5>
      <h6 className="subtitle is-size-7-mobile">Explorer. Tinker. Builder.</h6>
      <hr />
      <div className="content is-size-5-desktop">
        <p>
          A natural born problem solver who loves creating,
          learning, and exploring technology of all types.
          I&apos;ve been tinkering with computers since I was a kid in the mid 1980&apos;s,
          Linux since the early-mid 1990&apos;s, and the web almost since http first
          became a protocol. When it comes to computing, I am definitely a Jack-of-all-trades
          and a master of RTFM.
        </p>
        <p>
          While I have dabbled in many different programming
          language&apos;s in my lifetime, during the last few
          years I have been focused mostly on front end web-development:
          specifically JavaScript(ES6/ESNext) and
          Elm(<span role="img" aria-label="heart-emoji">❤️</span>). Elm has completely
          opened my eyes to the power of statically typed, functional languages, and simple,
          opinionated language design. I have found it to be an amazing answer
          to JavaScript fatigue and I am definitely looking forward to
          being able to use it more in the future.
        </p>
        <p>
          I am currently seeking fun and engaging opportunities that will help me grow as a developer. Got something interesting?<Link className="navbar-item router-link is-inline" to="/contact">Contact me!</Link>
        </p>
      </div>
      <hr />
    </div>
  </div>
);
export default Intro;
