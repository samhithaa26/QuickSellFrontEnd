import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortOption, setSortOption] = useState(localStorage.getItem('sortOption') || 'priority');
  const [displayMenuOpen, setDisplayMenuOpen] = useState(false);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch(error => console.error('Error fetching tickets:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortOption', sortOption);
  }, [groupBy, sortOption]);

  const toggleDisplayMenu = () => {
    setDisplayMenuOpen(!displayMenuOpen);
  };

  return (
    <div className="App">
      <header>
        <button 
          onClick={toggleDisplayMenu} 
          className={`display-button ${displayMenuOpen ? 'active' : ''}`}
        >
          Display Options
        </button>
        
        {displayMenuOpen && (
          <div className="display-menu">
            <label>Group By:</label>
            <select 
              value={groupBy} 
              onChange={(e) => setGroupBy(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>

            <label>Sort By:</label>
            <select 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        )}
      </header>
      
      <KanbanBoard 
        tickets={tickets} 
        users={users} 
        groupBy={groupBy} 
        sortOption={sortOption} 
      />
    </div>
  );
}

export default App;
