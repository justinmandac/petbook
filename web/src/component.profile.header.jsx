import React from 'react';

export default function ProfileHeader({name}) {
  return (
    <header className="profile-header">
      <div className="profile-name">{name}</div>
    </header>
  );
}