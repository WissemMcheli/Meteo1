import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherDisplay = ({ temp, weather }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>
        {temp} °C
      </Text>
      <Text style={styles.weather}>{weather}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  temp: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 100,
    fontWeight: "800",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    overflow: "hidden",
    marginTop: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10,
  },
  weather: {
    color: "#FFF",
    fontSize: 48,
    fontWeight: "700",
    shadowColor: "#000000",
    shadowOffset: {
      width: -1,
      height: 3,
    },
    shadowOpacity: 0.7,
  },
});

export default WeatherDisplay;
