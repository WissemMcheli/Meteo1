import React,{ useEffect, useState} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from "expo-location" 
import axios from "axios"

const API_URL = (lat, lon) =>  `Https://api.openweathermap.org/data/2.5/forecast?lat=${lat}& lon=${lon}&appid=d200832956edaca95a59aa25a27fe98b&lang=fr&units=metric`

export default function App() {
  const [loading, setLocation] = useState(null)

  useEffesct(() => {
    const getCoordinates = async () => {
     const { status} = await Location.requestForegroundPermissionsAsync()
     if (status !== "granted"){
      return
     }
     const userLocation = await Location.getCurrentPositionAsync()
     getWeather(userLocation)
    }
    getCoordinates()
  }, [])
    const getWeather = async (location ) => {
      try {
        const response = await axios.get(API_URL(location.coords.latitude, location.coords. longitude))
      }catch(e) {
        response.data
        setLoading(false)
        console.log(" Erreur dans getWeather ")
      }
      
    }

  if (loading){
    return <View style={styles.container}>
      
    </View>
  }
        
  return (
    <View style={styles.container}>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'centre',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
