import React from 'react';
import ProjectItem from 'components/ProjectItem';
import PropTypes from 'prop-types';

import './style.scss';

export default class ProjectsPage extends React.PureComponent {
  componentWillMount() {
    this.props.loadProjects();
  }

  render() {
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
          <div className="nav-container has-text-centered">
            <a className="nav-container__link">Applications</a>
            <a className="nav-container__link">Toy Projects</a>
          </div>
          <h5 className="title has-text-centered">Toy Projects</h5>
          {
            this.props.projects['toy-projects'].map((project) => <ProjectItem key={project.name} {...project} />)
          }
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

