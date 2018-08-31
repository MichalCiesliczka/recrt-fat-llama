import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/AlternateEmail';

import { UserDetailsTypes } from '../userDetails.api';
import { prepareUserName } from '../../../utilities/string';

const styles = {
  card: {
    width: 450,
  },
  media: {
    height: 200,
    width: 200,
    margin: 'auto',
  },
};

const UserDetailsCard = ({ user, classes }) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        // NOTE: Temporary avatar as the one from API is not working.
        image={`https://api.adorable.io/avatars/200/${user.email}.png`}
        className={classes.media}
        title="User avatar"
      />
      <CardContent>
        <Typography gutterBottom component="h4">
          {prepareUserName(user.firstName, user.lastName)}
        </Typography>
        <List>
          <ListItem>
            <Avatar>
              <AttachMoneyIcon />
            </Avatar>
            <ListItemText primary="Credits" secondary={user.credit} />
          </ListItem>
          <ListItem>
            <Avatar>
              <PhoneIcon />
            </Avatar>
            <ListItemText primary="Phone number" secondary={user.telephone} />
          </ListItem>
          <ListItem>
            <Avatar>
              <EmailIcon />
            </Avatar>
            <ListItemText primary="Email address" secondary={user.email} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

UserDetailsCard.propTypes = {
  user: UserDetailsTypes,
  /* eslint-disable */
  classes: PropTypes.object.isRequired,
  /* eslint-enable */
};

UserDetailsCard.defaultProps = {
  user: {},
};

export default withStyles(styles)(UserDetailsCard);
