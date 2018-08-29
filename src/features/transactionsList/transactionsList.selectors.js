export const getCurrentTransactionsListPage = ({ transactions }) => transactions.currentPage;
export const getAllFetchedStatus = ({ transactions }) => transactions.allFetched;
export const getLastPageErrorStatus = ({ transactions }) => transactions.lastPageError;
export const getTransactionsList = ({ transactions }) => transactions.transactionsList;

export default {
  getCurrentTransactionsListPage,
  getAllFetchedStatus,
  getLastPageErrorStatus,
  getTransactionsList,
};
