import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TransactionsList from '../../List'
import TransactionDetails from '../../Details'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/transaction/:id" component={TransactionDetails} />
            {/* <Route path="/user/:id" component={UserDetails} /> */}

            <Route component={TransactionsList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
