import React from 'react';
import PropTypes from 'prop-types';
import { colorByLevel } from './colorPicker';
import './style.scss';

export default class SkillItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.expand = this.expand.bind(this);
  }

  expand() {
    this.setState(() => ({ expanded: !this.state.expanded }));
  }

  render() {
    const { skill } = this.props;
    if (!skill) return '';
    if (skill.name !== '' && skill.level !== '') {
      return (
        <div className="skill-item column is-one-third is-flex has-text-white">
          <article className={`media notification ${colorByLevel(skill.level)} is-bold`}>
            <div className="media-content">
              <div className="content">
                <h1 className="title is-size-5">
                  <figure className="skill-icon is-inline is-marginless">
                    {
                      (skill.icon) ?
                        <span className="icon">
                          <i className={`${skill.icon}`}></i>
                        </span> :
                        ''
                    }
                  </figure>
                  {skill.name}
                </h1>
                <h2 className="subtitle is-size-7">
                  Skill Level: {skill.level}
                </h2>
                <hr />
                <p className="">
                  {(!this.state.expanded && skill.description.length > 145) ?
                    `${skill.description.slice(0, 145)}...` :
                    skill.description
                  }
                  <button className="is-small is-outlined is-block is-pulled-right" onClick={this.expand}>
                    <em>
                      { (!this.state.expanded) ?
                        '...more' : '(less)'
                      }
                    </em>
                  </button>
                </p>
              </div>
            </div>
          </article>
        </div>
      );
    }
    return '';
  }
}

SkillItem.propTypes = {
  skill: PropTypes.object
};
