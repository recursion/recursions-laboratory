/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_PROJECTS,
  LOAD_PROJECTS_ERROR,
  LOAD_PROJECTS_SUCCESS
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  projects: false
});

function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_PROJECTS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case LOAD_PROJECTS_SUCCESS:
      return state
        .set('loading', false)
        .set('projects', action.projects);
    default:
      return state;
  }
}

export default projectsReducer;
