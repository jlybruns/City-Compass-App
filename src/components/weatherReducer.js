// weatherAction.js
const initialState = {
  weatherData: null,
  loading: false,
  error: null
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        weatherData: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_WEATHER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default weatherReducer;