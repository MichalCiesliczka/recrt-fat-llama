import { fetchGetMethod } from '../../utilities/api';

export const fetchTransactiionDetails = id => (
  fetchGetMethod(`transaction/${id}`)
    .catch((err) => {
      throw err;
    })
);

export default fetchTransactiionDetails;
