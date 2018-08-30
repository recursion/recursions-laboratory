/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_PROJECTS } from './constants';
import { projectsLoaded, projectsLoadingError } from './actions';

const queryUrl = '/data/projects.json';

export function* getProjects() {
  try {
    // Call our request helper (see 'utils/request')
    const projects = yield call(request, queryUrl);
    yield put(projectsLoaded(projects));
  } catch (err) {
    yield put(projectsLoadingError(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* watchAll() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(LOAD_REPOS, getRepos);
  yield all([
    takeLatest(LOAD_PROJECTS, getProjects)
  ]);
}
