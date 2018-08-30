import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { loadProjects } from './actions';

import { makeSelectProjects, makeSelectLoading, makeSelectError } from './selectors';

import reducer from './reducer';
import saga from './saga';
import ProjectsPage from './ProjectsPage';

const mapDispatchToProps = (dispatch) => ({
  loadProjects: () => dispatch(loadProjects()),
});

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjects(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'projectsPage', reducer });
const withSaga = injectSaga({ key: 'projectsPage', saga });

export default compose(withReducer, withSaga, withConnect)(ProjectsPage);
export { mapDispatchToProps };

