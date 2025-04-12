import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="weather-card">
      <h1>{data.city}</h1>
      <h2>{data.condition}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="weather icon" />
      <p>Temperature: {data.temperature}°C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
