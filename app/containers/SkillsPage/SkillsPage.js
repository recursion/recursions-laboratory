import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from 'components/SkillItem';
import './style.scss';

export default class SkillsPage extends React.PureComponent {
  componentWillMount() {
    this.props.loadSkills();
  }
  render() {
    if (this.props.loading || !this.props.skills) {
      return (
        <div className="notification is-loading">
          Loading skills....
        </div>
      );
    }

    return (
      <section className="skills section">
        <h1 className="title has-text-centered">Skills (that pay the bills)</h1>
        <div className="container is-size-5-desktop">
          <p>
            Rating yourself is not easy, but I&apos;ll give it a try anyway.
            By far, my strongest abilities are in being able to jump around and make things
            work quickly and effeciently. If I had to label myself based on skills,
            it would be something like <em>&apos;Intermediate Full-Stack Generalist&apos;</em>.
            To be fair, I&apos;m probably on the low end of Intermediate, and the high end of Junior.
          </p>
          <p className="has-text-centered has-text-weight-semibold">
            On a scale of 1-5, with 1 being the lowest:
          </p>
        </div>
        <div className="columns is-multiline">
          {
            this.props.skills.map((skill) => <SkillItem key={skill.name} {...skill} />)
          }
        </div>
      </section>
    );
  }
}

SkillsPage.propTypes = {
  loadSkills: PropTypes.func,
  loading: PropTypes.bool,
  skills: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array
  ])
};
