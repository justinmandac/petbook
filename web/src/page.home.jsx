import React, { Component } from 'react';
import ProfileList from './component.home.profile-list';
import {GetProfiles} from './services/profiles.service';

export default class HomePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      profiles : [],
    };
  }

  componentDidMount() {
    const { userId } = this.props;

    GetProfiles(userId).then((profiles) => {
      this.setState((prevState, props) => {
        return Object.assign(prevState, { profiles });
      });
    });
  }

  render() {
    const { profiles = [] } = this.state;
    
    return (
      <div className="home-page page">
        <ProfileList profiles={profiles}  />
      </div>
    );    
  }
}
