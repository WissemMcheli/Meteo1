import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const API_KEY = 'd200832956edaca95a59aa25a27fe98b';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=tunisia&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <View style={styles.container}>
      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.temperature}>{weatherData.main.temp}°C</Text>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
            }}
          />
          <Text style={styles.weatherDescription}>{weatherData.weather[0].description}</Text>
        </View>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  weatherContainer: {
    alignItems: 'center',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  weatherDescription: {
    textTransform: 'capitalize',
  },
});

export default WeatherApp;
