import React from 'react';
import { projects } from './projects.json';
import './style.scss';

const Project = (props) => (
  <div className="card" key={props.name} >
    <div className="card-header">
      <div className="card-header-title">
        {props.name}
      </div>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="content">
          <figure className="project-image image is-pulled-left">
            <img src={props.imageUrl} alt="Project" />
          </figure>
          {props.description}
          <hr />
          <span className="tags-label">Tech Used:</span>
          {props.tags.join(', ')}
          <hr />
          <a className="is-block" href={props.githubUrl}>Source code on Github</a>
          {(props.demoUrl) ?
            <a className="is-block" href={props.demoUrl}>See a Demo</a> :
            ''
          }
        </div>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => (
  <section className="projects">
    <div className="nav-container has-text-centered">
      <a className="nav-container__link">Applications</a>
      <a className="nav-container__link">Toy Projects</a>
    </div>
    <h5 className="title has-text-centered">Toy Projects</h5>
    {projects['toy-projects'].map((project) => Project(project))}
  </section>
);

export default ProjectsPage;
