import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { formatDate } from '../../../utilities/dates';
import { STATUS_LABELS } from '../../../features/transactionDetails/transactionDetails.constans';
import { transactionDetailsTypes } from '../../../features/transactionDetails/transactionDetails.api';


const TransactionsTableRow = ({ index, history, row }) => {
  const redirectToDetails = id => history.push(`/transaction/${id}`);
  return (
    <TableRow
      key={row.id}
      onClick={() => redirectToDetails(row.id)}
    >
      <TableCell>{index + 1}</TableCell>
      <TableCell>{formatDate(row.fromDate)}</TableCell>
      <TableCell>{formatDate(row.toDate)}</TableCell>
      <TableCell>
        {row.price.toFixed(2)}
        {row.currency}
      </TableCell>
      <TableCell>{STATUS_LABELS[row.status]}</TableCell>
    </TableRow>
  );
};

TransactionsTableRow.propTypes = {
  index: PropTypes.number.isRequired,
  row: transactionDetailsTypes,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

TransactionsTableRow.defaultProps = {
  row: {},
};

export default withRouter(TransactionsTableRow);
