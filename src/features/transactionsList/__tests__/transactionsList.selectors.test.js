import {
  getCurrentTransactionsListPage,
  getAllFetchedStatus,
  getLastPageErrorStatus,
  getDataLoadingStatus,
  getTransactionsList,
} from '../transactionsList.selectors';
import { initialState } from '../transactionsList.reducer';

const state = {
  transactions: initialState,
};

describe('transactionsList selectors', () => {
  it('should return current transactions list page', () => {
    expect(getCurrentTransactionsListPage(state)).toEqual(initialState.currentPage);
  });

  it('should return status if all transactions are fetched', () => {
    expect(getAllFetchedStatus(state)).toEqual(initialState.allFetched);
  });

  it('should return status if last request was not successful', () => {
    expect(getLastPageErrorStatus(state)).toEqual(initialState.lastPageError);
  });

  it('should return status if if data is loading', () => {
    expect(getDataLoadingStatus(state)).toEqual(initialState.isDataLoading);
  });

  it('should return transactions list', () => {
    expect(getTransactionsList(state)).toEqual(initialState.transactionsList);
  });
});
