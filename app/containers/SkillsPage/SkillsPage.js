import React from 'react';
import PropTypes from 'prop-types';


const SkillItem = (skill) => (
  <div className="column">
    <h1 className="title">
      {skill.name}
    </h1>
  </div>
);

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
      <section className="columns">
        {
          this.props.skills.map((skill) => <SkillItem key={skill.name} {...skill} />)
        }
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
