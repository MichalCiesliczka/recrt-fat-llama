import { handleActions } from 'redux-actions';

// import {
//   increaseTransactionsListPage,
//   changeAllTransactionsFetchedStatus,
// } from './transactionsList.actions';
import { userDetailsRoutine } from './userDetails.sagas';

// ------------------------------------
// State
// ------------------------------------
export const initialState = {
  isDataLoading: false,
  usersDetails: {},
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [userDetailsRoutine.REQUEST](state) {
    return {
      ...state,
      isDataLoading: true,
    };
  },
  [userDetailsRoutine.SUCCESS](state, { payload }) {
    return {
      ...state,
      isDataLoading: false,
      usersDetails: {
        ...state.usersDetails,
        [payload.userId]: payload.data,
      },
    };
  },
}, initialState);
