import React from 'react';

export default function ProfileHeader({name, typebreed}) {
  return (
    <header className="profile-header">
      <span className="profile-name">{name}</span>, 
      <span className="profile-typebreed">{typebreed}</span>
    </header>
  );
}