const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    console.log("City:", city);
console.log("API Key:", apiKey);
console.log("URL:", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);

    const { temp } = response.data.main;
    const { description, icon } = response.data.weather[0];
    const { humidity } = response.data.main;
    const { speed } = response.data.wind;

    res.json({
      temperature: temp,
      condition: description,
      icon,
      humidity,
      windSpeed: speed,
    });
  } catch (error) {
    console.error("Axios error:", error.response?.data || error.message);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

module.exports = router;
