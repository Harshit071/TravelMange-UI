// src/App.js
import React, { useState } from 'react';
import TravelForm from './components/TravelForm';
import TravelOptions from './components/TravelOptions';

function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleAddTravel = () => {
    // Reset the form inputs or handle other actions after adding travel
    setFrom('');
    setTo('');
    setDate('');
  };

  return (
    <div className="App">
      <h1>Travel Management System</h1>
      <TravelForm onAddTravel={handleAddTravel} />
      <div>
        <h3>Search Travel Options</h3>
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      {from && to && date && <TravelOptions from={from} to={to} date={date} />}
    </div>
  );
}

export default App;
