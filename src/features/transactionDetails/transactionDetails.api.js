import PropTypes from 'prop-types';
import { fetchGetMethod, fetchPutMethod } from '../../utilities/api';

export const fetchTransactiionDetails = id => (
  fetchGetMethod(`transaction/${id}`)
    .catch((err) => {
      throw err;
    })
);

export const acceptTransaction = id => (
  fetchPutMethod(`transaction/${id}`, {
    status: 'FL_APPROVED',
  })
    .catch((err) => {
      throw err;
    })
);

export const transactionDetailsTypes = PropTypes.shape({
  borrowerId: PropTypes.number.isRequired,
  creditUsed: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  itemId: PropTypes.number.isRequired,
  lenderId: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  promocode: PropTypes.string,
  status: PropTypes.oneOf(['FL_APPROVED', 'PRE_AUTHORIZED_CANCELLED', 'ESCROW', 'PRE_AUTHORIZED', 'PAID', 'CANCELLED', 'QUARANTINED']).isRequired,
  toDate: PropTypes.string.isRequired,
  totalDiscount: PropTypes.number.isRequired,
});

export default {
  fetchTransactiionDetails,
  acceptTransaction,
};
