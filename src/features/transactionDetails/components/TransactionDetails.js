import React, { PureComponent, Fragment } from 'react';
// TODO: Add flow
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import TransactionDetailsCard from '../../../components/TransactionDetailsCard/TransactionDetailsCard';

class TransactionDetailsComponent extends PureComponent {
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

TransactionDetailsComponent.propTypes = {
  // TODO: Fix those types
  transaction: PropTypes.shape({
    borrowerId: PropTypes.number.isRequired,
    creditUsed: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    fromDate: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    itemId: PropTypes.number.isRequired,
    lenderId: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    promocode: PropTypes.string,
    status: PropTypes.oneOf(['FL_APPROVED', 'PRE_AUTHORIZED_CANCELLED', 'ESCROW', 'PRE_AUTHORIZED', 'PAID', 'CANCELLED', 'QUARANTINED']).isRequired,
    toDate: PropTypes.string.isRequired,
    totalDiscount: PropTypes.number.isRequired,
  }),
  isDataLoading: PropTypes.bool.isRequired,
};

export default TransactionDetailsComponent;
