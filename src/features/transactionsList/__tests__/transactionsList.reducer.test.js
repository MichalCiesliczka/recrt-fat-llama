import transactionsList, { initialState } from '../transactionsList.reducer';

import {
  increaseTransactionsListPage,
  changeAllTransactionsFetchedStatus,
} from '../transactionsList.actions';
import { transactionsListRoutine } from '../transactionsList.sagas';

describe('transactionsList reducer', () => {
  it('should return initial state', () => {
    const state = transactionsList(undefined, { type: 'TEST' });

    expect(state).toEqual(initialState);
  });

  it('should increase page number by one per dispatch', () => {
    let changedState = transactionsList(initialState, increaseTransactionsListPage());
    expect(changedState.currentPage).toEqual(1);
    changedState = transactionsList(changedState, increaseTransactionsListPage());
    expect(changedState.currentPage).toEqual(2);
    changedState = transactionsList(changedState, increaseTransactionsListPage());
    expect(changedState.currentPage).toEqual(3);
  });

  it('should change status if all transactions are fetched', () => {
    let changedState = transactionsList(initialState, changeAllTransactionsFetchedStatus(true));
    expect(changedState.allFetched).toEqual(true);

    changedState = transactionsList(initialState, changeAllTransactionsFetchedStatus(false));
    expect(changedState.allFetched).toEqual(false);
  });

  it('should save transactions list and update it when new data comes in', () => {
    const payload = [
      { id: 1 },
      { id: 2 },
    ];

    let changedState = transactionsList(
      initialState,
      { type: transactionsListRoutine.SUCCESS, payload: { data: payload, pageNumber: 0 } },
    );
    expect(changedState.transactionsList).toEqual(payload);
    expect(changedState.fetchedPages.includes(0)).toBeTruthy();

    const nextData = [
      { id: 3 },
      { id: 4 },
    ];
    changedState = transactionsList(
      changedState,
      { type: transactionsListRoutine.SUCCESS, payload: { data: nextData, pageNumber: 1 } },
    );
    expect(changedState.transactionsList).toEqual([...payload, ...nextData]);
    expect(changedState.fetchedPages.includes(1)).toBeTruthy();
  });

  it('should mark data as loading when request has been sent', () => {
    const changedState = transactionsList(
      initialState,
      { type: transactionsListRoutine.REQUEST },
    );
    expect(changedState.isDataLoading).toEqual(true);
  });

  it('should mark error when fetch is not successful', () => {
    const changedState = transactionsList(
      initialState,
      { type: transactionsListRoutine.FAILURE },
    );
    expect(changedState.lastPageError).toEqual(true);
  });

  it('should unmark an error when fetch was not successful and then app increased a number', () => {
    let changedState = transactionsList(
      initialState,
      { type: transactionsListRoutine.FAILURE },
    );
    expect(changedState.lastPageError).toEqual(true);
    changedState = transactionsList(changedState, increaseTransactionsListPage());
    expect(changedState.lastPageError).toEqual(false);
  });
});
