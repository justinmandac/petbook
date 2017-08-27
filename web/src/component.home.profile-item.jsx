import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileItem({
  id,
  name,
  typebreed,
  onClick = () => {}}) {
  
    return (
      <Link to={{
        pathname :"/profile/" + id
      }} replace>
        <div className="profile-item">
          {name}, {typebreed}
        </div>
      </Link>
  );
}