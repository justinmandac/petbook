import React from 'react';
import ProfileItem from './component.home.profile-item';

const ProfileList = ({ profiles = [], profileSelected = () => {}}) => {
  const ProfileRendered = 
      profiles.map(({id, name, typebreed}) => 
        <ProfileItem
          key={id}
          id={id}
          name={name}
          typebreed={typebreed}
        />
      );

  return (
    <div className="profiles-list">
        {ProfileRendered}
    </div>
  );
};


export default ProfileList;