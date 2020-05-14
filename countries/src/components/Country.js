import React from 'react'
import Weather from './Weather'

const Country = ({country}) => {
    return (
        <div>
            <h2>
                {country[0].name}
            </h2>
            <p>
                capital {country[0].capital}
                <br></br>
                population {country[0].population}
            </p>
            <h3>
                Spoken languages
            </h3>
            <ul>
                {country[0].languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country[0].flag} height='100px' alt='flag' />
            <Weather capital={country[0].capital} />
        </div>
    )
}

export default Country