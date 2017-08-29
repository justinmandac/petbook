import React, { Component } from 'react';
import {GetProfile} from './services/profiles.service';
import {GetPetEvents} from './services/events.service';
import {Link} from 'react-router-dom';
import ProfileHeader from './component.profile.header';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      events: [],
      photo: '',
    };
  }

  /**
   * Place page-specific initialization calls here. Note that componentDidMount
   * will be called multiple times when the Route changes. 
   */
  componentDidMount() {
    const { userId } = this.props;
    const { profileid: petId } = this.props.match.params;

    GetProfile(userId, petId).then((profile) => {
      this.setState((prevState, props) => {
        return Object.assign(prevState, { profile });
      });
    });
    
    GetPetEvents(petId, new Date(), new Date()).then((events) => {
      console.log(events);
      this.setState((prevState, props) => {
        return Object.assign(prevState, { events });
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
    const { profile = {}, events = [], photo = '' } = this.state;
    const eventsRendered = events.map((event) => {
      return (
        <div className="event-item" key={event.id}>
          {event.title}
        </div>
      );
    });

    return (
      <div className="profile-page page">
        <Link to={{ pathname: '/' }}>Back</Link>Profile
        <ProfileHeader
          name={profile.name}
          typebreed={profile.typebreed}
          profilePhoto={profile.profilePhoto}
        />
        <div className="profile-details">
          <div className="row">
            Birthday: {profile.birthday}
          </div>
        </div>
        <button>Add New Event</button>
        <div className="events-list">
          {eventsRendered}
        </div>
      </div>
    );
  }
}

