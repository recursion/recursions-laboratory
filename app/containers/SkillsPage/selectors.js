import { createSelector } from 'reselect';

/**
 * skills selectors
 */

// import { createSelector } from 'reselect';

const selectSkills = (state) => state.get('skillsPage');

const makeSelectSkills = () => createSelector(
  selectSkills,
  (skillsState) => skillsState.get('skills')
);

const makeSelectLoading = () => createSelector(
  selectSkills,
  (skillsState) => skillsState.get('loading')
);

const makeSelectError = () => createSelector(
  selectSkills,
  (skillsState) => skillsState.get('error')
);

export {
  selectSkills,
  makeSelectSkills,
  makeSelectLoading,
  makeSelectError
};
