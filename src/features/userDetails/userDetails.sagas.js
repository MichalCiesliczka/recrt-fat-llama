import { call, put, takeEvery } from 'redux-saga/effects';
import { createRoutine } from 'redux-saga-routines';

import { fetchUserDetails } from './userDetails.api';
// import { SERVER_ERROR_MSG } from '../../utilities/api';

export const userDetailsRoutine = createRoutine('USER_DETAILS/FETCH_DETAILS');

export function* handleUserDetailsRoutine({ payload: userId }) {
  try {
    yield put(userDetailsRoutine.request());
    const transactionDetails = yield call(fetchUserDetails, userId);
    yield put(userDetailsRoutine.success({
      userId,
      data: transactionDetails,
    }));
  } catch (error) {
    // TODO: Think about error handling
    // if (error.message === SERVER_ERROR_MSG) {
    //   if (iteration > 0) {
    //     yield put(transactionDetailsRoutine.failure());
    //     return;
    //   }
    //   yield put(transactionDetailsRoutine.trigger({ pageNumber, iteration: 1 }));
    // }
  }
}

export default [
  takeEvery(userDetailsRoutine.TRIGGER, handleUserDetailsRoutine),
];
