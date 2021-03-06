/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Intro from 'components/Intro';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article className="home-page">
        <Helmet>
          <title>Recursions Laboratory</title>
          <meta name="description" content="About me, and the things I've built." />
        </Helmet>
        <section className="main section center">
          <Intro />
        </section>
      </article>
    );
  }
}

HomePage.propTypes = {
};
