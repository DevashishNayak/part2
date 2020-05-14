import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'

const App = () => {
    const [filter, setFilter] = useState('all')
    const [countries, setCountries] = useState([])

    const handleShow = (name) => {
        setCountries(countries.filter(country => country.name === name))
    }

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    const hook = () => {
        axios
          .get(`https://restcountries.eu/rest/v2/name/${filter}`)
          .then(response => {
            setCountries(response.data)
        })
    }

    useEffect(hook, [filter])

    return (
        <div>
            find countries <input value={filter} onChange={handleFilter} />
            <Display countries={countries} handleShow={handleShow} />
        </div>
    )
}

export default App