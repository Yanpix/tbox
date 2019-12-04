import { WEATHER_API_KEY } from '../utils/constants';

class WeatherApiService {
  getWeather = (lat, lon) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    ).then((resp) => resp.json());
  };
}

export default new WeatherApiService();
