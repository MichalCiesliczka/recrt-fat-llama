import React from 'react';
import { shallow } from 'enzyme';

import TransactionsDetailsRouting from '../TransactionDetails';

describe('<TransactionsDetailsRouting />', () => {
  const defaultProps = {
    transactionDetailsRoutine: jest.fn(),
    transactionId: '123',
  };

  beforeEach(() => {
    const {
      transactionDetailsRoutine,
    } = defaultProps;

    transactionDetailsRoutine.mockClear();
  });

  it('renders without crashing', () => {
    shallow(<TransactionsDetailsRouting {...defaultProps} />);
  });

  it('should run transactions list routine on mount', () => {
    shallow(<TransactionsDetailsRouting {...defaultProps} />);

    expect(defaultProps.transactionDetailsRoutine.mock.calls.length).toEqual(1);
    expect(defaultProps.transactionDetailsRoutine.mock.calls[0][0]).toEqual('123');
  });
});
