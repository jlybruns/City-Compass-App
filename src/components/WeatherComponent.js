import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector

function WeatherComponent() {
    const weatherData = useSelector(state => state.weather.weatherData);

    return (
        <div>
            {weatherData ? (
                <>
                    <h2>Weather in {weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                </>
            ) : (
                <p>No weather data available.</p>
            )}
        </div>
    );
}

export default WeatherComponent;