import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TransactionsList from './TransactionsList';
import TransactionDetails from './TransactionDetails';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/transaction/:id" component={TransactionDetails} />

      <Route component={TransactionsList} />
    </Switch>
  </Router>
);

export default Routes;
