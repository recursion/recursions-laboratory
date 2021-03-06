import React from 'react';
import ProjectHero from 'components/ProjectHero';
import PropTypes from 'prop-types';

import './style.scss';

export default class ProjectsPage extends React.PureComponent {
  static props = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    projects: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  };

  componentDidMount() {
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
      const toyAppProps = {
        title: 'Toy Applications',
        subtitle: 'Small projects that are kind of neato!',
        projects: this.props.projects['toy-projects'],
        heroColor: 'is-primary'
      };
      const appProps = {
        title: 'Full Applications',
        subtitle: 'Larger / Full Stack / Production Projects',
        projects: this.props.projects.applications,
        heroColor: 'is-info'
      };
      return (
        <section className="projects">
          <ProjectHero {...toyAppProps} />
          <ProjectHero {...appProps} />
        </section>
      );
    }
    return <div className="is-loading">Unable to locate projects.</div>;
  }
}


