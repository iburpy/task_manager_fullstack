import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/api", //URL del backend
    withCredentials: true
})

export default instance