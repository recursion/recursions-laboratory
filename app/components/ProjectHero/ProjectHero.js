import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from 'components/ProjectItem';
import './style.scss';

export default class ProjectHero extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { childrenVisible: false };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState((prevState) => ({ childrenVisible: !prevState.childrenVisible }));
  }
  render() {
    const setSectionClass = `hero ${this.props.heroColor} ${(!this.state.childrenVisible) ? 'is-medium' : ''} is-bold`;
    const setChildClass = `${(!this.state.childrenVisible) ? 'is-hidden' : ''}`;

    return (
      <article>
        <section className={setSectionClass}>
          <div className="hero-head">
          </div>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <a>{this.props.title}</a>
              </h1>
              <h2 className="subtitle">
                <a>{this.props.subtitle}</a>
              </h2>
            </div>
          </div>
          <div className="hero-foot has-text-centered">
            <a
              role="button"
              tabIndex="-1"
              onClick={this.handleToggle}
              onKeyPress={this.handleToggle}
            >
              Click to {(!this.state.childrenVisible) ? 'show' : 'hide'} {this.props.title.toLowerCase()}.
            </a>
          </div>
        </section>
        <section className={setChildClass}>
          {
            this.props.projects.map((project) => <ProjectItem key={project.name} {...project} />)
          }
        </section>
      </article>
    );
  }
}

ProjectHero.props = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heroColor: PropTypes.string,
  projects: PropTypes.array
};
