

import React, { useState } from 'react';
import { View, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import TextInputWithSearch from './TextInputWithSearch';
import LocationDisplay from './LocationDisplay';
import WeatherDisplay from './WeatherDisplay';
import ForecastDisplay from './ForecastDisplay';
import { getWeatherData } from '../fun/wdata';
import { getForecastData } from '../fun/forecastdata';
import { filterForecast } from '../fun/filterforecast';
const API_KEY = 'd200832956edaca95a59aa25a27fe98b';
import One from '../../assets/ahmed.jpg';


const Home = () => {
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

  return (
    <ImageBackground source={One} style={styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
        <TextInputWithSearch city={city} setCity={setCity} onPress={getWeather} />
        {Object.keys(weather).length > 0 && forecast.length > 0 &&
          <>
            <LocationDisplay name={weather?.name} country={weather?.sys?.country} />
            <WeatherDisplay temp={weather.main.temp} weather={weather.weather[0].main} />
            <ForecastDisplay forecast={forecast} />
          </>
        }
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1
  }
});

export default Home;