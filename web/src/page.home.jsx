import React from 'react';
import ProfileItem from './component.home.profile-item';

export default function HomePage({profiles = []}) {
  const ProfileRendered = 
    profiles.map(({name, typebreed}, key) => 
      <ProfileItem key={key} name={name} typebreed={typebreed} />
    );

  return (
    <div className="home-page page">
      {ProfileRendered}
    </div>
  );
};