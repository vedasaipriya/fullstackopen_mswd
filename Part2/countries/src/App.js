import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Contents'
import Filter from './components/FilterFunc'

const App = () => {
  const [countries, fixCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [FilterNew, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('got the data')
        setAllCountries(response.data)
      })
  }, [])

  const handleChangeOfFilter = (event) => {
    setFilter(event.target.value)
    if (FilterNew) {
      const regex = new RegExp( FilterNew, 'i' );
      const filteredCountries = () => allCountries.filter(country => country.name.match(regex))
      fixCountries(filteredCountries)
    }
  }

  return (
    <div>
      <Filter value={FilterNew} onChange={handleChangeOfFilter} />
      <Content countries={countries} fixCountries={fixCountries} />
    </div>
  )
}

export default App