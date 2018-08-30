import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import { createRoutine } from 'redux-saga-routines';

import { fetchTransactionsList } from './transactionsList.api';
import { SERVER_ERROR_MSG } from '../../utilities/api';
import { changeAllTransactionsFetchedStatus } from './transactionsList.actions';
import { getFetchedPagesNumbers } from './transactionsList.selectors';

export const transactionsListRoutine = createRoutine('TRANSACTIONS_LIST/FETCH_ONE_PAGE');

export function* handleTransactionsListRoutine({ payload: { pageNumber, iteration = 0 } }) {
  const fetchedPages = yield select(getFetchedPagesNumbers);

  if (!fetchedPages.includes(pageNumber)) {
    try {
      yield put(transactionsListRoutine.request());
      const transactionsList = yield call(fetchTransactionsList, pageNumber);
      if (!transactionsList.length) {
        yield put(changeAllTransactionsFetchedStatus(true));
        return;
      }
      yield put(transactionsListRoutine.success({
        pageNumber,
        data: transactionsList,
      }));
    } catch (error) {
      if (error.message === SERVER_ERROR_MSG) {
        if (iteration > 0) {
          yield put(transactionsListRoutine.failure());
          return;
        }
        yield put(transactionsListRoutine.trigger({ pageNumber, iteration: 1 }));
      }
    }
  }
}

export default [
  takeLatest(transactionsListRoutine.TRIGGER, handleTransactionsListRoutine),
];
