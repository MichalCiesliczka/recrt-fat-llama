import { createSelector } from 'reselect';

export const getDataLoadingStatus = ({ transactionDetails }) => transactionDetails.isDataLoading;
export const getTransactionDetailsObj = ({ transactionDetails }) => transactionDetails.transactionDetails;

export const selectTransactionById = transactionId => createSelector(
  getTransactionDetailsObj,
  transactionDetailsObj => transactionDetailsObj[transactionId],
);

export default {
  getDataLoadingStatus,
  getTransactionDetailsObj,
  selectTransactionById,
};
