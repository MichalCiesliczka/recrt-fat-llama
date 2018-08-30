import { connect } from 'react-redux';

import { getTransactionsList } from '../transactionsList.selectors';

import TransactionsTableComponent from '../components/TransactionsTable';

const mapStateToProps = state => ({
  transactionsList: getTransactionsList(state),
});

export default connect(mapStateToProps)(TransactionsTableComponent);
