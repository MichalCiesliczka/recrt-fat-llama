import userDetailsComponent from './components/UserDetails';
import userDetailsContainer from './containers/UserDetails';

import userDetailsApi from './userDetails.api';
import userDetailsReducer from './userDetails.reducer';
import userDetailsSagas from './userDetails.sagas';
import userDetailsSelectors from './userDetails.selectors';

export {
  userDetailsComponent,
  userDetailsApi,
  userDetailsReducer,
  userDetailsSagas,
  userDetailsSelectors,
};

export default userDetailsContainer;
