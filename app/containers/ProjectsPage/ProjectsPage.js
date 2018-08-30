import React from 'react';
import './style.scss';


const ProjectsPage = () => (
  <section className="section">
    <div className="container is-expanded">
      <div className="title has-text-centered">
        Toy Projects
      </div>
      <div className="columns">
        <div className="column">
          <div className="notification">
            <h6 className="title is-size-6-tablet">
            </h6>
          </div>
        </div>
      </div>
      <div className="title has-text-centered">
        Applications
      </div>
      <div className="columns">
        <div className="column is-flex">
          <div className="media notification is-link">
            <div className="media-content">
              <div className="content">
                <h6 className="title is-size-6 is-size-6-mobile">
                  JackBeNimble
                </h6>
                <p className="is-size-6">
                  A google chrome extension that provides
                  complex hotkey order entry for multiple bitcoin exchanges.
                  Uses HotkeyCommander. No longer maintained.
                </p>
                <hr />
                <p>Javascript, Babel</p>
                <hr />
                <a className="is-block">Source Code</a>
                <a className="is-block">Demo</a>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-flex">
          <div className="media notification is-primary">
            <div className="media-content">
              <div className="content">
                <h6 className="title is-size-6 is-size-6-mobile">
                  HotKeyCommander
                </h6>
                <p className="is-size-6">
                  A node module that provides sophisticated hotkey management and
                  customization through key recording and event subscriptions.
                </p>
                <hr />
                <p>Javascript, Webpack</p>
                <hr />
                <a className="is-block">Source Code</a>
                <a className="is-block">Demo</a>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-flex">
          <div className="media notification is-warning">
            <div className="media-content">
              <div className="content">
                <h6 className="title is-size-6 is-size-6-mobile">
                  Newsy
                </h6>
                <p className="is-size-6">
                  A simple react client for the newsapi.org data feed. Newsy provides
                  easy navigation of newsapis advanced options and proxys requests through
                  its own api server so that each client doesnt need its own api key.
                </p>
                <hr />
                <p>Javascript, React, Webpack, Express</p>
                <hr />
                <a className="is-block">Source Code</a>
                <a className="is-block">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsPage;
