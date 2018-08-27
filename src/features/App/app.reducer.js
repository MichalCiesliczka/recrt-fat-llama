import { handleActions } from 'redux-actions';
import { sampleAction } from './app.actions';
import { SAMPLE_KEY } from './app.selectors';

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  [SAMPLE_KEY]: false,
};

export default handleActions({
  [sampleAction](state, { payload }) {
    debugger;
    return {
      ...state,
      [SAMPLE_KEY]: payload,
    };
  },
}, initialState);
