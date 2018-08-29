import { connect } from 'react-redux';

import { increaseTransactionsListPage } from '../transactionsList.actions';
import {
  getTransactionsList,
  getAllFetchedStatus,
} from '../transactionsList.selectors';

import TransactionsListComponent from '../components/TransactionsList';

const mapStateToProps = state => ({
  areAllTransactionFetched: getAllFetchedStatus(state),
  transactionsList: getTransactionsList(state),
});

const mapDispatchToProps = {
  increaseTransactionsListPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListComponent);
