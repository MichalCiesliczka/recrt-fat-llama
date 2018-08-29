import { combineReducers } from 'redux';
import { transactionsListReducer as transactions } from './features/transactionsList';
import { transactionDetailsReducer as transactionDetails } from './features/transactionDetails';

const rootReducer = combineReducers({
  transactions,
  transactionDetails,
});

const reducer = rootReducer;

export default reducer;
