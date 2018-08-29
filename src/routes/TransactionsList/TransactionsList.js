import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TransactionsListContainer from '../../features/transactionsList';

class TransactionsList extends PureComponent {
  componentDidMount() {
    this.fetchTransactionsList();
  }

  componentDidUpdate() {
    this.fetchTransactionsList();
  }

  fetchTransactionsList = () => {
    const {
      lastPageError,
      increaseTransactionsListPage,
      transactionsListRoutine,
      currentTransactionsListPage,
    } = this.props;

    if (lastPageError) {
      increaseTransactionsListPage();
      return;
    }
    transactionsListRoutine({ pageNumber: currentTransactionsListPage });
  }

  render() {
    return (
      <div>
        <p>Transactions List</p>
        <TransactionsListContainer />
      </div>
    );
  }
}

TransactionsList.propTypes = {
  transactionsListRoutine: PropTypes.func.isRequired,
  increaseTransactionsListPage: PropTypes.func.isRequired,
  currentTransactionsListPage: PropTypes.number.isRequired,
  lastPageError: PropTypes.bool.isRequired,
};

export default TransactionsList;
