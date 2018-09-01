import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ArrowBack from '@material-ui/icons/ArrowBackIos';

import TransactionDetailsContainer from '../../features/transactionDetails';

const styles = {
  backButton: {
    height: '1em',
    color: 'black',
  },
  bar: {
    marginBottom: 20,
  },
};

export class TransactionsList extends PureComponent {
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
    const { transactionId, classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="default" className={classes.bar}>
          <Toolbar>
            <IconButton color="inherit">
              <NavLink to="/" className={classes.backButton}>
                <ArrowBack />
              </NavLink>
            </IconButton>
            <Typography variant="title" color="inherit">
              Details for transaction: #
              {transactionId}
            </Typography>
          </Toolbar>
        </AppBar>
        <TransactionDetailsContainer />
      </div>
    );
  }
}

TransactionsList.propTypes = {
  transactionDetailsRoutine: PropTypes.func.isRequired,
  transactionId: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    bar: PropTypes.string,
    backButton: PropTypes.string,
  }),
};

TransactionsList.defaultProps = {
  classes: {},
};

export default withStyles(styles)(TransactionsList);
