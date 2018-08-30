import React, { PureComponent, Fragment } from 'react';
// TODO: Add flow
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import TransactionDetailsCard from '../../../components/TransactionDetailsCard/TransactionDetailsCard';
import { transactionDetailsTypes } from '../transactionDetails.api';

class TransactionDetailsComponent extends PureComponent {
  static propTypes = {
    transaction: transactionDetailsTypes,
    isDataLoading: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    transaction: null,
  };

  render() {
    const {
      transaction,
      isDataLoading,
    } = this.props;

    return (
      <Fragment>
        {
          (isDataLoading || !transaction) ? (
            <CircularProgress />
          ) : (
            <TransactionDetailsCard
              transaction={transaction}
            />
          )
        }
      </Fragment>
    );
  }
}

export default TransactionDetailsComponent;
