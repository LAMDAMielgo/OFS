import { 
    useEffect, 
    useState,
    useMemo,
    useCallback
} from 'react'

import {
    Subheader,
    ShowCountriesList,
    ShowCountryContent
} from './components/Components'

import { FilterForm } from './components/FilterForm'
import countriesService from './services/Countries'



const App = () => {

    // country is all the informatiom about a country (when foundCountries == 1)
    // foundCountries is a list of possible countries to show
    // searchCountries is what the user writes in the input
    const [countries, setCountries] = useState([]) 
    const [searchCountry, setSearchCountry] = useState("")


    // Filtering phonebook
    const handleFilterFormOnChange = (event) => {
        setSearchCountry(event.target.value)
    }

    const filteredCountries = countries.filter(
        country => country.name.common
            .toLowerCase()
            .includes(searchCountry.toLowerCase())
    )
    
    useEffect(
        () => {
            countriesService
                .getAllNames(filteredCountries)
                .then(availableCountries => setCountries(availableCountries))
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
                    <ShowCountriesList countries = {filteredCountries} />
                    :
                    <ShowCountryContent country = {filteredCountries[0]} />
            }
        </div>
    )
}

export default App