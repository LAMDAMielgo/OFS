import { 
    useEffect, 
    useState,
    useMemo,
    useCallback
} from 'react'

import {
    Subheader,
    ShowCountriesList,
    ShowCountryContent,
    ShowWeatherContent
} from './components/Components'

import { FilterForm } from './components/FilterForm'
import countriesService from './services/Countries'
import weatherService from './services/Weather'



const App = () => {

    // country is all the informatiom about a country (when foundCountries == 1)
    // foundCountries is a list of possible countries to show
    // searchCountries is what the user writes in the input
    const [countries, setCountries] = useState([]) 
    const [searchCountry, setSearchCountry] = useState("")
    const [weather, setWeather] = useState(null)


    // Filtering phonebook
    const handleFilterFormOnChange = (event) => {
        setSearchCountry(event.target.value)
    }

    const filteredCountries =countries.filter(
        country => country.name.common
            .toLowerCase()
            .includes(searchCountry.toLowerCase())
    )
    
    const ViewCountry = (event) => {
        setSearchCountry(event.target.name)
    }

    useEffect(
        () => {
            countriesService
                .getAllNames(filteredCountries)
                .then(availableCountries => setCountries(availableCountries))
        }, [filteredCountries]
    )

    useEffect (
        () => {
            if (filteredCountries.length === 1) {
                weatherService
                .getWeatherData(filteredCountries[0])
                .then(weatherData => setWeather(weatherData))
            }
        }, [filteredCountries]
    )

    return (
        <div>
            <Subheader text={'Country search app'} />
            <FilterForm 
                onChange = {handleFilterFormOnChange}
                filter = {searchCountry}
            />
            {
                filteredCountries.length >= 10 ?
                    <p>Too many matches, specify another filter</p>
                :
                filteredCountries.length != 1 ?
                    <ShowCountriesList 
                        countries = {filteredCountries}
                        onClick={ViewCountry}
                    />
                    : 
                    <ShowCountryContent 
                        country = {filteredCountries[0]} 
                    />
            }
            { weather === null ? 
                null : <ShowWeatherContent 
                    capital = {filteredCountries[0].capital[0]}
                    weather = {weather}
                />
            }
        </div>
    )
}

export default App