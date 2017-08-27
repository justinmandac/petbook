import React, { Component } from 'react';
import {GetProfile} from './services/profiles.service';
import {Link} from 'react-router-dom';
import ProfileHeader from './component.profile.header';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    const { profileid: petId } = this.props.match.params;

    GetProfile(userId, petId).then((profile) => {
      this.setState((prevState, props) => {
        return Object.assign(prevState, { profile });
      });
    });

  }

  componentWillUnmount() {
    // Clear internal state.
    this.setState((prevState, props) => {
      return Object.assign(prevState, { profiles: {} });
    });
  }

  render() {
    const { profile = {} } = this.state;
    
    return (
      <div className="profile-page page">
        <Link to={{ pathname: '/' }}>Back</Link>Profile
        <ProfileHeader name={profile.name} />
      </div>
    );
  }
}

