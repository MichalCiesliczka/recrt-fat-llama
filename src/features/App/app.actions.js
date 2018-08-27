import { createAction } from 'redux-actions';

export const sampleAction = createAction('APP/SAMPLE_ACTION', () => {});

export default {
  sampleAction,
}
