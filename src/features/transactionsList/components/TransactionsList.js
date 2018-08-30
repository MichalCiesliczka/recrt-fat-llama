import React, { PureComponent } from 'react';
// TODO: Add flow
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import TransactionsTable from '../../../components/TransactionsTable';
import ButtonWithLoader from '../../../components/ButtonWithLoader/ButtonWithLoader';
import { TransactionsListTypes } from '../transactionsList.api';

class TransactionsListComponent extends PureComponent {
  static propTypes = {
    transactionsList: TransactionsListTypes.isRequired,
    increaseTransactionsListPage: PropTypes.func.isRequired,
    areAllTransactionFetched: PropTypes.bool.isRequired,
    isDataLoading: PropTypes.bool.isRequired,
  };

  handleLoadMoreButton = () => {
    const { increaseTransactionsListPage } = this.props;
    increaseTransactionsListPage();
  }

  render() {
    const {
      transactionsList,
      areAllTransactionFetched,
      isDataLoading,
    } = this.props;

    return (
      <Grid
        container
        alignItems="center"
        direction="column"
        spacing={16}
      >
        <Grid item>
          <TransactionsTable data={transactionsList} />
        </Grid>
        {
          !areAllTransactionFetched && (
            <Grid item>
              <ButtonWithLoader
                onClick={this.handleLoadMoreButton}
                loading={isDataLoading}
              >
                Load more
              </ButtonWithLoader>
            </Grid>
          )
        }
      </Grid>
    );
  }
}

export default TransactionsListComponent;
