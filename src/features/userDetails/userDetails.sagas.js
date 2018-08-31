import { call, put, takeEvery } from 'redux-saga/effects';
import { createRoutine } from 'redux-saga-routines';

import { fetchUserDetails } from './userDetails.api';
import { SERVER_ERROR_MSG } from '../../utilities/api';

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
    if (error.message === SERVER_ERROR_MSG) {
      yield put(userDetailsRoutine.trigger(userId));
    }
  }
}

export default [
  takeEvery(userDetailsRoutine.TRIGGER, handleUserDetailsRoutine),
];
