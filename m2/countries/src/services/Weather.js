import axios from 'axios'

const baseUrl = 'https://api.open-meteo.com/v1/forecast?'

//https://api.open-meteo.com/v1/forecast?l
//latitude=52.52&longitude=13.41&hourly=temperature_2m,weathercode,windspeed_10m
//&windspeed_unit=ms&forecast_days=1

const responseSuccess = (response) => {
    if (response.status === 200 || response.status === 201) {

        return response.data
    }
}

const getWeatherData = (country) => {

    const endPoint = [
        `latitude=${country.capitalInfo.latlng[0]}`,
        `&`,
        `longitude=${country.capitalInfo.latlng[1]}`,
        `&`,
        `hourly=temperature_2m,weathercode,windspeed_10m,is_day`,
        `&windspeed_unit=ms`,
        `&forecast_days=1`
    ].join('')

    return axios
        .get(`${baseUrl}${endPoint}`)
        .then(response => responseSuccess(response).hourly)
}



export default {
    getWeatherData
}