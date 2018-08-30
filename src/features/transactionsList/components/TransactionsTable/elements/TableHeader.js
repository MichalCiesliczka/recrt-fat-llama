import React from 'react';
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const rows = [
  {
    id: 'fromDate',
    label: 'From Date',
    type: 'date',
  },
  {
    id: 'toDate',
    label: 'To Date',
    type: 'date',
  },
  {
    id: 'price',
    label: 'Price',
    type: 'numeric',
  },
  {
    id: 'status',
    label: 'Status',
    type: 'alphabetical',
  },
];

const TransactionsTableHeader = props => (
  <TableRow>
    <TableCell>
      No.
    </TableCell>
    {
      rows.map(row => (
        <TableCell
          numeric
          key={row.id}
        >
          <TableSortLabel
            active={props.orderBy === row.id}
            direction={props.orderAsc ? 'asc' : 'desc'}
            onClick={() => props.sortHandler(row.id)}
          >
            {row.label}
          </TableSortLabel>
        </TableCell>
      ))
    }
  </TableRow>
);

TransactionsTableHeader.propTypes = {
  orderBy: PropTypes.string.isRequired,
  orderAsc: PropTypes.bool.isRequired,
  sortHandler: PropTypes.func.isRequired,
};

export default TransactionsTableHeader;
