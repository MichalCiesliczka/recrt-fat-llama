import { all } from 'redux-saga/effects';

import { transactionsListSagas } from './features/transactionsList';

export default function* rootSaga() {
  yield all([
    ...transactionsListSagas,
  ]);
}
