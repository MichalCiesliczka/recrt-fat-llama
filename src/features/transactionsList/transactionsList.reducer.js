import { handleActions, combineActions } from 'redux-actions';

import {
  increaseTransactionsListPage,
  changeAllTransactionsFetchedStatus,
} from './transactionsList.actions';
import { transactionsListRoutine } from './transactionsList.sagas';

// ------------------------------------
// State
// ------------------------------------
export const initialState = {
  currentPage: 0,
  allFetched: false,
  lastPageError: false,
  isDataLoading: false,
  transactionsList: [],
  fetchedPages: [],
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [increaseTransactionsListPage](state) {
    return {
      ...state,
      currentPage: state.currentPage + 1,
    };
  },
  [changeAllTransactionsFetchedStatus](state, { payload }) {
    return {
      ...state,
      allFetched: payload,
    };
  },
  [transactionsListRoutine.REQUEST](state) {
    return {
      ...state,
      isDataLoading: true,
    };
  },
  [transactionsListRoutine.SUCCESS](state, { payload }) {
    return {
      ...state,
      isDataLoading: false,
      fetchedPages: [
        ...state.fetchedPages,
        payload.pageNumber,
      ],
      transactionsList: [
        ...state.transactionsList,
        ...payload.data,
      ],
    };
  },
  [transactionsListRoutine.FAILURE](state) {
    return {
      ...state,
      lastPageError: true,
      isDataLoading: false,
    };
  },
  [combineActions(
    transactionsListRoutine.SUCCESS,
    increaseTransactionsListPage,
  )](state) {
    return {
      ...state,
      lastPageError: false,
    };
  },
}, initialState);
