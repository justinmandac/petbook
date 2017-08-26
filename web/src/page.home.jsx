import React from 'react';
import ProfileItem from './component.home.profile-item';

export default function HomePage({
  profiles = [],
  clickHandler = () => {},
  profileSelected = () => {}
}) {
  const ProfileRendered = 
    profiles.map(({id, name, typebreed}) => 
      <ProfileItem
        key={id}
        id={id}
        name={name}
        typebreed={typebreed}
        onClick={profileSelected}
      />
    );

  return (
    <div className="home-page page">
      <div className="profiles-list">
        {ProfileRendered}
      </div>
      <button onClick={clickHandler}>Load</button>
    </div>
  );
};