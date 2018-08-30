import {
  getDataLoadingStatus,
  getUsersDetailsObj,
  selectUserById,
} from '../userDetails.selectors';
import { initialState } from '../userDetails.reducer';

const state = {
  userDetails: initialState,
};

describe('userDetails selectors', () => {
  it('should return status if if data is loading', () => {
    expect(getDataLoadingStatus(state)).toEqual(initialState.isDataLoading);
  });

  it('should return user details object', () => {
    expect(getUsersDetailsObj(state)).toEqual(initialState.usersDetails);
  });

  const userObj = {
    name: 'John',
  };

  const updatedState = {
    userDetails: {
      ...initialState,
      usersDetails: {
        123: userObj,
      },
    },
  };

  it('should select proper user object', () => {
    expect(selectUserById(123)(updatedState)).toEqual(userObj);
  });
});
