import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/trains');
        setTrains(response.data);
        console.log("response", response);
      } catch (error) {
        console.error('Error fetching train schedules:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Train Schedules</h1>
      <table>
        <thead>
          <tr>
            <th>Train ID</th>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Seats Available (Sleeper)</th>
            <th>Seats Available (AC)</th>
            <th>Price (Sleeper)</th>
            <th>Price (AC)</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.train_id}>
              <td>{train.train_id}</td>
              <td>{train.train_name}</td>
              <td>{train.departure_time}</td>
              <td>{train.seats_available_sleeper}</td>
              <td>{train.seats_available_ac}</td>
              <td>{train.price_sleeper}</td>
              <td>{train.price_ac}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainSchedule;
