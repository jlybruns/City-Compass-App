import axios from 'axios';

export const fetchWeatherRequest = () => ({
 type: 'FETCH_WEATHER_REQUEST'
});

export const fetchWeatherSuccess = (data) => ({
 type: 'FETCH_WEATHER_SUCCESS',
 payload: data
});

export const fetchWeatherError = (error) => ({
 type: 'FETCH_WEATHER_ERROR',
 payload: error
});

export const fetchWeatherData = (city) => {
 return async (dispatch) => {
    dispatch(fetchWeatherRequest());

    try {
      const apiKey = '4d82c00c4748de8ee1dfe08c9e000b1d'; // Your API key
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      dispatch(fetchWeatherSuccess(response.data));
    } catch (error) {
      dispatch(fetchWeatherError(error.message));
    }
  };
};
