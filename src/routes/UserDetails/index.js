import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import { userDetailsRoutine } from '../../features/userDetails/userDetails.sagas';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "userDetails" */ './UserDetails'),
  loading: () => null,
});

const mapStateToProps = (state, { userId }) => {
  return {
    userId,
  };
};

const mapDispatchToProps = {
  userDetailsRoutine,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(LoadableComponent);
