import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({countries}) => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: countries.capital
    }

    axios.get('http://api.weatherstack.com/current', {params})
      .then(response => {
        const apiResponse = response.data;
        console.log(apiResponse)
        console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
        setWeather([apiResponse])
      }).catch(error => {
        console.log(error);
    })
  })

  if (weather.length > 0) {
    const currentWeather = weather[0].current
    return (
      <div>
        <h1>{countries.name}</h1>
        <p>capital: {countries.capital}</p>
        <p>population: {countries.population}</p>
        <h2>Spoken languages</h2>
        <ul>
          {countries.languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={countries.flag} alt="Countries flag"></img>
        <h2>Weather in {countries.capital}</h2>
        <p>temperature: {currentWeather.temperature}° Celcius</p>
        <img src={currentWeather.weather_icons[0]} alt="Weather icon"></img>
        <p>wind: {currentWeather.wind_speed} mph direction {currentWeather.wind_dir}</p>
      </div>
    )
  }

  return (
    <div>
      <h1>{countries.name}</h1>
      <p>capital: {countries.capital}</p>
      <p>population: {countries.population}</p>
      <h2>Spoken languages</h2>
      <ul>
        {countries.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={countries.flag} alt="Countries flag"></img>
    </div>
  )
}

export default Countries