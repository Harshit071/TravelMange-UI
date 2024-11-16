// src/components/TravelOptions.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TravelOptions.css'; // Import the CSS file


const TravelOptions = ({ from, to, date }) => {
  const [travelOptions, setTravelOptions] = useState({ flights: [], trains: [], taxis: [] });

  const fetchTravelOptions = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/travel?from=${from}&to=${to}&date=${date}`);
      setTravelOptions(response.data.data);
    } catch (error) {
      console.error('Error fetching travel options:', error);
    }
  };

  useEffect(() => {
    if (from && to && date) {
      fetchTravelOptions();
    }
  }, [from, to, date]);

  return (
    <div>
      <h3>Travel Options</h3>
      <h4>Flights</h4>
      <ul>
        {travelOptions.flights.map(flight => (
          <li key={flight.id}>
            {flight.from} to {flight.to} on {flight.date} - ${flight.price}
          </li>
        ))}
      </ul>

      <h4>Trains</h4>
      <ul>
        {travelOptions.trains.map(train => (
          <li key={train.id}>
            {train.from} to {train.to} on {train.date} - ${train.price}
          </li>
        ))}
      </ul>

      <h4>Taxis</h4>
      <ul>
        {travelOptions.taxis.map(taxi => (
          <li key={taxi.id}>
            {taxi.from} to {taxi.to} on {taxi.date} - ${taxi.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelOptions;
