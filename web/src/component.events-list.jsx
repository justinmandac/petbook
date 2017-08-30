import React from 'react';
import EventsListItem from './component.events-list-item';

export default function EventsList({events = []}) {
  const eventItems =
    events.map((event) => 
      <EventsListItem
        key={event.id}
        title={event.title}
        profile={event.profile}
      />);
      
  return (
    <ul className="events-list">
      {eventItems}
    </ul>
  );
}