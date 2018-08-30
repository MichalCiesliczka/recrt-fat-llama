import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import TransactionDetails from '../components/TransactionDetails';

describe('TransactionDetails component', () => {
  const defaultProps = {
    isDataLoading: false,
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TransactionDetails {...defaultProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('display loader with default props', () => {
    const tree = renderer
      .create(<TransactionDetails {...defaultProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('display loader when data is loading', () => {
    const dataLoadingProps = {
      isDataLoading: true,
    };

    const tree = renderer
      .create(<TransactionDetails {...dataLoadingProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
