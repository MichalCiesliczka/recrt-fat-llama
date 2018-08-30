import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import TransactionDetailsContainer from '../../features/transactionDetails';

class TransactionsList extends PureComponent {
  componentDidMount() {
    this.fetchTransactionDetails();
  }

  // TODO: Check if needed
  // componentDidUpdate() {
  //   this.fetchTransactionDetails();
  // }

  fetchTransactionDetails = () => {
    const {
      transactionDetailsRoutine,
      transactionId,
    } = this.props;

    transactionDetailsRoutine(transactionId);
  }

  render() {
    const { transactionId } = this.props;
    return (
      <div>
        <NavLink to="/">
          Get back to list
        </NavLink>
        <p>
          Details for transaction: #
          {transactionId}
        </p>
        <TransactionDetailsContainer />
      </div>
    );
  }
}

TransactionsList.propTypes = {
  transactionDetailsRoutine: PropTypes.func.isRequired,
  transactionId: PropTypes.string.isRequired,
};

export default TransactionsList;
