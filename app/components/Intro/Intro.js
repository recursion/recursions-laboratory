import React from 'react';
import BioPic from './images/selfie.png';
import './style.scss';

const Intro = () => (
  <div className="intro container">
    <div className="is-clearfix">
      <figure className="image is-pulled-right">
        <img className="is-rounded" src={BioPic} alt="Grinning Me" />
      </figure>
      <h5 className="title is-size-6-mobile">Michael Symmes</h5>
      <h6 className="subtitle is-size-7-mobile">Explorer. Tinker. Builder of things.</h6>
      <p>
        A lifelong problem solver who loves building,
        learning and exploring technology of all types.
        I&apos;ve been tinkering with computers since I was a kid in the mid 1980&apos;s,
        Linux since the early-mid 1990&apos;s, and the WWW almost since it first
        became a protocol. When it comes to computing, I am definitely a Jack-of-all-trades
        and a master at RTFM.
      </p>
      <p>
        While I have dabbled in many different programming
        language&apos;s in my lifetime; during the last few
        years I have been focused mostly on front end web-development:
        building with JavaScript(ES6) and
        Elm(<span role="img" aria-label="heart-emoji">❤️</span>). Elm has completely
        opened my eyes to the power of statically typed, functional languages, and simple,
        opinionated language design. I have found it to be an amazing answer
        to JavaScript fatigue.
      </p>
      <p>If you want to read more about me, and my history in computing
        explorations... check out my <a>about me</a> section.
      </p>
    </div>
  </div>
);
export default Intro;
