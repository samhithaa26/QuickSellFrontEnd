import React from 'react';
import TicketCard from './TicketCard';

function sortTickets(tickets, sortOption) {
  if (sortOption === 'priority') {
    return [...tickets].sort((a, b) => b.priority - a.priority);
  } else if (sortOption === 'title') {
    return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
  }
  return tickets;
}

function groupTickets(tickets, groupBy) {
  return tickets.reduce((acc, ticket) => {
    const key = groupBy === 'user' ? ticket.userId : ticket[groupBy] || 'No Category';
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
}

function KanbanBoard({ tickets, users, groupBy, sortOption }) {
  const sortedTickets = sortTickets(tickets, sortOption);
  const groupedTickets = groupTickets(sortedTickets, groupBy);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group, index) => (
        <div key={index} className="kanban-column">
          <h3>{groupBy === 'user' ? users.find(user => user.id === group)?.name || group : group}</h3>
          {groupedTickets[group].map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
