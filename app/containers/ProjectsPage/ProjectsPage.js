import React from 'react';
import ProjectItem from 'components/ProjectItem';
import { projects } from './projects.json';

import './style.scss';

const ProjectsPage = () => (
  <section className="projects">
    <div className="nav-container has-text-centered">
      <a className="nav-container__link">Applications</a>
      <a className="nav-container__link">Toy Projects</a>
    </div>
    <h5 className="title has-text-centered">Toy Projects</h5>
    {projects['toy-projects'].map((project) => <ProjectItem key={project.name} {...project} />)}
  </section>
);

export default ProjectsPage;
