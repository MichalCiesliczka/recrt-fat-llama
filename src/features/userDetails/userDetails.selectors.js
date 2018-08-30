import { createSelector } from 'reselect';

export const getDataLoadingStatus = ({ userDetails }) => userDetails.isDataLoading;
export const getUsersDetailsObj = ({ userDetails }) => (
  userDetails.usersDetails);

export const selectUserById = userId => createSelector(
  getUsersDetailsObj,
  userDetailsObj => userDetailsObj[userId],
);

export default {
  getDataLoadingStatus,
  getUsersDetailsObj,
  selectUserById,
};
