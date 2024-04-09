import {API_KEY} from '@env'
export const getForecastData = async (city) => {
    console.log(API_KEY);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      return data.list;
    } catch (error) {
      throw new Error("Erreur lors de la récupération des prévisions météorologiques");
    }
  };
  