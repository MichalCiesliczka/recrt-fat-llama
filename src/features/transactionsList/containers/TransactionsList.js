import { connect } from 'react-redux';

import { increaseTransactionsListPage } from '../transactionsList.actions';
import {
  getTransactionsList,
  getAllFetchedStatus,
  getDataLoadingStatus,
} from '../transactionsList.selectors';

import TransactionsListComponent from '../components/TransactionsList';

const mapStateToProps = state => ({
  areAllTransactionFetched: getAllFetchedStatus(state),
  transactionsList: getTransactionsList(state),
  isDataLoading: getDataLoadingStatus(state),
});

const mapDispatchToProps = {
  increaseTransactionsListPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListComponent);
