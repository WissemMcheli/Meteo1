import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForecastDisplay = ({ forecast }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prévisions pour les prochains jours :</Text>
      {forecast.map((item, index) => (
        <View key={index} style={styles.forecastItem}>
          <Text style={styles.day}>{item[0]}</Text>
          <Text style={styles.temp}>{item[1].main.temp} °C</Text>
          <Text style={styles.weather}>{item[1].weather[0].description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  forecastItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  day: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '500',
    textAlign: 'center',
  },
  temp: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '400',
    textAlign: 'center',
  },
  weather: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default ForecastDisplay;