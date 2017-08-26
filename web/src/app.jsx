import React, {Component} from 'react';
import {GetProfiles} from './services/profiles.service';
import HomePage from './page.home';
import ProfilePage from './page.profile';
import { HashRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: 0,
      profiles: [], 
    };
  }

  loadProfiles() {
    GetProfiles(0, 0).then((profiles) => {
      this.setState((prevState, props) => {
        return Object.assign(prevState, { profiles, });
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