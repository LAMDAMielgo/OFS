import { useState } from 'react'


const Subheader = ({ text }) => {
    return <h2 className='h2'>{text}</h2>
}

const ShowCountriesList = ({ countries, onClick }) => {
    return (
        <table><tbody> {
            countries.map(
                (line, id) => (
                    <tr key={id}>
                        <th>{line.name.common}</th>
                        <th><button
                            id={id}
                            name={line.name.common}
                            onClick={onClick}>
                            add
                        </button></th>
                    </tr>
                )
            )}
        </tbody></table>
    )
}


const CountryContent = ({ country }) => {
    return (
        <div>
            <table><tbody>
                <tr><th>capital</th><th>{country.capital[0]}</th></tr>
                <tr><th>area</th><th>{country.area}</th></tr>
            </tbody></table>
            <p>languages : </p>
            <ul>{
                Object.values(country.languages).map(
                    (l, i) => <li key={i}>{l}</li>
                )
            }</ul>
            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
    )
}




const WeatherContent = ({ weather }) => {

    // the weather source used doesn't have icons but weather code is standard
    const WMOCode = (weathercode) => {
        if (weathercode === 0) { return 'clear sky' }
        else if (weathercode <= 3) { return 'few clouds' }
        else if (weathercode <= 9) { return 'haze or dust' }
        else if (weathercode <= 10) { return 'scattered clouds' }
        else if (weathercode <= 13) { return 'broken clouds' }
        else if (weathercode <= 19) { return 'shower rain' }
        else if (weathercode <= 29) { return 'rain' }
        else if (weathercode <= 35) { return 'thunderstorm' }
        else if (weathercode <= 39) { return 'snow' }
        else if (weathercode <= 49) { return 'mist' }
        else if (weathercode <= 59) { return 'shower rain' }
        else if (weathercode <= 79) { return 'rain' }
        else if (weathercode <= 99) { return 'snow' }
    }


    const icons = {
        'day': {
            'clear sky': 'https://openweathermap.org/img/wn/01d@2x.png',
            'few clouds': 'https://openweathermap.org/img/wn/02d@2x.png',
            'scattered clouds': 'https://openweathermap.org/img/wn/03d@2x.png',
            'broken clouds': 'https://openweathermap.org/img/wn/04d@2x.png',
            'shower rain': 'https://openweathermap.org/img/wn/09d@2x.png',
            'rain': 'https://openweathermap.org/img/wn/10d@2x.png',
            'thunderstorm': 'https://openweathermap.org/img/wn/11d@2x.png',
            'snow': 'https://openweathermap.org/img/wn/13d@2x.png',
            'mist': 'https://openweathermap.org/img/wn/50d@2x.png'
        },
        'night': {
            'clear sky': 'http://openweathermap.org/img/wn/01n@2x.png',
            'few clouds': 'http://openweathermap.org/img/wn/02n@2x.png',
            'scattered clouds': 'http://openweathermap.org/img/wn/03n@2x.png',
            'broken clouds': 'http://openweathermap.org/img/wn/04n@2x.png',
            'shower rain': 'http://openweathermap.org/img/wn/09n@2x.png',
            'rain': 'http://openweathermap.org/img/wn/10n@2x.png',
            'thunderstorm': 'http://openweathermap.org/img/wn/11n@2x.png',
            'snow': 'http://openweathermap.org/img/wn/13n@2x.png',
            'mist': 'http://openweathermap.org/img/wn/50n@2x.png'
        }
    }
    const cDate = new Date();
    const getIsDay = () => {
        if (weather.is_day.at(currentHour) === 1) { return 'day' } else { return 'night' }
    }

    let currentHour = cDate.getHours()
    let currentSun = getIsDay()
    let currentWMO = WMOCode(weather.weathercode.at(currentHour))

    return (
        <div>
            <table><tbody>
                <tr>
                    <th>temperature</th>
                    <th>{weather.temperature_2m[currentHour]}</th>
                    <th>degrees Celcius</th>
                </tr>
                <tr>
                    <th>wind</th>
                    <th>{weather.windspeed_10m[currentHour]}</th>
                    <th>meters per second</th>
                </tr>
                <tr>
                    <th>weather</th>
                    <th><img
                        src={icons[currentSun][currentWMO]}
                        alt={currentWMO}
                    />
                    </th>
                    <th>{currentWMO}</th>
                </tr>
            </tbody></table>
        </div>
    )
}


const ShowCountryContent = ({ country, weather }) => {

    return (
        <div>
            <Subheader text={country.name.common} />
            <CountryContent country={country} />
        </div>
    )
}


const ShowWeatherContent = ({ capital, weather }) => {

    return (
        <div>
            <Subheader text={capital} />
            <WeatherContent weather={weather} />
        </div>
    )
}



export {
    Subheader,
    ShowCountriesList,
    ShowCountryContent,
    ShowWeatherContent
}