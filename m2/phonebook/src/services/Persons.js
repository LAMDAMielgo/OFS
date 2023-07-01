import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'


const responseSuccess = (response) => {
    if (response.status === 200 || response.status === 201) {
        return response.data
    }
}

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => responseSuccess(response))
}

const create = newObject => {
  return axios
    .post(baseUrl, newObject)
    .then(response => responseSuccess(response))
}

const update = (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then(response => responseSuccess(response))
}



export default { 
    getAll, 
    create, 
    update 
}