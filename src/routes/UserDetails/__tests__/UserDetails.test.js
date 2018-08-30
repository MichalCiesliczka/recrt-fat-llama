import React from 'react';
import { shallow } from 'enzyme';

import UserDetailsRouting from '../UserDetails';

describe('<UserDetailsRouting />', () => {
  const defaultProps = {
    userDetailsRoutine: jest.fn(),
    userId: 123,
  };

  beforeEach(() => {
    const {
      userDetailsRoutine,
    } = defaultProps;

    userDetailsRoutine.mockClear();
  });

  it('renders without crashing', () => {
    shallow(<UserDetailsRouting {...defaultProps} />);
  });

  it('should run transactions list routine on mount', () => {
    shallow(<UserDetailsRouting {...defaultProps} />);

    expect(defaultProps.userDetailsRoutine.mock.calls.length).toEqual(1);
    expect(defaultProps.userDetailsRoutine.mock.calls[0][0]).toEqual(123);
  });
});
