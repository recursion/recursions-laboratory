import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from 'components/SkillItem';
import './style.scss';

// sorts skills by level descending
const sortByLevel = (skills) => skills.sort((a, b) => {
  if (a.level > b.level) {
    return -1;
  }
  if (a.level < b.level) {
    return 1;
  }
  return 0;
});

// sorts skills by alphabetical title
const sortByTitle = (skills) => skills.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

const displaySkills = (skills, search) => {
  if (search === '') {
    return skills.map((skill) => <SkillItem key={skill.name} {...skill} />);
  }

  const filteredSkills = skills.filter((skill) => {
    if (skill.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    if (skill.description.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    return false;
  });
  return filteredSkills.map((skill) => <SkillItem key={skill.name} {...skill} />);
};

export default class SkillsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sortBy: 'alphabet',
      skills: []
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSortByChange = this.onSortByChange.bind(this);
  }

  componentDidMount() {
    if (!this.props.skills) {
      this.props.loadSkills();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.skills !== prevState.skills && nextProps.skills) {
      return {
        skills: sortByTitle(nextProps.skills)
      };
    }
    return null;
  }

  onSearchChange(search) {
    this.setState(() => ({ search }));
  }

  onSortByChange(sortBy) {
    this.setState(() => ({ sortBy }));
    let nextSkills;
    if (sortBy === 'level') {
      nextSkills = sortByLevel(this.state.skills);
    } else {
      nextSkills = sortByTitle(this.state.skills);
    }
    this.setState(() => ({ skills: nextSkills }));
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
        <div className="is-size-5-desktop">
          <p>
            Rating yourself is not easy, but I&apos;ll give it a try anyway.
            By far, my strongest abilities are in being able to jump around and make things
            work quickly and effeciently. If I had to label myself based on skills,
            it would be something like <em>&apos;Intermediate Full-Stack Generalist&apos;</em>.
            To be fair, I&apos;m probably on the low end of Intermediate, and the high end of Junior.
          </p>
          <p className="has-text-centered has-text-weight-semibold">
            Ranked on a scale of 1-5, with 1 being beginner and 5 being expert:
          </p>
          <div className="skills-controls field is-flex">
            <div className="control">
              <label className="label" htmlFor="search">Search</label>
              <input
                type="text"
                className="input"
                value={this.state.search}
                onChange={(e) => this.onSearchChange(e.target.value)}
              />
            </div>
            <div className="control">
              <label className="label" htmlFor="sortBy">Sort By</label>
              <div className="select">
                <select
                  id="sortBy"
                  className="select"
                  value={this.state.sortBy}
                  onChange={(e) => this.onSortByChange(e.target.value)}
                >
                  <option value="level">Level</option>
                  <option value="alphabet">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="columns is-multiline">
          {
            displaySkills(this.state.skills, this.state.search)
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
