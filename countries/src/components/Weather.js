import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({capital}) => {
    const [weather, setWeather] = useState([])
    const api_key = '80a5c9ffb7dd8a428ae82a37d5289904'

    const hookWeather = () => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
        .then(response => {
            const apiResponse = response.data
            setWeather(apiResponse.current)
            
        })
    }

    useEffect(hookWeather, [capital])

    return (
        <div>
            <h3>
                Weather in {capital}
            </h3>
            <p>
                <b>temperature: </b>
                {weather.temperature} Celcius
                <br></br>
                <img src={weather.weather_icons} alt='weather_icons' height='100px' />
                <br></br>
                <b>wind: </b>
                {weather.wind_speed} mph direction {weather.wind_dir}
            </p>
        </div>
    )
}

export default Weather