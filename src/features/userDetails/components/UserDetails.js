import React, { PureComponent, Fragment } from 'react';
// TODO: Add flow
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import UserDetailsCard from '../../../components/UserDetailsCard/UserDetailsCard';
import { UserDetailsTypes } from '../userDetails.api';

class UserDetailsComponent extends PureComponent {
  static propTypes = {
    user: UserDetailsTypes,
    isDataLoading: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    user: null,
  };

  render() {
    const {
      user,
      isDataLoading,
    } = this.props;

    return (
      <Fragment>
        {
          (isDataLoading || !user) ? (
            <CircularProgress />
          ) : (
            <UserDetailsCard
              user={user}
            />
          )
        }
      </Fragment>
    );
  }
}

export default UserDetailsComponent;
