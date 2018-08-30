import {
  getDataLoadingStatus,
  getTransactionDetailsObj,
  selectTransactionById,
} from '../transactionDetails.selectors';
import { initialState } from '../transactionDetails.reducer';

const state = {
  transactionDetails: initialState,
};

describe('transactionDetails selectors', () => {
  it('should return status if if data is loading', () => {
    expect(getDataLoadingStatus(state)).toEqual(initialState.isDataLoading);
  });

  it('should return transaction details object', () => {
    expect(getTransactionDetailsObj(state)).toEqual(initialState.transactionDetails);
  });

  const transactionObj = {
    price: 123,
  };

  const updatedState = {
    transactionDetails: {
      ...initialState,
      transactionDetails: {
        123: transactionObj,
      },
    },
  };

  it('should select proper transaction object', () => {
    expect(selectTransactionById(123)(updatedState)).toEqual(transactionObj);
  });
});
