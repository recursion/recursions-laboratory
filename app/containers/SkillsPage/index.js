import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { loadSkills } from './actions';

import { makeSelectSkills, makeSelectLoading, makeSelectError } from './selectors';

import reducer from './reducer';
import saga from './saga';
import SkillsPage from './SkillsPage';

const mapDispatchToProps = (dispatch) => ({
  loadSkills: () => dispatch(loadSkills()),
});

const mapStateToProps = createStructuredSelector({
  skills: makeSelectSkills(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'skillsPage', reducer });
const withSaga = injectSaga({ key: 'skillsPage', saga });

export default compose(withReducer, withSaga, withConnect)(SkillsPage);
export { mapDispatchToProps };
