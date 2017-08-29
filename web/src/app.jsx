import React, {Component} from 'react';

import AppHeader from './app.header';

import HomePage from './page.home';
import ProfilePage from './page.profile';
import ManagePetsPage from './page.manage-pets';

import { HashRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    const {userId} = this.props;

    return (
      <Router>
        <div id="App" className="app">
          <AppHeader />
          <Route path="/"
            exact
            component={() => <HomePage userId={userId}/>}
          />
          <Route 
            path="/profile/:profileid"
            render={(props) => <ProfilePage {...props} userId={userId} />}
           />
          <Route 
            path="/manage"
            render={(props) => <ManagePetsPage {...props} userId={userId} />}
           />
        </div>
      </Router>
    );
  }
}