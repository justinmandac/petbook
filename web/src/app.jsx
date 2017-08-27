import React, {Component} from 'react';
import {GetProfiles, GetProfile} from './services/profiles.service';
import HomePage from './page.home';
import ProfilePage from './page.profile';
import { HashRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: 0,
      profiles: [], 
      selectedProfile: undefined,
    };
  }

  getSelectedProfile(e) {
    GetProfile(0, e).then((selectedProfile) => {
      this.setState((prevState, props) => {
        return Object.assign(prevState, { selectedProfile, });
      });
    });
  }

  render() {
    const {userId} = this.props;

    console.log(`UserID is ${userId}`);

    return (
      <Router>
        <div id="App" className="app">  
          <Route path="/"
            exact
            component={
              () => 
                <HomePage userId={userId}/>
              }
          />
          <Route 
            path="/profile/:profileid"
            render={(props) => <ProfilePage {...props} userId={userId} />}
           />
        </div>
      </Router>
    );
  }
}