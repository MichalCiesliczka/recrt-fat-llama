import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { format } from 'date-fns';

const formatDate = date => format(date, 'DD/MM/YYYY, HH:mm:ss');

const STATUS_LABELS = {
  FL_APPROVED: 'Approved by Fat Llama',
  PRE_AUTHORIZED_CANCELLED: 'Cancelled on pre authorization',
  ESCROW: 'Escrow',
  PRE_AUTHORIZED: 'Pre authorized',
  PAID: 'Paid',
  CANCELLED: 'Cancelled',
  QUARANTINED: 'Quarantined',
};

const TransactionsTableRow = ({ index, ...row }) => (
  <TableRow key={row.id}>
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

TransactionsTableRow.propTypes = {
  index: PropTypes.number.isRequired,
  // TODO: Add row types
};

export default TransactionsTableRow;
