import React, { useState } from 'react';
import { View, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import One from '../../assets/ahmed.jpg';

const Home = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  return (
    <ImageBackground source={One} style={styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
        <Search city={city} setCity={setCity} setWeather={setWeather} setForecast={setForecast} />
        <WeatherDisplay weather={weather} />
        <Forecast forecast={forecast} />
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
