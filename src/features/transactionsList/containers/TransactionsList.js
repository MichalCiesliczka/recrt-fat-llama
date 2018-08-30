import { connect } from 'react-redux';

import { increaseTransactionsListPage } from '../transactionsList.actions';
import {
  getAllFetchedStatus,
  getDataLoadingStatus,
} from '../transactionsList.selectors';

import TransactionsListComponent from '../components/TransactionsList';

const mapStateToProps = state => ({
  areAllTransactionFetched: getAllFetchedStatus(state),
  isDataLoading: getDataLoadingStatus(state),
});

const mapDispatchToProps = {
  increaseTransactionsListPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListComponent);
