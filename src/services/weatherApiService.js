const API_KEY = 'd0a10211ea3d36b0a6423a104782130e';

class WeatherApiService {
  getWeather = (lat, lon) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then((resp) => resp.json());
  };
}

export default new WeatherApiService();
