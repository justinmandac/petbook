import React from 'react';


export default function ProfileHeader({
  name,
  typebreed,
  profilePhoto}) {
  const headerStyle = {
    display: 'flex',
    height: '120px',
    width: '100%',
    flexDirection: 'row'
  };
  const photoStyle = {
    backgroundImage: `url(${profilePhoto})`,
    backgroundSize: 'contain',
    borderRadius: '100%',
    display: 'inline-block',
    height: '100px',
    width: '100px',
    margin: 'auto 24px auto 0'
  };

  const detailsStyle = {
    margin: 'auto 0'
  };
  return (
    <header className="profile-header" style={headerStyle}>
      <div className="profile-photo" style={photoStyle}></div>
      <div className="profile-details" style={detailsStyle}>
        <span className="profile-name">{name}</span>, 
       <span className="profile-typebreed">{typebreed}</span>
      </div>
    </header>
  );
}