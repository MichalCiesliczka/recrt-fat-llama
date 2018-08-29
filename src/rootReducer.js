import { combineReducers } from 'redux';
import { transactionsListReducer as transactions } from './features/transactionsList';

const rootReducer = combineReducers({
  transactions,
});

const reducer = rootReducer;

export default reducer;
