import React from 'react';
import colorPicker from './colorPicker';
import './style.scss';

const SkillItem = (skill) => {
  if (skill.name !== '' && skill.level !== '') {
    return (
      <div className="column is-one-third is-flex">
        <div className={`notification ${colorPicker()} is-bold`}>
          <h1 className="title is-size-5">
            {skill.name}
          </h1>
          <h2 className="subtitle is-size-6">
            Skill Level: {skill.level}
          </h2>
          <div className="content is-flex">
            <p>
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return '';
};

export default SkillItem;
