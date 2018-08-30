import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import differenceInDays from 'date-fns/difference_in_days';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

// TODO: Add icoms
import CalendarIcon from '@material-ui/icons/CalendarToday';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import PaymentIcon from '@material-ui/icons/Payment';

import { formatDate } from '../../utilities/dates';
import { formatMoneyWithCurrency } from '../../utilities/money';
import { STATUS_LABELS } from '../../features/transactionDetails/transactionDetails.constans';
import { transactionDetailsTypes } from '../../features/transactionDetails/transactionDetails.api';

import UserDetailsRoute from '../../routes/UserDetails';

const TransactionDetailsCard = ({ transaction }) => {
  const totalAmountToPay = Math.max(transaction.price - transaction.totalDiscount, 0);
  return (
    <Fragment>
      <Chip
        label={STATUS_LABELS[transaction.status]}
        color="primary"
        variant="outlined"
      />
      <br />
      <br />
      ItemId: #
      {transaction.itemId}
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
                <CalendarIcon />
              </Avatar>
              <ListItemText primary="From Date" secondary={formatDate(transaction.fromDate)} />
            </ListItem>
            <ListItem>
              <Avatar>
                <SkipNextIcon />
              </Avatar>
              <ListItemText primary="To Date" secondary={formatDate(transaction.toDate)} />
            </ListItem>
            <ListItem>
              <Avatar>
                <AccessTimeIcon />
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
                <AttachMoneyIcon />
              </Avatar>
              <ListItemText primary="Total Price" secondary={formatMoneyWithCurrency(transaction.price, transaction.currency)} />
            </ListItem>
            <ListItem>
              <Avatar>
                <SaveAltIcon />
              </Avatar>
              <ListItemText primary="Magic credit used" secondary={formatMoneyWithCurrency(transaction.creditUsed, transaction.currency)} />
            </ListItem>
            <ListItem>
              <Avatar>
                <FavoriteIcon />
              </Avatar>
              <ListItemText primary="Promocode" secondary={transaction.promocode || '-'} />
            </ListItem>
            <ListItem>
              <Avatar>
                <MoneyOffIcon />
              </Avatar>
              <ListItemText primary="Total discount" secondary={formatMoneyWithCurrency(transaction.totalDiscount, transaction.currency)} />
            </ListItem>
            <ListItem>
              <Avatar>
                <PaymentIcon />
              </Avatar>
              <ListItemText primary="To pay" secondary={formatMoneyWithCurrency(totalAmountToPay, transaction.currency)} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography gutterBottom variant="headline" component="h2">
        Users
      </Typography>
      <Grid
        container
        justify="center"
        direction="row"
        spacing={32}
      >
        <Grid item>
          <Typography gutterBottom variant="headline" component="h2">
            Lender
          </Typography>
          <Route render={() => <UserDetailsRoute userId={transaction.lenderId} />} />
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="headline" component="h2">
            Borrower
          </Typography>
          <Route render={() => <UserDetailsRoute userId={transaction.borrowerId} />} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

TransactionDetailsCard.propTypes = {
  transaction: transactionDetailsTypes,
};

TransactionDetailsCard.defaultProps = {
  transaction: {},
};

export default TransactionDetailsCard;
