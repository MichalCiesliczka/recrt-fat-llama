import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import { transactionDetailsRoutine } from '../../features/transactionDetails/transactionDetails.sagas';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "transactionDetails" */ './TransactionDetails'),
  loading: () => null,
});

const mapStateToProps = (state, { match: { params } }) => {
  const { id: transactionId } = params;

  return {
    transactionId,
  };
};

const mapDispatchToProps = {
  transactionDetailsRoutine,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(LoadableComponent);
