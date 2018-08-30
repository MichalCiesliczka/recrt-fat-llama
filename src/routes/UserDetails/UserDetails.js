import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import UserDetailsContainer from '../../features/userDetails';

class UserDetails extends PureComponent {
  componentDidMount() {
    this.fetchTransactionDetails();
  }

  fetchTransactionDetails = () => {
    const {
      userDetailsRoutine,
      userId,
    } = this.props;

    userDetailsRoutine(userId);
  }

  render() {
    const { userId } = this.props;
    return (
      <div>
        <UserDetailsContainer userId={userId} />
      </div>
    );
  }
}

UserDetails.propTypes = {
  userDetailsRoutine: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default UserDetails;
