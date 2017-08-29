import React, { Component } from 'react';
import {GetProfiles} from './services/profiles.service';
import {GetEvents} from './services/events.service';

export default class HomePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      profiles : [],
      events: [],
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    GetEvents(userId).then(events => {
      this.setState((prevState, props) => Object.assign(prevState, {
        events,
      }));
    });
  }

  render() {
    const { profiles = [] } = this.state;
    
    return (
      <div className="home-page page">
      </div>
    );    
  }
}
