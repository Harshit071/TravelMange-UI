// src/components/TravelForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './TravelForm.css';

const TravelForm = ({ onAddTravel }) => {
  const [type, setType] = useState('flight');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/travel', {
        type,
        from,
        to,
        date,
        price
      });
      alert(response.data.message);
      onAddTravel(); // Refresh travel options
    } catch (error) {
      console.error('Error adding travel details:', error);
      alert('Error adding travel details');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Travel Details</h3>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="flight">Flight</option>
        <option value="train">Train</option>
        <option value="taxi">Taxi</option>
      </select>
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Travel</button>
    </form>
  );
};

export default TravelForm;
