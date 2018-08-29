import React, { Fragment } from 'react';
import differenceInDays from 'date-fns/difference_in_days';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import { formatDate } from '../../utilities/dates';
import { formatMoneyWithCurrency } from '../../utilities/money';
import { STATUS_LABELS } from '../../features/transactionDetails/transactionDetails.constans';

// TODO: Add icoms
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const TransactionDetailsCard = ({ transaction }) => {
  const totalAmountToPay = Math.max(transaction.price - transaction.totalDiscount, 0);
  return (
    <Fragment>
      <Chip
        label={STATUS_LABELS[transaction.status]}
        color="primary"
        variant="outlined"
      />
      <Grid
        container
        justify="center"
        direction="row"
        spacing={32}
      >
        <Grid item>
          <h3>Time</h3>
          <List>
            <ListItem>
              <Avatar>
                {/* <ImageIcon /> */}
              </Avatar>
              <ListItemText primary="From Date" secondary={formatDate(transaction.fromDate)} />
            </ListItem>
            <ListItem>
              <Avatar>
                {/* <WorkIcon /> */}
              </Avatar>
              <ListItemText primary="To Date" secondary={formatDate(transaction.toDate)} />
            </ListItem>
            <ListItem>
              <Avatar>
                {/* <BeachAccessIcon /> */}
              </Avatar>
              <ListItemText primary="Total days" secondary={differenceInDays(transaction.toDate, transaction.fromDate)} />
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <h3>Money, money, money</h3>
          <List>
            <ListItem>
              <Avatar>
                {/* <ImageIcon /> */}
              </Avatar>
              <ListItemText primary="Total Price" secondary={formatMoneyWithCurrency(transaction.price, transaction.currency)} />
            </ListItem>
            <ListItem>
              <Avatar>
                {/* <WorkIcon /> */}
              </Avatar>
              <ListItemText primary="Magic credit used" secondary={formatMoneyWithCurrency(transaction.creditUsed, transaction.currency)} />
            </ListItem>
            <ListItem>
              <Avatar>
                {/* <BeachAccessIcon /> */}
              </Avatar>
              <ListItemText primary="Promocode" secondary={transaction.promocode || '-'} />
            </ListItem>
            <ListItem>
              <Avatar>
                {/* <BeachAccessIcon /> */}
              </Avatar>
              <ListItemText primary="Total discount" secondary={formatMoneyWithCurrency(transaction.totalDiscount, transaction.currency)} />
            </ListItem>
            <ListItem>
              <Avatar>
                {/* <BeachAccessIcon /> */}
              </Avatar>
              <ListItemText primary="To pay" secondary={formatMoneyWithCurrency(totalAmountToPay, transaction.currency)} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TransactionDetailsCard;
