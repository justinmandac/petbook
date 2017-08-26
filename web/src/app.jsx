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

  loadProfiles() {
    GetProfiles(0, 0).then((profiles) => {
      this.setState((prevState, props) => {
        return Object.assign(prevState, { profiles, });
      });
    });
  }

  getSelectedProfile(e) {
    console.log(e);
    GetProfile(0, e).then((selectedProfile) => {
      this.setState((prevState, props) => {
        return Object.assign(prevState, { selectedProfile, });
      });
    });
  }

  render() {
    const {profiles} = this.state;
    return (
      <Router>
        <div id="App" className="app">  
          <Route path="/"
            exact
            component={
              () => 
                <HomePage profiles={profiles}
                  clickHandler={this.loadProfiles.bind(this)}
                  profileSelected={this.getSelectedProfile.bind(this)}
                />
              }
          />
          <Route 
            path="/profile"
            component={
              () => 
               <ProfilePage />
            }
          />
        </div>
      </Router>
    );
  }
}