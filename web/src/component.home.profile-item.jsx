import React from 'react';

export default function ProfileItem({name, typebreed}) {
  return (
    <div className="profile-item">{name}, {typebreed}</div>
  );
}