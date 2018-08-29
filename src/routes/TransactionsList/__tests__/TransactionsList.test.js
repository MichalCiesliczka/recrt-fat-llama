import React from 'react';
import { shallow } from 'enzyme';

import TransactionsListRouting from '../TransactionsList';

describe('<TransactionsListRouting />', () => {
  const defaultProps = {
    transactionsListRoutine: jest.fn(),
    increaseTransactionsListPage: jest.fn(),
    currentTransactionsListPage: 0,
    lastPageError: false,
  };

  beforeEach(() => {
    const {
      transactionsListRoutine,
      increaseTransactionsListPage,
    } = defaultProps;

    transactionsListRoutine.mockClear();
    increaseTransactionsListPage.mockClear();
  });

  it('renders without crashing', () => {
    shallow(<TransactionsListRouting {...defaultProps} />);
  });

  it('should run transactions list routine on mount and update', () => {
    const component = shallow(<TransactionsListRouting {...defaultProps} />);

    expect(defaultProps.transactionsListRoutine.mock.calls.length).toEqual(1);
    expect(defaultProps.transactionsListRoutine.mock.calls[0][0]).toEqual({ pageNumber: 0 });

    const newPageNumber = { ...defaultProps, currentTransactionsListPage: 1 };
    component.setProps(newPageNumber);
    expect(defaultProps.transactionsListRoutine.mock.calls.length).toEqual(2);
    expect(defaultProps.transactionsListRoutine.mock.calls[1][0]).toEqual({ pageNumber: 1 });
  });

  it('should increase page number when lastPageError props is true. Then fetch data again', () => {
    const errorPageProps = {
      ...defaultProps,
      lastPageError: true,
    };
    shallow(<TransactionsListRouting {...errorPageProps} />);

    expect(defaultProps.increaseTransactionsListPage.mock.calls.length).toEqual(1);
  });
});
