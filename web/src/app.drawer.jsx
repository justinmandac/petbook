import React from 'react';

export default function AppDrawer({opened = false}) { 
  return (
    <aside className={`drawer ${opened ? 'opened' : ''}`}>
      <ul>
        <li>
          Profile
        </li>
        <li>
          Log Out
        </li>
      </ul>  
    </aside>
  )
};