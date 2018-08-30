import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import {
  selectUserById,
  getDataLoadingStatus,
} from '../userDetails.selectors';

import UserDetailsComponent from '../components/UserDetails';

const mapStateToProps = (state, { userId }) => {
  return {
    user: selectUserById(userId)(state),
    isDataLoading: getDataLoadingStatus(state),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps),
)(UserDetailsComponent);
