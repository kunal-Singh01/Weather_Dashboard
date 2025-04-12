import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather({city, ...response.data});
    } catch (err) {
      console.log(err);
      
      setError('City not found or server error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <WeatherCard data={weather} />
    </div>
  );
};

export default App;
