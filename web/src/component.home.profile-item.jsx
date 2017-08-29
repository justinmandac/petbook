import React from 'react';
import { Link } from 'react-router-dom';

export const ProfileItemStyles = {
  display: 'flex',
  height: '72px',
  width: '100%',
};

export default function ProfileItem({
  id,
  name,
  typebreed
}) {
  
    return (
      <Link to={{
        pathname :"/profile/" + id
      }} replace>
        <div className="profile-item" style={ProfileItemStyles}>
          {name}, {typebreed}
        </div>
      </Link>
  );
}