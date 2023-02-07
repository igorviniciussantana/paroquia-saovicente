import axios from 'axios'

export const api = axios.create({

baseURL: 'https://paroquia-api.onrender.com/api'

})