import React, {Component} from 'react';

import AppHeader from './app.header';
import AppBottomBar from './app.bottom-bar';
import AppDrawer from './app.drawer';
import HomePage from './page.home';
import ProfilePage from './page.profile';
import ManagePetsPage from './page.manage-pets';

import { HashRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarVisible: false,
    };
  }

  onTriggerClicked() {
    console.log(this.state);
    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        sidebarVisible: !prevState.sidebarVisible,
      })
    });
  }

  render() {
    const {userId} = this.props;

    return (
      <Router>
        <div id="App" className="app">
          <AppHeader
            opened={this.state.sidebarVisible}
            onTriggerClicked={this.onTriggerClicked.bind(this)}
          />
          <AppDrawer opened={this.state.sidebarVisible} />
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
           <AppBottomBar />
        </div>
      </Router>
    );
  }
}