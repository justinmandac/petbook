import React from 'react';

export default function ProfilePage({ profile = {} }) {
  return (
    <div className="profile-page page">
      Profile
      <header className="profile-header">
        <div className="profile-name">{profile.name}</div>
      </header>
    </div>
  );
}