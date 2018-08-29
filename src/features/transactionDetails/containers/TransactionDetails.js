import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import {
  selectTransactionById,
  getDataLoadingStatus,
} from '../transactionDetails.selectors';

import TransactionDetailsComponent from '../components/TransactionDetails';

const mapStateToProps = (state, { match: { params } }) => {
  const { id: transactionId } = params;
  return {
    transaction: selectTransactionById(transactionId)(state),
    isDataLoading: getDataLoadingStatus(state),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps),
)(TransactionDetailsComponent);
