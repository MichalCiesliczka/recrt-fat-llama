import React, { PureComponent } from 'react';
// TODO: Add flow
import PropTypes from 'prop-types';

class TransactionsListComponent extends PureComponent {
  handleLoadMoreButton = () => {
    const {
      increaseTransactionsListPage,
    } = this.props;
    increaseTransactionsListPage();
  }

  render() {
    const { transactionsList, areAllTransactionFetched } = this.props;
    return (
      <div>
        {
          transactionsList.map(transaction => (
            <div key={transaction.id}>
              <p>{transaction.fromDate}</p>
            </div>
          ))
        }
        {
          !areAllTransactionFetched && (
            <button
              type="button"
              onClick={this.handleLoadMoreButton}
            >
              Load more
            </button>
          )
        }
      </div>
    );
  }
}

TransactionsListComponent.propTypes = {
  // TODO: Fix those types
  transactionsList: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  increaseTransactionsListPage: PropTypes.func.isRequired,
  areAllTransactionFetched: PropTypes.bool.isRequired,
};

export default TransactionsListComponent;
