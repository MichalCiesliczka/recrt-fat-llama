import React, { PureComponent } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

import TransactionsTableHeader, { rows } from './elements/TableHeader';
import TransactionsTableRow from './elements/TableRow';
import { sortByType } from '../../utilities/arrays';

class TransactionsTable extends PureComponent {
  state = {
    orderBy: 'fromDate',
    orderAsc: false,
  };

  handleSorting = (a, b) => {
    const { orderBy, orderAsc } = this.state;
    const sortType = rows.find(el => el.id === orderBy).type;

    return sortByType(a[orderBy], b[orderBy], sortType, orderAsc);
  }

  sortHandler = (id) => {
    const { orderBy, orderAsc } = this.state;

    this.setState({
      orderBy: id,
      orderAsc: orderBy === id ? !orderAsc : false,
    });
  }

  render() {
    const { orderBy, orderAsc } = this.state;
    const { data } = this.props;

    return (
      <Table>
        <TableHead>
          <TransactionsTableHeader
            orderBy={orderBy}
            orderAsc={orderAsc}
            sortHandler={this.sortHandler}
          />
        </TableHead>
        <TableBody>
          {data
            .sort(this.handleSorting)
            .map((row, index) => (
              <TransactionsTableRow
                key={row.id}
                index={index}
                {...row}
              />
            ))
          }
        </TableBody>
      </Table>
    );
  }
}

export default TransactionsTable;
