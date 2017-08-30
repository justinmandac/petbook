import React from 'react';

export default function EventsListItem({
    title = '',
    profile = {},
    date}) {
    return(
    <li className="events-list-item">
        <div className="event-title">{title}</div>
        <div className="event-date">{date}</div>
        <div className="event-profile-container">
            {profile.name}
        </div>
    </li>);
}