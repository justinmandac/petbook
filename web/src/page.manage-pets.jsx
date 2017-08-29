import React, {Component} from 'react';
import {GetProfiles} from './services/profiles.service';
import ProfileListItem from './component.profile-list-item';

export default class ManagePetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      page: 0,
    };
  }

  componentDidMount() {
    console.log('Loading[ManagePage]');
    const {userId} = this.props;

    GetProfiles(userId).then((profiles) => {
      this.setState((prevState, props) => {
        return Object.assign(prevState, { profiles });
      });
    });
  }

  componentWillUnmount() {
    // Restore to initial state.
    this.setState((prevState, props) => Object.assign(prevState, {
      profiles: [],
      page: 0,
    }));
  }

  render() {
    const {userId} = this.props;
    const {profiles} = this.state;
    const profilesList = profiles.map((profile) => {
      return (<ProfileListItem 
                key={profile.id}
                id={profile.id}
                name={profile.name} />);
    });
    return (
      <section id="managePetsPage" className="page manage-page">
        My Pets
        {profilesList}
      </section>
    );
  }
}