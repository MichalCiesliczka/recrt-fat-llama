export const getCurrentTransactionsListPage = ({ transactions }) => transactions.currentPage;
export const getAllFetchedStatus = ({ transactions }) => transactions.allFetched;
export const getLastPageErrorStatus = ({ transactions }) => transactions.lastPageError;
export const getDataLoadingStatus = ({ transactions }) => transactions.isDataLoading;
export const getFetchedPagesNumbers = ({ transactions }) => transactions.fetchedPages;
export const getTransactionsList = ({ transactions }) => transactions.transactionsList;

export default {
  getCurrentTransactionsListPage,
  getAllFetchedStatus,
  getLastPageErrorStatus,
  getDataLoadingStatus,
  getFetchedPagesNumbers,
  getTransactionsList,
};
