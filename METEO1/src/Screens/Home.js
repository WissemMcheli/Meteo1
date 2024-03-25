import React, { useState } from 'react';
import { View, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import Search  from '../Screens/Search';
import LocationDisplay from './LocationDisplay';
import WeatherDisplay from './WeatherDisplay';
import ForecastDisplay from './ForecastDisplay';
import One from '../../assets/ahmed.jpg'

const API_KEY = 'd200832956edaca95a59aa25a27fe98b';

const Home = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  const getWeather = async () => {
    if (!city.trim()) return;

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeather(data);

      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const forecastData = await forecastResponse.json();
      setForecast(filterForecast(forecastData.list));
    } catch (error) {
      alert("Erreur lors de la récupération des données météorologiques");
    }
  };

  const filterForecast = (forecastList) => {
    const filteredForecast = {};
    forecastList.forEach(item => {
      const forecastDate = new Date(item.dt * 1000);
      const dayOfWeek = forecastDate.toLocaleString('en-US', { weekday: 'long' });
      if (!filteredForecast[dayOfWeek]) {
        filteredForecast[dayOfWeek] = item;
      }
    });
    return filteredForecast;
  };

  return (
    <ImageBackground source={One} style={styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
        <Search city={city} setCity={setCity} onPress={getWeather} />
        {Object.keys(weather).length > 0 && Object.keys(forecast).length > 0 &&
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
