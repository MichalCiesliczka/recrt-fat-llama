import userDetails, { initialState } from '../userDetails.reducer';
import { userDetailsRoutine } from '../userDetails.sagas';

describe('userDetails reducer', () => {
  it('should return initial state', () => {
    const state = userDetails(undefined, { type: 'TEST' });

    expect(state).toEqual(initialState);
  });

  it('should save user details and update list when new data comes in', () => {
    const payload = {
      name: 'John',
    };

    let changedState = userDetails(
      initialState,
      { type: userDetailsRoutine.SUCCESS, payload: { data: payload, userId: 0 } },
    );
    expect(changedState.usersDetails).toEqual({
      0: payload,
    });

    const nextData = {
      name: 'Michal',
    };
    changedState = userDetails(
      changedState,
      { type: userDetailsRoutine.SUCCESS, payload: { data: nextData, userId: 1 } },
    );
    expect(changedState.usersDetails).toEqual({
      0: payload,
      1: nextData,
    });
  });

  it('should mark data as loading when request has been sent', () => {
    const changedState = userDetails(
      initialState,
      { type: userDetailsRoutine.REQUEST },
    );
    expect(changedState.isDataLoading).toEqual(true);
  });
});
