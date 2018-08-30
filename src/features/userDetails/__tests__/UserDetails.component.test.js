import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UserDetails from '../components/UserDetails';

describe('UserDetails component', () => {
  const defaultProps = {
    isDataLoading: false,
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserDetails {...defaultProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('display loader with default props', () => {
    const tree = renderer
      .create(<UserDetails {...defaultProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('display loader when data is loading', () => {
    const dataLoadingProps = {
      isDataLoading: true,
    };

    const tree = renderer
      .create(<UserDetails {...dataLoadingProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('display user details card when either data is not loading and there is a user object in store', () => {
    const filledProps = {
      isDataLoading: false,
      user: {
        credit: 1000,
        email: 'asd@asd.com',
        firstName: 'John',
        lastName: 'Doe',
        profileImgUrl: 'example.com/image.jpg',
        telephone: '+48123',
      },
    };

    const tree = renderer
      .create(<UserDetails {...filledProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
