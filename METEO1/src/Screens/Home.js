import React from 'react';
import { View, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import TextInputWithSearch from './TextInputWithSearch';
import LocationDisplay from './LocationDisplay';
import WeatherDisplay from './WeatherDisplay';
import ForecastDisplay from './ForecastDisplay';
import useWeather from '../fun/CustomHook';
import One from '../../assets/ahmed.jpg';

const Home = () => {
  const { city, setCity, weather, forecast, getWeather } = useWeather();

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