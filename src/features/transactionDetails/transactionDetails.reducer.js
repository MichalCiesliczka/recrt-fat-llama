import { handleActions } from 'redux-actions';

// import {
//   increaseTransactionsListPage,
//   changeAllTransactionsFetchedStatus,
// } from './transactionsList.actions';
import { transactionDetailsRoutine } from './transactionDetails.sagas';

// ------------------------------------
// State
// ------------------------------------
export const initialState = {
  isDataLoading: false,
  transactionDetails: {},
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [transactionDetailsRoutine.REQUEST](state) {
    return {
      ...state,
      isDataLoading: true,
    };
  },
  [transactionDetailsRoutine.SUCCESS](state, { payload }) {
    return {
      ...state,
      isDataLoading: false,
      transactionDetails: {
        ...state.transactionDetails,
        [payload.transactionId]: payload.data,
      },
    };
  },
}, initialState);
