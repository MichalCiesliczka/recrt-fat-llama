import PropTypes from 'prop-types';

import { fetchGetMethod } from '../../utilities/api';
import { transactionDetailsTypes } from '../transactionDetails/transactionDetails.api';

export const fetchTransactionsList = (page = 0) => (
  fetchGetMethod(`transactions/${page}`)
    .catch((err) => {
      throw err;
    })
);

export const TransactionsListTypes = PropTypes.arrayOf(transactionDetailsTypes);

export default fetchTransactionsList;
