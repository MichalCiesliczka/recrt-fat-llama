import transactionDetails, { initialState } from '../transactionDetails.reducer';
import { transactionDetailsRoutine } from '../transactionDetails.sagas';

describe('transactionDetails reducer', () => {
  it('should return initial state', () => {
    const state = transactionDetails(undefined, { type: 'TEST' });

    expect(state).toEqual(initialState);
  });

  it('should save transaction details and update list when new data comes in', () => {
    const payload = {
      price: 123,
    };

    let changedState = transactionDetails(
      initialState,
      { type: transactionDetailsRoutine.SUCCESS, payload: { data: payload, transactionId: 0 } },
    );
    expect(changedState.transactionDetails).toEqual({
      0: payload,
    });

    const nextData = {
      price: 456,
    };
    changedState = transactionDetails(
      changedState,
      { type: transactionDetailsRoutine.SUCCESS, payload: { data: nextData, transactionId: 1 } },
    );
    expect(changedState.transactionDetails).toEqual({
      0: payload,
      1: nextData,
    });
  });

  it('should mark data as loading when request has been sent', () => {
    const changedState = transactionDetails(
      initialState,
      { type: transactionDetailsRoutine.REQUEST },
    );
    expect(changedState.isDataLoading).toEqual(true);
  });
});
