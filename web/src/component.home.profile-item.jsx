import React from 'react';

export default function ProfileItem({
  id,
  name,
  typebreed,
  onClick = () => {}}) {
  
    return (
    <div className="profile-item" onClick={() => {
        onClick(id);
      }}>
      {name}, {typebreed}
    </div>
  );
}