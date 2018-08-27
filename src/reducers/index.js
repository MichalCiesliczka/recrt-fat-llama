import { combineReducers } from 'redux'
import { appReducer as app } from '../features/App';

const rootReducer = combineReducers({
  app,
});

const reducer = rootReducer;

export default reducer;
