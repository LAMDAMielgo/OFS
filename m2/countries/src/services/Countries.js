import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'


const responseSuccess = (response) => {
    if (response.status === 200 || response.status === 201) {

        return response.data
    }
}

const getAllNames = () => {
    return axios
        .get(`${baseUrl}/api/all`)
        .then(response => responseSuccess(response)) //.map(o => o.name.common))
}

const getOne = (countryName) => {
    return axios
    .get(`${baseUrl}/api/name/${countryName}`)
    .then(response => responseSuccess(response))
}


export default { 
    getAllNames, 
    getOne
}