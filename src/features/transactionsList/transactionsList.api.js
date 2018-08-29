import { fetchGetMethod } from '../../utilities/api';

export const fetchTransactionsList = (page = 0) => (
  fetchGetMethod(`transactions/${page}`)
    .catch((err) => {
      throw err;
    })
);

export default fetchTransactionsList;
