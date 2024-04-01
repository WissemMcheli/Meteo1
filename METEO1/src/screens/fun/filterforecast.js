
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