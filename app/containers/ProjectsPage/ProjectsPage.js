import React from 'react';
import ProjectItem from 'components/ProjectItem';
import PropTypes from 'prop-types';

import './style.scss';

export default class ProjectsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { showToyApps: false, showApps: false };
    this.toggleShowToyApps = this.toggleShowToyApps.bind(this);
    this.toggleShowApps = this.toggleShowApps.bind(this);
  }

  componentWillMount() {
    this.props.loadProjects();
  }

  toggleShowToyApps() {
    this.setState((prevState) => ({ showToyApps: !prevState.showToyApps }));
  }

  toggleShowApps() {
    this.setState((prevState) => ({ showApps: !prevState.showApps }));
  }

  render() {
    const toyAppsClass = () => `toy-applications ${(!this.state.showToyApps) ? 'is-hidden' : ''}`;
    const appsClass = () => `applications ${(!this.state.showApps) ? 'is-hidden' : ''}`;
    if (this.props.error) {
      return (
        <div className="notification is-danger">
          Error loading Projects. Please try again later.
        </div>
      );
    }
    if (this.props.loading) {
      return <div className="is-loading">LOADING</div>;
    }
    if (this.props.projects) {
      return (
        <section className="projects">
          <section className="hero is-primary is-medium is-bold">
            <div className="hero-head">
            </div>
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  <a>Toy Applications</a>
                </h1>
                <h2 className="subtitle">
                  <a>Small projects that are neato!</a>
                </h2>
              </div>
            </div>
            <div className="hero-foot has-text-centered">
              <a
                role="button"
                tabIndex="-1"
                onClick={this.toggleShowToyApps}
                onKeyPress={this.toggleShowToyApps}
              >
                Click to {(!this.state.showToyApps) ? 'show' : 'hide'} toy applications.
              </a>
            </div>
          </section>
          <section className={toyAppsClass()}>
            {
              this.props.projects['toy-projects'].map((project) => <ProjectItem key={project.name} {...project} />)
            }
          </section>
          <section className="hero is-info is-medium is-bold">
            <div className="hero-head">
            </div>
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Full Applications
                </h1>
                <h2 className="subtitle">
                  Larger / Full Stack Projects.
                </h2>
              </div>
            </div>
            <div className="hero-foot has-text-centered">
              <a
                role="button"
                tabIndex="-2"
                onClick={this.toggleShowApps}
                onKeyPress={this.toggleShowApps}
              >
                Click to {(!this.state.showApps) ? 'show' : 'hide'} full applications.
              </a>
            </div>
          </section>
          <section className={appsClass()}>
            {
              this.props.projects.applications.map((project) => <ProjectItem key={project.name} {...project} />)
            }
          </section>
        </section>
      );
    }
    return <div>Unable to locate projects.</div>;
  }
}

ProjectsPage.props = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  stories: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ])
};

