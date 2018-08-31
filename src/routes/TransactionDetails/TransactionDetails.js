import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import TransactionDetailsContainer from '../../features/transactionDetails';

class TransactionsList extends PureComponent {
  componentDidMount() {
    this.fetchTransactionDetails();
  }

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
        <Typography
          style={{
            margin: 20,
          }}
          component="p"
          align="left"
        >
          <NavLink to="/">
            &#60; Get back to list
          </NavLink>
        </Typography>
        <Typography gutterBottom variant="headline" component="h1">
          Details for transaction: #
          {transactionId}
        </Typography>
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
