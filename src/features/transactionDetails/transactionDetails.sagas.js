import { call, put, takeLatest } from 'redux-saga/effects';
import { createRoutine } from 'redux-saga-routines';

import { fetchTransactiionDetails } from './transactionDetails.api';
// import { SERVER_ERROR_MSG } from '../../utilities/api';

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
  takeLatest(transactionDetailsRoutine.TRIGGER, handleTransactionDetailsRoutine),
];
