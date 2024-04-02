import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from './weatherAction'; // Adjust the import path as necessary

function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(fetchWeatherData(searchTerm));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a city"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchComponent;
