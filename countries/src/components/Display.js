import React from 'react'
import Country from './Country'
import Countries from './Countries'

const Display = ({countries, handleShow}) => {
    if(countries.length>10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if(countries.length===1) {
        return (
            <div>
                <Country country={countries} />
            </div>
        )
    }
    else {
        return (
            <div>
                {countries.map(country => <Countries key={country.name} name={country.name} handleShow={handleShow} />)}
            </div>
        )
    }
}

export default Display