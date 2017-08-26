import React, {Component} from 'react';
import {GetProfiles} from './services/profiles.service';
import HomePage from './page.home';

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
      <div id="App" className="app">  
        <HomePage profiles={profiles} />
        <button onClick={this.loadProfiles.bind(this)}>Load</button>
      </div>
    );
  }
}