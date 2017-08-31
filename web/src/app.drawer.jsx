import React from 'react';

export default function AppDrawer({opened = false}) { 
  return (
    <aside className={`drawer ${opened ? 'opened' : ''}`}>
      <ul>
        <li>Home</li>
        <li>My Pets</li>
        <li>Settings</li>
      </ul>  
    </aside>
  )
};