import React from 'react';
import {Link} from 'react-router-dom';

export default function AppBottomBar() {
  return (
    <div className="bottom-bar">
      <ul className="itemsbottom-bar-">
        <li>
          <Link to={{ pathname: '/'}}>
            Upcoming
          </Link>
        </li>
        <li>
          <Link to={{ pathname: '/manage' }}>
            My Pets
          </Link>
        </li>
        <li>Calendar</li>
      </ul>
    </div>
  );
}