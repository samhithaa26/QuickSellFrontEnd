import React from 'react';
import PriorityIcon from './PriorityIcon';

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <PriorityIcon priorityLevel={ticket.priority} />
      <h4>{ticket.title}</h4>
      <p>{ticket.tag.join(', ')}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
}

export default TicketCard;
