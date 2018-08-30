import React from 'react';

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

import { UserDetailsTypes } from '../../features/userDetails/userDetails.api';

// TODO: Add proper styles
const UserDetailsCard = ({ user }) => {
  return (
    <Card
      style={{
        maxWidth: 600,
      }}
    >
      <CardMedia
        image={`https://api.adorable.io/avatars/200/${user.email}.png`}
        style={{
          height: 200,
          width: 200,
          margin: 'auto',
        }}
        title="User avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {user.firstName} {user.lastName}
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
};

UserDetailsCard.defaultProps = {
  user: {},
};

export default UserDetailsCard;
