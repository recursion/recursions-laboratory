import { createSelector } from 'reselect';

/**
 * Projects selectors
 */

// import { createSelector } from 'reselect';

const selectProjects = (state) => state.get('projectsPage');

const makeSelectProjects = () => createSelector(
  selectProjects,
  (projectsState) => projectsState.get('projects')
);

const makeSelectLoading = () => createSelector(
  selectProjects,
  (projectsState) => projectsState.get('loading')
);

const makeSelectError = () => createSelector(
  selectProjects,
  (projectsState) => projectsState.get('error')
);

export {
  selectProjects,
  makeSelectProjects,
  makeSelectLoading,
  makeSelectError
};
