import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              align="center"
              style={{
                width: '100%',
              }}
            >
              Transactions List
            </Typography>
          </Toolbar>
        </AppBar>
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
