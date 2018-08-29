import { all } from 'redux-saga/effects';

import { transactionsListSagas } from './features/transactionsList';
import { transactionDetailsSagas } from './features/transactionDetails';

export default function* rootSaga() {
  yield all([
    ...transactionsListSagas,
    ...transactionDetailsSagas,
  ]);
}
