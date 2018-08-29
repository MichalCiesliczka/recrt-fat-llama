import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TransactionsList from './TransactionsList';
// import TransactionDetails from '../../Details'

const Routes = () => (
  <Router>
    <Switch>
      {/* <Route path="/transaction/:id" component={TransactionDetails} /> */}
      {/* <Route path="/user/:id" component={UserDetails} /> */}

      <Route component={TransactionsList} />
    </Switch>
  </Router>
);

export default Routes;
