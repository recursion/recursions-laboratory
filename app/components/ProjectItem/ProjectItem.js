import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ProjectItem = (props) => (
  <div className="project-item card" key={props.name} >
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

ProjectItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  tags: PropTypes.array,
  githubUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  description: PropTypes.string
};

export default ProjectItem;
