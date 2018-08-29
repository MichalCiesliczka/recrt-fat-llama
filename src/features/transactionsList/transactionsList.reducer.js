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
  transactionsList: [],
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
  [transactionsListRoutine.FAILURE](state) {
    return {
      ...state,
      lastPageError: true,
    };
  },
  [transactionsListRoutine.SUCCESS](state, { payload }) {
    return {
      ...state,
      transactionsList: [
        ...state.transactionsList,
        ...payload.data,
      ],
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
