import {API_KEY} from './apiKeys';

export const getWeatherData = async (city) => {
    console.log(API_KEY);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Erreur lors de la récupération des données météorologiques");
    }
  };