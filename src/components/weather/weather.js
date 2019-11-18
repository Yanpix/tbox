import React, { Component } from 'react';
import weatherApiService from '../../services/weatherApiService';
import './weather.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
      city: '',
      temp: null,
      precipitation: '',
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      weatherApiService
        .getWeather(latitude, longitude)
        .then((data) => {
          const {
            name: city,
            main: { temp },
            weather,
          } = data;
          const { description: precipitation } = weather[0];

          this.setState({
            isLoading: false,
            city,
            temp,
            precipitation,
          });
        })
        .catch(() => this.setState({ isError: true }));
    });
  };

  setPrecipitationIcon = (precipitation) => {
    switch (precipitation) {
      case 'clear sky':
        return <img src="/images/icons/sun.svg" alt="clear sky" />;
      case 'broken clouds':
        return <img src="/images/icons/cloud-sun.svg" alt="broken clouds" />;
      case 'overcast clouds':
        return <img src="/images/icons/cloud.svg" alt="overcast clouds" />;
      default:
        return <img src="/images/icons/rain.svg" alt="rain" />;
    }
  };

  render() {
    const { isLoading, isError, city, temp, precipitation } = this.state;

    const PrecipitationIcon = this.setPrecipitationIcon(precipitation);

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <ErrorIndicator />;
    }

    return (
      <div>
        <div>
          <div>{PrecipitationIcon}</div>
          <div>{Math.round(temp)} degrees</div>
        </div>
        <div>{city}</div>
      </div>
    );
  }
}

export default Weather;
