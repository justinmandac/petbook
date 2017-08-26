import React from 'react';
import ProfileItem from './component.home.profile-item';

export default function HomePage({profiles = [], clickHandler = () => {}}) {
  const ProfileRendered = 
    profiles.map(({name, typebreed}, key) => 
      <ProfileItem key={key} name={name} typebreed={typebreed} />
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