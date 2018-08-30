import PropTypes from 'prop-types';
import { fetchGetMethod } from '../../utilities/api';

export const fetchUserDetails = id => (
  fetchGetMethod(`user/${id}`)
    .catch((err) => {
      throw err;
    })
);

export const UserDetailsTypes = PropTypes.shape({
  credit: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  profileImgUrl: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
});

export default fetchUserDetails;
