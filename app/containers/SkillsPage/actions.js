/*
 * Skills Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_SKILLS,
  LOAD_SKILLS_SUCCESS,
  LOAD_SKILLS_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of LOAD_SKILLS
 */
export function loadSkills() {
  return {
    type: LOAD_SKILLS,
  };
}

/**
 * Changes the input field of the form
 * @param {object} An object with multiple arrays of SKILLS
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function skillsLoaded(data) {
  return {
    type: LOAD_SKILLS_SUCCESS,
    skills: data.skills
  };
}

/**
 * Dispatched when loading the SKILLS fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_SKILLS_ERROR passing the error
 */
export function skillsLoadingError(error) {
  return {
    type: LOAD_SKILLS_ERROR,
    error,
  };
}
