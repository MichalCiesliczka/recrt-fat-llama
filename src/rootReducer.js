import { combineReducers } from 'redux';
import { transactionsListReducer as transactions } from './features/transactionsList';
import { transactionDetailsReducer as transactionDetails } from './features/transactionDetails';
import { userDetailsReducer as userDetails } from './features/userDetails';

const rootReducer = combineReducers({
  transactions,
  transactionDetails,
  userDetails,
});

const reducer = rootReducer;

export default reducer;
