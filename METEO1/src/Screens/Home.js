import React, { useState } from 'react';
import { View, ImageBackground, SafeAreaView, TextInput, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import One from '../../assets/ahmed.jpg';

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
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={city}
            placeholder="Nom de la ville"
            onChangeText={(text) => setCity(text)}
          />
          <AntDesign name="search1" size={24} color="black" onPress={getWeather} />
        </View>
        {Object.keys(weather).length > 0 && Object.keys(forecast).length > 0 ?
          <>
            <View style={styles.locationContainer}>
              <Text style={styles.location}>
                {weather?.name} , {weather?.sys?.country}
              </Text>
            </View>
            <View style={styles.weatherContainer}>
              <Text style={styles.temp}>
                {weather.main.temp} °C
              </Text>
              <Text style={styles.weather}>{weather.weather[0].main}</Text>
            </View>
            <View style={styles.forecastContainer}>
              <Text style={styles.forecastTitle}>Prévisions pour les prochains jours :</Text>
              {Object.keys(forecast).map((dayOfWeek, index) => (
                <View key={index} style={styles.forecastItem}>
                  <Text style={styles.forecastDay}>{dayOfWeek}</Text>
                  <Text style={styles.forecastTemp}>{forecast[dayOfWeek].main.temp} °C</Text>
                  <Text style={styles.forecastWeather}>{forecast[dayOfWeek].weather[0].main}</Text>
                </View>
              ))}
            </View>
          </>
          : null}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  textInputContainer: {
    backgroundColor: "rgba(255,255,255,0.7)",
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "79%",
    justifyContent: 'space-between'
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginRight: 10,
    color: 'black',
    fontWeight: '600',
  },
  locationContainer: {
    marginVertical: 15
  },
  location: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "500",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.55)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  weatherContainer: {
    alignItems: 'center'
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
    textShadowOffset: { with: -3, height: 3 },
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
  forecastContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  forecastTitle: {
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
  forecastDay: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '500',
    textAlign: 'center',
  },
  forecastTemp: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '400',
    textAlign: 'center',
  },
  forecastWeather: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '400',
    textAlign: 'center',
  },
});
