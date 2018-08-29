import { createAction } from 'redux-actions';

export const TRANSACTIONS_LIST_CHANGE_PAGE = 'TRANSACTIONS_LIST/INCREASE_PAGE';
export const TRANSACTIONS_LIST_CHANGE_FETCHED_STATUS = 'TRANSACTIONS_LIST/CHANGE_FETCHED_STATUS';

export const increaseTransactionsListPage = createAction(
  TRANSACTIONS_LIST_CHANGE_PAGE,
  () => {},
);
export const changeAllTransactionsFetchedStatus = createAction(
  TRANSACTIONS_LIST_CHANGE_FETCHED_STATUS,
  status => status,
);

export default {
  increaseTransactionsListPage,
  changeAllTransactionsFetchedStatus,
};
