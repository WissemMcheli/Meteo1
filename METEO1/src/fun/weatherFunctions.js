

const API_KEY = 'd200832956edaca95a59aa25a27fe98b';

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des données météorologiques");
  }
};

export const getForecastData = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    return data.list;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des prévisions météorologiques");
  }
};

export const filterForecast = (forecastList) => {
  const filteredForecast = {};
  forecastList.forEach(item => {
    const forecastDate = new Date(item.dt * 1000);
    const dayOfWeek = forecastDate.toLocaleString('en-US', { weekday: 'long' });
    if (!filteredForecast[dayOfWeek]) {
      filteredForecast[dayOfWeek] = item;
    }
  });
  return Object.entries(filteredForecast);
};
