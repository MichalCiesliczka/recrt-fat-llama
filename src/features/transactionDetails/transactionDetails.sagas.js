import { call, put, takeLatest } from 'redux-saga/effects';
import { createRoutine } from 'redux-saga-routines';

import { fetchTransactiionDetails } from './transactionDetails.api';
import { SERVER_ERROR_MSG } from '../../utilities/api';

export const transactionDetailsRoutine = createRoutine('TRANSACTION_DETAILS/FETCH_DETAILS');

export function* handleTransactionDetailsRoutine({ payload: transactionId }) {
  try {
    yield put(transactionDetailsRoutine.request());
    const transactionDetails = yield call(fetchTransactiionDetails, transactionId);
    yield put(transactionDetailsRoutine.success({
      transactionId,
      data: transactionDetails,
    }));
  } catch (error) {
    if (error.message === SERVER_ERROR_MSG) {
      yield put(transactionDetailsRoutine.trigger(transactionId));
    }
  }
}

export default [
  takeLatest(transactionDetailsRoutine.TRIGGER, handleTransactionDetailsRoutine),
];
