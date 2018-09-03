import React from 'react';
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const columns = [
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
      columns.map(column => (
        <TableCell
          numeric
          key={column.id}
        >
          <TableSortLabel
            active={props.orderBy === column.id}
            direction={props.orderAsc ? 'asc' : 'desc'}
            onClick={() => props.sortHandler(column.id)}
          >
            {column.label}
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
