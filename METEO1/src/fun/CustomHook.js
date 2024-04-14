import { useState } from 'react';
import { getWeatherData } from './wdata';
import { getForecastData } from './forecastdata';
import { filterForecast } from './filterforecast';

const useWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  const getWeather = async () => {
    if (!city.trim()) return;

    try {
      const weatherData = await getWeatherData(city);
      setWeather(weatherData);

      const forecastData = await getForecastData(city);
      const filteredForecast = filterForecast(forecastData);
      setForecast(filteredForecast);
    } catch (error) {
      alert(error.message);
    }
  };

  return { city, setCity, weather, forecast, getWeather };
};

export default useWeather;