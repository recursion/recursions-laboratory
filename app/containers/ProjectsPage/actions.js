/*
 * Home Actions
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
  LOAD_PROJECTS,
  LOAD_PROJECTS_SUCCESS,
  LOAD_PROJECTS_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of LOAD_PROJECTS
 */
export function loadProjects() {
  return {
    type: LOAD_PROJECTS,
  };
}

/**
 * Changes the input field of the form
 * @param {object} An object with multiple arrays of projects
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function projectsLoaded(data) {
  return {
    type: LOAD_PROJECTS_SUCCESS,
    projects: data.projects
  };
}

/**
 * Dispatched when loading the projects fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_PROJECTS_ERROR passing the error
 */
export function projectsLoadingError(error) {
  return {
    type: LOAD_PROJECTS_ERROR,
    error,
  };
}
