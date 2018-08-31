/*
 * Skills Reducer
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
  LOAD_SKILLS,
  LOAD_SKILLS_ERROR,
  LOAD_SKILLS_SUCCESS
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  skills: false
});

function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SKILLS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_SKILLS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case LOAD_SKILLS_SUCCESS:
      return state
        .set('loading', false)
        .set('skills', action.skills);
    default:
      return state;
  }
}

export default skillsReducer;
