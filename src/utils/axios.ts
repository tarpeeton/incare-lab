import axios from 'axios'



export const Axios = axios.create({
    baseURL: "localhost:500",
    timeout: 40
})